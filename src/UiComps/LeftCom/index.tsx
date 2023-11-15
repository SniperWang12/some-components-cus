import { useSafeState, useUpdateEffect } from 'ahooks';
import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div<{
  marginLeft: number;
  contentWidth: number;
  contentHeight: number;
  isOpen: boolean;
}>`
  position: fixed;
  z-index: 3;
  top: 90rem;
  display: flex;
  color: #fff;
  left: 20rem;
  .content {
    width: ${(props) => (props.isOpen ? `${props.contentWidth}rem` : 0)};
    height: ${(props) => `${props.contentHeight}rem`};
    overflow-x: hidden;
    overflow-y: hidden;
    ::-webkit-scrollbar {
      /*整体样式*/
      width: 5rem;
    }
    ::-webkit-scrollbar-thumb {
      /*滚动条小方块*/
      border-radius: 10rem;
      background: red;
      border-radius: 3rem;
    }
  }
  /* 左侧的legend储物架 */
  .content_left_legend {
    position: absolute;
    width: 1rem;
    height: 100%;
    left: ${(props) =>
      `${props.isOpen ? props.contentWidth + props.marginLeft : 0}rem`};
    top: 0;
  }
  .content-operation {
    width: 35rem;
    height: ${(props) => `${props.contentHeight}rem`};
    display: flex;
    align-items: center;
    .content-decorator-line {
      margin-left: 1rem;
      width: 1rem;
      height: 100%;
    }
    img {
      width: 20rem;
      height: 70rem;
    }
    .content-operation-btn {
      width: 32rem;
      height: 56rem;
      cursor: pointer;
      z-index: 99;
    }
  }
  /* 左右两个仿抽屉--不删除DOM */
  .transform-x_time {
    transition: all 200ms;
    transition-timing-function: linear;
  }
  /* 内容展开 */
  .transform_in {
    transform: translateX(0);
  }
  /* 内容缩回去的时候动作 */
  .left-transform_out {
    transform: translateX(-420rem);
  }
  /* 关闭按钮 缩回去的时候多缩一点点 */
  .left-transform_out_optBtn {
    transform: translateX(-20rem);
  }
  // 侧边竖线
  .color-side-line {
    background-image: linear-gradient(
      180deg,
      rgba(188, 224, 255, 0.1) 0%,
      #b9d1ff 51%,
      rgba(188, 224, 255, 0.1) 100%
    );
  }
`;
/**
 * children legend组件
 * contentProp
 */
interface LeftComProps {
  /**
   * 是否在收起时销毁传进去的子组件
   */
  destroyOnClose?: boolean; // 收起的时候是否销毁children元素
  /**
   * 最外层样式修正
   */
  outerStyle?: React.CSSProperties;
  contentProp: {
    // 内容部分的组件
    width?: number; // 内容部分宽度
    height?: number; // 内容部分高度
    children: JSX.Element | null; // 内容组件
    style?: React.CSSProperties; // content 样式
  };
  legendProp?: {
    // 左侧legend
    marginLeft: number; // legend距离内容的距离
    content: {
      children: JSX.Element | null; // 内容组件
      style?: React.CSSProperties; // 其他样式
    }[];
  };
  hiddenSideBar?: {
    isShow?: boolean; // 是否展示
    isShowDecoratorBar?: boolean; // 是否展示装饰条
    decoratorChildren?: JSX.Element | null; // 按钮组件
    btnOpenImgUrl?: string; // 组件
    btnCloseImgUrl?: string; // 组件
  }; // 收缩按钮的内容
  isHideLeft?: boolean; // 是否隐藏侧边栏
  // eslint-disable-next-line @typescript-eslint/ban-types
  handleLeftShowChange?: Function; // 侧边栏展开或者显示的回调函数
}
// 左侧样式框架
const LeftCom = ({
  outerStyle = {},
  destroyOnClose = false,
  contentProp = {
    children: null,
    style: {},
  },
  legendProp = {
    marginLeft: 0,
    content: [],
  },
  hiddenSideBar = {
    isShow: false,
    decoratorChildren: null,
    isShowDecoratorBar: true,
  },
  isHideLeft,
  handleLeftShowChange,
}: LeftComProps) => {
  const [isOpen, setIsOpen] = useSafeState(true);
  useUpdateEffect(() => {
    if (isHideLeft !== undefined) setIsOpen(!isHideLeft);
  }, [isHideLeft]);
  useUpdateEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    handleLeftShowChange && handleLeftShowChange(isOpen);
  }, [isOpen]);

  const imgObj = {
    open: require('./images/open.png'),
    close: require('./images/close.png'),
  };

  return (
    <Wrapper
      style={outerStyle}
      marginLeft={legendProp?.marginLeft || 0}
      isOpen={isOpen}
      contentWidth={contentProp.width || 480}
      contentHeight={contentProp.height || 960}
    >
      <div
        className={[
          `content transform-x_time`,
          isOpen ? 'transform_in' : 'left-transform_out',
        ].join(' ')}
        style={contentProp.style}
      >
        {destroyOnClose ? isOpen && contentProp.children : contentProp.children}
        {}
      </div>
      {/* 隐藏按钮 */}
      {hiddenSideBar.isShow && (
        <div
          className={[
            'content-operation transform-x_time',
            isOpen ? 'transform_in' : 'left-transform_out_optBtn',
          ].join(' ')}
        >
          {hiddenSideBar.isShowDecoratorBar &&
            (hiddenSideBar.decoratorChildren || (
              <div className="content-decorator-line color-side-line" />
            ))}
          <div
            className="content-operation-btn"
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          >
            {!isOpen ? (
              <img
                src={hiddenSideBar.btnOpenImgUrl || imgObj.open}
                alt="开启"
              />
            ) : (
              <img
                src={hiddenSideBar.btnCloseImgUrl || imgObj.close}
                alt="关闭"
              />
            )}
          </div>
        </div>
      )}
      {/* 左侧左下角图例区域 */}
      <div
        className={[
          'content_left_legend transform-x_time',
          isOpen ? '' : 'transform_in',
        ].join(' ')}
      >
        {legendProp?.content.length > 0 &&
          legendProp?.content.map((item, key) => (
            <div style={{ ...item?.style, position: 'absolute' }} key={key}>
              {item.children}
            </div>
          ))}
      </div>
    </Wrapper>
  );
};

export default LeftCom;
