/*!
 * @Author bin_wang
 */
import ReactECharts from 'echarts-for-react';
import React from 'react';
import styled from 'styled-components';
const Wrapper = styled.div`
  .progress-high-energy-outer {
    .charts {
      width: 100%;
    }
    .line {
      width: 100%;
      min-height: 20px;
      background-color: #008888;
    }
  }
`;

export default () => {
  const option = {
    grid: {
      left: 0,
      right: 0,
      bottom: 0,
      top: 0,
    },
    xAxis: {
      type: 'category',
      show: false,
      boundaryGap: false,
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    },
    yAxis: {
      type: 'value',
      show: false,
    },
    series: [
      {
        symbol: 'none',
        data: [50, 50, 200, 300, 200, 50, 50],
        type: 'line',
        smooth: true,
        areaStyle: {
          color: '#2d8ae780',
        },
        lineStyle: {
          color: 'rgba(1,1,1,0)',
        },
      },
    ],
  };
  return (
    <Wrapper>
      <div className="progress-high-energy-outer">
        <ReactECharts
          option={option}
          style={{
            width: '100%',
            height: '20px',
            cursor: 'default!important',
          }}
        />
      </div>
    </Wrapper>
  );
};
