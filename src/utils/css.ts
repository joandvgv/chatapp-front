import { css, FlattenSimpleInterpolation } from "styled-components";

export type Align = "middle" | "bottom" | "center" | "top";
export type FlexDirection =
  | "column"
  | "column-reverse"
  | "inherit"
  | "initial"
  | "revert"
  | "unset"
  | "row"
  | "row-reverse";

export const getAlign = (align: Align): FlattenSimpleInterpolation => css`
  align-items: ${align || "top"};
`;

export const getPadding = (padding?: string): FlattenSimpleInterpolation => css`
  padding: ${padding};
`;

export const getDirection = (
  direction?: FlexDirection
): FlattenSimpleInterpolation => css`
  flex-direction: ${direction};
`;
