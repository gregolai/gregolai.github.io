import React from 'react';
import { Box } from '../../core/primitives';

interface Props {
	color: string;
	colorPos?: string;
	overlay?: boolean;
	x: number | string;
	y: number | string;
	width: number | string;
	height?: number | string;
}

export const Splat: React.FC<Props> = ({
	color,
	colorPos = '0%',

	overlay,

	x,
	y,

	width,
	height = width
}) => (
	<Box
		position="absolute"
		transform="translate(-50%, -50%)"
		zIndex={overlay && '2'}
		style={{
			left: x,
			top: y,
			width,
			height,
			backgroundImage: `radial-gradient(${color} ${colorPos}, transparent 50%)`
		}}
	/>
);
