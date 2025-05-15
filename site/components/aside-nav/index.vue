<template>
  <aside :class="cls">
    <nav class="aside-nav">
      <Menu
        class="aside-nav-menu"
        auto-open
        auto-scroll-into-view
        :scroll-config="{ block: 'center' }"
        :selected-keys="selectedKeys"
        @menu-item-click="handleNavTo"
      >
        <SubMenu v-for="nav in menuList" :key="nav.name" :title="t(`menu.${nav.name}`)">
          <template v-if="!nav.isGroup">
            <MenuItem v-for="item in nav.menu" :key="item.path">
              <a :href="getHref(item.path)" @click.prevent>
                {{ t(`${nav.name}.${item.name}`) }}
              </a>
            </MenuItem>
          </template>
          <template v-else>
            <MenuItemGroup
              v-for="group of nav.menu"
              :key="group.name"
              :title="t(`group.${group.name}`)"
            >
              <MenuItem v-for="item of group.menu" :key="item.path">
                <a :href="getHref(item.path)" @click.prevent>
                  {{ t(`${nav.name}.${item.name}`) }}
                </a>
              </MenuItem>
            </MenuItemGroup>
          </template>
        </SubMenu>
      </Menu>
    </nav>
    <a-button class="aside-nav-btn" shape="circle" size="mini" @click="handleToggleNav">
      <icon-left v-if="model" />
      <icon-right v-else />
    </a-button>
  </aside>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';
import { useRouter, useRoute } from 'vue-router';
import { IconLeft, IconRight } from 'arco-next/components/icon';
import { Menu, MenuItem, SubMenu, MenuItemGroup } from 'arco-next';
import { menuList } from '../../router';

const model = defineModel<boolean>({ default: true });
const { t, locale } = useI18n();
const router = useRouter();
const route = useRoute();

const handleToggleNav = () => {
  model.value = !model.value;
};

const handleNavTo = (path: string) => {
  const href = getHref(path);
  router.push(href);
};

const cls = computed(() => [
  'aside-left',
  {
    'aside-left-collapse': !model.value,
  },
]);

const getHref = (path: string) => {
  return locale.value === 'en-US' ? `#${path.replace('vue/', 'vue/en-US/')}` : `${path}`;
};

const selectedKeys = computed(() => {
  const currentPath = route.path;
  const pathOnly = currentPath.split('#')[0].split('?')[0];
  const flatMenuItems: string[] = [];

  menuList.forEach((nav) => {
    if (!nav.isGroup) {
      nav.menu.forEach((item: { path: string; name: string }) => {
        if (pathOnly.includes(item.path)) {
          flatMenuItems.push(item.path);
        }
      });
    } else {
      nav.menu.forEach((group) => {
        group.menu.forEach((item: { path: string; name: string }) => {
          if (pathOnly.includes(item.path)) {
            flatMenuItems.push(item.path);
          }
        });
      });
    }
  });

  return flatMenuItems.length > 0 ? [flatMenuItems[0]] : [];
});
</script>

<style scoped lang="less">
.aside-left {
  position: relative;
  width: 260px;
  min-width: 260px;
  transition: all 200ms;

  .aside-nav {
    position: fixed;
    top: 62px;
    bottom: 0;
    background-color: var(--color-bg-1);
    overflow-x: hidden;
    overflow-y: auto;
    width: 260px;
    height: calc(100vh - 62px);
    border-right: 1px solid var(--color-border);
    transition: left 200ms;

    &:hover {
      &::-webkit-scrollbar {
        display: block;
      }
    }

    &::-webkit-scrollbar {
      display: none;
      width: 8px;
      background: transparent;
    }

    &::-webkit-scrollbar-thumb {
      background: var(--color-fill-3) content-box;
      border: 2px solid transparent;
      border-radius: 6px;

      &:hover {
        background-color: var(--color-fill-4);
      }
    }
  }

  :deep(.aside-nav-menu) {
    width: 260px;
    box-sizing: border-box;

    .arco-menu-item {
      color: var(--color-text-1);
    }

    .arco-menu-inline-header {
      font-size: 16px;
      font-weight: 500;
      color: var(--color-text-2);
    }

    .arco-menu-selected {
      color: rgb(var(--primary-6));
    }
  }

  .aside-nav-btn {
    position: fixed;
    top: 188px;
    left: 248px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--color-bg-5);
    border: 1px solid var(--color-fill-3);
    box-shadow: 0 4px 10px 0 rgb(0 0 0 / 10%);
    transition: all 100ms;

    &:hover {
      background-color: var(--color-bg-5);
      border: 1px solid var(--color-fill-3);
      transform: scale(1.1);
    }
  }

  &-collapse {
    width: 0;
    min-width: 0;

    .aside-nav {
      left: -248px;
    }
    .aside-nav-btn {
      left: 0;
    }
  }
}
</style>
