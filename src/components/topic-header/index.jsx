import React, { memo } from "react";

import PropTypes from "prop-types";

import TopicHeaderWrapper from "./style";

const TopicHeader = memo((props) => {
  const { title, items } = props;

  return (
    <TopicHeaderWrapper className="sprite_02">
      <div className="left">
        <div className="title">{title}</div>
        <div className="items">
          {items.map((item) => {
            return (
              <div className="item" key={item}>
                <a href="todo">{item}</a>
                <span className="divider">|</span>
              </div>
            );
          })}
        </div>
      </div>
      <div className="right">
        <a href="/todo">更多</a>
        <i className="icon sprite_02"></i>
      </div>
    </TopicHeaderWrapper>
  );
});

TopicHeader.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(PropTypes.string),
};

TopicHeader.defaultProps = {
  items: [],
};

export default TopicHeader;
