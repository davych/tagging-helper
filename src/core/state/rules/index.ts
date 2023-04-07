import { createStore, withProps, setProps } from '@ngneat/elf';
import * as helper from '../../helper';
import defaultRules from './rules.json';
import { merge } from 'lodash';

export const store = createStore(
  { name: 'rules' },
  withProps<Record<string, string>>({})
);

export const update = (rules: Record<string, any> | undefined = {}) => {
  const mergedRules = merge(helper.flattenKeys(defaultRules), helper.flattenKeys(rules))
  store.update(setProps(mergedRules));
};
