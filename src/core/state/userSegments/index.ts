import { createStore, withProps, setProps } from '@ngneat/elf';

export const store = createStore(
  { name: 'userSegment' },
  withProps<Record<string, any>>({})
);

export const update = (segment: Record<string, unknown>) =>
  store.update(
    setProps(store => ({
        ...store,
        ...segment,
    }))
  );
