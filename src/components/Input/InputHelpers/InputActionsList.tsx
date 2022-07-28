import React from "react";
import {InputAction, InputActionProps} from "../Actions/InputAction";
import {FlexBlock} from "../../Layout/FlexBlock";
import {TextInputAdditionalAction, TextInputProps} from "../types";

export interface InputActionsListProps extends Pick<TextInputProps, 'actionHandler' | 'onDeleteAction'> {
	actions: Array<TextInputAdditionalAction>,
	
}

export const InputActionsList: React.FC<InputActionsListProps> = ({actions, actionHandler, onDeleteAction}) => {
	if (!actions.length) {
		return <></>
	}
	
	return (
		<FlexBlock mt={6} gap={6} pl={8} pr={8} width={'100%'} justify={'flex-start'} wrap={'wrap'}>
			{actions.map(action => (
				<InputAction
					item={action}
					onSelect={(action) => actionHandler && actionHandler(action)}
					onDelete={onDeleteAction}
				/>
			))}
		</FlexBlock>
	)
}