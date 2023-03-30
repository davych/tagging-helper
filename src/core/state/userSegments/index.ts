import { createStore, withProps, setProps } from '@ngneat/elf';

interface UserSegmentsProps {
  data: Record<string, unknown>;
}

export const store = createStore(
  { name: 'userSegment' },
  withProps<UserSegmentsProps>({ data: {} })
);

export const update = (segment: Record<string, unknown>) =>
  store.update(
    setProps(store => ({
      data: {
        ...store.data,
        ...segment,
      },
    }))
  );
