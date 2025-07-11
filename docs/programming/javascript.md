# JavaScript 学习笔记

现代 JavaScript 开发的核心知识点和最佳实践。

## 🎯 ES6+ 特性

### 解构赋值
```javascript
// 数组解构
const [a, b, ...rest] = [1, 2, 3, 4, 5];

// 对象解构
const { name, age, ...others } = person;
```

### 箭头函数
```javascript
// 传统函数
function add(a, b) {
  return a + b;
}

// 箭头函数
const add = (a, b) => a + b;
```

### Promise 和 async/await
```javascript
// Promise
fetch('/api/data')
  .then(response => response.json())
  .then(data => console.log(data));

// async/await
async function fetchData() {
  try {
    const response = await fetch('/api/data');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error:', error);
  }
}
```

## 🔧 常用方法

### 数组方法
```javascript
// map, filter, reduce
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(n => n * 2);
const evens = numbers.filter(n => n % 2 === 0);
const sum = numbers.reduce((acc, n) => acc + n, 0);
```

## 📝 最佳实践

- 使用 const/let 替代 var
- 优先使用箭头函数
- 利用解构赋值简化代码
- 合理使用 async/await 处理异步 