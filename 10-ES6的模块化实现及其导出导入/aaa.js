var name = '小明'
var age = 18
var flag = true

function sum(num1,num2){
  return num1 + num2
}
if(flag){
  console.log(sum(20,30));
}

//导出方式一，先定义再导出
export {      //导出，使此处模块化的两个变量可以被其它模块使用
  flag,sum
}
//导出方式二，定义时直接导出
export var num1 = 1000;
//导出函数/类
export function mul(num1,num2){
  return num1 + num2;
}
export class Person{
  run(){
    '在学习'
  }

}
