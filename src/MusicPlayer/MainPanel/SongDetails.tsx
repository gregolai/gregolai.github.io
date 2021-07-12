import React, { useContext } from 'react';
import { Context } from '../MusicPlayerProvider';
import { Flex, Box } from '../../core/primitives';

export const SongDetails = (props) => {
	const { currentSong, isPlaylistOpen } = useContext(Context);
	if (!currentSong) {
		return null;
	}

	return (
		<Flex
			alignItems="center"
			flexDirection="column"
			left="0px"
			position="absolute"
			top={isPlaylistOpen ? '400px' : '60px'}
			transition="all 600ms cubic-bezier(0.770, 0.060, 0.240, 0.925)"
			width="100%"
		>
			<Box fontSize="15px" color="rgba(0,0,0,0.6)">
				{currentSong.title}
			</Box>
			<Box mt="4px" fontSize="11px" color="rgba(0,0,0,0.4)">
				{currentSong.artist}
			</Box>
		</Flex>
	);
};
