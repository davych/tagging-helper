import { isObject, reduce, merge, set } from 'lodash';

export const flattenKeys = (
  obj: Record<string, unknown>,
  path: string[] = []
): Record<string, string> =>
  !isObject(obj)
    ? { [path.join('.')]: obj }
    : reduce(
      obj,
      (cum, next, key) =>
        merge(
          cum,
          flattenKeys(next as Record<string, unknown>, [...path, key])
        ),
      {}
    );

export const replacePlaceholders = (
  data: Record<string, string>,
  tpl: string
): string => {
  const placeholders = tpl.match(/<\w+>/g); // extract all placeholders from string
  if (!placeholders) {
    return '';
  }
  let result = tpl;
  placeholders.forEach(placeholder => {
    const key = placeholder.slice(1, -1); // remove angle brackets from placeholder
    const value = data[key] || '';
    if (data.hasOwnProperty(key)) {
      result = result.replace(placeholder, value); // replace placeholder with object value
    }
  });
  return result;
};

export const decode = (data: any, rules: any) => {
  // for in rules
  const decodedData = {};
  for (let ruleKey in rules) {
    const rule = rules[ruleKey];
    if(rule.includes('return ')) {
      const fn = new Function('data', rule);
      set(decodedData, ruleKey, fn(data));
    }
    else {
      set(decodedData, ruleKey, replacePlaceholders(data, rule));
    }
  }
  return decodedData;
};


