import { createStore, withProps, setProps } from '@ngneat/elf';
import * as archive from '../../archive';
import { isEmpty } from 'lodash';
interface ComposeProps {
  data: ComposedDataType;
}

export const store = createStore(
  { name: 'compose' },
  withProps<ComposeProps>({ data: {} })
);

export const update = ({
  rules,
  tags,
}: {
  rules: RulesType;
  tags: TagsType[];
}) => {
  const { data } = store.getValue();
  if (isEmpty(data)) {
    const composeData = archive.compose({ rules, tags });
    store.update(setProps({ data: composeData }));
  }
};
