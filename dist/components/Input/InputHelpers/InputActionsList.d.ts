import React from "react";
import { TextInputAdditionalAction, TextInputProps } from "../types";
export interface InputActionsListProps extends Pick<TextInputProps, 'actionHandler' | 'onDeleteAction'> {
    actions: Array<TextInputAdditionalAction>;
}
export declare const InputActionsList: React.FC<InputActionsListProps>;
