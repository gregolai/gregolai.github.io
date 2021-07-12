import React, { useContext } from 'react';
import { PlaylistEntry } from './PlaylistEntry';
import { Context } from '../MusicPlayerProvider';
import { Box, Flex } from '../../core/primitives';

export const PlaylistPanel = () => {
	const { currentAlbum } = useContext(Context);
	if (!currentAlbum) {
		return null;
	}

	return (
		<Flex
			background="#977ADE"
			flexDirection="column"
			height="100%"
			left="0px"
			position="absolute"
			pt="140px"
			top="0px"
			width="100%"
			zIndex="1"
		>
			<Box overflow="auto">
				{currentAlbum.songs.map((song) => (
					<PlaylistEntry key={song.id} song={song} />
				))}
			</Box>
		</Flex>
	);
};
