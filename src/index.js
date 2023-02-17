import React from './react';
// import React from 'react';
// import ReactDOM from './react-dom';
import ReactDOM from 'react-dom';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// jsx语法
let element = <h1 className="title" style={{color:'red'}}>hello</h1>

// wabpack会自动将jsx语法进行babel转译成js方法
// element2就是一个通过React.createElement（）方法返回的虚拟dom，在浏览器上运行后会转换成真实dom
// let element2 = React.createElement("h1", {
//   className: "title",
//   style: {
//     color: 'red'
//   }
// }, 'hello');



let element3 =React.createElement("h1", {
  className: "title",
  style: {
    color: 'red'
  }
},React.createElement("h2", null, React.createElement("h3", null, "3"), React.createElement("h3", null, "3")));
console.log(element3, 'element3');


let obj = { foo: 123 };
let a = Object.getOwnPropertyDescriptor(obj, 'foo').get

const children = Array(2)
console.log(children,'aaa');
let element2 = React.createElement("h1", {
  className: "title",
  style: {
    color: 'red'
  }
}, React.createElement("h2", null, "ssss"));



console.log(element2,'element');


// 把vnode=>真实dom 放到指定位置
// ReactDOM.render(
//   element2,
//   document.getElementById('root')
// )

