import styled from "styled-components";

const HeaderRightWrapper = styled.div`
  display: flex;
  align-items: center;
  font-size: 12px;

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
`;

export default HeaderRightWrapper;