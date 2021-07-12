import React, { useContext } from 'react';

import { MainPanel } from './MainPanel/MainPanel';
import { PlaylistPanel } from './PlaylistPanel/PlaylistPanel';
import { Provider, Context } from './MusicPlayerProvider';
import { Box } from '../core/primitives';

const _MusicPlayer = () => {
	const { setPlayerRef, knockStyle, knockAt } = useContext(Context);

	return (
		<Box
			ref={setPlayerRef}
			borderRadius="16px"
			height="532px"
			overflow="hidden"
			position="relative"
			userSelect="none"
			width="246px"
			style={knockStyle}
		>
			<MainPanel />
			<PlaylistPanel />
		</Box>
	);
};

// https://dribbble.com/shots/9651842-Player-app-UI-animation
export const MusicPlayer = () => {
	return (
		<Provider>
			<_MusicPlayer />
		</Provider>
	);
};
