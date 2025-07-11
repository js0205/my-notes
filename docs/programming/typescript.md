# TypeScript 学习笔记

TypeScript 开发指南。

## 🎯 基础类型

```typescript
// 基本类型
let isDone: boolean = false;
let count: number = 6;
let name: string = "john";

// 数组
let list: number[] = [1, 2, 3];
let list2: Array<number> = [1, 2, 3];

// 接口
interface User {
  id: number;
  name: string;
  email?: string;
}
```

## 🔧 高级类型

```typescript
// 泛型
function identity<T>(arg: T): T {
  return arg;
}

// 联合类型
type Status = 'loading' | 'success' | 'error';
```
