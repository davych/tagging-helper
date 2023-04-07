import * as state from './state';
interface Config {
  rules?: RulesType;
  tags: TagsType[];
}

export const initialize = (config: Config) => {
  const { rules, tags } = config;
  state.rules.update(rules);
  state.tags.update(tags);
};

export const pipePageChange = (pathname: string) => {
  state.pathname.update(pathname);
};

export const pipeClickable = (identifier: string) => {
  state.clickable.update(identifier);
};

export const pipeTags = (tags: TagsType[]) => {
  state.tags.update(tags);
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