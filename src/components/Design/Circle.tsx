import styled from "styled-components";
import {disabledColor} from "../../common/style-config";

export const Circle = styled.span<{ size?: number }>`
  & {
    display: flex;
    justify-content: center;
    align-items: center;
    width: ${_ => _.size || 24}px;
    height: ${_ => _.size || 24}px;
    padding: 6px;
		cursor: pointer;
  }

  &:hover {
    background-color: ${disabledColor};
    border-radius: 50%;
  }
`