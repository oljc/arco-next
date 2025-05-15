import { InjectionKey } from 'vue';
import { AnchorData } from '@/components/aside-anchor/interface';

export const appInjectionKey: InjectionKey<{
  showNav: boolean;
  toggleNav: () => void;
}> = Symbol('CollapseContext');

export const articleInjectionKey: InjectionKey<{
  anchors: AnchorData[];
  addAnchor: (data: AnchorData) => void;
  clearAnchors: () => void;
}> = Symbol('ArcoArticle');
