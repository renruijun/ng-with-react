var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(["\n  border: 1px solid rgb(144, 181, 138);\n  background: rgb(190, 210, 196);\n  padding: 10px 20px;\n"], ["\n  border: 1px solid rgb(144, 181, 138);\n  background: rgb(190, 210, 196);\n  padding: 10px 20px;\n"]),
    _templateObject2 = _taggedTemplateLiteral(["\n  border: 1px solid white;\n  background: rgb(144, 181, 138);\n  outline: none;\n  height: 30px;\n  color: white;\n  cursor: pointer;\n  transition: all 0.2s linear;\n  :hover {\n    background: white;\n    color: #90b58a;\n    border: 2px solid rgb(144, 181, 138);\n  }\n"], ["\n  border: 1px solid white;\n  background: rgb(144, 181, 138);\n  outline: none;\n  height: 30px;\n  color: white;\n  cursor: pointer;\n  transition: all 0.2s linear;\n  :hover {\n    background: white;\n    color: #90b58a;\n    border: 2px solid rgb(144, 181, 138);\n  }\n"]);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

import React from "react";
import styled from "styled-components";

var Times = styled.p(_templateObject);
var Button = styled.button(_templateObject2);

var Comp2 = function (_React$Component) {
  _inherits(Comp2, _React$Component);

  function Comp2() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Comp2);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Comp2.__proto__ || Object.getPrototypeOf(Comp2)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      count: 0
    }, _this.handleNavigate = function () {
      _this.props.navigate("dashboard");
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Comp2, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return React.createElement(
        "div",
        null,
        React.createElement(
          "div",
          null,
          "\u5F53\u524D\u8DEF\u7531\uFF1A",
          this.props.path
        ),
        React.createElement(
          "div",
          null,
          "ID\uFF1A",
          this.props.id
        ),
        React.createElement(
          Times,
          null,
          "\u4F60 \u70B9\u51FB\u4E86 ",
          this.state.count,
          " \u6B21\u3002"
        ),
        React.createElement(
          Button,
          { onClick: function onClick() {
              return _this2.setState({ count: _this2.state.count + 1 });
            } },
          "\u70B9\u51FB\u8BA1\u7B97\u6B21\u6570"
        ),
        React.createElement(
          Button,
          { onClick: this.handleNavigate },
          "\u8DF3\u8F6C\u81F3ng\u8DEF\u7531-dashboard"
        )
      );
    }
  }]);

  return Comp2;
}(React.Component);

export default Comp2;