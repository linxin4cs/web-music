import React, { memo, forwardRef } from "react";

import { Carousel } from "antd";

import BannerLeftWrapper from "./style";

const BannerLeft = memo(forwardRef((props, ref) => {

  return (
    <BannerLeftWrapper>
      <Carousel
        ref={ref}
        effect="fade"
        autoplay
        beforeChange={props.beforeChange}
      >
        {props.banners.map((item) => {
          return (
            <div className="banner-item" key={item.id}>
              <a href={item.url}>
                <img className="image" src={item.pictureUrl} alt={item.url} />
              </a>
            </div>
          );
        })}
      </Carousel>
    </BannerLeftWrapper>
  );
}));

export default BannerLeft;
