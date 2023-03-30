import {isObject, reduce, merge} from 'lodash';

export const flattenKeys = (obj: Record<string, unknown>, path: string[] = []): Record<string, unknown> =>
    !isObject(obj)
        ? { [path.join('.')]: obj }
        : reduce(obj, (cum, next, key) => merge(cum, flattenKeys(next as Record<string, unknown>, [...path, key])), {});