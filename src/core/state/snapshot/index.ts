import { createStore, withProps, setProps } from '@ngneat/elf';

interface SnapshotProps {
  data: {
    [key: string]: unknown;
  };
}

export const store = createStore(
  { name: 'snapshot' },
  withProps<SnapshotProps>({ data: {} })
);

export const update = (data: Record<string, unknown>) =>
  store.update(
    setProps(store => ({
      data: {
        ...store.data,
        ...data,
      },
    }))
  );

export default store;
