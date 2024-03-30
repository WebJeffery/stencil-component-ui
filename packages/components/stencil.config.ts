import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'swc',
  globalStyle: 'style/index.css',
  globalScript: 'src/global.ts',
  outputTargets: [
    {
      type: 'dist-custom-elements',
      generateTypeDeclarations: true,
      customElementsExportBehavior: 'bundle',
      copy: [
        { src: 'components/swc-icon/assets/iconfont.svg', dest: 'dist/components/assets/iconfont.svg', warn: true },
        { src: 'style/index.css', dest: 'dist/index.css', warn: true },
      ],
    },
    // {
    //   type: 'dist',
    //   esmLoaderPath: '../loader',
    // },
    // {
    //   type: 'dist-custom-elements',
    //   customElementsExportBehavior: 'auto-define-custom-elements',
    //   externalRuntime: false,
    // },
    // {
    //   type: 'docs-readme',
    // },
    // {
    //   type: 'www',
    //   serviceWorker: null, // disable service workers
    // },
  ],
};
