import { createStore, withProps, setProps } from '@ngneat/elf';
import * as senders from '../../senders';

interface PushProps {
  identifier: string | null;
  data: Record<string, any>;
}

export const store = createStore(
  { name: 'push' },
  withProps<PushProps>({ identifier: null, data: {} })
);

export const update = (identifier: string, data: Record<string, any> ) =>
  store.update(setProps({ identifier, data }));

// subscribe to the store
store.subscribe({
  next: ({ identifier, data }: PushProps) => {
    if (!identifier) {
      return;
    }
    senders.push({ identifier, data });
  },
});
