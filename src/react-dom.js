import { REACT_ELEMENT, REACT_TEXT } from './stand'

function render (vdom, container) {
  mount(vdom, container)
}

function mount (vdom, container) {
  // 1 vdom => 真实dom
  let newDom = createDom(vdom)
  // 2 真实dom放到对应的位置
  console.log(newDom, 'newDoms')
  container.appendChild(newDom)
}

function createDom (vdom) {
  // vdom =>真实dom

  let { $$typeofs, type, props, content } = vdom
  // 真实dom
  console.log(type, 'type13 ')
  let dom
  // 如果是文本则创建文本，否则创建元素节点
  if (type == REACT_TEXT) {
    dom = document.createTextNode(content)
  } else {
    dom = document.createElement(type)
    console.log(dom, 'dom1')
  }

  if (props) {
    // 更新
    updatePropos(dom, {}, props)
    let children = props.children
    if (children) {
      changeChildren(children, dom)
    }
  }

  return dom
}

function changeChildren (children, dom) {
  // 1 有一个children  {}
  if (typeof children == 'object' && children.type) {
    mount(children, dom)
  } else if (Array.isArray(children)) {
    console.log(children, 555)
    children.forEach(item => mount(item, dom))
  }
  // 2多个children =>[]
}

// 更新属性
function updatePropos (dom, oldProps, newProps) {
  if (newProps) {
    for (let key in newProps) {
      //处理属性  <div ></div> 注意  children  style:{color:red,fontsize:20}
      if (key == 'children') {
        continue
      } else if (key == 'style') {
        //{color:red,fontsize:20}
        let styleObject = newProps[key]
        for (let arr in styleObject) {
          dom.style[arr] = styleObject[arr]
        }
      } else {
        //其他属性
        dom[key] = newProps[key]
      }
    }
  }

  //跟新
  if (oldProps) {
    // 旧的属性在新的属性中没有 =>删除
    for (let key in oldProps) {
      if (!newProps[key]) {
        dom[key] = null
      }
    }
  }
}

const ReactDOM = {
  render
}

export default ReactDOM
