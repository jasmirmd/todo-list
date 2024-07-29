export default function newElement(tag, className = null) {
  const element = document.createElement(tag);

  if(className) element.className = className;

  return element;
}