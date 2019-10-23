var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _templateObject = _taggedTemplateLiteral(["\n  input {\n    margin-right: 30px;\n    padding-left: 5px;\n    border: none;\n    outline: none;\n    height: 24px;\n    border-bottom: 1px solid white;\n    background: #90b58a;\n    color: white;\n  }\n  button {\n    border: 1px solid white;\n    background: none;\n    outline: none;\n    height: 28px;\n    width: 60px;\n    color: white;\n    transition: all 0.2s linear;\n    :hover {\n      background: white;\n      color: #90b58a;\n    }\n  }\n"], ["\n  input {\n    margin-right: 30px;\n    padding-left: 5px;\n    border: none;\n    outline: none;\n    height: 24px;\n    border-bottom: 1px solid white;\n    background: #90b58a;\n    color: white;\n  }\n  button {\n    border: 1px solid white;\n    background: none;\n    outline: none;\n    height: 28px;\n    width: 60px;\n    color: white;\n    transition: all 0.2s linear;\n    :hover {\n      background: white;\n      color: #90b58a;\n    }\n  }\n"]),
    _templateObject2 = _taggedTemplateLiteral(["\n  background: #90b58a;\n  margin: 10px 0;\n  padding: 15px 10px;\n  color: white;\n  span {\n    font-size: 14px;\n    position: relative;\n    top: 1px;\n    color: #057104;\n  }\n"], ["\n  background: #90b58a;\n  margin: 10px 0;\n  padding: 15px 10px;\n  color: white;\n  span {\n    font-size: 14px;\n    position: relative;\n    top: 1px;\n    color: #057104;\n  }\n"]),
    _templateObject3 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  background: #bed2c4;\n  margin-top: 10px;\n  margin-bottom: 10px;\n  cursor: pointer;\n  transition: all 0.1s linear;\n  font-size: 12px;\n  :hover {\n    background: #90b58a;\n    /* padding: 15px 10px; */\n    /* margin: 0 !important; */\n    box-shadow: 0 5px 15px #bed2c4;\n  }\n  div {\n    margin-right: 10px;\n    padding: 12px 10px;\n  }\n  div:first-child {\n    width: 45px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background: #0b4800;\n    padding: 12px 0;\n    color: white;\n  }\n  div:nth-child(2) {\n    width: 150px;\n  }\n  div:nth-child(3) {\n    width: 300px;\n  }\n  div:last-child {\n    flex: 1;\n  }\n  .label {\n    color: #1f751a;\n  }\n  .text {\n    color: #0b4800;\n  }\n  .tag {\n    border: 1px solid white;\n    display: inline-block;\n    padding: 0 3px;\n    margin-right: 5px;\n    font-size: 10px;\n    border-radius: 3px;\n    background: white;\n    color: #90b58a;\n  }\n  .tag-match {\n    border: 1px solid #ffac32;\n    display: inline-block;\n    padding: 0 3px;\n    margin-right: 5px;\n    font-size: 10px;\n    border-radius: 3px;\n    background: #ffac32;\n    color: white;\n  }\n"], ["\n  display: flex;\n  align-items: center;\n  background: #bed2c4;\n  margin-top: 10px;\n  margin-bottom: 10px;\n  cursor: pointer;\n  transition: all 0.1s linear;\n  font-size: 12px;\n  :hover {\n    background: #90b58a;\n    /* padding: 15px 10px; */\n    /* margin: 0 !important; */\n    box-shadow: 0 5px 15px #bed2c4;\n  }\n  div {\n    margin-right: 10px;\n    padding: 12px 10px;\n  }\n  div:first-child {\n    width: 45px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background: #0b4800;\n    padding: 12px 0;\n    color: white;\n  }\n  div:nth-child(2) {\n    width: 150px;\n  }\n  div:nth-child(3) {\n    width: 300px;\n  }\n  div:last-child {\n    flex: 1;\n  }\n  .label {\n    color: #1f751a;\n  }\n  .text {\n    color: #0b4800;\n  }\n  .tag {\n    border: 1px solid white;\n    display: inline-block;\n    padding: 0 3px;\n    margin-right: 5px;\n    font-size: 10px;\n    border-radius: 3px;\n    background: white;\n    color: #90b58a;\n  }\n  .tag-match {\n    border: 1px solid #ffac32;\n    display: inline-block;\n    padding: 0 3px;\n    margin-right: 5px;\n    font-size: 10px;\n    border-radius: 3px;\n    background: #ffac32;\n    color: white;\n  }\n"]),
    _templateObject4 = _taggedTemplateLiteral(["\n  background: #bed2c4;\n  margin: 10px 0;\n  padding: 8px;\n  font-size: 12px;\n  color: white;\n"], ["\n  background: #bed2c4;\n  margin: 10px 0;\n  padding: 8px;\n  font-size: 12px;\n  color: white;\n"]),
    _templateObject5 = _taggedTemplateLiteral(["\n0% {\n  background: #bed2c4;\n}\n\n25% {\n  background: #90b58a;\n}\n\n50% {\n  background: #1f751a;\n}\n\n75% {\n  background: #90b58a;\n}\n\n100% {\n  background: #bed2c4;\n}\n"], ["\n0% {\n  background: #bed2c4;\n}\n\n25% {\n  background: #90b58a;\n}\n\n50% {\n  background: #1f751a;\n}\n\n75% {\n  background: #90b58a;\n}\n\n100% {\n  background: #bed2c4;\n}\n"]),
    _templateObject6 = _taggedTemplateLiteral([""], [""]),
    _templateObject7 = _taggedTemplateLiteral(["\n  animation: ", " infinite 2s linear;\n"], ["\n  animation: ", " infinite 2s linear;\n"]);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

