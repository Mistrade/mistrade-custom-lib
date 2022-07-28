import styled, {css} from "styled-components";
import {darkColor} from "../../common/style-config";
import {MarginProps, margins, PaddingProps, paddings, pxToCssValue} from "../Layout/FlexBlock";

const DefaultStyles = css`
  & {
    font-family: "Helvetica Neue", sans-serif;
    font-weight: bold;
    margin: 0;
    color: ${darkColor};
    font-style: normal;
  }
`

export interface HeadingProps extends MarginProps, PaddingProps {
	color?: string,
	fs?: number | string,
}

export const Heading = {
	H1: styled('h1')<HeadingProps>`
    & {
      ${DefaultStyles};
      font-size: ${_ => _.fs ? pxToCssValue(_.fs) : '28px'};
      color: ${_ => _.color || darkColor};
      ${_ => margins(_)};
      ${_ => paddings(_)};
      line-height: 1.1;
    }
	`,
	H2: styled('h2')<HeadingProps>`
    & {
      ${DefaultStyles};
      font-size: ${_ => _.fs ? pxToCssValue(_.fs) : '24px'};
      color: ${_ => _.color || darkColor};
      ${_ => margins(_)};
      ${_ => paddings(_)};
      line-height: 1
    }
	`,
	H3: styled('h3')<HeadingProps>`
    & {
      ${DefaultStyles};
      font-size: ${_ => _.fs ? pxToCssValue(_.fs) : '22px'};
      color: ${_ => _.color || darkColor};
      ${_ => margins(_)};
      ${_ => paddings(_)}
    }
	`,
	H4: styled('h4')<HeadingProps>`
    & {
      ${DefaultStyles};
      font-size: ${_ => _.fs ? pxToCssValue(_.fs) : '20px'};
      color: ${_ => _.color || darkColor};
      ${_ => margins(_)};
      ${_ => paddings(_)}
    }
	`,
	H5: styled('h5')<HeadingProps>`
    & {
      ${DefaultStyles};
      font-size: ${_ => _.fs ? pxToCssValue(_.fs) : '18px'};
      color: ${_ => _.color || darkColor};
      ${_ => margins(_)};
      ${_ => paddings(_)}
    }
	`,
	H6: styled('h6')<HeadingProps>`
    & {
      ${DefaultStyles};
      font-size: ${_ => _.fs ? pxToCssValue(_.fs) : '16px'};
      color: ${_ => _.color || darkColor};
      ${_ => margins(_)};
      ${_ => paddings(_)}
    }
	`
}