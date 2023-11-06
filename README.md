# @paperplane/cra-template-mui [![npm](https://img.shields.io/npm/v/@paperplane/cra-template-mui)](https://www.npmjs.com/package/@paperplane/cra-template-mui)

基于 `@mui/material` 的 Create-React-App 模板。 

# 使用方式

```bash
npx create-react-app <你的应用名> --template @paperplane/mui
```

# 介绍

使用 Create-React-App 或组件库提供的 CLI 工具新建项目时，存在这些问题：

- 大部分常用的包（如 `lodash`）都需要再安装一遍；
- 没有样板代码，例如路由配置、入口 Provider、全局 Layout 布局、请求拦截器等，这些都需要去复制一遍；
- 默认的插件配置无法满足需求，必须再使用一些工具（如 `craco`）来定制 Webpack 插件。

因此，本项目旨在提供一个相对完善的项目模板，方便我们快速创建前端项目。

模版中包含了这些内容：

- 组件库、CSS-In-JS 库、Sass、路由、各种常用的工具库；
- 对于以上这些工具，已经提前配置好了 Webpack、Babel 的各个插件，可以开箱即用；
- 提供了 Prettier、ESLint 等 IDE 配置；
- 模板中已经做好了全局配置的初始化，如：路由、Layout、请求拦截器与封装、状态管理、语言初始化等都有样板代码；
- 模板中还有数个测试页面，这些页面不光可以当做样板代码，还能测试模板中各个依赖项是否运行正常。

# 依赖项

依赖项：

- 使用 `@mui/material` 组件库，`@mui/icons-material` 图标库、`@mui/x-date-pickers` 时间日期选择器库;
- 因此使用 `notistack` 作为配套的通知组件支持工具；
- 因此使用 `emotion` 来提供 CSS-In-JS 支持；
- 样式预处理器使用 `sass`，注意不是 `node-sass`；
- 使用 `react-app-rewired`、`customize-cra` 来进行配置，考虑到它们很久没有更新了，你可以换用 `craco`；
- 路由管理使用 `react-router-dom` 的 v6 版本，它和以前的版本区别很大，API 完全不兼容；
- 使用 `zustand` 来作状态管理，依赖中还包含了 `store` 用来管理 localStorage；
- 使用 `axios` 来作为请求库，依赖中还包含了 `swr` 用来实现 SWR 状态；
- 使用 `date-fns` 作为时间日期库，你可以换用 `dayjs`；
- 此外，依赖中还有 `ahooks`、`lodash`、`clsx` 来作为工具函数。
