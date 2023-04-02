import * as state from './state';
import defaultRules from './jsons/rules.json';
import { setProps } from '@ngneat/elf';
import * as archive from './archive';
interface Config {
  rules?: RulesType;
  tags: TagsType[];
  appInfos: AppInfosType;
  userSegments: UserSegmentsType;
  pathname: string;
}

export const initialize = (config: Config) => {
  const { rules, tags, appInfos, userSegments, pathname } = config;
  const mergedRules = rules || defaultRules;

  state.tags.update(tags);
  state.rules.update(mergedRules);
  state.appInfos.update(appInfos);
  state.userSegments.update(userSegments);
  state.compose.update({ rules: mergedRules, tags });
  state.pathname.update(pathname);
};

export const updateTags = (tags: TagsType[]) => {
  state.tags.store.update(setProps({ data: tags }));
  const rules = state.rules.store.getValue();
  const composeData = archive.compose({ rules: rules.data, tags });
  state.compose.store.update(setProps({ data: composeData }));
}