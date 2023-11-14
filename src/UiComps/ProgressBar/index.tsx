/*!
 * Copyright (C) 2016-present, Yuansuan.cn
 */

import { useSize } from 'ahooks';
import { observer, useLocalObservable } from 'mobx-react-lite';
import moment from 'moment';
import React, { useEffect } from 'react';
import HighEnergy from './HighEnergy';
import { ProgressBarWrapper } from './style';

/**
 * 进度条组件 -- 剔除水动力
 */
interface IProgressBarProp {
  /**
   * 组件的宽度
   */
  width?: number;
  /**
   * 组件的高度
   */
  height: number;
  /**
   * GlobalStore 的 store.fontSizeInner 的大小
   */
  fontSize: number;
  /**
   * 外边界的样式
   */
  outerStyle?: React.CSSProperties;
  /**
   * 是否展示降雨过程线
   */
  isShowCondition?: boolean;
  /**
   * 进度条线条的样式
   */
  progressLine?: {
    /**
     * 进度条（背景）样式
     */
    style?: React.CSSProperties;
    /**
     * 是否显示日期
     */
    isShowDate?: boolean;
    /**
     * 显示的日期格式
     */
    showDateFormat?: string;
    /**
     * 是否显示时间
     */
    isShowTime?: boolean;
    /**
     * 显示的时间格式
     */
    showTimeFormat?: string;
    /**
     * 刻度值样式
     */
    labelStyle?: React.CSSProperties;
    /**
     * 刻度样式
     */
    tickStyle?: React.CSSProperties;
    /**
     * 已经播放过的线条颜色
     */
    passLineCss?: React.CSSProperties;
  };
  /**
   * 开始时间
   */
  startTime: string;
  /**
   * 播放时长 单位 小时
   */
  duration: number;
  /**
   * 时间间隔 单位 分钟 时间刻度每隔多长时间显示一个
   */
  timeInterval: number;
  /**
   * 当前帧数
   */
  currFrame: number;
  /**
   * 帧数发生变化的响应事件
   */
  handleProcessChange: Function;
  /**
   * 总帧数
   */
  totalFrame: number;
  /**
   * 悬浮展示title的css样式
   */
  hoverTitleCss?: React.CSSProperties;
  hoverTitleFmt?: string;
  /**
   * 当前进度的circle设置
   */
  circleCss?: React.CSSProperties;
  /**
   * 当前进度icon旋转
   */
  currIsSpin?: boolean;
}

/**
 * 根据id获取div的宽度
 * @param elementId
 * @returns
 */
const getWidthLeftById = (
  elementId: string,
): { width: number; left: number } => {
  if (!document.getElementById(elementId)) return { width: 0, left: 0 };
  let { width, left } = document
    .getElementById(elementId)!
    .getBoundingClientRect();

  return {
    width,
    left,
  };
};

