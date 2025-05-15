<template>
  <footer class="site-footer">
    <div class="site-footer-copyright">
      <span>
        Copyright © 2025 ArcoNext Vue | Based on
        <a href="https://arco.design/vue" target="_blank" rel="noopener noreferrer">ArcoDesign</a>
        |
        <a href="https://github.com/oljc/arco-next" target="_blank" rel="noopener noreferrer">
          MIT License
        </a>
      </span>
    </div>
  </footer>
</template>

<style lang="less" scoped>
.site-footer {
  display: flex;
  justify-content: center;
  box-sizing: border-box;
  width: 100%;
  padding: 12px 20px;
  background-color: var(--color-fill-1);

  &-copyright {
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--color-text-3);
    font-size: 12px;

    a {
      color: var(--color-text-3);
      text-decoration: none;
      transition: color 0.2s;

      &:hover {
        color: rgb(var(--primary-6));
      }
    }
  }
}
</style>
