import React, {forwardRef} from 'react'
import {StyledInput, StyledLabel} from './Input.styled'
import {FlexBlock} from '../../index'
import {InputActionsList} from "./InputHelpers/InputActionsList";
import {InputErrorMessage} from "./InputHelpers/InputErrorMessage";
import {InputAbsolutePositionContent} from "./InputHelpers/InputAbsolutePositionContent";
import {InputIcon} from "./InputHelpers/InputIcon";
import {TextInputProps} from "./types";
import {Tooltip} from "../Tooltip/Tooltip";
import {currentColor} from "../../common/style-config";

export const TextInput = forwardRef<HTMLInputElement, TextInputProps>(({
																																				 value,
																																				 onBlur,
																																				 onFocus,
																																				 onChange,
																																				 label,
																																				 placeholder,
																																				 isDirty,
																																				 errorMessage,
																																				 children,
																																				 readOnly,
																																				 inputId,
																																				 containerProps,
																																				 icon,
																																				 actions,
																																				 actionHandler,
																																				 iconPlacement = 'right',
																																				 onDeleteAction,
																																				 isLoading,
																																				 tooltipIcon,
																																				 tooltipText,
																																				 onClick,
																																				 onClear,
																																				 tooltipPlacement,
																																				 tooltipIconColor = currentColor,
																																				 actionsListTitle
																																			 }, ref) => {
	
	//Добавить иконку с действием - очистить
	return (
		<FlexBlock {...containerProps} direction={'row'} width={'100%'}>
			<FlexBlock
				width={'100%'}
				position={'relative'}
				direction={'column'}
			>
				<FlexBlock
					width={'100%'}
					align={'center'}
					justify={'flex-start'}
					mb={8}
					pl={6}
					pr={6}
					gap={6}
				>
					<StyledLabel htmlFor={inputId}>
						{label}
					</StyledLabel>
					{tooltipText && (
						<Tooltip
							text={tooltipText}
							color={tooltipIconColor}
							placement={tooltipPlacement || 'top'}
							children={tooltipIcon || undefined}
						/>
					)}
				</FlexBlock>
				<FlexBlock
					position={'relative'}
					width={'100%'}
					direction={'column'}
				>
					<StyledInput
						hasIcon={!!icon}
						id={inputId}
						ref={ref}
						iconPlacement={iconPlacement}
						placeholder={placeholder}
						value={value}
						onChange={onChange}
						onBlur={onBlur}
						onFocus={onFocus}
						readOnly={!!readOnly}
						onClick={onClick}
					/>
					<InputIcon
						icon={icon}
						iconPlacement={iconPlacement}
						isLoading={isLoading}
						onClear={!!value.length ? onClear : undefined}
					/>
					<InputAbsolutePositionContent
						content={children}
					/>
				</FlexBlock>
				<InputErrorMessage isDirty={isDirty} errorMessage={errorMessage || ''}/>
				<InputActionsList
					actions={actions || []}
					actionHandler={actionHandler}
					onDeleteAction={onDeleteAction}
					actionsListTitle={actionsListTitle}
				/>
			</FlexBlock>
		</FlexBlock>
	
	)
})
