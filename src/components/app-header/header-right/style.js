import styled from "styled-components";

const HeaderRightWrapper = styled.div`
  display: flex;
  align-items: center;
  font-size: 12px;

  a {
    text-decoration: none;
  }

  .search {
    width: 158px;
    height: 32px;
    border-radius: 16px;

    input {
      &::placeholder {
        font-size: 12px;
      }
    }
  }

  .author-center {
    width: 90px;
    height: 32px;
    border: 1px solid #666;
    border-radius: 16px;
    line-height: 30px;
    text-align: center;
    margin: 0 16px;
    background-color: transparent;
    color: #ccc;
  }
`;

export default HeaderRightWrapper;