import { FC, ReactNode } from 'react';
import { IconProps } from 'mistrade-icon-lib/dist/types';
export interface TooltipProps {
    children?: ReactNode;
    text: string;
    placement?: 'top' | 'bottom' | 'right';
    bodyColor?: string;
}
export interface OptionsTooltip {
    state: boolean;
    top: number | string;
    left: string | number;
    placement: TooltipProps['placement'];
}
export declare const Tooltip: FC<TooltipProps & IconProps>;
