import { store as appInfosStore } from '../state/appInfos';
import { store as userSegmentsStore } from '../state/userSegments';
import { store as tagsStore } from '../state/tags';
import { store as dynamicDataStore } from '../state/dynamicData';
import { merge } from 'lodash';
import * as helper from '../helper';

export const decodeData = (identifier: string, dynamicData: Record<string, any> = {}) => {
  const tags = tagsStore.getValue();
  const targetTag = tags[identifier];
  if(!targetTag) {
    return {};
  }
  // get appInfos, userSegments
  const appInfos = appInfosStore.getValue();
  const userSegments = userSegmentsStore.getValue();
  const { tag, rules, parent } = targetTag;
  const runtimeDataInParent = {};
  if(parent) {
    const dynamicData = dynamicDataStore.getValue();
    const parentDynamicData$ = dynamicData[parent];
    parentDynamicData$ && Object.assign(runtimeDataInParent, parentDynamicData$.getValue() || {});
  }
  const data = merge(
    {},
    runtimeDataInParent,
    appInfos,
    userSegments,
    tag,
    dynamicData
  );
  const digitalData = helper.decode(data, rules);
  return {digitalData, tag: targetTag}
}