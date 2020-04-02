import { styled } from "../../libs/styles";

interface IStyle {
  isPopupShow: boolean;
}

export const WrapperPopupStyle = styled.div<IStyle>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: ${({ isPopupShow }) => (isPopupShow ? "block" : "none")};

  .popup-body {
    position: absolute;
    top: 50%;
    left: 50%;
    min-width: 500px;
    transform: translate(-50%, -50%);
    background-color: white;
    padding: 10px 15px;
  }
`;
