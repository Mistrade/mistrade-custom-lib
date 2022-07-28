import { MarginProps, PaddingProps } from "../Layout/FlexBlock";
export interface HeadingProps extends MarginProps, PaddingProps {
    color?: string;
    fs?: number | string;
}
export declare const Heading: {
    H1: import("styled-components").StyledComponent<"h1", any, HeadingProps, never>;
    H2: import("styled-components").StyledComponent<"h2", any, HeadingProps, never>;
    H3: import("styled-components").StyledComponent<"h3", any, HeadingProps, never>;
    H4: import("styled-components").StyledComponent<"h4", any, HeadingProps, never>;
    H5: import("styled-components").StyledComponent<"h5", any, HeadingProps, never>;
    H6: import("styled-components").StyledComponent<"h6", any, HeadingProps, never>;
};
