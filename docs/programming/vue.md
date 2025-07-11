# Vue.js 学习笔记

Vue 3 开发指南和最佳实践。

## 🎯 Vue 3 核心特性

### Composition API
```vue
<script setup>
import { ref, computed, onMounted } from 'vue'

// 响应式数据
const count = ref(0)
const message = ref('Hello Vue!')

// 计算属性
const doubleCount = computed(() => count.value * 2)

// 生命周期
onMounted(() => {
  console.log('组件已挂载')
})

// 方法
function increment() {
  count.value++
}
</script>

<template>
  <div>
    <h1>{{ message }}</h1>
    <p>计数: {{ count }}</p>
    <p>双倍: {{ doubleCount }}</p>
    <button @click="increment">增加</button>
  </div>
</template>
```

### 单文件组件
```vue
<script setup lang="ts">
interface Props {
  title: string
  count?: number
}

const props = withDefaults(defineProps<Props>(), {
  count: 0
})

const emit = defineEmits<{
  update: [value: number]
}>()
</script>

<template>
  <div class="my-component">
    <h2>{{ title }}</h2>
    <span>{{ count }}</span>
  </div>
</template>

<style scoped>
.my-component {
  padding: 1rem;
  border: 1px solid #ccc;
}
</style>
```

## 🔧 常用功能

### 响应式数据
- `ref()` - 基本类型响应式
- `reactive()` - 对象响应式  
- `computed()` - 计算属性
- `watch()` - 监听器

### 组件通信
- Props 父传子
- Emit 子传父
- Provide/Inject 跨级通信 