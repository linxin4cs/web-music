import styled from "styled-components";

const BannerWrapper = styled.div`
  background: url(${(props) => props.bgImage}) center center/6000px;

  .center {
    height: 270px;
    background-color: red;

    display: flex;
    position: relative;
  }
`;

export default BannerWrapper;
