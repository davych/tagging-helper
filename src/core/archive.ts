
import {merge, set} from 'lodash';
import * as helper from './helper';

interface ComposeType {
  rules: RulesType;
  tags: TagsType[];
}

export const compose = ({ rules, tags }: ComposeType): ComposedDataType => {
  // get type is page in tags use lodash
  const pageTags = tags.filter((tag: TagsType) => tag.type === 'page');
  // convert pageTags to object, use lodash, key is idenfitier's value
  const pageCastData = pageTags.reduce((acc: Record<string, TagsType>, tag: TagsType) => {
    acc[tag.identifier as string] = tag;
    return acc;
  }, {});

  // get type is button in tags use lodash
  const buttonTags = tags.filter((tag: TagsType) => tag.type === 'button');
  // convert buttonTags to object, use lodash, key is idenfitier's value
  const buttonCastData = buttonTags.reduce((acc: Record<string, TagsType>, tag: TagsType) => {
    acc[tag.identifier as string] = tag;
    return acc;
  }, {});

  for (const key in pageCastData) {
    const pageTag = pageCastData[key];
    const {rules: pageRules = {}} = pageTag;
    const mergedRules = merge(helper.flattenKeys(rules), helper.flattenKeys(pageRules));
    set(pageTag, 'rules', mergedRules);
  }

  for (const key in buttonCastData) {
    const buttonTag = buttonCastData[key];
    const {rules: buttonRules = {}} = buttonTag;
    const parentPage = pageCastData[buttonTag.parent as string] || {};
    const {rules: pageRules = {}} = parentPage
    const mergedRules = merge(
      helper.flattenKeys(rules), 
      helper.flattenKeys(pageRules),
      helper.flattenKeys(buttonRules)
    );
    set(buttonTag, 'rules', mergedRules);
  }
  return {
    pages: pageCastData,
    buttons: buttonCastData
  }
}

