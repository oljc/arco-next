/* eslint-disable no-console */
import { Plugin } from 'vite';
import { marked } from './marked';
import { transformMain, transformDemo } from './loader';
import { transChangelog } from './changelog';
import { getCache } from './cache';

const isDemoMarkdown = (id: string) => {
  return /\/__demo__\//.test(id);
};

const isVirtualId = (id: string) => {
  return /\/@virtual/.test(id);
};

const toVirtualId = (id: string) => `/@virtual${id}`;

export default function docsPlugin(): Plugin {
  return {
    name: 'vite:docs',
    enforce: 'pre',
    resolveId(id) {
      if (isVirtualId(id)) {
        return id;
      }
      return null;
    },
    load(id) {
      console.log('加载', id);
      if (isVirtualId(id)) {
        return getCache(id);
      }
      return null;
    },
    transform(code, id) {
      if (!id.endsWith('.md')) return null;

      console.log('转换vue阶段', id);
      if (isVirtualId(id)) {
        console.log('命中虚拟vue文件跳过', code);
        return code;
      }

      const tokens = marked.lexer(code);

      if (id.includes('CHANGELOG')) {
        return transChangelog(tokens);
      }
      const vue = isDemoMarkdown(id) ? transformDemo(tokens, id) : transformMain(tokens);
      console.log('转换：', vue);
      return { code: vue, map: null };
    },
    async handleHotUpdate(ctx) {
      console.log('热更新处理');

      if (!ctx.file.endsWith('.md')) return;
      const { file, read, modules, server } = ctx;

      if (file.includes('CHANGELOG')) {
        return modules;
      }

      const { moduleGraph } = server;
      const isDemo = isDemoMarkdown(file);

      // if (isDemo) {
      //   const virtualId = toVirtualId(file);
      //   console.log(virtualId);
      //   const mods = moduleGraph.getModuleById(virtualId);
      //   if (mods) {
      //     console.log('找到虚拟文件Module');
      //     return [...modules, mods];
      //   }
      //   return modules;
      // }
      // 常规热更新md
      console.log(file);
      return modules;
    },
  };
}
