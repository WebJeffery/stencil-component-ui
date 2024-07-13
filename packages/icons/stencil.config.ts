import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'swc-icons',
  extras: {
    // fixes VitePress doc build
    enableImportInjection: true,
  },
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
      generateTypeDeclarations: false,
      customElementsExportBehavior: 'auto-define-custom-elements',
    },
    // {
    //   type: 'dist-custom-elements',
    //   dir: 'dist/bundle',
    //   includeGlobalScripts: false,
    //   customElementsExportBehavior: 'bundle'  // 配置为捆绑导出
    // },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
  ],
  testing: {
    browserHeadless: "new",
  },
};
