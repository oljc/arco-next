import { Project } from 'ts-morph';
import { parse } from 'vue-docgen-api';
import { toKebabCase, unquote } from '../utils';

const project = new Project();

export interface DocProp {
  name: string;
  zh: string;
  en: string;
  required: boolean;
  type: string;
  defaultValue: string;
  version?: string;
  [key: string]: any;
}

export interface DocInfo {
  name: string;
  props: DocProp[];
  events?: DocProp[];
}

const extractTags = (tags: Record<string, any[]>) =>
  Object.fromEntries(Object.entries(tags).map(([key, value]) => [key, value[0]?.description]));

const formatName = (name: string, tags: Record<string, string>) => {
  const isVModel = tags.vModel || name === 'modelValue';
  return `${toKebabCase(name)}${isVModel ? ' **(v-model)**' : ''}`;
};

const formatType = (typeStr: string, values?: string[]) => {
  if (!values || values.length === 0) return typeStr;
  return values.map((val) => (typeStr === 'string' ? `'${unquote(val)}'` : val)).join(' | ');
};

const resolveDefault = (
  tags: Record<string, string>,
  typeStr: string,
  defaultValue?: { value: string; func?: boolean },
) => {
  if (tags.defaultValue) return tags.defaultValue;
  if (!defaultValue || defaultValue.value === 'undefined') return '-';

  const { value, func } = defaultValue;
  const arrayMatch = value.match(/^\(\)\s*=>\s*(\[[^]*\])$/);

  if ((typeStr.includes('[]') || typeStr.toLowerCase().includes('array')) && func && arrayMatch) {
    return arrayMatch[1];
  }

  if (typeStr === 'boolean') return value || 'false';

  return value || '-';
};

// 解析接口定义
export const parseInterface = (filePath: string) => {
  project.addSourceFileAtPath(filePath);
  const sourceFile = project.getSourceFile(filePath);
  const interfaces = sourceFile?.getInterfaces();

  return interfaces?.map((declaration) => {
    const name = declaration.getName();
    const props = declaration.getProperties().map((prop) => {
      const jsDoc = prop.getJsDocs()[0];
      const tags =
        jsDoc?.getTags().reduce(
          (acc, tag) => {
            acc[tag.getTagName()] = tag.getCommentText() || '';
            return acc;
          },
          {} as Record<string, string>,
        ) || {};

      return {
        name: prop.getName(),
        type: prop.getTypeNode()?.getText() || '',
        required: !prop.hasQuestionToken(),
        ...tags,
      };
    });

    return { name, props };
  });
};

// 解析组件 props
export const parseProps = async (filePath: string): Promise<DocInfo> => {
  const component = await parse(filePath, {
    jsx: true,
  });
  const { props = [], displayName, events } = component;
  // console.log(component, JSON.stringify(events));
  const propsList = props.map((prop) => {
    const { name, type, required = false, defaultValue, values, tags = {} } = prop;
    const tagMap = extractTags(tags);

    return {
      name: formatName(name, tagMap),
      ...tagMap,
      required,
      defaultValue: resolveDefault(tagMap, tagMap.type || type?.name || '', defaultValue),
      type: formatType(tagMap.type || type?.name || '', values),
      version: tagMap.version,
    } as DocProp;
  });

  // 解析事件
  const eventsList = events?.map((event) => {
    const { name, tags = [], properties } = event;
    const tag = tags.reduce(
      (acc, { title, content }) => {
        acc[title] = content;
        return acc;
      },
      {} as Record<string, string>,
    );

    return {
      name,
      description: tag.description,
      ...tag,
    };
  });

  return {
    name: displayName,
    props: propsList,
    events: eventsList,
  };
};
