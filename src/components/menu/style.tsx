import { styled, colors } from "../../libs/styles/index";

export const MenuStyle = styled.div`
  border-right: 1px solid ${colors.gray};

  .active {
    .menu-item {
      transition: 0.2s ease;
      background-color: ${colors.gray};
    }
  }
`;
