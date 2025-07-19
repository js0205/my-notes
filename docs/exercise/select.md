# 左右布局，左边是一个二级搜索选择组件，右边组件是一个button

```html
<div class="container">
  <select id="firstSelect">
    <option value="1">1</option>
    <option value="2">2</option>
    <option value="3">3</option>
  </select>
  <select id="secondSelect">
    <option value="">请选择一级选项</option>
  </select>
  <button>搜索</button>
</div>
```

```css
.container {
  display: flex;
}
```

```javascript
const secondOption = {
  '1':['1-1','1-2','1-3'],
  '2':['2-1','2-2','2-3'],
  '3':['3-1','3-2','3-3'],
}
const firstSelect = document.querySelector('#firstSelect');
const secondSelect = document.querySelector('#secondSelect');
firstSelect.addEventListener('change',()=>{
  const selectedValue = firstSelect.value;
  secondSelect.innerHTML = '';
  secondOption[selectedValue].forEach(item=>{
    const option = document.createElement('option');
    option.value = item;
    option.textContent = item;
    secondSelect.appendChild(option);
  })
})
const searchButton = document.querySelector('button');
searchButton.addEventListener('click',()=>{
  const firstValue = firstSelect.value;
  const secondValue = secondSelect.value;
  console.log(`搜索一级选项：${firstValue}，二级选项：${secondValue}`);
})
```

## 思考

1. 二级搜索的数据取决于一级搜索，所以用map进行映射

## 可优化点

1. 如何封装为一个组件

**方式一：ES6 Class组件**

```javascript
class CascadeSelector {
  constructor(container, options = {}) {
    this.container = typeof container === 'string' ? document.querySelector(container) : container;
    this.options = {
      data: {},
      firstPlaceholder: '请选择',
      secondPlaceholder: '请先选择一级选项',
      searchText: '搜索',
      onChange: null,
      onSearch: null,
      ...options
    };
    this.init();
  }

  init() {
    this.render();
    this.bindEvents();
  }

  render() {
    this.container.innerHTML = `
      <div class="cascade-selector">
        <select class="first-select">
          <option value="">${this.options.firstPlaceholder}</option>
          ${this.renderFirstOptions()}
        </select>
        <select class="second-select">
          <option value="">${this.options.secondPlaceholder}</option>
        </select>
        <button class="search-btn">${this.options.searchText}</button>
      </div>
    `;
    this.firstSelect = this.container.querySelector('.first-select');
    this.secondSelect = this.container.querySelector('.second-select');
    this.searchBtn = this.container.querySelector('.search-btn');
  }

  renderFirstOptions() {
    return Object.keys(this.options.data).map(key => 
      `<option value="${key}">${key}</option>`
    ).join('');
  }

  bindEvents() {
    this.firstSelect.addEventListener('change', (e) => {
      this.updateSecondSelect(e.target.value);
      this.triggerChange();
    });

    this.secondSelect.addEventListener('change', () => {
      this.triggerChange();
    });

    this.searchBtn.addEventListener('click', () => {
      this.triggerSearch();
    });
  }

  updateSecondSelect(firstValue) {
    this.secondSelect.innerHTML = `<option value="">${this.options.secondPlaceholder}</option>`;
    
    if (firstValue && this.options.data[firstValue]) {
      this.options.data[firstValue].forEach(item => {
        const option = document.createElement('option');
        option.value = item;
        option.textContent = item;
        this.secondSelect.appendChild(option);
      });
    }
  }

  triggerChange() {
    if (this.options.onChange) {
      this.options.onChange(this.getValue());
    }
  }

  triggerSearch() {
    if (this.options.onSearch) {
      this.options.onSearch(this.getValue());
    }
  }

  getValue() {
    return {
      first: this.firstSelect.value,
      second: this.secondSelect.value
    };
  }

  setValue(first, second) {
    this.firstSelect.value = first || '';
    this.updateSecondSelect(first);
    if (second) {
      this.secondSelect.value = second;
    }
  }

  updateData(newData) {
    this.options.data = newData;
    this.render();
    this.bindEvents();
  }
}
```

**方式二：函数式组件**

