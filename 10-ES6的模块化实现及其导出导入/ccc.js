import {flag,sum} from "./aaa,js";     //1.导入aaa.js中的变量

if(flag){
  console.log('小明是天才');
  console.log(sum(20,30));
}

import {mul,Person} from "./aaa.js";     //导入函数/类
console.log(mul(30,50));
const p = new Person();
p.run;

//统一全部导入
import * as aaa from '.aaa.js';    //如果要导入的变量太多，则使用此种方式，aaa相当于一个存储所有变量的对象
console.log(aaa.flag);
