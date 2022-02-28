import { Col } from "antd";
import styled from "styled-components";
import {
  FlexDirection,
  getAlign,
  getPadding,
  Align,
  getDirection,
} from "../../utils/css";

export const FlexCol = styled(Col)<{
  align?: Align;
  padding?: string;
  direction?: FlexDirection;
}>`
  display: flex;
  ${(props) => props.align && getAlign(props.align)}
  ${(props) => props.padding && getPadding(props.padding)}
  ${(props) => props.direction && getDirection(props.direction)}
`;