```javascript
function createCascadeSelector(container, options = {}) {
  const config = {
    data: {},
    firstPlaceholder: '请选择',
    secondPlaceholder: '请先选择一级选项',
    searchText: '搜索',
    onChange: null,
    onSearch: null,
    ...options
  };

  const containerEl = typeof container === 'string' ? document.querySelector(container) : container;
  let firstSelect, secondSelect, searchBtn;

  function render() {
    containerEl.innerHTML = `
      <div class="cascade-selector">
        <select class="first-select">
          <option value="">${config.firstPlaceholder}</option>
          ${Object.keys(config.data).map(key => 
            `<option value="${key}">${key}</option>`
          ).join('')}
        </select>
        <select class="second-select">
          <option value="">${config.secondPlaceholder}</option>
        </select>
        <button class="search-btn">${config.searchText}</button>
      </div>
    `;
    
    firstSelect = containerEl.querySelector('.first-select');
    secondSelect = containerEl.querySelector('.second-select');
    searchBtn = containerEl.querySelector('.search-btn');
    
    bindEvents();
  }

  function bindEvents() {
    firstSelect.addEventListener('change', handleFirstChange);
    secondSelect.addEventListener('change', handleSecondChange);
    searchBtn.addEventListener('click', handleSearch);
  }

  function handleFirstChange(e) {
    updateSecondSelect(e.target.value);
    if (config.onChange) config.onChange(getValue());
  }

  function handleSecondChange() {
    if (config.onChange) config.onChange(getValue());
  }

  function handleSearch() {
    if (config.onSearch) config.onSearch(getValue());
  }

  function updateSecondSelect(firstValue) {
    secondSelect.innerHTML = `<option value="">${config.secondPlaceholder}</option>`;
    
    if (firstValue && config.data[firstValue]) {
      config.data[firstValue].forEach(item => {
        const option = document.createElement('option');
        option.value = item;
        option.textContent = item;
        secondSelect.appendChild(option);
      });
    }
  }

  function getValue() {
    return {
      first: firstSelect?.value || '',
      second: secondSelect?.value || ''
    };
  }

  function setValue(first, second) {
    if (firstSelect) {
      firstSelect.value = first || '';
      updateSecondSelect(first);
      if (second && secondSelect) {
        secondSelect.value = second;
      }
    }
  }

  function updateData(newData) {
    config.data = newData;
    render();
  }

  // 初始化
  render();

  // 返回公共API
  return {
    getValue,
    setValue,
    updateData,
    destroy: () => containerEl.innerHTML = ''
  };
}
```

**使用示例**

```javascript
// Class方式使用
const selector1 = new CascadeSelector('#container1', {
  data: {
    '1': ['1-1', '1-2', '1-3'],
    '2': ['2-1', '2-2', '2-3'],
    '3': ['3-1', '3-2', '3-3']
  },
  onChange: (value) => console.log('选择变化:', value),
  onSearch: (value) => console.log('搜索:', value)
});

// 函数方式使用
const selector2 = createCascadeSelector('#container2', {
  data: {
    '技术': ['前端', '后端', '运维'],
    '产品': ['需求分析', 'UI设计', '项目管理']
  },
  onChange: (value) => console.log('选择变化:', value),
  onSearch: (value) => console.log('搜索:', value)
});
```

**CSS样式**

```css
.cascade-selector {
  display: flex;
  gap: 10px;
  align-items: center;
}

.cascade-selector select,
.cascade-selector button {
  padding: 8px 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
}

.cascade-selector button {
  background-color: #007bff;
  color: white;
  cursor: pointer;
}

.cascade-selector button:hover {
  background-color: #0056b3;
}
```

这样封装的组件具有以下优势：
- **可复用性**：可以在多个地方使用
- **可配置性**：通过参数自定义行为和样式
- **可维护性**：逻辑封装，易于修改和扩展
- **API友好**：提供清晰的方法接口

## 组件设计考虑的方面

### 1. **接口设计原则**
- **最小化配置**：提供合理的默认值，减少必需参数
- **渐进式增强**：基础功能简单易用，高级功能可选配置
- **一致性**：API命名和行为保持一致

### 2. **数据流管理**
- **单向数据流**：数据从外部传入，通过回调向外输出
- **状态封装**：组件内部状态不对外暴露，通过方法访问
- **数据验证**：对传入数据进行校验和容错处理

### 3. **生命周期管理**
- **初始化**：render → bindEvents → ready
- **更新机制**：支持动态更新数据和配置
- **销毁清理**：提供destroy方法释放资源

### 4. **事件系统设计**
- **回调函数**：onChange、onSearch等关键事件
- **事件参数统一**：返回标准化的数据格式
- **错误处理**：异常情况的事件通知

### 5. **DOM操作优化**
- **最小化DOM操作**：批量更新，避免频繁重绘
- **事件委托**：减少事件监听器数量
- **内存泄漏防护**：proper cleanup和事件解绑

### 6. **可扩展性设计**
- **插件机制**：预留扩展点
- **配置驱动**：通过配置而非代码修改行为
- **模块化**：功能模块可独立替换

### 7. **用户体验考虑**
- **交互反馈**：选择状态的视觉反馈
- **加载状态**：异步数据加载的用户提示
- **错误提示**：友好的错误信息展示

### 8. **兼容性保障**
- **浏览器兼容**：使用标准API，避免新特性
- **向后兼容**：API变更时保持向后兼容
- **渐进增强**：基础功能在所有环境下可用

### 9. **性能优化策略**
- **延迟初始化**：按需创建DOM元素
- **缓存机制**：缓存计算结果和DOM查询
- **防抖节流**：处理高频事件

### 10. **开发体验优化**
- **类型提示**：清晰的参数类型和返回值
- **错误信息**：详细的错误提示和调试信息
- **文档完整**：使用示例和API说明

### 设计模式运用
- **工厂模式**：统一的组件创建方式
- **观察者模式**：事件回调机制
- **策略模式**：不同的渲染和更新策略
- **门面模式**：简化复杂的内部逻辑

### 测试友好性
- **可测试API**：提供获取内部状态的方法
- **模拟支持**：支持数据和事件的模拟
- **隔离性**：组件间不相互影响