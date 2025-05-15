import fs from 'fs-extra';
import { resolve } from 'path';

export const ROOT = process.cwd();

/**
 * 解析相对于项目根目录的绝对路径
 * @param relativePath 相对路径
 */
export const resolvePath = (relativePath: string) => resolve(ROOT, relativePath);

/**
 * 将字符串转换为kebab-case（短横线命名）
 * @param string 输入字符串
 */
export const toKebabCase = (string: string): string => {
  return string.replace(/[A-Z]+/g, (match, offset) => {
    return `${offset > 0 ? '-' : ''}${match.toLocaleLowerCase()}`;
  });
};

/**
 * 将字符串转换为PascalCase（大驼峰命名）
 * @param string 输入字符串
 * @returns PascalCase格式的字符串
 */
export const toPascalCase = (string: string): string => {
  return string
    .replace(/^./, (match) => match.toLocaleUpperCase())
    .replace(/-(.)/g, (_match, p1: string) => {
      return p1.toLocaleUpperCase();
    });
};

/**
 * 将字符串从camelCase转换为kebab-case
 * @param str 输入字符串
 * @returns kebab-case格式的字符串
 */
export const camelToKebab = (str: string) => {
  return str
    .replace(/([A-Z])/g, '-$1')
    .toLowerCase()
    .replace(/^-/, '');
};

/**
 * 写入文件（JSON格式）
 * @param filePath 文件路径
 * @param data 数据内容
 */
export const writeJsonFile = async (filePath: string, data: any) => {
  await fs.writeFile(filePath, JSON.stringify(data, null, 2), 'utf-8');
};

/**
 * 写入文件（JSON格式）
 */
export const writeFile = async (filePath: string, data: string) => {
  await fs.writeFile(filePath, data);
};

/**
 * 确保目录存在并清空
 */
export const ensureEmptyDir = async (dirPath: string) => {
  await fs.ensureDir(dirPath);
  await fs.emptyDir(dirPath);
};

/**
 * 清理字符串中的特殊字符
 */
export const sanitize = (v: string) =>
  v ? v.replace(/\|/g, '\\|').replace(/\n/g, ' ').trim() : '';

/**
 * 移除引号
 */
export const unquote = (str: string): string => str.replace(/^['"]|['"]$/g, '');
