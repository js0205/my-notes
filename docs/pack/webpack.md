# Webpack

## webpack流程

初始化配置->从入口模块开始解析->经过loader处理->遍历ast->找到依赖->继续解析依赖，直到所有子模块都解析完成->优化chunk->生成assets->根据assets生成最终的产物

## webpack的插件机制

webpack的插件机制，基于tapable实现，而tapable提供了多类型的hook，比如：同步串行hook、异步并行hook。
webpack提供的hook目前有5类，第一类是compiler上的hook，这类hook是大流程上的节点；第二类compilation上的hook，这类hook是构建模块实例、优化chunk等流程上的节点，第三类normalModuleFactory上的hook，这类hook是模块创建、查找模块等流程上的节点，第四类是javascriptParser上的hook，这类hook就是遍历ast流程上的节点，第五类是ContextModuleFactory上的hook，与normalModuleFactory上的hook类似，但是用得少
最后一个插件以apply方法作为入口函数，入口函数会接受一个compiler参数，接下来就是根据webpack在compiler，compilation等对象上爆料的hooks上注册callback，在callback内完成拓展功能

## 写过webpack插件

写过约定式路由插件，目的是解决手写routes配置文件，做到自动生成routes文件，提高开发效率。
为了使生成routes文件生效，我选择在webpack编译之前的hooks内完成routes文件的生成，而编译之前的hooks有enviroment、initialize等hook，我选择initialize hook，这是一个同步串行hook
最后在initialize hook上注册callback，在callback内读取目录及相关配置，生成路由配置文件

## webpack.config.js和webpack.config.ts的区别

### 运行速度对比

**webpack.config.js 运行速度更快**，主要原因如下：

**1. 直接执行 vs 编译执行**
   - `webpack.config.js`：Node.js 可以直接执行，无需额外编译步骤
   - `webpack.config.ts`：需要先通过 TypeScript 编译器（tsc）或 ts-node 将 TypeScript 代码编译/转换为 JavaScript，然后再执行

**2. 启动时间差异**
   - `webpack.config.js`：启动时直接加载配置文件
   - `webpack.config.ts`：启动时需要先初始化 TypeScript 编译环境，包括：
     - 加载 TypeScript 编译器
     - 解析 tsconfig.json 配置
     - 执行类型检查和编译转换

**3. 内存占用**
   - `webpack.config.js`：内存占用相对较少
   - `webpack.config.ts`：需要额外的 TypeScript 运行时环境，内存占用更高

**4. 开发体验权衡**
   - 虽然 `.ts` 配置启动稍慢，但提供了：
     - 类型安全，减少配置错误
     - 更好的 IDE 支持和智能提示
     - 代码重构更安全

### 性能优化建议

- **生产环境**：如果对启动速度要求极高，建议使用 `webpack.config.js`
- **开发环境**：推荐使用 `webpack.config.ts`，享受类型安全带来的开发效率提升
- **混合方案**：可以将配置文件拆分为 `.js` 和 `.ts` 两个版本，根据环境选择使用