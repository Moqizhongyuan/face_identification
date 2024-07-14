import styled from "styled-components";

export const DetailWrapper = styled.div`
  .showContent {
    padding: 30px;
    display: flex;
    .content {
      flex: 1.2;
      height: 500px;
      overflow: hidden;

      img {
        width: 100%;
        object-fit: cover;
        height: 100%;
      }
    }

    .btn {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      cursor: auto;
    }
  }

  .showResult {
    padding: 30px;
  }
`;
