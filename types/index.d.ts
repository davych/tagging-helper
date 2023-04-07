declare module 'rxjs'

interface RulesType {
  [key: string]: string;
}

// tags type
interface TagsType {
  type: string;
  identifier: string;
  event: string;
  parent?: string;
  rules?: RulesType;
  meta?: Record<string, string | any>;
  tag?: Record<string, string | any>;
  [key: string]: any;
}

// app infos type
interface AppInfosType {
  name?: string;
  version?: string;
  region?: string;
  language?: string;
  [key: string]: any;
}

// user segments type
interface UserSegmentsType {
  [key: string]: any;
}

// composed Data
interface ComposedDataType {
  pages?: Record<string, TagsType>;
  buttons?: Record<string, TagsType>;
}