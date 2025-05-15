import type { ComponentPublicInstance, VNodeNormalizedChildren } from 'vue';
import { Dayjs } from 'dayjs';
import { VNode } from 'vue';

const opt = Object.prototype.toString;

export function isArray(obj: any): obj is any[] {
  return opt.call(obj) === '[object Array]';
}

export function isNull(obj: any): obj is null {
  return opt.call(obj) === '[object Null]';
}

export function isBoolean(obj: unknown): obj is boolean {
  return opt.call(obj) === '[object Boolean]';
}

export function isObject<T>(obj: unknown): obj is Extract<T, Record<string, any>> {
  return opt.call(obj) === '[object Object]';
}

export const isPromise = <T>(obj: unknown): obj is Promise<T> => {
  return opt.call(obj) === '[object Promise]';
};

export function isString(obj: any): obj is string {
  return opt.call(obj) === '[object String]';
}

export function isNumber(obj: any): obj is number {
  return opt.call(obj) === '[object Number]' && obj === obj;
}

export function isRegExp(obj: any) {
  return opt.call(obj) === '[object RegExp]';
}

export function isDate(obj: any) {
  return opt.call(obj) === '[object Date]';
}

function isHex(color: any) {
  return /^#[a-fA-F0-9]{3}$|#[a-fA-F0-9]{6}$/.test(color);
}

function isRgb(color: any) {
  return /^rgb\((\s*\d+\s*,?){3}\)$/.test(color);
}

function isRgba(color: any) {
  return /^rgba\((\s*\d+\s*,\s*){3}\s*\d(\.\d+)?\s*\)$/.test(color);
}

export function isColor(color: any): boolean {
  return isHex(color) || isRgb(color) || isRgba(color);
}

export function isUndefined(obj: any): obj is undefined {
  return obj === undefined;
}

export function isFunction(obj: any): obj is (...args: any[]) => any {
  return typeof obj === 'function';
}

export function isEmptyObject(obj: any): boolean {
  return isObject(obj) && Object.keys(obj).length === 0;
}

export function isExist(obj: any): boolean {
  return obj || obj === 0;
}

export function isWindow(el: any): el is Window {
  return el === window;
}

export const isComponentInstance = (value: any): value is ComponentPublicInstance => {
  return value?.$ !== undefined;
};

export const isArrayChildren = (children: VNodeNormalizedChildren): children is VNode[] => {
  return isArray(children);
};

export const isQuarter = (fromat: string) => {
  return /\[Q]Q/.test(fromat);
};

export function isDayjs(time: unknown): time is Dayjs {
  return (
    isObject<Record<string, any>>(time) &&
    '$y' in time &&
    '$M' in time &&
    '$D' in time &&
    '$d' in time &&
    '$H' in time &&
    '$m' in time &&
    '$s' in time
  );
}

export const isEqualObject = (
  obj: Record<string, unknown> | undefined,
  other: Record<string, unknown> | undefined,
) => {
  if (!obj || !other) {
    return false;
  }
  if (obj.length !== other.length) {
    return false;
  }
  for (const key of Object.keys(obj)) {
    const result = isEqual(obj[key], other[key]);
    if (!result) return false;
  }
  return true;
};

export const isEqualArray = (arr: unknown[] | undefined, other: unknown[] | undefined) => {
  if (!arr || !other) {
    return false;
  }
  const { length } = arr;
  if (length !== other.length) {
    return false;
  }

  for (let i = 0; i < length; i++) {
    const result = isEqual(arr[i], other[i]);
    if (!result) return false;
  }
  return true;
};

export const isEqual = (a: unknown, b: unknown) => {
  const type = Object.prototype.toString.call(a);
  if (type !== Object.prototype.toString.call(b)) {
    return false;
  }
  if (type === '[object Object]') {
    return isEqualObject(a as Record<string, unknown>, b as Record<string, unknown>);
  }
  if (type === '[object Array]') {
    return isEqualArray(a as unknown[], b as unknown[]);
  }
  if (type === '[object Function]') {
    if (a === b) {
      return true;
    }
    return a.toString() === b.toString();
  }
  return a === b;
};
