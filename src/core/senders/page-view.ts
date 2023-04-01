import { of } from 'rxjs';
import { map } from 'rxjs/operators';
import logger from '../logger';
import {merge } from 'lodash';
import { compose, userSegments, appInfos } from '../state';
import * as helper from '../helper';

export const send = (pathname: string) => {

  const composeValue = compose.store.getValue();
  const { pages } = composeValue.data;
  if(!pages || !pages[pathname]) {
    return
  }
  const userSegmentsValue = userSegments.store.getValue();
  const appInfosValue = appInfos.store.getValue();
  
  const data = of(pathname).pipe(
    // tap(logger.info),
    map((v: string) => {
      if(pages) {
        const pageSchema = pages[v];
        const { tag, rules, event } = pageSchema;
        const pageData = merge(
          {},
          appInfosValue.data,
          userSegmentsValue.data,
          tag
        );
        const digitalData = helper.decode(pageData, rules);
        return {
          digitalData, event
        }
      }
      return null
    })
  );
  data.subscribe({
    next: ({digitalData, event}: any | null) => {
      if(digitalData) {
        // json stringify pretty
        console.log(
          'digitalData ---->' + event,
          JSON.stringify(digitalData,null, 2)
        )
        
      }
    },
    error: (e: Error) => logger.error('send error', e),
    complete: () => logger.info('send complete'),
  });
};
