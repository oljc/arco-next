import { withInstall } from '../_utils/withInstall';
import _Typography from './typography.vue';
import _TypographyParagraph from './paragraph';
import _TypographyTitle from './title';
import _TypographyText from './text';

const Typography = withInstall(_Typography, {
  Paragraph: _TypographyParagraph,
  Title: _TypographyTitle,
  Text: _TypographyText,
});

export type TypographyInstance = InstanceType<typeof _Typography>;
export type TypographyParagraphInstance = InstanceType<typeof _TypographyParagraph>;
export type TypographyTitleInstance = InstanceType<typeof _TypographyTitle>;
export type TypographyTextInstance = InstanceType<typeof _TypographyText>;
export type { EllipsisConfig } from './interface';

export {
  _TypographyParagraph as TypographyParagraph,
  _TypographyTitle as TypographyTitle,
  _TypographyText as TypographyText,
};

export default Typography;
