<template>
  <article class="article-content">
    <slot />
  </article>
</template>

<style scoped lang="less">
.article-content {
  width: 100%;
  max-width: 1100px;
  min-height: 800px;
  margin: 0 auto;
  padding: 60px 56px 120px;
  box-sizing: border-box;
  overflow: hidden;

  &:deep(img) {
    max-width: 100%;
  }

  & :deep(h3) {
    margin-top: 24px;
    line-height: 24px;
  }

  & :deep(code) {
    color: var(--color-text-2);
    background-color: var(--color-neutral-2);
  }

  & :deep(.code-content) {
    box-sizing: border-box;
    margin: 0;
    padding: 28px 26px;
    background-color: var(--color-neutral-2);
    border-radius: 4px;

    code {
      padding: 0;
      white-space: pre-wrap;
    }
  }

  & :deep(.component-api-table) {
    .arco-table-td:nth-child(1) {
      white-space: nowrap;
    }

    .arco-table-td:nth-child(3) {
      code {
        color: rgb(var(--primary-6));
        font-size: 12px;
        background: unset;
      }
    }

    .arco-table-td:nth-child(4) {
      min-width: 100px;

      code {
        color: rgb(var(--primary-6));
        font-size: 12px;
        background: unset;
      }
    }

    .arco-table-td:nth-child(5) {
      width: 10%;
      max-width: 100px;
    }
  }
}
</style>