import React, { useState, useEffect } from "react";
import { totalData } from "./comp3.data.js";
import styled, { keyframes } from "styled-components";
var Box = styled.div(_templateObject);
var FormBox = styled.div(_templateObject2);

var ListItem = styled.div(_templateObject3);
var Tooltip = styled.div(_templateObject4);
var A_loading = keyframes(_templateObject5);
var NoData = styled(Tooltip)(_templateObject6);
var Loading = styled(Tooltip)(_templateObject7, A_loading);
function Comp3(props) {
  var _useState = useState(0),
      _useState2 = _slicedToArray(_useState, 2),
      count = _useState2[0],
      setCount = _useState2[1];

  var _useState3 = useState({ name: "", job: "", position: "" }),
      _useState4 = _slicedToArray(_useState3, 2),
      person = _useState4[0],
      setPerson = _useState4[1];

  var _useState5 = useState({}),
      _useState6 = _slicedToArray(_useState5, 2),
      param = _useState6[0],
      setParam = _useState6[1];

  var _useState7 = useState([]),
      _useState8 = _slicedToArray(_useState7, 2),
      dataList = _useState8[0],
      setDataList = _useState8[1];

  var _useState9 = useState(false),
      _useState10 = _slicedToArray(_useState9, 2),
      loading = _useState10[0],
      setLoading = _useState10[1];

  useEffect(function () {
    var id = setInterval(function () {
      setCount(function (c) {
        return c + 1;
      });
    }, 1000);
    return function () {
      console.log("%c！组件%ccomp3%c定时器已清除", "color:#00BFFF;", "color:#f90;", "color:#00BFFF;");
      clearInterval(id);
    };
  }, []);

  var handleSubmit = function handleSubmit() {
    setParam(Object.assign({}, param, person));
  };

  var handleReset = function handleReset() {
    setPerson({ name: "", job: "", position: "" });
    setParam({});
  };

  //查询
  useEffect(function () {
    fetchData(param).then(function (res) {
      setDataList(res);
    });
  }, [param]);

  var fetchData = function fetchData(param) {
    setLoading(true);

    return new Promise(function (resolve, reject) {
      var res = totalData;

      var _loop = function _loop(i) {
        res = res.filter(function (k) {
          if (!param[i]) {
            return k;
          } else {
            if (k[i].constructor.toString().indexOf("Array") > -1) {
              return k[i].indexOf(param[i]) > -1;
            } else if (k[i].constructor.toString().indexOf("String") > -1) {
              return k[i].indexOf(param[i]) > -1;
            }
          }
          return null;
        });
      };

      for (var i in param) {
        _loop(i);
      }
      setTimeout(function () {
        setLoading(false);
        resolve(res);
      }, 1000);
    });
  };

  var handleDetail = function handleDetail(id) {
    props.navigateWithQueryParams("detail", id);
  };
  return React.createElement(
    Box,
    null,
    React.createElement(
      "h1",
      null,
      count
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
      "ID\uFF1A",
      props.id
    ),
    React.createElement(
      "div",
      null,
      React.createElement(
        FormBox,
        null,
        React.createElement(
          "span",
          null,
          "\u79F0\u8C13\uFF1A"
        ),
        React.createElement("input", {
          type: "text",
          value: person.name,
          onChange: function onChange(e) {
            setPerson(Object.assign({}, person, { name: e.target.value }));
          }
        }),
        React.createElement(
          "span",
          null,
          "\u804C\u4E1A\uFF1A"
        ),
        React.createElement("input", {
          type: "text",
          value: person.job,
          onChange: function onChange(e) {
            setPerson(Object.assign({}, person, { job: e.target.value }));
          }
        }),
        React.createElement(
          "span",
          null,
          "\u5E38\u8D70\u8DEF\u7EBF\uFF1A"
        ),
        React.createElement("input", {
          type: "text",
          value: person.position,
          onChange: function onChange(e) {
            setPerson(Object.assign({}, person, { position: e.target.value }));
          }
        }),
        React.createElement(
          "button",
          { onClick: handleSubmit },
          "\u67E5\u8BE2"
        ),
        "\xA0\xA0\xA0\xA0",
        React.createElement(
          "button",
          { onClick: handleReset },
          "\u91CD\u7F6E"
        )
      ),
      React.createElement(
        "div",
        null,
        !loading ? dataList && dataList.length > 0 ? dataList.map(function (k, i) {
          return React.createElement(
            ListItem,
            {
              key: i,
              onClick: function onClick() {
                handleDetail(i);
              }
            },
            React.createElement(
              "div",
              null,
              i + 1
            ),
            React.createElement(
              "div",
              null,
              React.createElement(
                "span",
                { className: "label" },
                "\u59D3\u540D\uFF1A"
              ),
              React.createElement(
                "span",
                { className: "text" },
                k.name ? k.name.split("_")[0] : ""
              )
            ),
            React.createElement(
              "div",
              null,
              React.createElement(
                "span",
                { className: "label" },
                "\u804C\u4E1A\uFF1A"
              ),
              k.job.map(function (j, l) {
                return React.createElement(
                  "span",
                  {
                    key: l,
                    className: j === param.job ? "text tag tag-match" : "text tag"
                  },
                  j
                );
              })
            ),
            React.createElement(
              "div",
              null,
              React.createElement(
                "span",
                { className: "label" },
                "\u5E38\u8D70\u8DEF\u7EBF\uFF1A"
              ),
              k.position.map(function (j, l) {
                return React.createElement(
                  "span",
                  {
                    key: l,
                    className: j === param.position ? "text tag tag-match" : "text tag"
                  },
                  j
                );
              })
            )
          );
        }) : React.createElement(
          NoData,
          { className: "tooltip-item nodata" },
          "\u5565\u90FD\u6CA1\u6709\u554A..."
        ) : React.createElement(
          Loading,
          null,
          "\u6B63\u5728\u52A0\u8F7D\u4E2D..."
        )
      )
    )
  );
}

export default Comp3;