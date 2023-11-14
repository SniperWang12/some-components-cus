/*!
 * Copyright (C) 2016-present, Yuansuan.cn
 * @Author bin_wang
 */

import { WaterResampleAnimation } from '@ys/dte'
import { Timeout } from 'ahooks/lib/useRequest/src/types'
import { makeAutoObservable } from 'mobx'

/**
 * 水动力播放相干对象
 */
export class WaterSimAnimationPlayUtil {
  /**
   * 水动力对象
   */
  water!: WaterResampleAnimation
  /**
   * 当前帧
   */
  currFrameIndex: number = 0
  /**
   * 总帧数
   */
  sumFrames: number = 0

  /**
   * 是否正在播放
   */
  isPlaying: boolean = false

  /**
   * 播放过程中获取帧数的interval
   */
  interval: Timeout | null = null

  constructor(water: WaterResampleAnimation) {
    makeAutoObservable(this)
    this.water = water
    this.sumFrames = water._sumFrames
  }

  /**
   * 鼠标点击调整进度 & 鼠标点击拖动调整进度
   * @param e
   * @returns
   */
  jump2SomeFrameIndex(e: number) {
    if (e > this.sumFrames) return
    this.isPlaying && this.pause()
    this.water?.goto(e)
    this.currFrameIndex = e
  }

  /**
   * 播放功能
   */
  play() {
    let _this = this
    _this.water.play()
    _this.isPlaying = true
    this.interval = setInterval(() => {
      _this.currFrameIndex = _this.water.getCurrentFrameIndex()
      if (_this.currFrameIndex == _this.water._sumFrames - 1) {
        this.pause()
        setTimeout(() => {
          this.reset()
        }, 1500)
      }
    }, 80)
  }
  /**
   * 暂停
   */
  pause() {
    this.water.pause()
    this.isPlaying = false
    if (this.interval) {
      clearInterval(this.interval)
      this.interval = null
    }
  }

  /**
   * 销毁
   */
  dispose() {
    if (this.interval) {
      clearInterval(this.interval)
      this.interval = null
    }
  }

  /**
   * 重置功能
   */
  reset() {
    this.isPlaying = false
    this.water.pause()
    if (this.interval) {
      clearInterval(this.interval)
      this.interval = null
    }
    this.water.goto(0)
    this.currFrameIndex = 0
  }

  /**
   * 下一帧
   */
  forward() {
    this.isPlaying = false
    if (this.currFrameIndex == this.sumFrames - 1) return
    this.water.pause()
    this.water.forward()
    this.currFrameIndex++
  }

  /**
   * 上一帧
   */
  backward() {
    this.isPlaying = false
    if (this.currFrameIndex == 0) return
    this.water.pause()
    this.water.backward()
    this.currFrameIndex--
  }

  /**
   * 播放或者暂停
   */
  playOrPause() {
    if (this.isPlaying) {
      this.pause()
    } else {
      this.play()
    }
  }

  resize() {
    this.currFrameIndex = 0
    this.water.goto(0)
  }
}

export const suggestTimeInterval = {
  24: 4 * 60,
  12: 2 * 60,
  6: 1 * 60,
  3: 0.5 * 60,
  1: 10
}
