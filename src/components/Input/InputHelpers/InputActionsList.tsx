import React, {ReactNode} from "react";
import {InputAction, InputActionProps} from "../Actions/InputAction";
import {FlexBlock} from "../../Layout/FlexBlock";
import {TextInputAdditionalAction, TextInputProps} from "../types";
import styled from "styled-components";

export interface InputActionsListProps extends Pick<TextInputProps, 'actionHandler' | 'onDeleteAction'> {
	actions: Array<TextInputAdditionalAction>,
	actionsListTitle?: ReactNode
}

export const ActionsListTitle = styled.span`
  & {
    font-style: normal;
    font-size: 12px;
    font-family: "Helvetica Neue", sans-serif;
    line-height: 1.1;
    display: flex;
    margin-bottom: 4px;
  }
`

export const InputActionsList: React.FC<InputActionsListProps> = ({
																																		actions,
																																		actionHandler,
																																		onDeleteAction,
																																		actionsListTitle
																																	}) => {
	if (!actions.length) {
		return <></>
	}
	
	return (
		<FlexBlock mt={6} pl={8} pr={8} width={'100%'} justify={'flex-start'} direction={'column'}>
			{actionsListTitle && (
				<>
					{typeof actionsListTitle === 'string' ? (
						<ActionsListTitle>{actionsListTitle}</ActionsListTitle>
					) : actionsListTitle}
				</>
			)}
			<FlexBlock width={'100%'} justify={'flex-start'} gap={6}>
				{actions.map(action => (
					<InputAction
						item={action}
						onSelect={(action) => actionHandler && actionHandler(action)}
						onDelete={onDeleteAction}
					/>
				))}
			</FlexBlock>
		</FlexBlock>
	)
}