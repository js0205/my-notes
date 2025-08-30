# 设计模式

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