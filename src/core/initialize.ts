import * as state from './state';
import defaultRules from './jsons/rules.json';
import defaultTags from './jsons/tags.json';

import { merge } from 'lodash';

interface Config {
  rules?: RulesType;
  tags: TagsType[];
  appInfos: AppInfosType;
  userSegments: UserSegmentsType;
  pathname: string;
}

export const initialize = (config: Config) => {
  const { rules, tags, appInfos, userSegments, pathname } = config;
  const mergedRules = merge(defaultRules, rules);

  // temp code
  const mergedTags = merge(defaultTags, tags);

  state.tags.update(mergedTags);
  state.rules.update(mergedRules);
  state.appInfos.update(appInfos);
  state.userSegments.update(userSegments);
  state.compose.update({rules: mergedRules, tags: mergedTags});
  state.pathname.update(pathname);
} 