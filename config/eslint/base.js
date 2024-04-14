module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  // add your custom rules here
  rules: {
    // 如果有console，会抛出错误
    'no-console': 2,
    // 在对象中使用getter/setter
    'accessor-pairs': 2,
    // =>的前/后括号
    'arrow-spacing': [
      2,
      {
        before: true,
        after: true,
      },
    ],
    // 在循环内禁止`await`
    'block-spacing': [2, 'always'],
    // if while function 后面的{必须与if在同一行，java风格
    'brace-style': [
      2,
      '1tbs',
      {
        allowSingleLine: true,
      },
    ],
    // 强制驼峰法命名
    camelcase: [
      0,
      {
        properties: 'always',
      },
    ],
    // always-multiline：多行模式必须带逗号，单行模式不能带逗号 off->2
    'comma-dangle': ['off', 'never'],
    // 控制逗号前后的空格
    'comma-spacing': [
      2,
      {
        before: false,
        after: true,
      },
    ],
    // 控制逗号在行尾出现还是在行首出现
    'comma-style': [2, 'last'],
    // 强制在子类构造函数中用super()调用父类构造函数，TypeScrip的编译器也会提示
    'constructor-super': 2,
    // 强制所有控制语句使用一致的括号风格
    curly: [2, 'multi-line'],
    // object, '.' 号应与对象名在同一行
    'dot-location': [2, 'property'],
    // 文件末尾强制换行
    'eol-last': 2,
    // 使用 === 替代 ==
    eqeqeq: ['off'],
    // 生成器函数*的前后空格
    'generator-star-spacing': [
      2,
      {
        before: true,
        after: true,
      },
    ],
    // nodejs 处理错误
    'handle-callback-err': [2, '^(err|error)$'],
    // 缩进风格 off->2
    indent: [
      'error',
      2,
      {
        SwitchCase: 1,
      },
    ],
    // JSX 属性中一致使用双引号或单引号
    'jsx-quotes': [2, 'prefer-double'],
    // 对象字面量中冒号的前后空格
    'key-spacing': [
      2,
      {
        beforeColon: false,
        afterColon: true,
      },
    ],
    // 在关键字前后强制使用一致的空格
    'keyword-spacing': [
      2,
      {
        before: true,
        after: true,
      },
    ],
    // 函数名首行大写必须使用new方式调用，首行小写必须用不带new方式调用
    'new-cap': [
      2,
      {
        newIsCap: true,
        capIsNew: false,
      },
    ],
    // 在调用没有参数的构造函数时强制或禁止使用圆括号
    'new-parens': 2,
    // 不允许“数组”构造函数
    'no-array-constructor': 2,
    // 不允许使用“arguments.caller”或“arguments.callee”
    'no-caller': 2,
    // 禁止重新分配类成员
    'no-class-assign': 2,
    // 在条件表达式中禁止赋值操作符
    'no-cond-assign': 2,
    // 禁止对const变量重新赋值
    'no-const-assign': 2,
    // 禁止在正则表达式中使用控制字符
    'no-control-regex': 0,
    // 不允许删除变量 var
    'no-delete-var': 2,
    // 在“函数”定义中禁止重复参数
    'no-dupe-args': 2,
    // 禁止重复的类成员
    'no-dupe-class-members': 2,
    // 禁止在对象字面量中出现重复的键
    'no-dupe-keys': 2,
    // 禁止重复的大小写标签
    'no-duplicate-case': 2,
    // 禁止在正则表达式中使用空字符类
    'no-empty-character-class': 2,
    // 不允许空解构模式
    'no-empty-pattern': 2,
    // 禁止使用' eval()
    'no-eval': 2,
    // 禁止在' catch '子句中重新赋值异常
    'no-ex-assign': 2,
    // 禁止扩展本机类型
    'no-extend-native': 2,
    // 禁止不必要地调用' .bind() '
    'no-extra-bind': 2,
    // 禁止不必要的布尔类型转换
    'no-extra-boolean-cast': 2,
    // 禁止不必要的括号
    'no-extra-parens': [2, 'functions'],
    // 禁止跌落' case '语句
    'no-fallthrough': 2,
    // 在数字字面值中禁止前导或后导小数点
    'no-floating-decimal': 2,
    // 禁止对' function '声明重新赋值
    'no-func-assign': 2,
    // 禁止使用' eval() '类方法
    'no-implied-eval': 2,
    // 禁止在嵌套块中声明变量或'函数'
    'no-inner-declarations': [2, 'functions'],
    // 禁止在' RegExp '构造函数中使用无效的正则表达式字符串
    'no-invalid-regexp': 2,
    // 不允许不规则的空白
    'no-irregular-whitespace': 2,
    // 禁止使用' __iterator__ '属性
    'no-iterator': 2,
    // 禁止与变量共享名称的标签
    'no-label-var': 2,
    // 不允许标记语句
    'no-labels': [
      2,
      {
        allowLoop: false,
        allowSwitch: false,
      },
    ],
    // 禁止不必要的嵌套块
    'no-lone-blocks': 2,
    // 禁止使用空格和制表符混合进行缩进
    'no-mixed-spaces-and-tabs': 2,
    // 不允许多行空格
    'no-multi-spaces': 2,
    // 不允许多行字符串
    'no-multi-str': 2,
    // 禁止多个空行
    'no-multiple-empty-lines': [
      2,
      {
        max: 1,
      },
    ],
    // 禁止赋值给本机对象或只读全局变量+
    'no-global-assign': 2,
    // 禁止对关系操作符的左操作数取反+
    'no-unsafe-negation': 2,
    'no-native-reassign': 2,
    'no-negated-in-lhs': 2,
    // 不允许对象的构造函数
    'no-new-object': 2,
    'no-new-require': 2,
    // 禁止“Symbol”对象使用“new”操作符
    'no-new-symbol': 2,
    // 禁止使用' String '、' Number '和' Boolean '对象的' new '操作符
    'no-new-wrappers': 2,
    // 禁止调用全局对象属性作为函数
    'no-obj-calls': 2,
    // 不允许八进制文字
    'no-octal': 2,
    // 禁止在字符串字面量中使用八进制转义序列
    'no-octal-escape': 2,
    'no-path-concat': 2,
    // 禁止使用' __proto__ '属性
    'no-proto': 2,
    // 不允许变量redeclaration
    'no-redeclare': 2,
    // 禁止在正则表达式中使用多个空格
    'no-regex-spaces': 2,
    // 禁止在' return '语句中使用赋值操作符
    'no-return-assign': [2, 'except-parens'],
    // 禁止两边完全相同的作业
    'no-self-assign': 2,
    // 禁止两边完全相同的比较
    'no-self-compare': 2,
    // 不允许逗号操作符
    'no-sequences': 2,
    // 禁止标识符隐藏受限制的名称
    'no-shadow-restricted-names': 2,
    // 要求或不允许函数标识符与其调用之间有空格+
    'func-call-spacing': 2,
    'no-spaced-func': 2,
    // 不允许稀疏阵列
    'no-sparse-arrays': 2,
    // 在构造函数中调用super()之前禁止使用' this ' / ' super '
    'no-this-before-super': 2,
    // 禁止将文字作为异常抛出
    'no-throw-literal': 2,
    // 禁止行尾有空格
    'no-trailing-spaces': 2,
    // 禁止使用未声明的变量，除非在' /*global */ '注释中提到
    'no-undef': 2,
    // 禁止将变量初始化为“undefined”
    'no-undef-init': 2,
    // 禁止混乱的多行表达式
    'no-unexpected-multiline': 2,
    // 禁止未修改的循环条件
    'no-unmodified-loop-condition': 2,
    // 当存在更简单的选择时，禁止使用三元运算符
    'no-unneeded-ternary': [
      2,
      {
        defaultAssignment: false,
      },
    ],
    // 禁止在' return '， ' throw '， ' continue '和' break '语句之后出现不可到达的代码
    'no-unreachable': 2,
    // 禁止在' finally '块中使用控制流语句
    'no-unsafe-finally': 2,
    // 不允许未使用的变量
    'no-unused-vars': [
      2,
      {
        vars: 'all',
        args: 'none',
      },
    ],
    // 禁止不必要地调用' .call() '和' .apply()
    'no-useless-call': 2,
    // 禁止在对象和类中使用不必要的计算属性键
    'no-useless-computed-key': 2,
    // 禁止不必要的构造函数
    'no-useless-constructor': 2,
    // 禁止不必要的转义字符
    'no-useless-escape': 0,
    // 属性前不允许有空格
    'no-whitespace-before-property': 2,
    // 不允许`with`语句
    'no-with': 2,
    // 强制在函数中同时声明或单独声明变量
    'one-var': [
      2,
      {
        initialized: 'never',
      },
    ],
    // 强制操作符使用一致的换行样式
    'operator-linebreak': [
      2,
      'after',
      {
        overrides: {
          '?': 'before',
          ':': 'before',
        },
      },
    ],
    // 要求或禁止在块内填充
    'padded-blocks': [2, 'never'],
    // 强制一致使用反引号、双引号或单引号
    quotes: [
      2,
      'single',
      {
        avoidEscape: true,
        allowTemplateLiterals: true,
      },
    ],
    // 要求或不允许用分号代替ASI off->2
    semi: ['off', 'never'],
    // 强制分号前后有一致的空格
    'semi-spacing': [
      2,
      {
        before: false,
        after: true,
      },
    ],
    // 强制在块之前有一致的空格
    'space-before-blocks': [2, 'always'],
    // 强制在“函数”定义开括号前有一致的空格
    'space-before-function-paren': [0, 'never'],
    // 在圆括号内强制使用一致的空格
    'space-in-parens': [2, 'never'],
    // 要求中缀操作符周围有空格
    'space-infix-ops': 2,
    // 强制一元运算符前后有一致的空格
    'space-unary-ops': [
      2,
      {
        words: true,
        nonwords: false,
      },
    ],
    // 空格注释强制在注释中的' // '或' /* '后面有一致的空格
    'spaced-comment': [
      2,
      'always',
      {
        markers: ['global', 'globals', 'eslint', 'eslint-disable', '*package', '!', ','],
      },
    ],
    // 要求或禁止模板字符串内嵌表达式周围有空格
    'template-curly-spacing': [2, 'never'],
    // 检查' NaN '时要求调用' isNaN() '
    'use-isnan': 2,
    // 强制将' typeof '表达式与有效字符串进行比较
    'valid-typeof': 2,
    // 要求立即调用' function '时使用圆括号
    'wrap-iife': [2, 'any'],
    // 要求或禁止' yield* '表达式中的' * '周围有空格
    'yield-star-spacing': [2, 'both'],
    // 要求或不允许“尤达”条件
    yoda: [2, 'never'],
    // 对于声明后从未重新赋值的变量，要求使用' const '声明
    'prefer-const': 2,
    // 禁止使用'debugger'
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    // 在大括号内强制使用一致的空格
    'object-curly-spacing': [
      2,
      'always',
      {
        objectsInObjects: true,
      },
    ],
    // 在数组括号内强制使用一致的空格
    'array-bracket-spacing': [2, 'never'],
  },
};