const ProgressBar: React.FC<IProgressBarProp> = observer(
  ({
    width,
    height,
    fontSize,
    outerStyle = {},
    hoverTitleFmt,
    isShowCondition = true,
    progressLine = {
      style: {},
      isShowDate: true,
      isShowTime: true,
      showTimeFormat: 'HH:mm',
      showDateFormat: 'MM/DD',
      labelStyle: {},
      tickStyle: {},
      passLineCss: {},
    },
    currFrame = 0,
    startTime,
    duration,
    timeInterval,
    totalFrame,
    handleProcessChange,
    hoverTitleCss,
    circleCss,
    currIsSpin,
  }) => {
    const store = useLocalObservable(
      (): {
        fontSizeInner: number;
        setFontSizeInner: Function;
        canCircleDrag: boolean;
        setCanCircleDrag: Function;
        percent: number;
        currFrameLeft: number;
        currFrameLeftVal: Function;
        setCurrFrameLeft: Function;
        isShowHover: boolean;
        setIsShowHover: Function;
        hoverLeft: number;
        setHoverLeft: Function;
        hoverTitle: string;
        setHoverTitle: Function;
        scaleTimeList: string[];
        setScaleTimeList: Function;
        startTime: string;
        setStartTime: Function;
        duration: number;
        setDuration: Function;
        timeInterval: number;
        setTimeInterval: Function;
        currFrameIndex: number;
        setCurrFrameIndex: Function;
      } => ({
        fontSizeInner: 1,
        setFontSizeInner(e: number) {
          this.fontSizeInner = e;
        },
        canCircleDrag: false,
        setCanCircleDrag(e: boolean) {
          this.canCircleDrag = e;
        },
        percent: 0,
        currFrameLeft: -10,
        currFrameLeftVal(e: number) {
          this.currFrameLeft = e;
        },
        setCurrFrameLeft(e: number) {
          this.currFrameLeft = e;
          let percent =
            this.currFrameLeft /
            (getWidthLeftById('line').width / store.fontSizeInner);
          this.percent = percent;
          let tempVal = Math.floor(percent * totalFrame);
          tempVal = tempVal > 0 ? tempVal : 0;
          tempVal = tempVal > totalFrame ? totalFrame : tempVal;
          this.currFrameIndex = tempVal;
          handleProcessChange(tempVal);
        },
        isShowHover: false,
        setIsShowHover(e: boolean) {
          this.isShowHover = e;
        },
        hoverLeft: 0,
        setHoverLeft(e: number) {
          this.hoverLeft = e;
        },
        hoverTitle: '',
        setHoverTitle(e: string) {
          this.hoverTitle = e;
        },
        scaleTimeList: [],
        setScaleTimeList(e: string[]) {
          this.scaleTimeList = e;
        },
        startTime: '',
        setStartTime(e: string) {
          this.startTime = e;
        },
        duration: 12,
        setDuration(e: number) {
          this.duration = e;
        },
        timeInterval: 0,
        setTimeInterval(e: number) {
          this.timeInterval = e;
        },
        currFrameIndex: 0,
        setCurrFrameIndex(e: number) {
          this.currFrameIndex = e;
        },
      }),
    );

    /**
     * 进度条的点击事件
     */
    const handleLineClick = (e: any) => {
      store.setIsShowHover(true);
      // line距离屏幕左侧的距离
      let { left: lineLeft, width: lineWidth } = getWidthLeftById('line');
      let { width: circleWidth } = getWidthLeftById('circle');
      let halfCircleWidth = circleWidth / 2;
      // 点击位置距离line起点的距离
      let mouseMoveX = e.pageX - lineLeft;
      if (mouseMoveX <= 0) {
        if (store.currFrameLeft > 0)
          store.setCurrFrameLeft(-halfCircleWidth / store.fontSizeInner);
        return;
      }
      if (mouseMoveX >= lineWidth) {
        // store.currFrameLeft < (lineWidth - halfCircleWidth) / store.fontSizeInner &&
        store.setCurrFrameLeft(
          (lineWidth - halfCircleWidth) / store.fontSizeInner,
        );
        return;
      }
      store.setCurrFrameLeft(
        (mouseMoveX - halfCircleWidth) / store.fontSizeInner,
      );
      // eslint-disable-next-line @typescript-eslint/no-use-before-define
      handleLineMouseMove(e);
    };
    /**
     * 鼠标点击的事件
     */
    const mouseEventHandleObj = {
      // 鼠标点击
      down() {
        store.setCanCircleDrag(true);
      },
      // 鼠标松开
      up() {
        store.setCanCircleDrag(false);
        store.setIsShowHover(false);
      },
      move(e: any) {
        if (store.canCircleDrag) {
          handleLineClick(e);
        }
      },
    };
    /**
     * 处理线的悬浮事件
     */
    const handleLineMouseMove = (e: any) => {
      // line距离屏幕左侧的距离
      let { width: lineWidth, left: lineLeft } = getWidthLeftById('line');
      let { width: hoverDivWidth } = getWidthLeftById('progress-hover-div');
      // 点击位置距离line起点的距离
      let point2Left = e.pageX - lineLeft;
      let tempMouseMoveX = 0;
      if (point2Left > hoverDivWidth / 2) {
        if (point2Left >= lineWidth - hoverDivWidth / 2) {
          tempMouseMoveX = lineWidth - hoverDivWidth;
        } else {
          tempMouseMoveX = point2Left - hoverDivWidth / 2;
        }
      }
      store.setIsShowHover(true);
      store.setHoverLeft(tempMouseMoveX / store.fontSizeInner);
      let percent = Number((point2Left / lineWidth).toFixed(4));
      let hoverTitle = moment(store.startTime)
        .add(
          'seconds',
          store.duration * 3600 * (percent > 1 ? 1 : percent < 0 ? 0 : percent),
        )
        .format('YYYY-MM-DD HH:mm');
      store.setHoverTitle(hoverTitle);
    };

    useEffect(() => {
      document.body.addEventListener('mousemove', mouseEventHandleObj.move);
      document.body.addEventListener('mouseup', mouseEventHandleObj.up);
      return () => {
        document.body.removeEventListener(
          'mousemove',
          mouseEventHandleObj.move,
        );
        document.body.removeEventListener('mouseup', mouseEventHandleObj.up);
      };
    }, []);

    useEffect(() => {
      if (totalFrame <= 0) return;
      let { width: lineWidth } = getWidthLeftById('line');
      let currLeft = (currFrame / (totalFrame - 1)) * lineWidth;
      if (document.getElementById('circle')) {
        if (currFrame !== store.currFrameIndex) {
          store.currFrameLeftVal(
            (currLeft - getWidthLeftById('circle').width / 2) /
              store.fontSizeInner,
          );
        }
        store.setCurrFrameIndex(currFrame);
      }
    }, [currFrame, totalFrame]);

    /**
     * 进度条 圆形hover
     */
    const setHoverTitleCircle = (e: any) => {
      let percent = Number(
        Math.abs(store.currFrameLeft / getWidthLeftById('line').width).toFixed(
          3,
        ),
      );
      let tempRes = moment(store.startTime)
        .add('seconds', store.duration * 3600 * percent)
        .format('YYYY-MM-DD HH:mm');
      store.setHoverTitle(tempRes);
    };

    /**
     * 开始时间、播放时长、时间间隔 发生变化时给store设置相关内容
     */
    useEffect(() => {
      if (!startTime || !duration || !timeInterval) return;
      // 开始时间 、 播放时长 、 时间间隔
      let showStartTime = moment(startTime);
      let scaleNum = (duration * 60) / timeInterval;
      let tempTimeList: string[] = [];
      for (let i = 0; i < scaleNum + 1; i++) {
        tempTimeList.push(
          moment(showStartTime)
            .add(timeInterval * i, 'minutes')
            .format('YYYY-MM-DD HH:mm:ss'),
        );
      }
      store.setScaleTimeList(tempTimeList);
      store.setStartTime(startTime);
      store.setDuration(duration);
      store.setTimeInterval(timeInterval);
    }, [startTime, duration, timeInterval, store.fontSizeInner]);
    const size = useSize(document.getElementById('process-outer'));
    useEffect(() => {
      store.setFontSizeInner(fontSize);
      store.setCurrFrameIndex(0);
      store.setCurrFrameLeft(-10);
      document.documentElement.style.fontSize = fontSize + 'px';
    }, [size, fontSize]);

    return (
      <ProgressBarWrapper
        id="process-outer"
        width={width!}
        height={height}
        style={outerStyle}
        onMouseMove={handleLineMouseMove}
        onMouseLeave={() => store.setIsShowHover(false)}
        onClick={handleLineClick}
      >
        {isShowCondition && <HighEnergy />}
        {/* 刻度线 */}
        <div id="line" className="progress-line" style={progressLine.style}>
          {/* 进度过的颜色条 */}
          <div
            id="line_passed"
            className="progress-line_passed"
            style={{
              width: `${
                store.currFrameLeft > 0
                  ? store.currFrameLeft +
                    getWidthLeftById('circle').width / store.fontSizeInner / 2
                  : 0
              }rem`,
              ...progressLine.passLineCss,
            }}
          ></div>
          {/* 当前进度的圆点 */}
          <div
            className={`progress-curr-circle ${currIsSpin ? 'spin' : ''}`}
            id="circle"
            onMouseDown={() => {
              mouseEventHandleObj.down();
            }}
            onMouseMove={setHoverTitleCircle}
            style={{
              ...circleCss,
              left: `${store.currFrameLeft}rem`,
            }}
          ></div>
          {/* 悬浮的时间标题 */}
          <div
            id="progress-hover-div"
            className="progress-hover-outer"
            style={{
              left: `${store.hoverLeft}rem`,
              visibility:
                store.isShowHover || store.canCircleDrag ? 'visible' : 'hidden',
              ...hoverTitleCss,
            }}
          >
            {moment(store.hoverTitle).format(hoverTitleFmt)}
          </div>
        </div>
        {/* 刻度值 */}
        <div className="progress-scale-outer">
          {store.scaleTimeList.map((item, index) => (
            <div className="progress-scale-item" key={index}>
              {/* 刻度样式 */}
              <div
                className="progress-scale-tick"
                style={progressLine.tickStyle}
              ></div>
              {/* 刻度值 - 时间 */}
              {progressLine.isShowTime && (
                <span style={progressLine.labelStyle}>
                  {moment(item).format(progressLine.showTimeFormat)}
                </span>
              )}
              {/* 刻度值 - 日期 */}
              {progressLine.isShowDate && (
                <span style={progressLine.labelStyle}>
                  {moment(item).format(progressLine.showDateFormat)}
                </span>
              )}
            </div>
          ))}
        </div>
      </ProgressBarWrapper>
    );
  },
);

export { IProgressBarProp };

export default ProgressBar;
