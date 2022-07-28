import React, {FC} from "react";
import {IconProps} from "./types";
import {FlexBlock, FlexBlockProps} from "../Layout/FlexBlock";
import {currentColor} from "../../common/style-config";

export const ClearIcon: FC<IconProps & FlexBlockProps> = ({
																														size = 24,
																														color = currentColor,
																														...props
																													}) => {
	return (
		<FlexBlock {...props} align={'center'} justify={'center'}>
			<svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img"
					 width={size} height={size} preserveAspectRatio="xMidYMid meet" viewBox="0 0 48 48">
				<mask id="svgIDb">
					<g fill="none">
						<g stroke="#fff" clipPath="url(#svgIDa)">
							<path fill="#fff" strokeLinejoin="round" strokeWidth="4.302"
										d="M44.782 24.17L31.918 7.1L14.135 20.5L27.5 37l3.356-2.336L44.782 24.17Z"/>
							<path strokeLinejoin="round" strokeWidth="4.302"
										d="m27.5 37l-3.839 3.075l-10.563-.001l-2.6-3.45l-6.433-8.536L14.5 20.225"/>
							<path strokeLinecap="round" strokeWidth="4.5" d="M13.206 40.072h31.36"/>
						</g>
						<defs>
							<clipPath id="svgIDa">
								<path fill={color} d="M0 0h48v48H0z"/>
							</clipPath>
						</defs>
					</g>
				</mask>
				<path fill={color} d="M0 0h48v48H0z" mask="url(#svgIDb)"/>
			</svg>
		</FlexBlock>
	)
}