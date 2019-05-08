import React, { Component } from "react";
import PropTypes from "prop-types";
import Select, { Option } from "rc-select";
import "rc-select/assets/index.css";

import Checkbox from "rc-checkbox";
import "rc-checkbox/assets/index.css";

import Trigger from "rc-trigger";
import "rc-trigger/assets/index.css";
let builtinPlacements = {
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
export default class Height extends Component {
  static propTypes = {
    /**
     * 单位配置
     */
    unitOption: PropTypes.array,
    /**
     * 结果
     */
    value: PropTypes.shape({
      isExact: PropTypes.bool,
      isRange: PropTypes.bool,
      hasRemark: PropTypes.bool,
      unit: PropTypes.string, // 单位
      start: PropTypes.string, // 如果是不是范围 取数组中第一个结果
      end: PropTypes.string,
      remark: PropTypes.string
    })
  };
  static defaultProps = {
    unitOption: [
      {
        value: "cm",
        text: "厘米"
      },
      {
        value: "m",
        text: "米"
      }
    ],
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
  };

  constructor(props) {
    super(props);
    let unit = props.value.unit;
    if (!unit) {
      unit = props.unitOption[1].value;
    }
    this.state = {
      ...Height.defaultProps.value,
      ...props.value,
      unit
    };
  }
  onChange = e => {
    this.setState(
      {
        [e.target.name]: e.target.value.trim()
      },
      () => {
        console.log(this.state);
      }
    );
  };
  changeUnit = value => {
    this.setState(
      {
        unit: value
      },
      () => {
        console.log(this.state);
      }
    );
  };
  proxyChangeIsExact = e => {
    this.setState(
      {
        isExact: !e.target.checked
      },
      () => {
        console.log(this.state);
      }
    );
  };
  renderCheckboxIsExact = isExact => {
    let checkbox = (
      <Checkbox defaultChecked onChange={this.proxyChangeIsExact} />
    );
    if (isExact) {
      checkbox = <Checkbox onChange={this.proxyChangeIsExact} />;
    }
    return (
      <label>
        {checkbox}
        模糊日期
      </label>
    );
  };
  proxyChangeisRange = e => {
    this.setState(
      {
        isRange: e.target.checked
      },
      () => {
        console.log(this.state);
      }
    );
  };
  renderCheckboxisRange = isRange => {
    let checkbox = <Checkbox onChange={this.proxyChangeisRange} />;
    if (isRange) {
      checkbox = <Checkbox defaultChecked onChange={this.proxyChangeisRange} />;
    }
    return (
      <label>
        {checkbox}
        是否是区间
      </label>
    );
  };
  proxyChangehasRemark = e => {
    this.setState(
      {
        hasRemark: e.target.checked
      },
      () => {
        console.log(this.state);
      }
    );
  };
  renderCheckboxhasRemark = hasRemark => {
    let checkbox = <Checkbox onChange={this.proxyChangehasRemark} />;
    if (hasRemark) {
      checkbox = (
        <Checkbox defaultChecked onChange={this.proxyChangehasRemark} />
      );
    }
    return (
      <label>
        {checkbox}
        是否有备注
      </label>
    );
  };

  render() {
    let { isExact, isRange, unit, hasRemark } = this.state;
    let exactCom = null;
    if (!isExact) {
      exactCom = <span className="ec-num__before">约</span>;
    }
    let endCom = null;
    if (isRange) {
      endCom = (
        <React.Fragment>
          <span className="ec-num__end-before">至</span>
          <input
            className="ec-num__input"
            name="end"
            placeholder="高度"
            onChange={this.onChange}
          />
        </React.Fragment>
      );
    }
    let remarkCom = null;
    if (hasRemark) {
      remarkCom = (
        <input
          className="ec-num__mark"
          placeholder="请输入备注"
          name="remark"
          onChange={this.onChange}
        />
      );
    }
    return (
      <div>
        <div className="ec-num">
          {exactCom}
          <input
            className="ec-num__input"
            name="start"
            placeholder="高度"
            onChange={this.onChange}
          />
          {endCom}
          <Select
            prefixCls="rc-select"
            className="ec-num__unit"
            value={unit}
            name="unit"
            onChange={this.changeUnit}
          >
            {this.props.unitOption.map(i => {
              return (
                <Option value={i.value} key={i.value}>
                  {i.text}
                </Option>
              );
            })}
          </Select>
          <Trigger
            popupPlacement={"right"}
            action={["hover"]}
            builtinPlacements={builtinPlacements}
            popup={
              <div className="ec-num__tool__triggle-popup">
                {this.renderCheckboxIsExact(isExact)}
                {this.renderCheckboxisRange(isRange)}
                {this.renderCheckboxhasRemark(hasRemark)}
              </div>
            }
          >
            <span className="ec-num__tool">...</span>
          </Trigger>
        </div>
        {remarkCom}
      </div>
    );
  }
}

