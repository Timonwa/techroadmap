import styled from "styled-components";
// variables;

export const SideBarLinks = styled.div`
  border-top: 1px dashed hsl(209, 41%, 22%);
  padding: 0 10px;
  color: hsl(209, 41%, 22%);
  scroll-behavior: auto;
  overflow-y: scroll;
  height: calc(100vh - 100px);
  padding-top: 10px;
  padding-bottom: 50px;
  position: absolute;
  background-color: hsl(212, 28%, 86%);
  top: 40px;
  right: -120%;
  transition: right 500ms;

  &.active {
    right: 0;
  }

  a:hover{
    color: hsl(209, 41%, 45%) !important;
  }

  a,
  a:link,
  a:active,
  a:visited {
    color: hsl(209, 41%, 22%);
  }

  //* side menu scrollbar
  &::-webkit-scrollbar {
    width: 5px;
  }

  &::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px white;
  }

  &::-webkit-scrollbar-thumb {
    background-color: hsl(209, 41%, 22%);
  }
`;
