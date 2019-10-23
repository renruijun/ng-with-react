var _slicedToArray = function () {
  function sliceIterator(arr, i) {
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;
    try {
      for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);
        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"]) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }
    return _arr;
  }
  return function (arr, i) {
    if (Array.isArray(arr)) {
      return arr;
    } else if (Symbol.iterator in Object(arr)) {
      return sliceIterator(arr, i);
    } else {
      throw new TypeError("Invalid attempt to destructure non-iterable instance");
    }
  };
}();

var _templateObject = _taggedTemplateLiteral([""], [""]),
  _templateObject2 = _taggedTemplateLiteral(["\n  border: 1px solid white;\n  background: rgb(144, 181, 138);\n  outline: none;\n  height: 30px;\n  color: white;\n  cursor: pointer;\n  transition: all 0.2s linear;\n  :hover {\n    background: white;\n    color: #90b58a;\n    border: 2px solid rgb(144, 181, 138);\n  }\n"], ["\n  border: 1px solid white;\n  background: rgb(144, 181, 138);\n  outline: none;\n  height: 30px;\n  color: white;\n  cursor: pointer;\n  transition: all 0.2s linear;\n  :hover {\n    background: white;\n    color: #90b58a;\n    border: 2px solid rgb(144, 181, 138);\n  }\n"]);

function _taggedTemplateLiteral(strings, raw) {
  return Object.freeze(Object.defineProperties(strings, {
    raw: {
      value: Object.freeze(raw)
    }
  }));
}

import React, {
  useState,
  useEffect,
  useRef
} from "react";
import styled from "styled-components";
import "./test.css";
var InputWrapper = styled.div(_templateObject);
var Button = styled.button(_templateObject2);
var Comp1 = function Comp1(props) {
  var _useState = useState(0),
    _useState2 = _slicedToArray(_useState, 2),
    count = _useState2[0],
    setCount = _useState2[1];

  var prevCountRef = useRef();
  useEffect(function () {
    prevCountRef.current = count;
    console.log(prevCount, count);
    return function () {};
  });
  var prevCount = prevCountRef.current;

  var handleCountChange = function handleCountChange(mode, event) {
    setCount(mode ? count + 1 : count - 1);
  };

  var refTest = useRef(null);
  var handleInpButtonClick = function handleInpButtonClick() {
    refTest.current.focus();
  };
  var handleInpSubmit = function handleInpSubmit() {
    console.log("文本框的值：", refTest.current.value);
  };

  var handleNavigate = function handleNavigate() {
    props.navigate("hero-list");
  };

  return React.createElement(
    InputWrapper,
    null,
    React.createElement(
      "div",
      null,
      "\u66F4\u65B0\u524D\uFF1A",
      prevCount,
      "\uFF1B"
    ),
    React.createElement(
      "div",
      null,
      "\u66F4\u65B0\u540E\uFF1A",
      count,
      "\uFF1B"
    ),
    React.createElement(
      Button, {
        onClick: function onClick(e) {
          handleCountChange(true, e);
        }
      },
      "\u52A0+"
    ),
    React.createElement(
      Button, {
        onClick: function onClick(e) {
          handleCountChange(false, e);
        }
      },
      "\u51CF-"
    ),
    React.createElement(
      "div",
      null,
      "\u5F53\u524D\u8DEF\u7531\uFF1A",
      props.path
    ),
    React.createElement(
      "div",
      null,
      "\u8DEF\u7531ID\uFF1A",
      props.id
    ),
    React.createElement(
      "div",
      null,
      React.createElement("input", {
        type: "text",
        ref: refTest
      }),
      "\xA0\xA0",
      React.createElement(
        Button, {
          onClick: handleInpButtonClick
        },
        "\u805A\u7126\u8F93\u5165"
      ),
      "\xA0\xA0",
      React.createElement(
        Button, {
          onClick: handleInpSubmit
        },
        "\u63D0\u4EA4"
      )
    ),
    React.createElement(
      "div",
      null,
      React.createElement(
        Button, {
          onClick: handleNavigate
        },
        "\u8DF3\u8F6C\u81F3ng\u8DEF\u7531-hero-list"
      )
    ),
    React.createElement(
      "div", {
        className: "test"
      },
      React.createElement("img", {
        src: require("./img/hml.jpg"),
        alt: "Smiley face",
        width: "100",
        height: "100"
      })
    )
  );
};

export default Comp1;
