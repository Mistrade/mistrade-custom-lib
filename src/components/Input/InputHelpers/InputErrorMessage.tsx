import React, {ReactNode} from "react";
import {css} from "styled-components";
import {FlexBlock} from "../../Layout/FlexBlock";

export interface InputErrorMessageProps {
	isDirty?: boolean,
	errorMessage?: ReactNode
}

export const InputErrorMessage: React.FC<InputErrorMessageProps> = ({isDirty, errorMessage}) => {
	if (!isDirty || !errorMessage) {
		return <></>
	}
	
	return (
		<FlexBlock
			mt={6}
			pl={8}
			pr={8}
			width={'100%'}
			position={'relative'}
			additionalCss={css`
        color: #ff5e5e;
        font-size: 12px;
        font-weight: bold
			`}
		>
			{errorMessage}
		</FlexBlock>
	)
}