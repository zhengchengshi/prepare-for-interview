// 执行上下文的伪码非常重要
// 变量提升，暂时性死区，（静态）作用域，作用域链，闭包等都可用执行环境伪码解释
// 执行上下文创建阶段会做三个事情 1. this绑定  2. 创建词法环境组件 3. 创建变量环境组件
// 词法环境
const ExecutionContext = {
  ThisBinding: "<this value>",
  LexicalEnvironment: {
    environmentRecord: {
      // Type决定了记录器的类型，全局执行环境下Type为Object，函数执行环境下为Declarative
      Type: "Object | Declarative",
      params: "...",
      // ...
    },
    outer: "global or outer function environment reference or <null>",
  },
  VariableEnvironment: {},
};

// 全局执行上下文
const globalExectionContext = {
  // this绑定
  thisBinding: "<Global Object>",
  // 词法环境
  lexicalEnvironment: {
    // 词法环境记录器，对象环境记录器，用来定义出现在**全局上下文**中的变量和函数的关系。
    EnvironmentRecord: {
      Type: "Object",
      // 绑定标识符
      a: "< uninitialized >", // 词法环境中的变量声明不会赋值undefined，这就是为什么在声明之前访问变量会报错的原因（暂时性死区）
      b: "< uninitialized >",
      multiply: "< func >",
      // ...
    },
    // 对外部环境的引用
    outer: "<null>",
  },
  // 变量环境也是词法环境，只是词法环境用来保存函数和用let和const声明的变量，变量环境用来存储var变量的绑定。
  variableEnvironment: {
    EnvironmentRecord: {
      Type: "Object",
      // 在这里绑定标识符
      c: undefined, // 变量环境用来存储var声明的变量，并且变量被初始化为undefined
    },
    outer: "<null>",
  },
};

// 函数执行上下文
const functionExectionEnvironment = {
  thisBinding: "<Global Object>",
  // 词法环境
  lexicalEnvironment: {
    // 词法环境记录器，声明式函数记录器，存储变量、函数和参数。
    EnvironmentRecord: {
      Type: "Declarative",
      Arguments: { 0: 20, 1: 30, length: 2 },
      // ...
    },
    // 对外部环境的引用
    outer: "<Global or outer function reference>",
  },
  variableEnvironment: {
    EnvironmentRecord: {
      Type: "Declarative",
      // 在这里绑定标识符
      g: undefined,
    },
    outer: "<GlobalLexicalEnvironment>",
  },
};

// [好文](https://juejin.cn/post/6844903682283143181#heading-6)
// 理解一
// 当一个函数被创建并传递或从另一个函数返回时，它会携带一个closure背包。
// 背包中是函数声明时作用域内引用了外部环境变量的所有变量,它是在函数创建的时候生成的作用域链的子集，是打包的外部环境。
// 理解二
// 闭包是在返回一个函数的时候，为了把环境保存下载，创建的一个快照，对作用域链做了tree shaking，只留下必要的闭包链，保存在堆里，
// 作为对象的 [[scopes]] 属性，让函数不管走到哪，随时随地可访问用到的外部环境。在执行这个函数的时候，会利用这个“快照”，恢复作用域链。
