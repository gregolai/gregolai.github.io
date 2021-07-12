import React, { useContext, useState } from 'react';
import { startDrag } from 'pu2';
import { Context } from '../MusicPlayerProvider';

import MainPanelStore from './MainPanelStore';
import { Box, Flex } from '../../core/primitives';

export const DragHandle = () => {
	const [isHovering, setHovering] = useState(false);
	const { playerRef, isPlaylistOpen, setPlaylistOpen } = useContext(Context);
	const { setDragY, setDragging } = useContext(MainPanelStore.Context);

	return (
		<Flex
			alignItems="center"
			bottom="0px"
			height="42px"
			justifyContent="center"
			left="0px"
			position="absolute"
			width="100%"
			onClick={() => setPlaylistOpen(!isPlaylistOpen)}
			onMouseEnter={() => setHovering(true)}
			onMouseLeave={() => setHovering(false)}
			onMouseDown={(e) => {
				startDrag(e, {
					measureTarget: playerRef,
					distance: 0,
					onDragStart: () => {
						setDragging(true, 0);
					},
					onDrag: ({ clientX, clientY, localY, deltaY, ratioY }) => {
						setDragY(deltaY);
					},
					onDragEnd: ({ ratioY }) => {
						setDragging(false);
						setPlaylistOpen(ratioY < 0.5);
					}
				});
			}}
		>
			<Box
				background="linear-gradient(0deg, rgba(255,255,255,0.3), transparent)"
				height="100%"
				left="0px"
				opacity={isHovering ? '1' : '0'}
				position="absolute"
				top="0px"
				transition="all 300ms cubic-bezier(0.770, 0.060, 0.240, 0.925)"
				width="100%"
			/>
			<Box
				background="rgba(0,0,0,0.4)"
				height="2px"
				mt="14px"
				position="relative"
				transition="all 300ms cubic-bezier(0.770, 0.060, 0.240, 0.925)"
				width={isHovering ? '26px' : '12px'}
			/>
		</Flex>
	);
};
