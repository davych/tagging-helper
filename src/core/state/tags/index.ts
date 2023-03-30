import { createStore, withProps, setProps } from '@ngneat/elf';
import { isEmpty } from 'lodash';
interface TagsProps {
  data: Record<string, unknown>[];
}

export const store = createStore(
  { name: 'tags' },
  withProps<TagsProps>({ data: [] })
);

export const update = (tags: Record<string, unknown>[]) => {
  const { data } = store.getValue();
  if (isEmpty(data)) {
    store.update(setProps({ data: tags }));
  }
  else {
    // nothing todo
  }
};
