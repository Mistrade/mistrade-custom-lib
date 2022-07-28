import React, { ReactNode } from "react";
import { FlexBlockProps } from "../Layout/FlexBlock";
import { TooltipProps } from "../Tooltip/Tooltip";
export interface DefaultTextInputProps {
    inputId?: string;
    label?: ReactNode;
    value: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
    onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
    placeholder?: string;
    isDirty?: boolean;
    errorMessage?: ReactNode;
    children?: ReactNode;
    readOnly?: boolean;
    icon?: ReactNode;
    iconPlacement?: 'left' | 'right';
    actions?: Array<TextInputAdditionalAction>;
    actionHandler?: (action: TextInputAdditionalAction) => void;
    onDeleteAction?: (action: TextInputAdditionalAction) => void;
    isLoading?: boolean;
    tooltipText?: string;
    tooltipIcon?: ReactNode;
    tooltipPlacement?: TooltipProps['placement'];
}
export interface TextInputAdditionalAction {
    title: string;
    actionKey: string;
}
export interface TextInputProps extends DefaultTextInputProps {
    containerProps?: FlexBlockProps;
    onClick?: (e: React.MouseEvent<HTMLInputElement>) => void;
    onClear?: (e: React.MouseEvent<HTMLElement>) => void;
}
