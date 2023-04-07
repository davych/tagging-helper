import logger from '../logger';
import { decodedData$, decodedWithDynamicData } from '../state/tags/selector';

export const send = async () => {
  decodedData$.subscribe({
    next: ({digitalData, tag}: {digitalData: any, tag: TagsType}) => {
      if (digitalData) {
        // json stringify pretty
        console.log(
          'digitalData ---->',
          JSON.stringify(digitalData, null, 2),
          JSON.stringify(tag, null, 2)
        );
      }
    },
    error: (e: Error) => logger.error('send error', e),
    complete: () => logger.info('send complete'),
  });
};

export const sendWithDynamicData = async (dynamicData: Record<string, any>) => {
  decodedWithDynamicData(dynamicData).subscribe({
    next: ({digitalData, tag}: {digitalData: any, tag: TagsType}) => {
      if (digitalData) {
        // json stringify pretty
        console.log(
          'digitalData ---->' + tag.event,
          JSON.stringify(digitalData, null, 2),
          JSON.stringify(tag, null, 2)
        );
      }
    },
    error: (e: Error) => logger.error('send error', e),
    complete: () => logger.info('send complete'),
  });
};
