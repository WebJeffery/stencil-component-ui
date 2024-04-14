

## 配置说明

- files类型：Array 该属性是一个 相对路径 或者 绝对路径的文件列表,它显示指定了 tsc 编译器需要编译的文件列表
- include类型：Array 该属性是一个列表 ，指定 ts 需要检查的文件 路径， 和 files 不同的是，列表的每一个值是 采用 glob 通配符匹配支持的扩展名文件，include 支持的 glob 通配符有三种：

```
“*” 匹配零个或多个字符（不包括目录分隔符）
“?” 匹配任何一个字符（不包括目录分隔符）
“**/” 递归匹配任何子目录
```
- exclude类型: Array 同 include 一样的 glob-like 数组列表，指定 排除 检查的 文件路径，可以排除 include 包含的 文件路径，但是 不能排除 files 直接指定的文件，"exclude"属性默认为不包括 node_modules
```
1. 如果"files"和"include"两者都未指定， ts 就会使用默认搜索条件检查文件.
2. 如果指定了"files"或"include"属性，则编译器将包含这两个属性包含的文件的并集
3. ts 支持搜索检查的文件 扩展名 有 .ts，.tsx 和.d.ts 文件， 如果配置了 allowJs 选项还会包括 .js / .jsx 文件
```
- types类型: `Array<string>` 该选项是 compilerOption 选项下的一个配置属性，该选项是一个 “@types”包名称数组。 指定 types 属性 怎配置文件 将仅检索指定名称的 @types 包
- extends类型: string tsconfig.json 文件可以使用该 extends 属性从另一个文件继承配置，该选项属性值是一个字符串,表示的是另一个配置文件的访问路径 配置选项使用 demo 如下 tsconfig/tsconfig-base.json
- compileOnSave 类型: Boolean 该属性是 tsconfig.json 的顶级属性，当为 true 的时候，ide 会在用户保存的时候 按照当前的 tsconfig.json 文件 规则编译文件
实验证明 并不是很好用，输出位置不是按照我们想要的规则输出

- allowJs类型: Boolean 默认值: false 该配置选项表示是否 编译 .js 或者 .jsx 文件
- allowUmdGlobalAccess类型：Boolean 默认值: false 允许从模块访问 UMD 全局变量
- allowUnreachableCode类型: Boolean 默认值: false 不报告执行不到的代码错误。(不建议修改此选项)
- allowUnusedLabels 类型: Boolean 默认值: false 不报告未使用的标签错误.
- alwaysStrict 类型: Boolean 默认值: false 以严格模式解析并为每个源文件生成 "use strict"语句
- baseUrl类型: String 默认值 无 解析非相对模块名的基准目录。 个人实践结果 当 ts 中 import 引用非相对路径的模块，例如 import "foo",ts 会首先查询 node_modules 目录，如果没有查找到需要的 会根据 baseUrl 设置的 路径目录下 查找 该模块。
- charset类型: String, 默认值: "utf8", 输入文件的字符集。

- checkJs类型: Boolean 默认值: false, 报告.js 文件中的错误。与 allowJs 配置 一起使用。

- composite 类型: Boolean 默认值: true 确保 TypeScript 可以确定在哪里可以找到引用项目的输出以编译项目。

- declaration类型: Boolean 默认值: false 构建 ts 文件时 生成相应的 .d.ts 文件

- declarationDir类型: String 默认值: 默认输出路径为生产的目标文件相同位置 生成.d.ts 声明文件的输出路径。

- declarationMap 类型: Boolean 默认值: false, 为每个相应的“ .d.ts”文件生成一个源映射。

- diagnostics 类型: Boolean 默认值: false, tsc --diagnostics 显示诊断信息。输出内容类似下面



## 配置文件解释

```json
{
  "compilerOptions": {
    // 指定 ECMAScript 目标版本 "ES3"（默认）， "ES5"， "ES6" / "ES2015"， "ES2016"， "ES2017" 或 "ESNext"。
    "target": "ES5",
    // 构建的目标代码删除所有注释，但是不会删除以 /!* 开头的版权信息
    "removeComments": true,
    // 启用所有严格类型检查选项。
    "strict": true,
    // 禁止对同一个文件的不一致的引用
    "forceConsistentCasingInFileNames": true,
    // 生成相应的 .d.ts文件
    "declaration": true,
    // 生成的 .d.ts文件路径，这里统一生成到types文件夹下
    "declarationDir": "types",
    // 报错时不生成输出文件
    "noEmitOnError": true,
    "module": "commonjs", // 指定生成哪个模块系统代码："None"，"CommonJS" "AMD"，"System"， "UMD"，"ES6"或"ES2015"
    "moduleResolution": "node", // 决定如何处理模块。或者是"Node"对于Node.js/io.js，或者是"Classic"（默认）
    "experimentalDecorators": true, // 启用实验性的ES装饰器
    "emitDecoratorMetadata": true, // 给源码里的装饰器声明加上设计类型元数据
    // baseUrl来告诉编译器到哪里去查找模块，所有非相对模块导入都会被当做相对于 baseUrl。
    "baseUrl": ".",
    // 非相对模块导入的路径映射配置
    "paths": {
      "@/*": ["src/*"],
      "@docs/*":["docs/*"],
      "@public/*":["public/*"],
      "@test/*":["test/*"],
    }
  },
  "compileOnSave": false,
  // 编译器默认包含的编译文件，src是源代码文件夹，test是jest测试代码文件夹
  "include": ["src/**/*","test/**/*"],
  // 编译器默认排除的编译文件
  "exclude": ["node_modules"]
}
```

## 完整配置

```json
{
  "compilerOptions": {
    "incremental": true,
    "target": "es5",
    "module": "commonjs",
    "allowJs": true,
    "checkJs": true,
    "jsx": "preserve",
    "outDir": "./dist",
    "rootDir": "./src",
    "composite": true,
    "removeComments": false,
    "noEmit": false,
    "importHelpers": true,
    "downlevelIteration": true,
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noImplicitReturns": true,
    "noFallthroughCasesInSwitch": true,
    "moduleResolution": "node",
    "baseUrl": "./",
    "types": ["mocha"],
    "allowSyntheticDefaultImports": true,
    "esModuleInterop": true,
    "allowUmdGlobalAccess": true,
    "experimentalDecorators": true,
    "emitDecoratorMetadata": true
  },
  "files": ["./src/enum.ts", "./src/namespace/n1.ts"],
  "include": ["./src/namespace/*", "./src/module/*"],
  "exclude": [
    "./src/namespace/n2.ts",
    "./src/module/m11.ts",
    "./dist-test",
    "./node_modules"
  ],
  "compileOnSave": false
}
```


## 扩展阅读
- [配置选项属性详解](https://blog.cjw.design/blog/old/typescript#tsconfig-%E9%85%8D%E7%BD%AE%E9%80%89%E9%A1%B9%E5%B1%9E%E6%80%A7%E8%AF%A6%E8%A7%A3)