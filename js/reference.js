var $ = function (selector, node = document) {
  return node.querySelector(selector);
};

var $$ = function (selector, node = document) {
  return node.querySelectorAll(selector);
};