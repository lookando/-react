import { REACT_ELEMENT, REACT_TEXT } from "./stand";

//如果是text优化处理
export function toObject(element) {
  return typeof element == 'string' || typeof element == 'number'?
  {type:REACT_TEXT,content:element}:element
}