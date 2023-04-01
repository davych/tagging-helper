import { merge, set } from 'lodash';
import * as helper from './helper';

interface ComposeType {
  rules: RulesType;
  tags: TagsType[];
}

export const compose = ({ rules, tags }: ComposeType): ComposedDataType => {
  const castedPage = castPage(tags);
  const castedButton = caseButton(tags);

  modifyPageRules(rules, castedPage);
  modifyButtonRules(rules, castedButton, castedPage);
  return {
    pages: castedPage,
    buttons: castedButton,
  };
};

export const castPage = (tags: TagsType[]) => {
  const pageTags = tags.filter((tag: TagsType) => tag.type === 'page');
  return pageTags.reduce((acc: Record<string, TagsType>, tag: TagsType) => {
    acc[tag.identifier as string] = tag;
    return acc;
  }, {});
};

export const caseButton = (tags: TagsType[]) => {
  const buttonTags = tags.filter((tag: TagsType) => tag.type === 'button');
  return buttonTags.reduce((acc: Record<string, TagsType>, tag: TagsType) => {
    acc[tag.identifier as string] = tag;
    return acc;
  }, {});
};

export const modifyPageRules = (
  rules: RulesType,
  casedPage: Record<string, TagsType>
) => {
  for (const key in casedPage) {
    const pageTag = casedPage[key];
    const { rules: pageRules = {} } = pageTag;
    const mergedRules = merge(
      helper.flattenKeys(rules),
      helper.flattenKeys(pageRules)
    );
    set(pageTag, 'rules', mergedRules);
  }
};

export const modifyButtonRules = (
  rules: RulesType,
  casedButton: Record<string, TagsType>,
  casedPage: Record<string, TagsType>
) => {
  for (const key in casedButton) {
    const buttonTag = casedButton[key];
    const { rules: buttonRules = {} } = buttonTag;
    const parentPage = casedPage[buttonTag.parent as string] || {};
    const { rules: pageRules = {} } = parentPage;
    const mergedRules = merge(
      helper.flattenKeys(rules),
      helper.flattenKeys(pageRules),
      helper.flattenKeys(buttonRules)
    );
    set(buttonTag, 'rules', mergedRules);
  }
};
