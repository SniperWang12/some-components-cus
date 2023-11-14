---
  title: 基础进度条
  order: 0
  group: 
    title: 进度条
    order: 0
---

## Tips:

> 我们会引入一些依赖，确保你的项目中有如下几个依赖包：
> `ahooks echarts echarts-for-react mobx mobx-react-lite moment styled-components`

## Show

```jsx
import { ProgressBar } from 'dumi123';

const ProgressBarInitConf = {
  height: 80,
  fontSize: 1,
  isShowCondition: true,
  timeInterval: 2 * 60,
  progressLine: {
    style: {
      height: '8rem',
      background: '#bac8ff90',
      borderRadius: '4rem',
    },
    passLineCss: {
      height: '8rem',
    },
    tickStyle: {
      height: '10rem',
      background: '#96f2d790',
      borderRadius: 0,
    },
    labelStyle: {
      fontSize: '18rem',
      fontFamily: 'pingfangM',
      color: '#74c0fc',
      lineHeight: '28rem',
    },
    isShowTime: true,
    showTimeFormat: 'HH:mm',
    isShowDate: false,
  },
  currIsSpin: true,
  duration: 12,
  hoverTitleFmt: 'HH:mm',
  startTime: '2020-01-01 00:00:00',
  handleProcessChange: (curr) => {
    console.log('curr', curr);
  },
  currFrame: 10,
  totalFrame: 72,
  hoverTitleCss: {
    background: '#228be690',
    color: '#fff',
    border: 'unset',
    borderRadius: '4rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '0 10rem',
    width: '80rem',
  },
};

export default () => <ProgressBar {...ProgressBarInitConf} />;
```

## API

| 参数                   | 说明                                             | 类型                         | 默认值      |
| ---------------------- | ------------------------------------------------ | ---------------------------- | ----------- |
| `*`width               | 组件宽度                                         | `number`                     | --          |
| `*`height              | 组件高度                                         | `number`                     | --          |
| `*`fontSize            | 字体大小                                         | `number`                     | --          |
| `*`startTime           | 起始时间                                         | `string YYYY-MM-DD HH:mm:ss` | --          |
| `*`duration            | 播放时长                                         | `number`                     | --          |
| `*`timeInterval        | 时间间隔**单位分钟，设定每个时间刻度的时间间隔** | `number`                     | --          |
| `*`currFrame           | 当前帧数                                         | `number`                     | --          |
| `*`totalFrame          | 总帧数                                           | `number`                     | --          |
| `*`handleProcessChange | 帧数发生变化响应事件                             | `Function`                   | --          |
| outerStyle             | 外边界样式                                       | `React.CSSProperties`        | --          |
| isShowCondition        | 是否展示进度条上的图表                           | `boolean`                    | `true`      |
| progressLine           | 进度条线条样式                                   | `React.CSSProperties`        | --          |
| hoverTitleCss          | 悬浮展示 title 的 css 样式                       | `React.CSSProperties`        | --          |
| hoverTitleFmt          | 悬浮展示 title 的时间格式化`HH:mm`               | `string`                     | `HH:mm`     |
| circleCss              | 当前进度的 圆形点位样式 设置                     | `React.CSSProperties`        | `远算 logo` |
| currIsSpin             | 当前进度的 圆形点位样式 是否旋转                 | `boolean`                    | `true`      |
