```yaml
title:
  zh-CN: 基本用法
  en-US: Basic Usage
```

## zh-CN

设置国际化语言的基本用法。

---

## en-US

Set the basic usage of internationalized languages.

---

```vue
<template>
  <a-config-provider :locale="locale">
    <a-radio-group type="button" v-model="localeType" :options="localeOptions"></a-radio-group>
    <div>
      <a-pagination
        :total="50"
        show-total
        show-jumper
        show-page-size
        style="margin-top: 20px; margin-bottom: 20px;"
      />
    </div>
    <a-space :size="20" style="margin-bottom: 20px;">
      <a-range-picker style="width: 300px;" />
      <a-time-picker type="time-range" style="width: 300px;" />
      <a-popconfirm content="Are you sure you want to delete?">
        <a-button type="primary">Popconfirm</a-button>
      </a-popconfirm>
    </a-space>
  </a-config-provider>
</template>

<script>
import { ref, computed } from 'vue';
import zhCN from 'arco-next/es/locale/lang/zh-cn';
import enUS from 'arco-next/es/locale/lang/en-us';
import esES from 'arco-next/es/locale/lang/es-es';
import jaJP from 'arco-next/es/locale/lang/ja-jp';
import idID from 'arco-next/es/locale/lang/id-id';
import frFR from 'arco-next/es/locale/lang/fr-fr';
import ptPT from 'arco-next/es/locale/lang/pt-pt';
import deDE from 'arco-next/es/locale/lang/de-de';
import koKR from 'arco-next/es/locale/lang/ko-kr';
import itIT from 'arco-next/es/locale/lang/it-it';
import thTH from 'arco-next/es/locale/lang/th-th';
import viVN from 'arco-next/es/locale/lang/vi-vn';
import nlNL from 'arco-next/es/locale/lang/nl-nl';

const locales = {
  'zh-CN': zhCN,
  'en-US': enUS,
  'es-ES': esES,
  'ja-JP': jaJP,
  'id-ID': idID,
  'fr-FR': frFR,
  'pt-PT': ptPT,
  'de-DE': deDE,
  'ko-KR': koKR,
  'it-IT': itIT,
  'th-TH': thTH,
  'vi-VN': viVN,
  'nl-NL': nlNL,
};

export default {
  setup() {
    const localeType = ref('es-ES');
    const locale = computed(() => {
      return locales[localeType.value] || zhCN;
    });

    return {
      localeType,
      locale,
      localeOptions: Object.keys(locales),
    };
  },
};
</script>
```
