import { useSafeState, useUnmount } from 'ahooks';
import { Button, message } from 'antd';
import { LeftCom } from 'dumi123';
import React, { useEffect } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 600px;
  background: #d0ebff90;
  p {
    height: 10px;
  }
  .left-legend-outer {
    width: 100px;
    height: 100px;
  }
`;

const Component = () => {
  useEffect(() => {
    message.info('init');
    document.documentElement.style.fontSize = '1px';
  }, []);
  useUnmount(() => {
    message.info('quit');
  });
  return (
    <div
      style={{
        width: '100px',
        height: '100%',
        backgroundColor: 'red',
        overflowY: 'scroll',
      }}
    >
      <p>1</p>
      <p>2</p>
      <p>5</p>
      <p>6</p>
      <p>7</p>
      <p>8</p>
      <p>9</p>
    </div>
  );
};

export default () => {
  const [isHiddenLeft, setIsHiddenLeft] = useSafeState(false);
  // const [isHiddenRight, setIsHiddenRight] = useSafeState(false);

  return (
    <Wrapper>
      <LeftCom
        outerStyle={{
          width: '100px',
          height: '600px',
        }}
        destroyOnClose={true}
        contentProp={{
          width: 100,
          height: 400, // 内容部分高度
          children: <Component />,
        }}
        legendProp={{
          marginLeft: 20,
          content: [
            {
              children: (
                <div className="left-legend-outer">我是左侧的legend底部</div>
              ),
              style: {
                bottom: '0',
              },
            },
            {
              children: (
                <div className="left-legend-outer">我是左侧的legend顶部</div>
              ),
              style: {
                top: '0',
              },
            },
            {
              children: (
                <div className="left-legend-outer">
                  我是左侧的legend2222自定义
                </div>
              ),
              style: {
                top: 200,
              },
            },
          ],
        }}
        hiddenSideBar={{
          isShow: true,
          isShowDecoratorBar: true,
          decoratorChildren: (
            <div
              style={{
                width: '1px',
                height: '100%',
                background: 'red',
              }}
            ></div>
          ),
          btnOpenImgUrl:
            'https://img0.baidu.com/it/u=3019604530,2977412192&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
          btnCloseImgUrl:
            'https://img1.baidu.com/it/u=1361662240,1456589449&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
        }}
        isHideLeft={isHiddenLeft}
        handleLeftShowChange={(e: boolean) => {
          message.info(e ? '左侧展开了' : '左侧隐藏了');
        }}
      />
      <Button onClick={() => setIsHiddenLeft(!isHiddenLeft)}>
        左侧控制器（{isHiddenLeft ? '展开' : '隐藏'}）
      </Button>
    </Wrapper>
  );
};
