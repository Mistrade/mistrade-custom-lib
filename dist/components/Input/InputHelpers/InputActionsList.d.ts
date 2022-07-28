import React, { ReactNode } from "react";
import { TextInputAdditionalAction, TextInputProps } from "../types";
export interface InputActionsListProps extends Pick<TextInputProps, 'actionHandler' | 'onDeleteAction'> {
    actions: Array<TextInputAdditionalAction>;
    actionsListTitle?: ReactNode;
}
export declare const ActionsListTitle: import("styled-components").StyledComponent<"span", any, {}, never>;
export declare const InputActionsList: React.FC<InputActionsListProps>;
