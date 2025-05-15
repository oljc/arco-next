import type { App, Component } from 'vue';
import type { ArcoOptions } from './types';
import { setGlobalConfig, getComponentPrefix } from './global-config';

export function withInstall<T extends Component>(main: T, children?: Record<string, Component>) {
  const result = Object.assign(main, {
    install(app: App, options?: ArcoOptions) {
      setGlobalConfig(app, options);
      const prefix = getComponentPrefix(options);
      app.component(prefix + main.name, main);
      if (children) {
        Object.values(children).forEach((child) => {
          app.component(prefix + child.name, child);
        });
      }
    },
  });

  return children ? Object.assign(result, children) : result;
}
