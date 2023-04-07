import { createStore, withProps, setProps } from '@ngneat/elf';

interface ControllerProps {
  [key: string]: any;
}

export const store = createStore(
  { name: 'controller' },
  withProps<ControllerProps>({})
);

export const update = (controllers: ControllerProps) =>
  store.update(
    setProps(store => ({
        ...store,
        ...controllers,
    }))
  );
