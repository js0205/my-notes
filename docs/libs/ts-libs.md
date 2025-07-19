# ts编译相关的第三方库

## ts-node

**作用**：直接在 Node.js 中运行 TypeScript 文件，无需预先编译

**特点**：
- 实时编译：将 TypeScript 代码在运行时转换为 JavaScript
- 开发友好：支持直接运行 `.ts` 文件，无需手动编译步骤
- 配置灵活：支持 `tsconfig.json` 配置
- 调试支持：支持源码映射，便于调试

**使用场景**：
- 开发环境直接运行 TypeScript 脚本
- 测试文件运行（如 Jest 配置）
- 快速原型开发

**示例**：
```bash
# 直接运行 TypeScript 文件
npx ts-node src/index.ts

# 在 package.json 中配置
"scripts": {
  "dev": "ts-node src/index.ts"
}
```

## tsc

**作用**：TypeScript 官方编译器，将 TypeScript 代码编译为 JavaScript

**特点**：
- 官方工具：TypeScript 官方提供的编译器
- 类型检查：严格的类型检查，确保代码质量
- 编译输出：生成 `.js` 文件和类型声明文件 `.d.ts`
- 配置丰富：通过 `tsconfig.json` 提供大量编译选项

**使用场景**：
- 生产环境构建
- 库开发（生成类型声明文件）
- 严格的类型检查需求

**示例**：
```bash
# 编译 TypeScript 文件
npx tsc src/index.ts

# 使用配置文件编译
npx tsc --project tsconfig.json
```

## swc

**作用**：用 Rust 编写的高速 JavaScript/TypeScript 编译器

**特点**：
- 极速编译：比 tsc 快 20-70 倍
- Rust 实现：内存安全，性能优异
- 兼容性好：支持大部分 TypeScript 和 JavaScript 特性
- 生态集成：与 webpack、Vite、Babel 等工具集成良好

**使用场景**：
- 大型项目构建优化
- CI/CD 环境加速
- 需要快速编译的开发环境

**示例**：
```bash
# 直接编译文件
npx @swc/cli src/index.ts

# 在 webpack 中使用
npm install @swc/core @swc-loader
```

## 性能对比

| 工具 | 编译速度 | 类型检查 | 内存占用 | 适用场景 |
|------|----------|----------|----------|----------|
| tsc | 慢 | 完整 | 中等 | 生产构建、类型检查 |
| ts-node | 中等 | 可选 | 较高 | 开发环境、测试 |
| swc | 极快 | 无 | 低 | 快速构建、CI/CD |

## 选择建议

- **开发调试**：使用 `ts-node`，支持源码映射和类型检查
- **生产构建**：使用 `swc`，获得最佳编译速度
- **类型安全**：使用 `tsc`，确保严格的类型检查
- **混合方案**：开发时用 `ts-node`，构建时用 `swc`，类型检查时用 `tsc`
