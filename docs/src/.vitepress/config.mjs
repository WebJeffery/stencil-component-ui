import { defineConfig } from "vitepress";
import { demoblockPlugin, demoblockVitePlugin } from 'vitepress-theme-demoblock'
import sidebar from "./config/sidebar";
import nav from './config/nav'


export default defineConfig({
    lang: "zh-CN",
    title: "swc-ui 文档",
    description: "一个名为 swc-ui 的 web component 组件库",
    lastUpdated: true,
    base: '/stencil-component-ui/',
    outDir: "../dist",
    markdown: {
        config: (md) => {
            md.use(demoblockPlugin, {
                customClass: 'demoblock-custom'
            })
        }
    },
    themeConfig: {
        // editLink: {
        //     pattern:
        //         "https://github.com/WebJeffery/stencil-component-ui/edit/master/docs/src/components/:path",
        //     text: "Edit on GitHub",
        // },
        lastUpdatedText: "更新时间",
        outlineTitle: "章节目录",
        nav,
        socialLinks: [
            { icon: "github", link: "https://github.com/WebJeffery/stencil-component-ui" },
        ],
        sidebar,
        footer: {
            message: "MIT Licensed",
            copyright: "Copyright © 2024-present WebJeffery",
        },
        docFooter: {
            prev: "上一页",
            next: "下一页",
        },
    },
    vue: {
        template: {
            compilerOptions: {
                isCustomElement: (tag) => {
                    return tag.startsWith("swc-");
                },
            },
        },
    },
    vite: {
        server: {
            port: 8827
        },
        build: {
            target: "es2015",
        },
        plugins: [demoblockVitePlugin()]
    },
});
