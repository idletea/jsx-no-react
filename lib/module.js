"use strict";

exports.__esModule = true;

exports["default"] = function (tag, attrs) {
  var elem = document.createElement(tag);

  if (attrs === null || attrs === undefined) attrs = {};
  for (var _iterator = Object.entries(attrs), _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
    var _ref;

    if (_isArray) {
      if (_i >= _iterator.length) break;
      _ref = _iterator[_i++];
    } else {
      _i = _iterator.next();
      if (_i.done) break;
      _ref = _i.value;
    }

    var attr = _ref[0];
    var value = _ref[1];

    if (value === true) elem.setAttribute(attr, attr);else if (value !== false && value !== null) {
      if (attr === "onclick") {
        elem.addEventListener("click", value);
      } else {
        elem.setAttribute(attr, value.toString());
      }
    }
  }

  for (var _len = arguments.length, children = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    children[_key - 2] = arguments[_key];
  }

  for (var _iterator2 = children, _isArray2 = Array.isArray(_iterator2), _i2 = 0, _iterator2 = _isArray2 ? _iterator2 : _iterator2[Symbol.iterator]();;) {
    var _ref2;

    if (_isArray2) {
      if (_i2 >= _iterator2.length) break;
      _ref2 = _iterator2[_i2++];
    } else {
      _i2 = _iterator2.next();
      if (_i2.done) break;
      _ref2 = _i2.value;
    }

    var child = _ref2;

    if (!(child instanceof Node)) {
      child = document.createTextNode(child.toString());
    }
    elem.appendChild(child);
  }

  return elem;
};

;
module.exports = exports["default"];