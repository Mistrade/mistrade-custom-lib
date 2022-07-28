import { FC } from 'react';
import { TextInputAdditionalAction } from "../types";
export interface InputActionProps {
    item: TextInputAdditionalAction;
    onSelect?: (action: TextInputAdditionalAction) => void;
    onDelete?: (action: TextInputAdditionalAction) => void;
}
export declare const StyledInputAction: import("styled-components").StyledComponent<"button", any, {}, never>;
export declare const InputAction: FC<InputActionProps>;
