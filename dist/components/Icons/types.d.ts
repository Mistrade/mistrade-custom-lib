import React from 'react';
export interface IconProps {
    size?: number;
    color?: string;
    onClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
}
