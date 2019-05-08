/**
 * @author xukai12
 * @email xukai12@baidu.com
 * @create date 2019-04-29 11:19:29
 * @modify date 2019-04-29 11:19:29
 * @file [description]
 */
import React, { Component } from "react";
import PropTypes from "prop-types";
export default class CardRef extends Component {
  static propTypes = {
    refs: PropTypes.array,
    addFun: PropTypes.func
  };
  static defaultProps = {
    refs: [1, 2, 3],
    addFun: () => {
      console.log('未处理添加方法');
    }
  };

  render() {
    let { refs, addFun } = this.props;
    return (
      <span className="ec-card-ref">
        <span className="ec-card-ref__item" onClick={addFun}>[+]</span>
        {refs.map(i => {
          return (
            <span className="ec-card-ref__item" key={i}>
              {i}
            </span>
          )
        })}
      </span>
    )
  }
}  