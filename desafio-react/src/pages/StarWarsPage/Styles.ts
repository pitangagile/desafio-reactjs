import styled from "@emotion/styled";
import { Link } from "react-router-dom";
export const Container = styled.div({
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
});

export const LinkStyled = styled(Link)`
  text-decoration: none;
`;
