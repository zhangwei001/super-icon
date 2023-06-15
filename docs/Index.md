---
sidemenu: false
toc: undefined
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
    <IconArrow size={'10vw'} color="red" />
  )
}
```


# 图标列表

<code src="../src/icons-react/demos/index.tsx"  inline></code>






## 属性

| 属性        | 说明                                | 类型                                                             | 默认值   |
| ----------- | ----------------------------------------------------------- | ----------------- | -------- |
| size       | icon宽高 |     `number \| string`                                           | `40`        |
| color      | icon颜色 |   `string`     |     `#555`    |

