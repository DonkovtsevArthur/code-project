import { styled } from "../../libs/styles";

export const WrapperContentStyle = styled.div`
  position: relative;
  width: 100%;
  padding: 10px;
  overflow-y: auto;

  .spinner {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;
