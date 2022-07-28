import React, {ReactNode} from "react";
import {FlexBlock} from "../../Layout/FlexBlock";

interface InputAbsolutePositionContentProps {
	content?: ReactNode
}

export const InputAbsolutePositionContent: React.FC<InputAbsolutePositionContentProps> = ({content}) => {
	if(!content){
		return <></>
	}
	
	return (
		<FlexBlock position={'relative'} width={'100%'}>
			{content}
		</FlexBlock>
	)
}