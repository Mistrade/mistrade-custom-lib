import styled, {css} from 'styled-components'
import {currentColor, defaultColor, disabledColor} from '../../common/style-config'

const LeftIconPadding = css`
  padding: 12px 16px 12px 46px;
`

const RightIconPadding = css`
  padding: 12px 46px 12px 16px;
`

const DefaultPadding = css`
  padding: 12px 16px;
`

const IconPlacement = {
	left: LeftIconPadding,
	right: RightIconPadding
}

export const StyledInput = styled('input')<{ hasIcon?: boolean, iconPlacement?: 'left' | 'right' }>`
  width: 100%;
  border: 1px solid ${defaultColor};
  border-radius: 6px;
  outline: none;
  transition: all .3s ease-in;
  cursor: pointer;
  font-size: 16px;
  font-family: Helvetica, sans-serif;
  box-sizing: border-box;

  ${_ => _.hasIcon ? IconPlacement[_.iconPlacement || 'right'] : DefaultPadding}
  &:focus {
    border: 1px solid ${currentColor};
  }

  &:hover {
    box-shadow: 0 0 8px 0px ${currentColor};
  }
`

export const StyledLabel = styled('label')`
  & {
    width: fit-content;
    font-size: 16px;
    font-family: Helvetica, sans-serif;
    font-weight: normal;
    color: ${currentColor};
    line-height: 1;
    cursor: pointer;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`
