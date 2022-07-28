import styled from 'styled-components'
import {currentColor, defaultColor, disabledColor, hoverColor} from '../../../common/style-config'
import {FC, ReactNode, useCallback} from 'react'
import React from 'react'
import {TextInputAdditionalAction} from "../types";
import {ClearIcon} from 'mistrade-icon-lib'

export interface InputActionProps {
	item: TextInputAdditionalAction,
	onSelect?: (action: TextInputAdditionalAction) => void,
	onDelete?: (action: TextInputAdditionalAction) => void,
}

export const StyledInputAction = styled.button`
  & {
    outline: none;
    padding: 4px 6px;
    color: ${defaultColor};
    background-color: #fff;
    border: 1px solid ${defaultColor};
    max-width: 100%;
    align-items: center;
    flex-wrap: nowrap;
    display: flex;
    font-size: 14px;
    gap: 6px;
    border-radius: 4px;
    cursor: pointer;
  }

  &:hover {
    box-shadow: 0 0 4px 0 ${hoverColor};
  }
`

const DeleteBtn = styled.span`
  & {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 14px;
    height: 14px;
    padding: 6px;
  }

  &:hover {
    background-color: ${disabledColor};
    border-radius: 50%;
  }
`

export const InputAction: FC<InputActionProps> = ({item, onDelete, onSelect}) => {
	
	const selectHandler = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
		onSelect && onSelect(item)
	}, [onSelect, item])
	
	const deleteHandler = useCallback((e: React.MouseEvent<HTMLSpanElement>) => {
		e.stopPropagation()
		onDelete && onDelete(item)
	}, [onDelete, item])
	
	return (
		<StyledInputAction onClick={selectHandler}>
			<span>
				{item.title}
			</span>
			{onDelete && (
				<DeleteBtn onClick={deleteHandler}>
					<ClearIcon size={14}/>
				</DeleteBtn>
			)}
		</StyledInputAction>
	)
}
