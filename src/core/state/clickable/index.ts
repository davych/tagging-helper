import { createStore, withProps, setProps } from '@ngneat/elf';
import { clickable } from '../../senders';
import { store as dynamicDataStore } from '../dynamicData';
import { get, isEmpty } from 'lodash';
interface ClickableProps {
  identifier: string | null;
}

export const store = createStore(
  { name: 'clickable' },
  withProps<ClickableProps>({ identifier: null })
);

export const update = (identifier: string) =>
  store.update(setProps({ identifier }));

// subscribe to the store
store.subscribe({
  next: ({ identifier }: ClickableProps) => {
    if (!identifier) {
      return;
    }
    const dynamicData = dynamicDataStore.getValue();
    const data$ = get(dynamicData, identifier as string, null);
    if (!data$) {
      clickable.send();
    }
    else {
      if (data$.observers.length < 1) {
        data$.subscribe({
          next: (data: Record<string, any>) => {
            if (!isEmpty(data)) {
              clickable.sendWithDynamicData(data);
            }
          },
          error: (e: Error) => console.error('store clickable error', e),
          complete: () => console.info('store clickable -> store complete'),
        });
      }
    }
  },
});
