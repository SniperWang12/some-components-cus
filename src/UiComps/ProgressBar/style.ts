/*!
 * Copyright (C) 2016-present, Yuansuan.cn
 * @Author bin_wang
 */
import styled from 'styled-components'

const ysIcon =
  'AAABAAEAICAAAAEAIACoEAAAFgAAACgAAAAgAAAAQAAAAAEAIAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA////Bv///0bKnnW/sXQ57aplJfmgUw3/nlEJ/6RdGvuraivxuYNO0cCNXoO4gEcSAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAyJZpMty/pa/////x/////7yGVP+aSgD/mkoA/5pKAP+aSgD/mkoA/5pKAP+aSgD/mkoA/6BTDP+5gU3Tw5BdNgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA1aqADLqCTsWdTgb/zaWA////////////vIZU/5pKAP+aSgD/mkoA/5pKAP+aSgD/mkoA/5pKAP+aSgD/mkoA/5pKAP+dTgb/vYdVwdixdgwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMOQXTaqZyn1mkoA/5pKAP/NpYD///////////+9iFb/mkoA/5pKAP+aSgD/mkoA/5pKAP+aSgD/mkoA/5pKAP+aSgD/mkoA/5pKAP+aSgD/zqaB3////xgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADLoXtOo1oV/ZpKAP+aSgD/mkoA/82lgP///////////8WXbP+aSgD/mkoA/5pKAP+aSgD/mkoA/5pKAP+aSgD/mkoA/5pKAP+aSgD/mkoA/5pKAP/cwKb/////4////ywAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAxJNiNKJYE/2aSgD/mkoA/5pKAP+aSgD/zaWA////////////3MCl/5pKAP+aSgD/mkoA/5pKAP+aSgD/mkoA/5pKAP+aSgD/mkoA/5pKAP+aSgD/mkoA//Lo3v///////v3848STZzQAAAAAAAAAAAAAAAAAAAAAAAAAANixdgyraCnzmkoA/5pKAP+aSgD/mkoA/5pKAP/NpYD////////////7+PT/p2Eg/5pKAP+aSgD/mkoA/5pKAP+aSgD/mkoA/5pKAP+aSgD/mkoA/5pKAP+5gk7////////////n1ML/rGos8+bMmQoAAAAAAAAAAAAAAAAAAAAAuoNPxZpKAP+aSgD/mkoA/5pKAP+aSgD/mkoA/82lgP/////////////////n08H/m0wC/5pKAP+aSgD/mkoA/5pKAP+aSgD/mkoA/5pKAP+aSgD/olkU//bv6P///////////8CNXv+aSgD/u4RRwwAAAAAAAAAAAAAAAMSTYjSdTgb/mkoA/5pKAP+aSgD/mkoA/5pKAP+aSgD/zaWA///////////////////////Zu57/oFQN/5pKAP+aSgD/mkoA/5pKAP+aSgD/mkoA/6dhIP/p1sX////////////r28z/nE0D/5pKAP+dTgb/yppwMAAAAAAAAAAAt35I1ZpKAP+aSgD/mkoA/5pKAP+aSgD/mkoA/5pKAP/NpYD////////////////////////////z6eD/vYhW/55SCv+aSgD/mkoA/6NaFv/Im3L/+/fz////////////9Ovi/6RcGf+aSgD/mkoA/5pKAP+5g0/RAAAAAMyIVQ6gUwz/mkoA/5pKAP+aSgD/mkoA/5pKAP+aSgD/mkoA/82lgP///////////+fUwv/+/fv//////////////////v37//Xs5P/38er////+//////////////////n07/+saiz/mkoA/5pKAP+aSgD/mkoA/55RCf/MiFUOvopahZpKAP+aSgD/mkoA/5pKAP+aSgD/mkoA/5pKAP+aSgD/zaWA////////////xJRo/7J0O//t3tD////////////////////////////////////////////jzLf/pmAe/5pKAP+aSgD/mkoA/5pKAP+aSgD/mkoA/8OUZ3y5gU3RmkoA/5pKAP+aSgD/mkoA/5pKAP+aSgD/mkoA/5pKAP/NpYD////////////ElGj/mkoA/5tLAf+4gEv/2Lmc/+7g0v/38er/9u7m/+vby//Sr43/r280/5pKAP+aSgD/mkoA/5pKAP+aSgD/mkoA/5pKAP+aSgD/uYFN0atpKvGaSgD/mkoA/5pKAP+aSgD/mkoA/5pKAP+aSgD/mkoA/82lgP///////////8OTZv+aSgD/mkoA/5pKAP+aSgD/mkoA/5pKAP+aSgD/mkoA/5pKAP+aSgD/mkoA/5pKAP+aSgD/mkoA/5pKAP+aSgD/mkoA/5pKAP+say7xpFsX+5pKAP+aSgD/mkoA/5pKAP+aSgD/mkoA/5pKAP+aSgD/zaWA////////////wZBi/5pKAP+aSgD/mkoA/5pKAP+aSgD/mkoA/5pKAP+aSgD/mkoA/5pKAP+aSgD/mkoA/5pKAP+aSgD/mkoA/5pKAP+aSgD/mkoA/6ZfHvmeUAj/mkoA/5pKAP+aSgD/mkoA/5pKAP+saSv/tXlC/7V5Qv/avaH////////////BkGL/mkoA/5pKAP+tay7/snQ7/7J0O/+ydDv/pV4b/5pKAP+aSgD/mkoA/5pKAP+aSgD/mkoA/5pKAP+aSgD/mkoA/5pKAP+aSgD/n1EK/59SC/+aSgD/mkoA/5pKAP+aSgD/wpFk/////////////////////////////////8GQYv+aSgD/mkoA/7FzOf/69vH////////////27+j/pFwZ/5pKAP+aSgD/mkoA/5pKAP+aSgD/mkoA/5pKAP+aSgD/mkoA/5pKAP+fUgv/qGEh+ZpKAP+aSgD/mkoA/5pKAP/InHP/////////////////////////////////wZBi/5pKAP+aSgD/mkoA/69vNP/48+3////////////ew6r/mkoA/5pKAP+aSgD/mkoA/5pKAP+aSgD/mkoA/5pKAP+aSgD/mkoA/6hhIfmvbjLvmkoA/5pKAP+aSgD/mkoA/51PB//iy7X////////////////////////////BkGL/mkoA/5pKAP+aSgD/mkoA/69vM//9+/n///////////+saiz/mkoA/5pKAP+aSgD/mkoA/5pKAP+aSgD/mkoA/5pKAP+aSgD/r24y77eAStOaSgD/mkoA/5pKAP+aSgD/mkoA/51PB//iy7X//////////////////////8WXbP+aSgD/mkoA/5pKAP+aSgD/mkoA/9m6nf///////////7+NXf+aSgD/mkoA/5pKAP+aSgD/mkoA/5pKAP+aSgD/mkoA/5pKAP+3gErTxJZreppKAP+aSgD/mkoA/5pKAP+aSgD/mkoA/51PB//jzLb/////////////////38Wt/5pKAP+aSgD/mkoA/5pKAP+aSgD/zqeC////////////yZ51/5pKAP+aSgD/mkoA/5pKAP+aSgD/mkoA/5pKAP+aSgD/mkoA/8SWa3rRonQKoFMN/5pKAP+aSgD/mkoA/5pKAP+aSgD/mkoA/51PB//jzLf/////////////////wpFj/5pKAP+aSgD/mkoA/5xNA//s3M3///////////+2fEb/mkoA/5pKAP+aSgD/mkoA/5pKAP+aSgD/mkoA/5pKAP+gUw3/0aJ0CgAAAAC4fknVmkoA/5pKAP+aSgD/mkoA/5pKAP+aSgD/mkoA/51PB//jzbj///////////////7/0ayK/6pnKP+vbzP/4Mev////////////+fPu/6BVD/+aSgD/mkoA/5pKAP+aSgD/mkoA/5pKAP+aSgD/mkoA/7h/StMAAAAAAAAAAMyfdyyfUQr/mkoA/5pKAP+aSgD/mkoA/5pKAP+aSgD/mkoA/59SC//o1sT///////////////////////////////////////////+/jFz/mkoA/5pKAP+aSgD/mkoA/5pKAP+aSgD/mkoA/5pKAP+fUQr/zJ93LAAAAAAAAAAAAAAAALyFU8GaSgD/mkoA/5pKAP+aSgD/mkoA/5pKAP+aSgD/mkoA/59TDP/dwaf////////////////////////////9+/n/y6F6/5pKAP+aSgD/mkoA/5pKAP+aSgD/mkoA/5pKAP+aSgD/mkoA/7yFU8EAAAAAAAAAAAAAAAAAAAAA2LF2DK1qLfOaSgD/mkoA/5pKAP+aSgD/mkoA/5pKAP+aSgD/mkoA/5pKAP+1e0T/2r2h/+vbzP/p2Mf/1LGR/61rLv+aSgD/mkoA/5pKAP+aSgD/mkoA/5pKAP+aSgD/mkoA/5pKAP+tai3z2LF2DAAAAAAAAAAAAAAAAAAAAAAAAAAAzJ93LKVbGPuaSgD/mkoA/5pKAP+aSgD/mkoA/5pKAP+aSgD/mkoA/5pKAP+aSgD/mkoA/5pKAP+aSgD/mkoA/5pKAP+aSgD/mkoA/5pKAP+aSgD/mkoA/5pKAP+aSgD/pVsY+8yfdywAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAyJ1yUqVbGPuaSgD/mkoA/5pKAP+aSgD/mkoA/5pKAP+aSgD/mkoA/5pKAP+aSgD/mkoA/5pKAP+aSgD/mkoA/5pKAP+aSgD/mkoA/5pKAP+aSgD/mkoA/6VbGPvKn3NSAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAzJ93LK1qLfOaSgD/mkoA/5pKAP+aSgD/mkoA/5pKAP+aSgD/mkoA/5pKAP+aSgD/mkoA/5pKAP+aSgD/mkoA/5pKAP+aSgD/mkoA/5pKAP+tai3zzJ93LAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA2LF2DLyFU8GfUQr/mkoA/5pKAP+aSgD/mkoA/5pKAP+aSgD/mkoA/5pKAP+aSgD/mkoA/5pKAP+aSgD/mkoA/5pKAP+fUQr/vIVTwdixdgwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMyfdyy4f0rToFMN/5pKAP+aSgD/mkoA/5pKAP+aSgD/mkoA/5pKAP+aSgD/mkoA/5pKAP+gUw3/uH9K08yfdywAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADRonQKxJZrereAStOvbjLvqGEh+Z9SC/+fUgv/qGEh+a9uMu+3gErTxJZretGidAoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//AH//+AAf/+AAB//AAAP/gAAB/wAAAP4AAAB8AAAAPAAAADgAAAAYAAAAEAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAABgAAAAYAAAAHAAAADwAAAA+AAAAfwAAAP+AAAH/wAAD/+AAB//4AB///wD/8='
