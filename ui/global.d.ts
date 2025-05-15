import type { NativeElements, ReservedProps, VNode } from '@vue/runtime-dom';

declare module '*.vue' {
  import type { DefineComponent } from 'vue';
  const component: DefineComponent<{}, {}, any>;
  export default component;
}

declare global {
  namespace JSX {
    export type Element = VNode;
    export interface ElementClass {
      $props: {};
    }
    export interface ElementAttributesProperty {
      $props: {};
    }
    export interface IntrinsicElements extends NativeElements {
      [name: string]: any;
    }
    export type IntrinsicAttributes = ReservedProps;
  }
}

declare module '*.less';
