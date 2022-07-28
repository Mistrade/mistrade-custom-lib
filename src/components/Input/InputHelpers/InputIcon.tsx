import React from "react";
import {css} from "styled-components";
import {LoaderIcon} from "../../Icons/LoaderIcon";
import {FlexBlock} from "../../Layout/FlexBlock";
import {TextInputProps} from "../types";

export type InputIconProps = Pick<TextInputProps, 'iconPlacement' | 'icon' | 'isLoading' | 'onClear'>

export const InputIcon: React.FC<InputIconProps> = ({icon, iconPlacement, isLoading, onClear}) => {
	if (!icon && !isLoading && !onClear) {
		return <></>
	}
	
	return (
		<FlexBlock
			position={'absolute'}
			height={30}
			width={30}
			overflow={'hidden'}
			justify={iconPlacement === 'right' ? 'flex-end' : 'center'}
			align={'center'}
			additionalCss={css`
        top: 50%;
        transform: translateY(-50%);
        ${iconPlacement === 'right' ? css`right: 10px` : css`left: 10px;`};
			`}
		>
			{isLoading ? <LoaderIcon/> : icon || <></>}
		</FlexBlock>
	)
}