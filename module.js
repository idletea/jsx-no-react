export default function(tag, attrs, ...children) {
  let elem = document.createElement(tag);

  if (attrs === null || attrs === undefined) attrs = {};
  for (let [attr, value] of Object.entries(attrs)) {
    if (value === true) elem.setAttribute(attr, attr);
    else if (value !== false && value !== null) {
      if (attr === "onclick") {
        elem.addEventListener("click", value);
      } else {
        elem.setAttribute(attr, value.toString());
      }
    }
  }

  for (let child of children) {
    if (!(child instanceof Node)) {
      child = document.createTextNode(child.toString());
    }
    elem.appendChild(child);
  }

  return elem;
}
