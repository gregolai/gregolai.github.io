import React, { useContext } from 'react';
import { Context } from '../MusicPlayerProvider';
import { Box, Button, Flex } from '../../core/primitives';

const Progress = ({ percent }) => {
	return (
		<Box
			background="black"
			height="100%"
			left="0px"
			position="absolute"
			top="0px"
			transition="width 100ms linear"
			zIndex="-1"
			style={{
				width: `${percent}%`
			}}
		/>
	);
};

export const PlaylistEntry = ({ song }) => {
	const { bufferingSongId, bufferingSongProgress, bufferAndPlaySong, currentSong } = useContext(Context);
	const isCurrent = currentSong && currentSong.id === song.id;

	return (
		<Flex
			alignItems="center"
			justifyContent="space-betweeen"
			position="relative"
			px="16px"
			py="14px"
			css={{
				':first-of-type': {
					pt: '30px'
				},
				':last-of-type': {
					pb: '30px'
				},
				':not(:first-of-type)': {
					borderTop: '1px solid rgba(255,255,255,0.3)'
				},
				':not(:last-of-type)': {
					borderBottom: '1px solid rgba(0,0,0,0.2)'
				}
			}}
			onClick={() => {
				bufferAndPlaySong(song);
			}}
		>
			<Button
				background={isCurrent ? 'yellow' : 'white'}
				borderRadius="50%"
				height="24px"
				width="24px"
			/>
			<Box flex="1" pl="8px">
				<Box fontSize="11px" letterSpacing="0.4px" color="rgba(255,255,255,0.8)">
					{song.title}
				</Box>
				<Box color="rgba(255,255,255,0.5)" fontSize="9px" letterSpacing="0.8px">
					{song.artist}
				</Box>
			</Box>
			<Box color="rgba(255, 255, 255, 0.6)" fontSize="10px" letterSpacing="0.8px">
				{song.duration}
			</Box>
			{bufferingSongId === song.id && <Progress percent={bufferingSongProgress} />}
		</Flex>
	);
};
