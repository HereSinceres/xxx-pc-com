"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("./node_modules/react"));

var _propTypes = _interopRequireDefault(require("./node_modules/prop-types"));

var _rcSelect = _interopRequireWildcard(require("./node_modules/rc-select"));

require("./node_modules/rc-select/assets/index.css");

var _rcCheckbox = _interopRequireDefault(require("./node_modules/rc-checkbox"));

require("./node_modules/rc-checkbox/assets/index.css");

var _rcTrigger = _interopRequireDefault(require("./node_modules/rc-trigger"));

require("./node_modules/rc-trigger/assets/index.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var builtinPlacements = {
  left: {
    points: ["cr", "cl"]
  },
  right: {
    points: ["cl", "cr"]
  },
  top: {
    points: ["bc", "tc"]
  },
  bottom: {
    points: ["tc", "bc"]
  },
  topLeft: {
    points: ["bl", "tl"]
  },
  topRight: {
    points: ["br", "tr"]
  },
  bottomRight: {
    points: ["tr", "br"]
  },
  bottomLeft: {
    points: ["tl", "bl"]
  }
};
/**
 *身高组件
 *
 * @export
 * @class index
 * @extends {Component}
 */

var Height =
/*#__PURE__*/
function (_Component) {
  _inherits(Height, _Component);

  function Height(props) {
    var _this;

    _classCallCheck(this, Height);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Height).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "onChange", function (e) {
      _this.setState(_defineProperty({}, e.target.name, e.target.value.trim()), function () {
        console.log(_this.state);
      });
    });

    _defineProperty(_assertThisInitialized(_this), "changeUnit", function (value) {
      _this.setState({
        unit: value
      }, function () {
        console.log(_this.state);
      });
    });

    _defineProperty(_assertThisInitialized(_this), "proxyChangeIsExact", function (e) {
      _this.setState({
        isExact: !e.target.checked
      }, function () {
        console.log(_this.state);
      });
    });

    _defineProperty(_assertThisInitialized(_this), "renderCheckboxIsExact", function (isExact) {
      var checkbox = _react["default"].createElement(_rcCheckbox["default"], {
        defaultChecked: true,
        onChange: _this.proxyChangeIsExact
      });

      if (isExact) {
        checkbox = _react["default"].createElement(_rcCheckbox["default"], {
          onChange: _this.proxyChangeIsExact
        });
      }

      return _react["default"].createElement("label", null, checkbox, "\u6A21\u7CCA\u65E5\u671F");
    });

    _defineProperty(_assertThisInitialized(_this), "proxyChangeisRange", function (e) {
      _this.setState({
        isRange: e.target.checked
      }, function () {
        console.log(_this.state);
      });
    });

    _defineProperty(_assertThisInitialized(_this), "renderCheckboxisRange", function (isRange) {
      var checkbox = _react["default"].createElement(_rcCheckbox["default"], {
        onChange: _this.proxyChangeisRange
      });

      if (isRange) {
        checkbox = _react["default"].createElement(_rcCheckbox["default"], {
          defaultChecked: true,
          onChange: _this.proxyChangeisRange
        });
      }

      return _react["default"].createElement("label", null, checkbox, "\u662F\u5426\u662F\u533A\u95F4");
    });

    _defineProperty(_assertThisInitialized(_this), "proxyChangehasRemark", function (e) {
      _this.setState({
        hasRemark: e.target.checked
      }, function () {
        console.log(_this.state);
      });
    });

    _defineProperty(_assertThisInitialized(_this), "renderCheckboxhasRemark", function (hasRemark) {
      var checkbox = _react["default"].createElement(_rcCheckbox["default"], {
        onChange: _this.proxyChangehasRemark
      });

      if (hasRemark) {
        checkbox = _react["default"].createElement(_rcCheckbox["default"], {
          defaultChecked: true,
          onChange: _this.proxyChangehasRemark
        });
      }

      return _react["default"].createElement("label", null, checkbox, "\u662F\u5426\u6709\u5907\u6CE8");
    });

    var unit = props.value.unit;

    if (!unit) {
      unit = props.unitOption[1].value;
    }

    _this.state = _objectSpread({}, Height.defaultProps.value, props.value, {
      unit: unit
    });
    return _this;
  }

  _createClass(Height, [{
    key: "render",
    value: function render() {
      var _this$state = this.state,
          isExact = _this$state.isExact,
          isRange = _this$state.isRange,
          unit = _this$state.unit,
          hasRemark = _this$state.hasRemark;
      var exactCom = null;

      if (!isExact) {
        exactCom = _react["default"].createElement("span", {
          className: "ec-num__before"
        }, "\u7EA6");
      }

      var endCom = null;

      if (isRange) {
        endCom = _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement("span", {
          className: "ec-num__end-before"
        }, "\u81F3"), _react["default"].createElement("input", {
          className: "ec-num__input",
          name: "end",
          placeholder: "\u9AD8\u5EA6",
          onChange: this.onChange
        }));
      }

      var remarkCom = null;

      if (hasRemark) {
        remarkCom = _react["default"].createElement("input", {
          className: "ec-num__mark",
          placeholder: "\u8BF7\u8F93\u5165\u5907\u6CE8",
          name: "remark",
          onChange: this.onChange
        });
      }

      return _react["default"].createElement("div", null, _react["default"].createElement("div", {
        className: "ec-num"
      }, exactCom, _react["default"].createElement("input", {
        className: "ec-num__input",
        name: "start",
        placeholder: "\u9AD8\u5EA6",
        onChange: this.onChange
      }), endCom, _react["default"].createElement(_rcSelect["default"], {
        prefixCls: "rc-select",
        className: "ec-num__unit",
        value: unit,
        name: "unit",
        onChange: this.changeUnit
      }, this.props.unitOption.map(function (i) {
        return _react["default"].createElement(_rcSelect.Option, {
          value: i.value,
          key: i.value
        }, i.text);
      })), _react["default"].createElement(_rcTrigger["default"], {
        popupPlacement: "right",
        action: ["hover"],
        builtinPlacements: builtinPlacements,
        popup: _react["default"].createElement("div", {
          className: "ec-num__tool__triggle-popup"
        }, this.renderCheckboxIsExact(isExact), this.renderCheckboxisRange(isRange), this.renderCheckboxhasRemark(hasRemark))
      }, _react["default"].createElement("span", {
        className: "ec-num__tool"
      }, "..."))), remarkCom);
    }
  }]);

  return Height;
}(_react.Component);

exports["default"] = Height;

_defineProperty(Height, "propTypes", {
  /**
   * 单位配置
   */
  unitOption: _propTypes["default"].array,

  /**
   * 结果
   */
  value: _propTypes["default"].shape({
    isExact: _propTypes["default"].bool,
    isRange: _propTypes["default"].bool,
    hasRemark: _propTypes["default"].bool,
    unit: _propTypes["default"].string,
    // 单位
    start: _propTypes["default"].string,
    // 如果是不是范围 取数组中第一个结果
    end: _propTypes["default"].string,
    remark: _propTypes["default"].string
  })
});

_defineProperty(Height, "defaultProps", {
  unitOption: [{
    value: "cm",
    text: "厘米"
  }, {
    value: "m",
    text: "米"
  }],
  value: {
    isExact: true,
    isRange: false,
    hasRemark: false,
    // 单位
    unit: null,
    // 第一个输入框
    start: null,
    // 第二个输入框
    end: null,
    // 如果有备注，备注内容是
    remark: null
  }
});