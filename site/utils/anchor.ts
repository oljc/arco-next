import { ref } from 'vue';
import type { AnchorData } from '@/components/aside-anchor/interface';

export const anchors = ref<AnchorData[]>([]);
export const anchorSet = new Set<string>();

export const addAnchor = (data: AnchorData) => {
  if (!anchorSet.has(data.href)) {
    anchors.value.push(data);
    anchorSet.add(data.href);
  }
};

export const clearAnchors = () => {
  anchors.value = [];
  anchorSet.clear();
};
