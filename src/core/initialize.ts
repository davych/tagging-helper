import * as state from './state';
import cloneDeep from 'lodash/cloneDeep';
interface Config {
  rules?: RulesType;
  tags: TagsType[];
}

export const initialize = (config: Config) => {
  const { rules, tags } = config;
  state.rules.update(cloneDeep(rules));
  state.tags.update(cloneDeep(tags));
};

export const pipePageChange = (pathname: string) => {
  state.pathname.update(pathname);
};

export const pipeClickable = (identifier: string) => {
  state.clickable.update(identifier);
};

export const pipeTags = (tags: TagsType[]) => {
  state.tags.update(cloneDeep(tags));
}

export const pipeAppInfos = (appInfos: AppInfosType) => {
  state.appInfos.update(appInfos);
}

export const pipeUserSegments = (userSegments: UserSegmentsType) => {
  state.userSegments.update(userSegments);
}

export const pipeRuntimeData = (identifier: string, data: Record<string, any>) => {
  state.dynamicData.update(identifier, data);
}

export const push = (identifier: string, data?: Record<string, any>) => {
  state.push.update(identifier, data || {});
}