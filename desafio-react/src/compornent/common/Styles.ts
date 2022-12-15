import styled from "@emotion/styled";
import { Card, CardMedia, Typography } from "@mui/material";

export const CardMUI = styled(Card)`
  margin: 1rem;
  &:hover {
    background-color: #e4e4e4;
  }
`;
export const TypographyMUI = styled(Typography)`
  padding-left: 2px;
  margin: 1rem;
`;
export const TypoFooterMUI = styled(Typography)`
  padding-top: 2px;
  padding-left: 2px;
  margin: 1rem;
  font-size: 12px;
  font-weight: 400;
`;
export const CardMediaMUI = styled(CardMedia)`
  height: 140px;
  width: 220px;
`;
