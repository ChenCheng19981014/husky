import globals from 'globals';
import pluginJs from '@eslint/js';
import pluginVue from 'eslint-plugin-vue';

export default [
  { files: ['**/*.{js,mjs,cjs,vue}'] },
  { languageOptions: { globals: { ...globals.browser, ...globals.node } } },
  pluginJs.configs.recommended,
  ...pluginVue.configs['flat/essential'],
  {
    rules: {
      // 不需要
      'eol-last': 0, // 文件以单一的换行符结束
      'no-extra-semi': 0, // 可以多余的冒号
      semi: 0, // 语句可以不需要分号结尾
      eqeqeq: 0, // 必须使用全等
      'one-var': 0, // 连续声明
      'no-undef': 1, // 可以 有未定义的变量
      'vue/no-mutating-props': 0,
      'no-duplicate-imports': 1,
      'no-unused-vars': 0,
      'vue/multi-word-component-names': [
        'error',
        {
          ignores: ['index'],
        },
      ],
    },
  },
];
