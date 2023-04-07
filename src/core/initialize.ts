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

export const pipeTags = (tags: TagsType[]) => {
  state.tags.update(tags);
}

export const pipeAppInfos = (appInfos: AppInfosType) => {
  state.appInfos.update(appInfos);
}

export const pipeRuntimeData = (identifier: string, data: Record<string, any>) => {
  state.dynamicData.update(identifier, data);
}