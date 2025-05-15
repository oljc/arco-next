<template>
  <Article>
    <ArticleHead v-bind="data" />
    <a-timeline class="changelog">
      <a-timeline-item v-for="item of changelog" :key="item.version">
        <article class="changelog-item">
          <header class="changelog-header" :id="item.version">
            <AnchorHead
              class="changelog-version"
              :title="item.version"
              :href="`#${item.version}`"
              :level="2"
            />
            <time class="changelog-date">{{ item.date }}</time>
          </header>
          <section class="log" v-for="type in Object.keys(item.data)" :key="type">
            <h3 class="log-type">{{ typeText[type as keyof typeof typeText] || type }}</h3>
            <ul class="log-list" v-if="item.data[type]">
              <li v-for="(i, index) of item.data[type]" :key="index" v-html="i.log" />
            </ul>
          </section>
        </article>
      </a-timeline-item>
    </a-timeline>
  </Article>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';
import { getChangelog } from '@/utils/changelog';

const { locale } = useI18n();

const typeText = {
  attention: '🚨 重点注意',
  feature: ' 🆕 新增功能',
  bugfix: ' 🐛 问题修复',
  enhancement: '💎 功能优化',
  style: ' 🎨 样式更新',
  typescript: '🆎 类型修正',
  other: '🚫 其他',
  common: '🔧 通用',
};

const data = computed(() => {
  if (locale.value === 'zh-CN') {
    return {
      title: '更新日志',
      description: '这里会有详细的发版记录，版本号严格遵循 Semver 规范。',
      meta: {
        type: '开发指南',
      },
    };
  }
  return {
    title: 'Changelog',
    description: 'Changelogs',
    meta: {
      type: 'Guide',
    },
  };
});

const changelog = computed(() => getChangelog(locale.value as 'zh-CN' | 'en-US'));
</script>

<style scoped lang="less">
.changelog {
  margin-top: 20px;

  &-item {
    margin-left: 12px;
    margin-bottom: 40px;
  }

  &-header {
    margin-bottom: 18px;
  }

  &-version {
    margin: 0;
  }

  &-date {
    font-size: 12px;
    color: var(--color-text-3);
  }

  .log {
    padding-left: 32px;
    &-type {
      margin: 0 !important;
    }

    &-list {
      list-style: circle;
    }
  }
}
</style>
