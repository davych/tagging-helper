import { decodeData } from './utils';

import { store as pathnameStore } from '../state/pathname';

export const send = async () => {
  const { pathname } = pathnameStore.getValue();
  const { digitalData, tag } = decodeData(pathname as string);
  if (digitalData) {
    console.log(
      `digitalData ----> ${tag.identifier}:${tag.event}`,
      JSON.stringify(digitalData, null, 2),
    );
  }
};

export const sendWithDynamicData = async (dynamicData: Record<string, any>) => {
  const { pathname } = pathnameStore.getValue();
  const { digitalData, tag } = decodeData(pathname as string, dynamicData);
  if (digitalData) {
    console.log(
      `digitalData[dynamic] ----> ${tag.identifier}:${tag.event}`,
      JSON.stringify(digitalData, null, 2),
    );
  }
};
