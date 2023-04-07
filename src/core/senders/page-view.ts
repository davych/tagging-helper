import { of } from 'rxjs';
import { map } from 'rxjs/operators';
import logger from '../logger';
import { merge, get } from 'lodash';
import { compose, userSegments, appInfos, controllers } from '../state';
import * as helper from '../helper';

const getRuntimeData = async (pathname: string): Promise<any> => new Promise((resolve) => {
  const controllersMap = controllers.store.getValue();
  const controller = get(controllersMap, pathname, null);
  if (controller) {
    controller.subscribe({
      next: (data: any) => {
        resolve(data);
      },
      error: (e: Error) => logger.error('getRuntimeData error', e),
      complete: () => logger.info(pathname, 'getRuntimeData complete'),
    });
  } else {
    resolve({});
  }
});

const buildDigitalData = (pathname: string, runtimeData: Record<string, any>) => {
  const composeValue = compose.store.getValue();
  const { pages } = composeValue.data;
  if (!pages || !pages[pathname]) {
    return;
  }
  const userSegmentsValue = userSegments.store.getValue();
  const appInfosValue = appInfos.store.getValue();

  const data = of(pathname).pipe(
    // tap(logger.info),
    map((v: string) => {
      if (pages) {
        const pageSchema = pages[v];
        const { tag, rules, event } = pageSchema;
        const pageData = merge(
          {},
          runtimeData || {},
          appInfosValue.data,
          userSegmentsValue.data,
          tag
        );
        const digitalData = helper.decode(pageData, rules);
        return {
          digitalData,
          event,
        };
      }
      return null;
    })
  );
  return data;
}

export const send = async (pathname: string) => {
  const runtimeData = await getRuntimeData(pathname);
  const data = buildDigitalData(pathname, runtimeData);
  if (!data) {
    return;
  }
  data.subscribe({
    next: ({ digitalData, event }: any | null) => {
      if (digitalData) {
        // json stringify pretty
        console.log(
          'digitalData ---->' + event,
          JSON.stringify(digitalData, null, 2)
        );
      }
    },
    error: (e: Error) => logger.error('send error', e),
    complete: () => logger.info(pathname, 'send complete'),
  });
};
