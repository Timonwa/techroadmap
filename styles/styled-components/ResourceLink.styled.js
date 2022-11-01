import styled from "styled-components";

export const ResourceLink = styled.li`
  list-style-type: disc;
  margin-bottom: 15px;
  a {
    border-bottom: 1px solid hsl(212, 28%, 86%);
    transition: color 500ms ease-in-out;
  }
  a:hover {
    color: #fff;
  }
`;
