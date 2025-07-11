# 安装配置

这里记录开发环境的安装和配置过程。

## 📦 基础环境

### Node.js 安装
```bash
# 推荐使用 nvm 管理 Node.js 版本
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
nvm install --lts
nvm use --lts
```

### 包管理器
```bash
# 推荐使用 pnpm
npm install -g pnpm

# 或者使用 yarn
npm install -g yarn
```

## 🛠️ 开发工具

- **编辑器**：VS Code
- **版本控制**：Git
- **包管理**：pnpm/yarn
- **构建工具**：Vite

## 🚀 项目初始化

```bash
# 创建新项目
pnpm create vite my-project --template vue-ts
cd my-project
pnpm install
pnpm dev
``` 