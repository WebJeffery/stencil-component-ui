import { Config } from '@stencil/core';
// import { sass } from '@stencil/sass';

export const config: Config = {
  namespace: 'swc-ui',
  buildEs5: false,
  // globalStyle: 'style/index.css',
  globalScript: 'src/global.ts',
  extras: {
    // fixes VitePress doc build
    enableImportInjection: true,
  },
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
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
  ],
  testing: {
    transform: {
      '^.+\\.jsx?$': 'babel-jest',
    },
    transformIgnorePatterns: [
      // eslint-disable-next-line max-len
      '/node_modules/(?!(@amzn/katal-components/|@katal/react/|@babel/runtime/helpers/esm/|lit-element|lit-html/)/)',
    ],
  },
  // plugins: [
  //   sass({
	// 		injectGlobalPaths: [
	// 			'src/global/variables.scss',
	// 			'src/global/mixins.scss',
	// 			'src/global/inject.scss',
	// 		],
	// 	}),
  // ]
};
