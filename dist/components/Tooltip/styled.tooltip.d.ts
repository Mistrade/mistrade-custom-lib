import { OptionsTooltip } from './Tooltip';
export declare const TooltipWrapper: import("styled-components").StyledComponent<"span", any, {
    size: number;
}, never>;
export declare const TooltipContent: import("styled-components").StyledComponent<"span", any, {
    isVisible: boolean;
    left: number | string;
    top: number | string;
    opacity: number;
    placement: OptionsTooltip['placement'];
}, never>;
