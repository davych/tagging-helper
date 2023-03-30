import { createStore, withProps, setProps } from '@ngneat/elf';

interface AppInfoProps {
  data: Record<string, unknown>;
}

export const store = createStore(
  { name: 'appInfo' },
  withProps<AppInfoProps>({ data: {} })
);

export const update = (info: Record<string, unknown>) => store.update(setProps((store) => ({ data: {
  ...store.data,
  ...info
} })));
