import { createStore, withProps, setProps } from '@ngneat/elf';


export const store = createStore(
  { name: 'appInfo' },
  withProps<Record<string, any>>({ })
);

export const update = (info: Record<string, unknown>) =>
  store.update(
    setProps(store => ({
        ...store,
        ...info,
    }))
  );
