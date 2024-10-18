# husky
## 安装
```bash
yarn add husky lint-staged @commitlint/cli @commitlint/config-conventional -D
```
## 文档
- [https://typicode.github.io/husky/zh/](https://typicode.github.io/husky/zh/)
- [https://www.npmjs.com/package/lint-staged](https://www.npmjs.com/package/lint-staged)
- [https://www.npmjs.com/package/@commitlint/config-conventional](https://www.npmjs.com/package/@commitlint/config-conventional)
## package.json配置
```json
{
  "script": {
    "prepare": "husky",
    "lint-staged": "lint-staged",
  },
  "lint-staged": {
    "*.{js,vue}": ["eslint --fix", "prettier --write"]
  }
}
```

## husky初始化
```bash
npx husky init
```

## commitlint配置

```这样安装

yarn add @commitlint/config-conventional @commitlint/cli -D

```js
// .commitlintrc.js
// https://www.npmjs.com/package/@commitlint/config-conventional
// [
//   'build',
//   'chore',
//   'ci',
//   'docs',
//   'feat',
//   'fix',
//   'perf',
//   'refactor',
//   'revert',
//   'style',
//   'test'
// ];
module.exports = {
  extends: ['@commitlint/config-conventional'],
};
```

## 脚本文件
```bash
# .husky/commit-msg
npx --no -- commitlint --edit ${1}
```
```bash
# .husky/pre-commit
npx lint-staged
```