# 设计模式（GoF）

## 分类

按照 **意图（目的）** 分为三大类：

|类型|目的|示例|
|---|---|---|
|创建型|如何创建对象，隐藏创建逻辑|单例、工厂、抽象工厂、建造者、原型|
|结构型|如何组合类或对象形成更大的结构|适配器、桥接、组合、装饰器、外观、享元、代理|
|行为型|如何定义对象间的通信和职责|策略、观察者、命令、状态、责任链、中介者、备忘录、模版方法、迭代器、访问者、解释器|

## 策略模式 (Strategy Pattern)

### 定义
策略模式定义了一系列算法（策略），把它们一个个封装起来，并且使它们可以互换使用，从而让算法的调用方不需要关心具体的实现细节。

### 接口定义
```typescript
interface DiscountStrategy { 
    apply(x: number): number 
}
```

### 具体策略实现
```typescript
class Percent implements DiscountStrategy { 
    constructor(private r:number){}; 
    apply(x){ 
        return Math.round(x*(1-this.r)); 
    } 
}

class Fixed implements DiscountStrategy { 
    constructor(private off:number){}; 
    apply(x){ 
        return Math.max(0, x-this.off); 
    } 
}
```

### 使用示例
```typescript
function checkout(amount: number, s: DiscountStrategy) { 
    return s.apply(amount); 
}
```

## 装饰器模式（Decorator Pattern）

### 定义
用于在不改变原有对象的情况下，动态地添加新功能。它通过“包装”的方式扩展对象的行为，代替了继承方式的功能增强。

### TypeScript的装饰器
装饰器是对类、属性、方法、参数等的声明式增强语法糖，本质上就是实现了装饰器模式的语法支持
