import { decodeData } from './utils';

import { store as clickableStore } from '../state/clickable';

export const send = async () => {
  const { identifier } = clickableStore.getValue();
  const { digitalData, tag } = decodeData(identifier as string);
  if (digitalData && tag) {
    console.log(
      `digitalData ----> ${tag.identifier}:${tag.event}`,
      JSON.stringify(digitalData, null, 2),
    );
  }
};

export const sendWithDynamicData = async (dynamicData: Record<string, any>) => {
  const { identifier } = clickableStore.getValue();
  const { digitalData, tag } = decodeData(identifier as string, dynamicData);
  if (digitalData && tag) {
    console.log(
      `digitalData[dynamic] ----> ${tag.identifier}:${tag.event}`,
      JSON.stringify(digitalData, null, 2),
    );
  }
};
