import DefaultTheme from "vitepress/theme";
import { defineCustomElements } from "@swc-ui/components";
import { defineCustomElements as defineIconCustomElements } from '@swc-ui/icons'
import 'vitepress-theme-demoblock/dist/theme/styles/index.css'
import "./index.css";


import { useComponents } from './useComponent'

import './styles/index.scss'

export default {
    ...DefaultTheme,
    async enhanceApp(ctx) {
        DefaultTheme.enhanceApp(ctx);
        useComponents(ctx.app)
        defineCustomElements();
        defineIconCustomElements()
    },
};
