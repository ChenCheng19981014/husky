
### 解决: 配置安装 lint-staged + husky + Eslint + Prettier 

### eslint 配置大全https://github.com/ChenCheng19981014/husky/blob/5cb734fb9ce877016ac3b16dd85ea3dee79dc6f4/.eslintrc.js

1、安装以下依赖：
npm i husky lint-staged eslint prettier eslint-config-prettier eslint-plugin-prettier eslint-plugin-vue --save-dev

2、运行npx命名，生成husky文件
npx husky init 
  并在在husky文件夹下pre-commit 写入： npm run lint:lint-staged

3、在package.json中添加以下配置，更多自行百度

  "scripts": {
    "lint-staged": "lint-staged",
    "prepare": "husky",
    "lint:lint-staged": "lint-staged"
  },
  "lint-staged": {
    "*.{js,ts,vue}": [
      "eslint --fix",
      "prettier --write",
      "git add"
    ]
  },

4、添加.eslintignore、.prettierignore、eslint.config.js、.prettierrc等文件

5、vscode同样安装prettier、eslint进行检测