# Changesets

## 配置

```json
{
  "$schema": "https://unpkg.com/@changesets/config@2.0.0/schema.json",
  "changelog": "@changesets/cli/changelog",
  "commit": false,
  "linked": [["@swc-ui/*"]],
  "access": "public",
  "baseBranch": "main",
  "updateInternalDependencies": "patch",
  "ignore": [],
  "___experimentalUnsafeOptions_WILL_CHANGE_IN_PATCH": {
      "onlyUpdatePeerDependentsWhenOutOfRange": true
  }
}
```

- changelog: changelog 生成方式
- commit: 不要让 changeset 在 publish 的时候帮我们做 git add
- linked: 配置哪些包要共享版本
- access: 公私有安全设定，内网建议 restricted ，开源使用 public
- baseBranch: 项目主分支
- updateInternalDependencies: 确保某包依赖的包发生 upgrade，该包也要发生 version upgrade 的衡量单位（量级）
- ignore: 不需要变动 version 的包
- ___experimentalUnsafeOptions_WILL_CHANGE_IN_PATCH: 在每次 version 变动时一定无理由 patch 抬升依赖他的那些包的版本，防止陷入 major 优先的未更新问题

