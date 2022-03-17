import React, { memo, useState, useEffect, useRef } from "react";
import { useSelector, shallowEqual, useDispatch } from "react-redux";

import { getTopBannersAction } from "@/store/discover/recommend/actionCreators";

import BannerLeft from "./banner-left";
import BannerRight from "./banner-right";
import BannerControl from "./banner-control";

import BannerWrapper from "./style";

const Banner = memo(() => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const dispatch = useDispatch();
  const banners = useSelector(
    (state) => state.getIn(["discover", "recommend"]).get("topBanners"),
    shallowEqual
  );

  const bannerRef = useRef();
  useEffect(() => {
    dispatch(getTopBannersAction());
  }, [dispatch]);

  const bgImage =
    banners[currentIndex] &&
    banners[currentIndex].pictureUrl + "?imageView&blur=40x20";
  const beforeChange = (from, to) => {
    setCurrentIndex(to);
  };

  return (
    <BannerWrapper bgImage={bgImage}>
      <div className="center wrap-v2">
        <BannerLeft
          banners={banners}
          currentIndex={currentIndex}
          beforeChange={beforeChange}
          ref={bannerRef}
        />
        <BannerRight />
        {bannerRef.current && <BannerControl toPre={bannerRef.current.prev} toNext={bannerRef.current.next} />}
      </div>
    </BannerWrapper>
  );
});

export default Banner;
