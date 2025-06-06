const scaleAttr = [
  25, 33, 50, 67, 75, 80, 90, 100, 110, 125, 150, 175, 200, 250, 300, 400, 500,
].map((item) => +(item / 100).toFixed(2));

type ZoomType = 'zoomIn' | 'zoomOut';

export const minScale = scaleAttr[0];

export const maxScale = scaleAttr[scaleAttr.length - 1];

export default function getScale(cur = 1, type: ZoomType = 'zoomIn') {
  let index = scaleAttr.indexOf(cur);
  if (index === -1) {
    index = findClosestIndex(cur);
  }
  if (type === 'zoomIn') {
    return index === scaleAttr.length - 1 ? cur : scaleAttr[index + 1];
  }
  return index === 0 ? cur : scaleAttr[index - 1];
}

export function getScaleByRate(scale: number, rate = 1.1, type: ZoomType = 'zoomIn') {
  const scaleFactor = type === 'zoomIn' ? rate : 1 / rate;
  const newScale = Number.parseFloat((scale * scaleFactor).toFixed(3));
  return Math.min(maxScale, Math.max(minScale, newScale));
}

function findClosestIndex(scale: number) {
  let closestIndex = scaleAttr.length - 1;
  for (let i = 0; i < scaleAttr.length; i++) {
    const current = scaleAttr[i];
    if (scale === current) {
      closestIndex = i;
      break;
    }
    if (scale < current) {
      const pre = scaleAttr[i - 1];
      closestIndex =
        pre === undefined || Math.abs(pre - scale) <= Math.abs(current - scale) ? i - 1 : i;
      break;
    }
  }
  return closestIndex;
}
