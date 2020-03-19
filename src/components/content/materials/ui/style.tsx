import { styled } from "../../../../libs/styles";

export const WrapperMaterialStyle = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  .material-item {
    display: flex;
    width: 100%;
    img {
      border-radius: 2px;
    }
  }
  .material-item + .material-item {
    margin-top: 20px;
  }

  .material-item-info {
    display: flex;
    flex-direction: column;
    margin-left: 15px;
  }

  .material-item-title {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .material-item-btn {
    width: 20%;
  }
`;