const ProgressBarWrapper = styled.div<{ height: number; width: number }>`
  user-select: none;
  /* width: ${props => `${props.width}rem`}; */
  /* height: ${props => `${props.height}rem`}; */
  /* 进度条的进度长度 */
  .progress-line {
    /* width: ${props => (props.width ? `${props.width}rem` : '100%')}; */
    width: 100%;
    height: 10rem;
    background-color: #fff;
    position: relative;
    cursor: pointer;
  }
  .progress-line_passed {
    height: 10rem;
    background-color: #1c7ed6;
    position: absolute;
    top: 0;
  }
  /* 当前进度的圆圈 */
  .progress-line .progress-curr-circle {
    width: 20rem;
    height: 20rem;
    position: absolute;
    border-radius: 50%;
    top: -5rem;
    left: -10rem;
    background: url(data:image/png;base64,${ysIcon});
    background-size: 100%;
    background-repeat: no-repeat;
  }
  .spin {
    animation: rotateImg 3s linear infinite;
    vertical-align: middle;
  }
  @keyframes rotateImg {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  @-webkit-keyframes rotateImg {
    0% {
      -webkit-transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
    }
  }
  /* 进度条刻度outer */
  .progress-scale-outer {
    width: 100%;
    /* height: 50rem; */
    display: flex;
    justify-content: space-between;
  }
  /* 进度条刻度 item */
  .progress-scale-outer .progress-scale-item {
    width: 50rem;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }
  .progress-scale-outer .progress-scale-item:nth-child(1) {
    margin-left: -25rem;
  }
  .progress-scale-outer .progress-scale-item:nth-last-child(1) {
    margin-right: -25rem;
  }
  .progress-scale-outer .progress-scale-item span {
    color: #fff;
    user-select: none;
  }
  .progress-scale-tick {
    width: 4rem;
    height: 50rem;
    background-color: #e9ecef;
    border-bottom-left-radius: 50%;
    border-bottom-right-radius: 50%;
  }
  .progress-hover-outer {
    min-width: 150rem;
    height: 40rem;
    border: 1px solid red;
    position: absolute;
    top: -50rem;
  }
`
export { ProgressBarWrapper }
