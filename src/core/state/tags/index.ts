import { createStore, withProps, setProps } from '@ngneat/elf';
import { store as rulesStore } from '../rules';
import {update as composeUpdate} from '../compose';
export const store = createStore(
  { name: 'tags' },
  withProps<Record<string, TagsType>>({})
);

export const update = (tags: TagsType[]) => {
    store.update(setProps(
      tags.reduce((acc: Record<string, TagsType>, tag: TagsType) => {
        acc[tag.identifier as string] = tag;
        return acc;
      }, {})
    ));
};

// anytime the rules store changes, we want to update the compose store
store.subscribe((state: Record<string, TagsType>) => {
  const rules = rulesStore.getValue();
  composeUpdate({ rules, tags: state });
});