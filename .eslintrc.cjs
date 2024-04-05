module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    jest: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:vue/vue3-essential",
    "plugin:prettier/recommended",
  ],
  overrides: [
    {
      env: {
        node: true,
      },
      files: [".eslintrc.{js,cjs}"],
      parserOptions: {
        sourceType: "script",
      },
    },
  ],
  parser: "vue-eslint-parser",
  parserOptions: {
    ecmaVersion: "latest",
    parser: "@typescript-eslint/parser",
    sourceType: "module",
    jsxPragma: "react",
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ["@typescript-eslint", "vue"],
  //off 或者 0 , 关闭规则 warn 或者1  警告提示但不影响运行， error或者2 报错
  rules: {
    //eslint 规则
    "no-var": "error",
    "no-multiple-empty-lines": ["warn", { max: 1 }], //不需要多个换行
    "no-console": process.env.NODE_ENV === "prodictopm" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "prodictopm" ? "error" : "off",
    "no-unexpected-multiline": "error", //禁止空余多行
    "no-useless-escape": "off", //禁止不必要的转译字符
    //ts规则
    "@typescript-eslint/no-unused-vars": "error", // 禁止定义未使用的变量
    "@typescript-eslint/prefer-ts-expect-error": "error", //禁止使用@ts-igore
    "@typescript-eslint/no-explicit-any": "off", //禁止使用any
    "@typescript-eslint/no-non-null-assertion": "off",
    "@typescript-eslint/no-namespace": "off",
    "@typescript-eslint/semi": "off",
    //vue3规则
    "vue/multi-word-component-names": "off", //要求组件使用使用_  驼峰写法
    "vue/script-setup-uses-vars": "error",
    "vue/no-mutating-props": "off", //不孕育
    "vue/attribute-hyphenation": "off",
  },
};
