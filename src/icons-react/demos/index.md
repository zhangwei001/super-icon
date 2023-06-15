---
sidemenu: false
# toc: undefined
---


# 使用方法
## 安装组件包

```bash
tnpm install @ali/super-icon -S
```

## For React
```jsx 
import { IconArrow } from '@ali/super-icon'

export default () => {
  return (
    <IconArrow size={40} color="red" />
  )
}
```

## For Rax
```jsx 
import { IconArrow } from '@ali/super-icon/icons-rax'

export default () => {
  return (
    <IconArrow size={40} color="red" />
  )
}
```


# 图标列表

<code src="./index.tsx"  inline></code>






## 属性

| 属性        | 说明                                | 类型                                                             | 默认值   |
| ----------- | ----------------------------------------------------------- | ----------------- | -------- |
| size       | icon宽高 |     `number`                                           | `40`        |
| color      | icon颜色 |   `String`     |     `#555`    |