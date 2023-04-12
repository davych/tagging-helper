import { decodeData } from './utils';

export default async ({identifier, data}: {identifier: string, data: Record<string, any> }) => {
  const { digitalData, tag } = decodeData(identifier, data);
  if (digitalData && tag) {
    console.log(
      `digitalData ----> ${tag.identifier}:${tag.event}`,
      JSON.stringify(digitalData, null, 2),
    );
  }
};
