import { createChecker, MetaCheckerOptions } from 'vue-component-meta';
import { resolvePath } from '../utils';

// 获取根目录
const tsconfigPath = resolvePath('ui/tsconfig.json');

const checkerOptions: MetaCheckerOptions = {
  forceUseTs: true,
  rawType: false,
  noDeclarations: true,
  printer: { newLine: 1 },
};

const tsconfigChecker = createChecker(tsconfigPath, checkerOptions);

const formatValue = (value: any, type: string) => {
  if (!value || value === 'undefined') return '-';
  if (type === 'boolean') return value || 'false';
  return value;
};

const parseTags = (tags: any[]) =>
  tags?.reduce(
    (acc, tag) => {
      acc[tag.name] = tag.text || '';
      return acc;
    },
    {} as Record<string, string>,
  );

export const getComponentMeta = (componentPath: string) => {
  const meta = tsconfigChecker.getComponentMeta(componentPath);
  const { props, events, slots } = meta;

  const propList = props
    .filter((prop) => prop.global === false)
    .map((prop) => {
      const { name, required, type, default: defaultVal, tags } = prop;
      const tagMap = parseTags(tags);
      return {
        name,
        required,
        ...tagMap,
        type,
        default: formatValue(tagMap.defaultValue || defaultVal, type),
      };
    });

  const eventList = events.map((event) => {
    const { name, type, tags } = event;
    const tagMap = parseTags(tags);
    console.log(event);
    return { name, type, ...tagMap };
  });

  const slotList = slots.map((slot) => {
    console.log('slot', slot);
    const { name, type, tags } = slot;
    const tagMap = parseTags(tags);
    return { name, type, ...tagMap };
  });
  console.log(propList);

  return {
    props: propList,
    events: eventList,
    slots: slotList,
  };
  // events.forEach((event) => {
  //   console.log(event);
  // });
  // console.log(JSON.parse(JSON.stringify(meta)));
};
