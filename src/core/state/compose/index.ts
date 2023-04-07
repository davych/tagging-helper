import { createStore, withProps, setProps } from '@ngneat/elf';
import * as archive from '../../archive';

export const store = createStore(
  { name: 'compose' },
  withProps<ComposedDataType>({})
);

export const update = ({
  rules,
  tags,
}: {
  rules: RulesType;
  tags: Record<string, TagsType>;
}) => {
  const composeData = archive.compose({ rules, tags });
  store.update(setProps(composeData));
};
