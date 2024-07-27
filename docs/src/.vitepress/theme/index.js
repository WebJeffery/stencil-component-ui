import DefaultTheme from "vitepress/theme";
import { applyPolyfills, defineCustomElements } from "@swc-ui/components/loader";
import { defineCustomElements as defineIconCustomElements } from '@swc-ui/icons/loader'
import 'vitepress-theme-demoblock/dist/theme/styles/index.css'
import "./index.css";


import { useComponents } from './useComponent'

import './styles/index.scss'

export default {
    ...DefaultTheme,
    async enhanceApp(ctx) {
        DefaultTheme.enhanceApp(ctx);
        useComponents(ctx.app)
        applyPolyfills().then(() => {
            defineCustomElements();
            defineIconCustomElements()
          });
    },
};
