import React, { ReactNode } from "react";
export interface InputErrorMessageProps {
    isDirty?: boolean;
    errorMessage?: ReactNode;
}
export declare const InputErrorMessage: React.FC<InputErrorMessageProps>;
