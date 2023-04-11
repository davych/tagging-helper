import { useEffect } from "react";
import { initialize, pipeAppInfos, pipePageChange, pipeRuntimeData, pipeUserSegments } from "../../core/initialize";

interface InitializeParams {
  pathname: string,
  tags: TagsType[],
  rules?: RulesType,
  appInfos?: AppInfosType,
  userSegments?: UserSegmentsType
}

export const useInitialize = ({
  pathname,
  tags,
  rules,
  appInfos,
  userSegments,
}: InitializeParams) => {
  initialize({
    tags,
    rules
  })
  useEffect(() => {
    pipePageChange(pathname);
  }, [pathname])

  useEffect(() => {
    pipeAppInfos(appInfos || {});
  }, [appInfos])

  useEffect(() => {
    pipeUserSegments(userSegments || {});
  }, [userSegments])
} 

// useRuntimeData
export const useRuntimeData = (identifier: string, data: Record<string, any>) => {
  useEffect(() => {
    pipeRuntimeData(identifier, data);
  }, [identifier, data])
}