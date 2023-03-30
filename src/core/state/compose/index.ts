import { createStore, withProps, setProps } from '@ngneat/elf';
import * as archive from '../../archive'
interface ComposeProps {
  data: ComposedDataType | null
}

export const store = createStore(
  { name: 'compose' },
  withProps<ComposeProps>({ data: null })
);

export const update = ({rules, tags}: {rules: RulesType, tags: TagsType[]}) => {
  const { data } = store.getValue();
  if(!data) {
    const composeData = archive.compose({rules, tags});
    store.update(setProps({ data: composeData }));
  }
}
  