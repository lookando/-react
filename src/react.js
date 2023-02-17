import { REACT_ELEMENT } from './stand'
import { toObject } from './utils'

// jsx=>bable=>vnode
function createElement (type, config, children) {
  let key, ref

  if (config) {
    key = config.key
    ref = config.ref
    delete config.key
    delete config.key
  }

  let props = { ...config }

  const childrenLength = arguments.length - 2
  // console.log(arguments, 'arguments')
  if (arguments.length > 3) {
    //多个儿子
    const childArray = Array(childrenLength)
    for (let i = 0; i < childrenLength; i++) {
      childArray[i] = arguments[i + 2]
    }

    props.children = childArray
    // props.children = Array.prototype.slice.call(arguments,2).map(toObject)  // []
    // 一个孩子
  } else if (arguments.length == 3) {
    props.children = children // {type:REACT_TEXT,content:666 }
  }

  // vnode =>react元素
  return {
    $$typeofs: REACT_ELEMENT,
    key, //diff算法
    ref, //获取真实dom
    type, //类型div
    props
  }
}

const React = {
  createElement
}

export default React
