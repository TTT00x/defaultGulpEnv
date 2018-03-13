import svg4everybody from 'svg4everybody'; // svg表示のためのIE11用polyfill
import ua from './util/ua';
import convertToArray from './module/convertToArray';
import StopScroll from './module/StopScroll';

require('what-input'); // キーボード操作とマウス操作判定用ライブラリ

window.onload = () => {
  svg4everybody();

};
