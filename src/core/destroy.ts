
//depredated
import { setProps } from '@ngneat/elf';
import * as state from './state';

export const tags = () => {
  state.tags.update([]);
}

// rules
export const rules = () => {
  state.rules.update({});
}

// compose
export const compose = () => {
  state.compose.store.update(setProps({ data: {} }));
}
