import DefaultTheme from "vitepress/theme";
import { defineCustomElements } from "swc-ui";
import { registerComponent } from '@swc-ui/icon'
import "./index.css";
import 'swc-ui/dist/index.css'

export default {
    ...DefaultTheme,
    async enhanceApp(ctx) {
        DefaultTheme.enhanceApp(ctx);
        if (!import.meta.env.SSR) {
            defineCustomElements();
            registerComponent()
        }
    },
};
