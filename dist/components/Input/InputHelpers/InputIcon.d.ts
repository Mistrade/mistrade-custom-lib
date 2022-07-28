import React from "react";
import { TextInputProps } from "../types";
export declare type InputIconProps = Pick<TextInputProps, 'iconPlacement' | 'icon' | 'isLoading' | 'onClear'>;
export declare const InputIcon: React.FC<InputIconProps>;
