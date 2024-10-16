/* eslint-disable no-undef */
import chalk from "chalk";

// argv[2]参数就是commit-msg消息的文件路径，里面放的就是commit -m后面的消息内容
const msgPath = process.argv[2];
import * as fs from "node:fs";
const msg = fs.readFileSync(msgPath, "utf-8").trim();

const commitRE =
  /^(feat|fix|docs|style|refactor|perf|test|build|ci|chore|release)(\(.+\))?: .{1,50}/;

if (!commitRE.test(msg)) {
  console.error(
    `  ${chalk.bgRed.white(" ERROR ")} ${chalk.red(
      "不合法的 commit 消息格式"
    )}\n\n` +
      chalk.red("  请使用正确的提交格式:\n\n") +
      `    ${chalk.green("feat: add 'comments' option")}\n` +
      `    ${chalk.green("fix: handle events on blur (close #28)")}\n\n` +
      chalk.red(
        "  请查看 git commit 提交规范：https://jdf2e.github.io/jdc_fe_guide/docs/git/commit/。\n"
      )
  );

  process.exit(1);
}
