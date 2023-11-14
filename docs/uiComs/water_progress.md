---
  title: with水动力
  order: 0
  group: 
    title: 进度条
    order: 1
---

## Tips:

> 我们会引入一些依赖，确保你的项目中有如下几个依赖包：
> `ahooks echarts echarts-for-react mobx mobx-react-lite moment styled-components @ys/dte`

- 使用这个可以方便的获取当前帧的 index 也就是 currFrameIndex 可以直接传递给进度条组件使用。

## Introduce

在`DTE`的水动力对象中使用，已经集成了一个公用的类，我们可以使用类提供的各种方法 更加轻松的使用进度条对水动力模型进行控制。
`ProgressBar`组件文件夹里面有 util.ts，其中暴露出`WaterSimAnimationPlayUtil`类，我们创建此对象，然后就可以在进度条中获取、指定相关的数据了。

- 使用时机：
  在加载完成结果文件之后
- `WaterSimAnimationPlayUtil`的主要功能：
  | 名称 | 说明 | 类型 | 备注|
  | ------------ | -------- | ------ |------ |
  | `play` | 播放 | `Function` ||
  | `pause` | 暂停 | `Function` ||
  | `reset` | 重置 | `Function` ||
  | `backward` | 上一帧 | `Function` ||
  | `forward` | 下一帧 | `Function` ||
  | `dispose` | 销毁 | `Function` ||
  | `currFrameIndex` | 当前播放的帧数 | `number` ||
  | `sumFrames` | 总帧数 | `number` ||
  | `isPlaying` | 播放状态 | `number` ||
  | `water` | 水动力对象 | `number` ||

## Example

```js
await loadResultSimAnimation(); // 结果文件加载结束
store.waterSimAnimationPlayUtil = new WaterSimAnimationPlayUtil(
  GlobalStore.contourLayer.water,
); // 创建水动力对象进度操作工具类

handleNext(){
  store.waterSimAnimationPlayUtil?.forward();
}
.
.
.
```
