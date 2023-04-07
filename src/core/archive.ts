import { merge, set } from 'lodash';
import * as helper from './helper';

export const compose = ({ rules, tags }: {
  rules: RulesType;
  tags: Record<string, TagsType>;
}): ComposedDataType => {
  modifyRules(rules, tags);
  return tags;
};
export const modifyRules = (
  rules: RulesType,
  tags: Record<string, TagsType>
) => {
  for (const key in tags) {
    const tag = tags[key];
    const { rules: tagRules = {} } = tag;
    const parent = tags[tag.parent as string] || {};
    // merge rules
    const mergedRules = merge(
      helper.flattenKeys(rules),
      parent?.rules ? helper.flattenKeys(parent.rules) : {},
      helper.flattenKeys(tagRules)
    );
    set(tag, 'rules', mergedRules);
    // merge tag
    const mergedTag = merge(
      parent?.tag ? parent?.tag : {},
      tag?.tag ? tag?.tag : {}
    );
    set(tag, 'tag', mergedTag);
  }
};
