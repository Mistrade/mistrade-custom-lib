import { CSSProperties, FlattenSimpleInterpolation } from 'styled-components';
import { ReactNode } from 'react';
export declare type FlexBlockProps = MarginProps & PaddingProps & FlexProps & WidthProps & HeightProps & FormalizationProps & PositionProps & CustomStyles & ChildrenProps & FontsProps;
export declare type UnitsType = string | number;
interface ChildrenProps {
    children?: ReactNode;
}
export interface WidthProps {
    width?: UnitsType;
    maxWidth?: UnitsType;
    minWidth?: UnitsType;
}
export interface PositionProps {
    position?: CSSProperties['position'];
}
export interface HeightProps {
    height?: UnitsType;
    maxHeight?: UnitsType;
    minHeight?: UnitsType;
}
export interface FormalizationProps {
    opacity?: CSSProperties['opacity'];
    bgColor?: CSSProperties['backgroundColor'];
    animation?: CSSProperties['animation'];
    border?: CSSProperties['border'];
    borderTop?: CSSProperties['borderTop'];
    borderRight?: CSSProperties['borderRight'];
    borderBottom?: CSSProperties['borderBottom'];
    borderLeft?: CSSProperties['borderLeft'];
    borderRadius?: CSSProperties['borderRadius'];
    overflow?: CSSProperties['overflow'];
    overflowY?: CSSProperties['overflowY'];
    overflowX?: CSSProperties['overflowX'];
    transform?: CSSProperties['transform'];
    gap?: CSSProperties['gap'];
}
export interface FlexProps {
    align?: CSSProperties['alignItems'];
    justify?: CSSProperties['justifyContent'];
    wrap?: CSSProperties['flexWrap'];
    direction?: CSSProperties['flexDirection'];
    grow?: CSSProperties['flexGrow'];
    shrink?: CSSProperties['flexShrink'];
    basis?: CSSProperties['flexBasis'];
    flex?: CSSProperties['flex'];
}
export interface MarginProps {
    mt?: UnitsType;
    mr?: UnitsType;
    mb?: UnitsType;
    ml?: UnitsType;
    m?: UnitsType;
}
export interface PaddingProps {
    pt?: UnitsType;
    pr?: UnitsType;
    pb?: UnitsType;
    pl?: UnitsType;
    p?: UnitsType;
}
export interface CustomStyles {
    additionalCss?: FlattenSimpleInterpolation;
}
export interface FontsProps {
    fSize?: CSSProperties['fontSize'];
    fWeight?: CSSProperties['fontWeight'];
    textAlign?: CSSProperties['textAlign'];
}
export declare type CustomMixin<T> = (_: T) => FlattenSimpleInterpolation;
export declare const pxToCssValue: (value: UnitsType) => string;
export declare const margins: CustomMixin<MarginProps>;
export declare const paddings: CustomMixin<PaddingProps>;
export declare const FlexBlock: import("styled-components").StyledComponent<"div", any, MarginProps & PaddingProps & FlexProps & WidthProps & HeightProps & FormalizationProps & PositionProps & CustomStyles & ChildrenProps & FontsProps, never>;
export {};
