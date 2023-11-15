---
  title: 右侧边栏
  order: 2
  group: 
    title: 侧边栏
    order: 1
---

左侧和右侧的一致的，**不一样的地方在于 left->right**

**API**
| 参数 | 说明 | 类型 | 默认值 |
| ---------------------- | ------------------------------------------------ | ---------------------------- | ----------- |
| contentProp `*` | 内容部分的组件 | `IContentProp` | -- |
| isHideRight | 是否隐藏侧边栏 | `boolean` | false |
| legendProp | 左侧 legend | `ILegendProp` | -- |
| destroyOnClose | 是否在收起时销毁传进去的子组件 | `boolean` | false |
| outerStyle | 最外层样式修正 | `React.CSSProperties` | -- |
| hiddenSideBar | 隐藏侧边栏按钮设置 | `IHiddenSideBar` | -- |
| handleRightShowChange | 侧边栏展开或者显示的回调函数 | `Function` | -- |

```ts
interface IContentProp {
  width?: number; // 内容部分宽度
  height?: number; // 内容部分高度
  children: JSX.Element | null; // 内容组件
  style?: React.CSSProperties; // content 样式
}

interface IHiddenSideBar {
  isShow?: boolean; // 是否展示
  isShowDecoratorBar?: boolean; // 是否展示装饰条
  decoratorChildren?: JSX.Element | null; // 按钮组件
  btnOpenImgUrl?: string; // 组件
  btnCloseImgUrl?: string; // 组件
}

interface ILegendProp {
  // 左侧legend
  marginRight: number; // legend距离内容的距离
  content: {
    children: JSX.Element | null; // 内容组件
    style?: React.CSSProperties; // 其他样式
  }[];
}
```
