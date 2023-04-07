import { createStore, withProps, setProps } from '@ngneat/elf';
import { pageView } from '../../senders';
import { store as dynamicDataStore } from '../dynamicData';
import {get, isEmpty} from 'lodash';
interface PathnameProps {
  pathname: string | null;
}

export const store = createStore(
  { name: 'pathname' },
  withProps<PathnameProps>({ pathname: null })
);

export const update = (pathname: string) =>
  store.update(setProps({ pathname }));

// subscribe to the store
store.subscribe({
  next: ({ pathname }: PathnameProps) => {
      const dynamicData = dynamicDataStore.getValue();
      const data$ = get(dynamicData, pathname as string, null);
      if(!data$) {
        pageView.send();
      }
      else {
        if(data$.observers.length < 1) {
          data$.subscribe({
            next: (data: Record<string, any>) => {
              if (!isEmpty(data)) {
                pageView.sendWithDynamicData(data);
              }
            },
            error: (e: Error) => console.error('store pathname error', e),
            complete: () => console.info('store pathname -> store complete'),
          });
        }
      }
  },
  // error: (e: Error) => logger.error('store pathname error', e),
  // complete: () => logger.info('store pathname -> store complete'),
});
