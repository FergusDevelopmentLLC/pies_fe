import React, { useContext } from 'react'
import PropTypes from 'prop-types'

const Pie = ({
  pieData = {
    title: '',
    pieces: [],
    chunks: []
  }
}) => {

    const fillChunk = (id) => pieData.chunks.includes(id) ? true : false
    
    return (
      <svg viewBox="0 0 600 600">
      
        <g transform="translate(0,300)">
    
          <g id="piece00">
              <path id="10" className={`chunk ${ fillChunk(10) ? 'pie-00' : ''}`} d="m 325.96455,-28.964603 a 29.950082,29.950082 0 0 0 -21.1646,-8.78552 v 29.95012 z" />
              <path id="20" className={`chunk ${ fillChunk(20) ? 'pie-00' : ''}`} d="m 347.12975,-50.129713 a 59.900166,59.900166 0 0 0 -42.3298,-17.5705 v 29.9501 a 29.950082,29.950082 0 0 1 2.9901,0.14986 29.950082,29.950082 0 0 1 2.96,0.44701 29.950082,29.950082 0 0 1 2.9006,0.74105 29.950082,29.950082 0 0 1 2.8122,1.02629 29.950082,29.950082 0 0 1 2.696,1.30225 29.950082,29.950082 0 0 1 2.5523,1.56475 29.950082,29.950082 0 0 1 2.3833,1.81179 29.950082,29.950082 0 0 1 1.8702,1.74252 z" />
              <path id="30" className={`chunk ${ fillChunk(30) ? 'pie-00' : ''}`} d="m 368.29385,-71.293803 a 89.850251,89.850251 0 0 0 -63.4939,-26.356532 v 29.950112 a 59.900166,59.900166 0 0 1 5.9801,0.29921 59.900166,59.900166 0 0 1 5.9205,0.89503 59.900166,59.900166 0 0 1 5.8012,1.48105 59.900166,59.900166 0 0 1 5.6245,2.0531 59.900166,59.900166 0 0 1 5.3914,2.60449 59.900166,59.900166 0 0 1 5.1046,3.12953 59.900166,59.900166 0 0 1 4.7666,3.62355 59.900166,59.900166 0 0 1 3.7409,3.48454 z" />
              <path id="40" className={`chunk ${ fillChunk(40) ? 'pie-00' : ''}`} d="m 389.45895,-92.458925 a 119.80033,119.80033 0 0 0 -84.659,-35.141525 v 29.950115 a 89.850251,89.850251 0 0 1 63.4938,26.356532 z" />
              <path id="50" className={`chunk ${ fillChunk(50) ? 'pie-00' : ''}`} d="m 410.62355,-113.62351 a 149.75041,149.75041 0 0 0 -105.8236,-43.92703 v 29.9501 a 119.80033,119.80033 0 0 1 84.659,35.141525 z" />
              <path id="60" className={`chunk ${ fillChunk(60) ? 'pie-00' : ''}`} d="m 304.79995,-187.50013 v 29.94959 a 149.75041,149.75041 0 0 1 105.8235,43.92703 l 21.1461,-21.14599 a 179.65004,179.70003 0 0 0 -126.9696,-52.73063 z" />
              <path id="70" className={`chunk ${ fillChunk(70) ? 'pie-00' : ''}`} d="m 304.79995,-217.45 v 29.95011 a 179.65004,179.70003 0 0 1 126.9711,52.72908 l 21.1817,-21.18165 A 209.64998,209.64998 0 0 0 304.79995,-217.45 z" />
          </g>
          <g id="piece01">
              <path id="11" className={`chunk ${ fillChunk(11) ? 'pie-01' : ''}`} d="m 325.96455,-28.964603 -21.1646,21.1646 h 29.9502 a 29.950082,29.950082 0 0 0 -8.7856,-21.1646 z" />
              <path id="21" className={`chunk ${ fillChunk(21) ? 'pie-01' : ''}`} d="m 347.12975,-50.129713 -21.1651,21.16512 a 29.950082,29.950082 0 0 1 0.3203,0.29818 29.950082,29.950082 0 0 1 1.9756,2.24896 29.950082,29.950082 0 0 1 1.7415,2.43549 29.950082,29.950082 0 0 1 1.4899,2.59675 29.950082,29.950082 0 0 1 1.2226,2.73265 29.950082,29.950082 0 0 1 0.9442,2.84117 29.950082,29.950082 0 0 1 0.6557,2.92076 29.950082,29.950082 0 0 1 0.3607,2.97191 29.950082,29.950082 0 0 1 0.075,2.11873 h 29.9501 a 59.900166,59.900166 0 0 0 -17.5704,-42.32972 z" />
              <path id="31" className={`chunk ${ fillChunk(31) ? 'pie-01' : ''}`} d="m 368.29385,-71.293803 -21.1641,21.16408 a 59.900166,59.900166 0 0 1 0.6402,0.59686 59.900166,59.900166 0 0 1 3.9512,4.49844 59.900166,59.900166 0 0 1 3.483,4.86998 59.900166,59.900166 0 0 1 2.9792,5.19401 59.900166,59.900166 0 0 1 2.4458,5.46528 59.900166,59.900166 0 0 1 1.8883,5.68185 59.900166,59.900166 0 0 1 1.311,5.842 59.900166,59.900166 0 0 1 0.7219,5.94434 59.900166,59.900166 0 0 1 0.1499,4.23696 h 29.9501 a 89.850251,89.850251 0 0 0 -26.3565,-63.4938 z" />
              <path id="41" className={`chunk ${ fillChunk(41) ? 'pie-01' : ''}`} d="m 389.45895,-92.458925 -21.1652,21.165122 a 89.850251,89.850251 0 0 1 26.3566,63.4938 h 29.9501 a 119.80032,119.80032 0 0 0 -35.1415,-84.658922 z" />
              <path id="51" className={`chunk ${ fillChunk(51) ? 'pie-01' : ''}`} d="m 410.62355,-113.62351 -21.1646,21.164595 a 119.80032,119.80032 0 0 1 35.1415,84.658922 h 29.9501 a 149.7504,149.7504 0 0 0 -43.927,-105.823517 z" />
              <path id="61" className={`chunk ${ fillChunk(61) ? 'pie-01' : ''}`} d="m 431.76955,-134.7695 -21.1461,21.14599 a 149.7504,149.7504 0 0 1 43.9271,105.823517 h 29.8995 A 179.65003,179.70003 0 0 0 431.76955,-134.7695 z" />
              <path id="71" className={`chunk ${ fillChunk(71) ? 'pie-01' : ''}`} d="m 452.95275,-155.95246 -21.1817,21.18165 a 179.65003,179.70003 0 0 1 52.679,126.971057 h 30.0002 a 209.64998,209.64998 0 0 0 -61.4975,-148.152707 z" />
          </g>
          <g id="piece02">
              <path id="12" className={`chunk ${ fillChunk(12) ? 'pie-02' : ''}`} d="m 304.79995,-7.800003 21.1646,21.1646 a 29.950082,29.950082 0 0 0 8.7856,-21.1646 z" />
              <path id="22" className={`chunk ${ fillChunk(22) ? 'pie-02' : ''}`} d="m 325.96465,13.364607 21.1651,21.16511 a 59.900166,59.900166 0 0 0 17.5705,-42.32971 h -29.9501 a 29.950082,29.950082 0 0 1 -0.1499,2.99 29.950082,29.950082 0 0 1 -0.447,2.96003 29.950082,29.950082 0 0 1 -0.7411,2.9006 29.950082,29.950082 0 0 1 -1.0262,2.81223 29.950082,29.950082 0 0 1 -1.3023,2.69595 29.950082,29.950082 0 0 1 -1.5647,2.5522999 29.950082,29.950082 0 0 1 -1.8118,2.3833101 29.950082,29.950082 0 0 1 -1.7425,1.87018 z" />
              <path id="32" className={`chunk ${ fillChunk(32) ? 'pie-02' : ''}`} d="m 347.12975,34.529707 21.1641,21.1641 a 89.850251,89.850251 0 0 0 26.3565,-63.49381 h -29.9501 a 59.900166,59.900166 0 0 1 -0.2992,5.98001 59.900166,59.900166 0 0 1 -0.8951,5.92055 59.900166,59.900166 0 0 1 -1.481,5.8011999 59.900166,59.900166 0 0 1 -2.0531,5.6244601 59.900166,59.900166 0 0 1 -2.6045,5.39142 59.900166,59.900166 0 0 1 -3.1295,5.10458 59.900166,59.900166 0 0 1 -3.6236,4.76665 59.900166,59.900166 0 0 1 -3.4845,3.74084 z" />
              <path id="42" className={`chunk ${ fillChunk(42) ? 'pie-02' : ''}`} d="m 368.29375,55.693807 21.1652,21.1651 a 119.80032,119.80032 0 0 0 35.1415,-84.65891 h -29.9501 a 89.850251,89.850251 0 0 1 -26.3566,63.49381 z" />
              <path id="52" className={`chunk ${ fillChunk(52) ? 'pie-02' : ''}`} d="m 389.45895,76.858907 21.1646,21.16461 a 149.7504,149.7504 0 0 0 43.927,-105.82351 h -29.9501 a 119.80032,119.80032 0 0 1 -35.1415,84.6589 z" />
              <path id="62" className={`chunk ${ fillChunk(62) ? 'pie-02' : ''}`} d="m 410.62345,98.023517 21.1476,21.147563 a 179.65003,179.70003 0 0 0 52.679,-126.971073 h -29.8995 a 149.7504,149.7504 0 0 1 -43.9271,105.82351 z" />
              <path id="72" className={`chunk ${ fillChunk(72) ? 'pie-02' : ''}`} d="m 431.76955,119.16978 21.1832,21.1832 a 209.64998,209.64998 0 0 0 61.4975,-148.152733 h -30.0002 a 179.65003,179.70003 0 0 1 -52.6805,126.969533 z" />
          </g>
          <g id="piece03">
              <path id="13" className={`chunk ${ fillChunk(13) ? 'pie-03' : ''}`} d="m 304.79995,-7.800003 v 29.95012 a 29.950082,29.950082 0 0 0 21.1646,-8.78552 z" />
              <path id="23" className={`chunk ${ fillChunk(23) ? 'pie-03' : ''}`} d="m 325.96465,13.364607 a 29.950082,29.950082 0 0 1 -0.2982,0.32039 29.950082,29.950082 0 0 1 -2.249,1.97559 29.950082,29.950082 0 0 1 -2.4355,1.74151 29.950082,29.950082 0 0 1 -2.5967,1.48982 29.950082,29.950082 0 0 1 -2.7327,1.22266 29.950082,29.950082 0 0 1 -2.8412,0.94414 29.950082,29.950082 0 0 1 -2.9207,0.65577 29.950082,29.950082 0 0 1 -2.9719,0.36071 29.950082,29.950082 0 0 1 -2.1188,0.0749 v 29.95008 a 59.900166,59.900166 0 0 0 42.3298,-17.57049 z" />
              <path id="33" className={`chunk ${ fillChunk(33) ? 'pie-03' : ''}`} d="m 347.12975,34.529707 a 59.900166,59.900166 0 0 1 -0.5969,0.64026 59.900166,59.900166 0 0 1 -4.4984,3.95119 59.900166,59.900166 0 0 1 -4.87,3.483 59.900166,59.900166 0 0 1 -5.194,2.97915 59.900166,59.900166 0 0 1 -5.4653,2.44584 59.900166,59.900166 0 0 1 -5.6819,1.88825 59.900166,59.900166 0 0 1 -5.842,1.31103 59.900166,59.900166 0 0 1 -5.9443,0.72192 59.900166,59.900166 0 0 1 -4.237,0.14986 v 29.95012 a 89.850251,89.850251 0 0 0 63.4939,-26.35652 z" />
              <path id="43" className={`chunk ${ fillChunk(43) ? 'pie-03' : ''}`} d="m 368.29375,55.693807 a 89.850251,89.850251 0 0 1 -63.4938,26.35652 v 29.950123 a 119.80032,119.80032 0 0 0 84.659,-35.141543 z" />
              <path id="53" className={`chunk ${ fillChunk(53) ? 'pie-03' : ''}`} d="m 389.45895,76.858907 a 119.80032,119.80032 0 0 1 -84.659,35.141543 v 29.95011 a 149.7504,149.7504 0 0 0 105.8236,-43.927043 z" />
              <path id="63" className={`chunk ${ fillChunk(63) ? 'pie-03' : ''}`} d="m 410.62345,98.023517 a 149.7504,149.7504 0 0 1 -105.8235,43.927043 v 29.94959 a 179.65003,179.70003 0 0 0 126.9711,-52.72907 z" />
              <path id="73" className={`chunk ${ fillChunk(73) ? 'pie-03' : ''}`} d="m 431.76955,119.16978 a 179.65003,179.70003 0 0 1 -126.9696,52.7306 V 201.85 a 209.64998,209.64998 0 0 0 148.1528,-61.49701 z" />
          </g>
          <g id="piece04">
              <path id="14" className={`chunk ${ fillChunk(14) ? 'pie-04' : ''}`} d="m 304.79995,-7.800003 -21.1646,21.1646 a 29.950082,29.950082 0 0 0 21.1646,8.78552 z" />   
              <path id="24" className={`chunk ${ fillChunk(24) ? 'pie-04' : ''}`} d="m 283.63535,13.364607 -21.16506,21.16511 a 59.900166,59.900166 0 0 0 42.32966,17.57049 v -29.95008 a 29.950082,29.950082 0 0 1 -2.99,-0.14986 29.950082,29.950082 0 0 1 -2.96,-0.44701 29.950082,29.950082 0 0 1 -2.9006,-0.74105 29.950082,29.950082 0 0 1 -2.8127,-1.02629 29.950082,29.950082 0 0 1 -2.6955,-1.30225 29.950082,29.950082 0 0 1 -2.5523,-1.56475 29.950082,29.950082 0 0 1 -2.3833,-1.81179 29.950082,29.950082 0 0 1 -1.8702,-1.74252 z" />
              <path id="34" className={`chunk ${ fillChunk(34) ? 'pie-04' : ''}`} d="m 262.47028,34.529707 -21.16408,21.1641 a 89.850251,89.850251 0 0 0 63.49375,26.35652 v -29.95012 a 59.900166,59.900166 0 0 1 -5.98,-0.29919 59.900166,59.900166 0 0 1 -5.9205,-0.89503 59.900166,59.900166 0 0 1 -5.8012,-1.48106 59.900166,59.900166 0 0 1 -5.6245,-2.05312 59.900166,59.900166 0 0 1 -5.3914,-2.60447 59.900166,59.900166 0 0 1 -5.10457,-3.12952 59.900166,59.900166 0 0 1 -4.76665,-3.62357 59.900166,59.900166 0 0 1 -3.74085,-3.48454 z" />   
              <path id="44" className={`chunk ${ fillChunk(44) ? 'pie-04' : ''}`} d="m 241.3062,55.693807 -21.16512,21.1651 a 119.80033,119.80033 0 0 0 84.65887,35.141543 V 82.050327 A 89.850251,89.850251 0 0 1 241.3062,55.693807 z" />
              <path id="54" className={`chunk ${ fillChunk(54) ? 'pie-04' : ''}`} d="m 220.14109,76.858907 -21.1646,21.16461 A 149.75041,149.75041 0 0 0 304.79995,141.95056 V 112.00045 A 119.80033,119.80033 0 0 1 220.14109,76.858907 z" />
              <path id="64" className={`chunk ${ fillChunk(64) ? 'pie-04' : ''}`} d="m 198.97649,98.023517 -21.146,21.145993 a 179.65004,179.70003 0 0 0 126.96946,52.73064 V 141.95056 A 149.75041,149.75041 0 0 1 198.97649,98.023517 z" />
              <path id="74" className={`chunk ${ fillChunk(74) ? 'pie-04' : ''}`} d="m 177.82894,119.17132 -21.18113,21.18113 A 209.64998,209.64998 0 0 0 304.79995,201.85 V 171.90038 A 179.65004,179.70003 0 0 1 177.82894,119.17132 z" />
          </g>
          <g id="piece05">
              <path id="15" className={`chunk ${ fillChunk(15) ? 'pie-05' : ''}`} d="m 304.79995,-7.800003 h -29.9501 a 29.950082,29.950082 0 0 0 8.7855,21.1646 z" />
              <path id="25" className={`chunk ${ fillChunk(25) ? 'pie-05' : ''}`} d="m 274.84985,-7.799993 h -29.95006 a 59.900166,59.900166 0 0 0 17.5705,42.32971 l 21.16506,-21.16511 a 29.950082,29.950082 0 0 1 -0.3203,-0.29818 29.950082,29.950082 0 0 1 -1.9756,-2.24896 29.950082,29.950082 0 0 1 -1.7415,-2.43549 29.950082,29.950082 0 0 1 -1.4899,-2.59675 29.950082,29.950082 0 0 1 -1.2226,-2.73265 29.950082,29.950082 0 0 1 -0.9442,-2.84117 29.950082,29.950082 0 0 1 -0.6557,-2.92076 29.950082,29.950082 0 0 1 -0.3607,-2.97191 29.950082,29.950082 0 0 1 -0.075,-2.11873 z" />
              <path id="35" className={`chunk ${ fillChunk(35) ? 'pie-05' : ''}`} d="m 244.89978,-7.800003 h -29.95011 a 89.850251,89.850251 0 0 0 26.35653,63.49381 l 21.16408,-21.1641 a 59.900166,59.900166 0 0 1 -0.64027,-0.59685 59.900166,59.900166 0 0 1 -3.95118,-4.49844 59.900166,59.900166 0 0 1 -3.48299,-4.86998 59.900166,59.900166 0 0 1 -2.97914,-5.19401 59.900166,59.900166 0 0 1 -2.44585,-5.46528 59.900166,59.900166 0 0 1 -1.88826,-5.68185 59.900166,59.900166 0 0 1 -1.31103,-5.842 59.900166,59.900166 0 0 1 -0.72192,-5.94434 59.900166,59.900166 0 0 1 -0.14986,-4.23696 z" />
              <path id="45" className={`chunk ${ fillChunk(45) ? 'pie-05' : ''}`} d="m 214.94967,-7.800003 h -29.95011 a 119.80032,119.80032 0 0 0 35.14152,84.65891 l 21.16512,-21.1651 a 89.850251,89.850251 0 0 1 -26.35653,-63.49381 z" />
              <path id="55" className={`chunk ${ fillChunk(55) ? 'pie-05' : ''}`} d="m 184.99957,-7.799993 h -29.95011 a 149.7504,149.7504 0 0 0 43.92703,105.82351 l 21.1646,-21.16461 a 119.80032,119.80032 0 0 1 -35.14152,-84.6589 z" />
              <path id="65" className={`chunk ${ fillChunk(65) ? 'pie-05' : ''}`} d="m 155.04945,-7.799993 h -29.89947 a 179.65003,179.70003 0 0 0 52.68051,126.969513 l 21.146,-21.146003 A 149.7504,149.7504 0 0 1 155.04945,-7.799993 z" />
              <path id="75" className={`chunk ${ fillChunk(75) ? 'pie-05' : ''}`} d="M 125.14999,-7.799753 H 95.14975 a 209.64998,209.64998 0 0 0 61.49806,148.152203 l 21.18113,-21.18113 A 179.65003,179.70003 0 0 1 125.14999,-7.799753 z" />
          </g>
          <g id="piece06">
              <path id="16" className={`chunk ${ fillChunk(16) ? 'pie-06' : ''}`} d="m 283.63535,-28.964603 a 29.950082,29.950082 0 0 0 -8.7855,21.1646 h 29.9501 z" />
              <path id="26" className={`chunk ${ fillChunk(26) ? 'pie-06' : ''}`} d="m 262.47029,-50.129713 a 59.900166,59.900166 0 0 0 -17.5705,42.32972 h 29.95006 a 29.950082,29.950082 0 0 1 0.1499,-2.99 29.950082,29.950082 0 0 1 0.447,-2.96003 29.950082,29.950082 0 0 1 0.741,-2.9006 29.950082,29.950082 0 0 1 1.0263,-2.81223 29.950082,29.950082 0 0 1 1.3023,-2.69595 29.950082,29.950082 0 0 1 1.5647,-2.5523 29.950082,29.950082 0 0 1 1.8118,-2.38331 29.950082,29.950082 0 0 1 1.7425,-1.87018 z" />
              <path id="36" className={`chunk ${ fillChunk(36) ? 'pie-06' : ''}`} d="m 241.3062,-71.293803 a 89.850251,89.850251 0 0 0 -26.35653,63.4938 h 29.95011 a 59.900166,59.900166 0 0 1 0.29921,-5.98001 59.900166,59.900166 0 0 1 0.89503,-5.92055 59.900166,59.900166 0 0 1 1.48105,-5.8012 59.900166,59.900166 0 0 1 2.0531,-5.62446 59.900166,59.900166 0 0 1 2.6045,-5.39142 59.900166,59.900166 0 0 1 3.12952,-5.10458 59.900166,59.900166 0 0 1 3.62355,-4.76665 59.900166,59.900166 0 0 1 3.48454,-3.74085 z" />
              <path id="46" className={`chunk ${ fillChunk(46) ? 'pie-06' : ''}`} d="m 220.14108,-92.458925 a 119.80032,119.80032 0 0 0 -35.14152,84.658922 h 29.95011 a 89.850251,89.850251 0 0 1 26.35653,-63.4938 z" />
              <path id="56" className={`chunk ${ fillChunk(56) ? 'pie-06' : ''}`} d="M 198.97649,-113.62351 A 149.7504,149.7504 0 0 0 155.04946,-7.799993 h 29.95011 a 119.80032,119.80032 0 0 1 35.14152,-84.658922 z" />
              <path id="66" className={`chunk ${ fillChunk(66) ? 'pie-06' : ''}`} d="m 198.97649,-113.62351 -21.14755,-21.14754 A 179.65003,179.70003 0 0 0 125.14998,-7.799993 h 29.89947 a 149.7504,149.7504 0 0 1 43.92704,-105.823517 z" />
              <path id="76" className={`chunk ${ fillChunk(76) ? 'pie-06' : ''}`} d="m 177.83049,-134.76926 -21.1832,-21.1832 A 209.64998,209.64998 0 0 0 95.14975,-7.799753 h 30.00024 a 179.65003,179.70003 0 0 1 52.6805,-126.969507 z" />
          </g>
          <g id="piece07">
              <path id="17" className={`chunk ${ fillChunk(17) ? 'pie-07' : ''}`} d="m 283.63535,-28.964603 21.1646,21.1646 v -29.95012 a 29.950082,29.950082 0 0 0 -21.1646,8.78552 z" />
              <path id="27" className={`chunk ${ fillChunk(27) ? 'pie-07' : ''}`} d="m 262.47029,-50.129713 21.16506,21.16512 a 29.950082,29.950082 0 0 1 0.2982,-0.32039 29.950082,29.950082 0 0 1 2.249,-1.97559 29.950082,29.950082 0 0 1 2.4355,-1.74151 29.950082,29.950082 0 0 1 2.5967,-1.48982 29.950082,29.950082 0 0 1 2.7327,-1.22266 29.950082,29.950082 0 0 1 2.8412,-0.94414 29.950082,29.950082 0 0 1 2.9207,-0.65577 29.950082,29.950082 0 0 1 2.9719,-0.36071 29.950082,29.950082 0 0 1 2.1187,-0.0749 v -29.9501 a 59.900166,59.900166 0 0 0 -42.32966,17.5705 z" />
              <path id="37" className={`chunk ${ fillChunk(37) ? 'pie-07' : ''}`} d="m 241.3062,-71.293803 21.16408,21.16408 a 59.900166,59.900166 0 0 1 0.59687,-0.64027 59.900166,59.900166 0 0 1 4.49843,-3.95118 59.900166,59.900166 0 0 1 4.86997,-3.48299 59.900166,59.900166 0 0 1 5.194,-2.97915 59.900166,59.900166 0 0 1 5.4653,-2.44584 59.900166,59.900166 0 0 1 5.6818,-1.88826 59.900166,59.900166 0 0 1 5.842,-1.31103 59.900166,59.900166 0 0 1 5.9444,-0.72192 59.900166,59.900166 0 0 1 4.2369,-0.14986 v -29.950112 a 89.850251,89.850251 0 0 0 -63.49375,26.356532 z" />
              <path id="47" className={`chunk ${ fillChunk(47) ? 'pie-07' : ''}`} d="m 220.14108,-92.458925 21.16512,21.165122 a 89.850251,89.850251 0 0 1 63.49375,-26.356532 v -29.950115 a 119.80032,119.80032 0 0 0 -84.65887,35.141525 z" />
              <path id="57" className={`chunk ${ fillChunk(57) ? 'pie-07' : ''}`} d="m 198.97649,-113.62351 21.1646,21.164595 a 119.80032,119.80032 0 0 1 84.65886,-35.141515 v -29.95011 a 149.7504,149.7504 0 0 0 -105.82346,43.92703 z" />
              <path id="67" className={`chunk ${ fillChunk(67) ? 'pie-07' : ''}`} d="m 304.79995,-187.50013 a 179.65003,179.70003 0 0 0 -126.97101,52.72908 l 21.14755,21.14754 a 149.7504,149.7504 0 0 1 105.82346,-43.92703 z" />
              <path id="77" className={`chunk ${ fillChunk(77) ? 'pie-07' : ''}`} d="m 304.79995,-217.45 a 209.64998,209.64998 0 0 0 -148.15266,61.49754 l 21.1832,21.1832 a 179.65003,179.70003 0 0 1 126.96946,-52.73063 z" />
          </g>
        </g>

        <text><tspan x="300" y="30" className="title middle" >{ pieData.title }</tspan></text>

        <text><tspan x="340" y="75"  className="label right" >{ pieData.pieces[0] }</tspan></text>
        <text><tspan x="490" y="175" className="label right" >{ pieData.pieces[1] }</tspan></text>
        <text><tspan x="480" y="440" className="label right" >{ pieData.pieces[2] }</tspan></text>
        <text><tspan x="340" y="525" className="label right" >{ pieData.pieces[3] }</tspan></text>
    
        <text><tspan x="270" y="525" className="label left"  >{ pieData.pieces[4] }</tspan></text>
        <text><tspan x="130" y="440" className="label left"  >{ pieData.pieces[5] }</tspan></text>
        <text><tspan x="120" y="175" className="label left"  >{ pieData.pieces[6] }</tspan></text>
        <text><tspan x="270" y="75"  className="label left"  >{ pieData.pieces[7] }</tspan></text>

      </svg>
    ) 
}

Pie.propTypes = {
  pieData: PropTypes.object.isRequired
}

export default Pie
