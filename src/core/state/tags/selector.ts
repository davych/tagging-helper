
import { select } from '@ngneat/elf';
import { store } from '.';
import {store as pathnameStore} from '../pathname';
import { store as appInfosStore } from '../appInfos';
import { store as userSegmentsStore } from '../userSegments';
import { merge } from 'lodash';
import * as helper from '../../helper';


const decodeData = (tags: Record<string, TagsType>, dynamicData: Record<string, any> = {}) => {
  const {pathname} = pathnameStore.getValue();
  const targetTag = tags[pathname as string];
  if(!targetTag) {
    return {};
  }
  // get appInfos, userSegments
  const appInfos = appInfosStore.getValue();
  const userSegments = userSegmentsStore.getValue();
  const { tag, rules } = targetTag;
  const data = merge(
    {},
    appInfos,
    userSegments,
    tag,
    dynamicData
  );
  const digitalData = helper.decode(data, rules);
  return {digitalData, tag: targetTag}
}

export const decodedData$ = store.pipe(select((tags: Record<string, TagsType>) => {
    return decodeData(tags);
}));

export const decodedWithDynamicData = (data: Record<any, string>) => {
  return store.pipe(select((tags: Record<string, TagsType>) => {
    return decodeData(tags, data);
  }));
}