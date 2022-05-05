import styled from "styled-components";

export const SideBarLinks = styled.div`
  border-top: 1px dashed var(--main-bgc);
  padding: 0 10px;
  color: var(--main-bgc);
  scroll-behavior: auto;
  overflow-y: scroll;
  height: calc(100vh - 100px);
  padding-top: 10px;
  padding-bottom: 50px;
  position: absolute;
  background-color: var(--main-color);
  top: 40px;
  right: -120%;
  transition: left 500ms;
	
  a,
  a:link,
  a:hover,
  a:active,
  a:visited {
    color: var(--main-bgc);
  }
`;
