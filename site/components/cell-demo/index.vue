<template>
  <div class="cell-demo">
    <slot />
  </div>
</template>

<style scoped lang="less">
.cell-demo {
  margin-top: 24px;
  padding: 48px;
  border: 1px solid var(--color-border);
  border-radius: 2px 2px 0 0;
}
</style>
