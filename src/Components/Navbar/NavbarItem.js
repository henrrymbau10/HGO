import styled from "styled-components";

export const NavMobile = styled.div`
  svg {
    color: white;
  }
`;

export const Menu = styled.div`
  display: flex;
  background: #7bc042;
  position: fixed;
  left: ${({ open }) => (open ? "0" : "-100%")};
  width: 100%;
  height: 100vh;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  transition: 2 all ease;
  top: 0;
  z-index: 9;

  p {
    color: #f4f1eb;
    font-size: 16px;
    padding: 1rem 0;
  }

  .p-menu {
    margin-bottom: 9rem;
  }
`;

export const MobileIcon = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;

  svg {
    color: black;
    margin-left: 1rem;
  }
`;

export const MobileIcon2 = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;

  svg {
    color: #f4f1eb;
    position: absolute;
    top: 2rem;
    right: 2rem;
  }
`;
