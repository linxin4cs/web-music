import React, { memo, useRef, useEffect } from "react";
import { useSelector, shallowEqual, useDispatch } from "react-redux";

import { getNewAlbumsAction } from "../../../../../../store/discover/recommend/actionCreators";

import { Carousel } from "antd";

import TopicHeader from "@/components/topic-header";
import AlbumCard from "@/components/album-card";

import NewAlbumWrapper from "./style";

const NewAlbum = memo(() => {
  const newAlbums = useSelector(
    (state) => state.getIn(["discover", "recommend"]).get("newAlbums"),
    shallowEqual
  );
  const dispatch = useDispatch();

  // other hooks
  const pageRef = useRef();
  useEffect(() => {
    dispatch(getNewAlbumsAction(10));
  }, [dispatch]);

  return (
    <NewAlbumWrapper>
      <TopicHeader title="新碟上架" />
      <div className="content">
        <button
          className="arrow arrow-left sprite_02"
          onClick={(e) => pageRef.current.prev()}
        ></button>
        <div className="album">
          <Carousel dots={false} ref={pageRef}>
            {[0, 1].map((item) => {
              return (
                <div key={item} className="page">
                  {newAlbums.slice(item * 5, (item + 1) * 5).map((album) => {
                    return (
                      <AlbumCard
                        key={album.id}
                        info={album}
                        size={100}
                        width={118}
                        bgp="-570px"
                      />
                    );
                  })}
                </div>
              );
            })}
          </Carousel>
        </div>
        <button
          className="arrow arrow-right sprite_02"
          onClick={(e) => pageRef.current.next()}
        ></button>
      </div>
    </NewAlbumWrapper>
  );
});

export default NewAlbum;
