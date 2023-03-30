import { createStore, withProps, setProps } from '@ngneat/elf';
import { isEmpty } from 'lodash';

interface RulesProps {
  data: Record<string, unknown>;
}

export const store = createStore(
  { name: 'rules' },
  withProps<RulesProps>({ data: {} })
);

export const update = (rules: Record<string, unknown>) => {
  const { data } = store.getValue();
  if (isEmpty(data)) {
    store.update(setProps({ data: rules }));
  } else {
    // nothing todo
  }
};
