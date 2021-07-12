import React from 'react';
import { MusicPlayer } from '../../MusicPlayer/MusicPlayer';
import { Box, Text } from '../../core/primitives';

export const FourthScreen = () => (
	<Box>
		<MusicPlayer />
		<Text.Caption>
			Designed by <a href="https://dribbble.com/AntonSKV">Anton Skvortsov</a>
		</Text.Caption>
	</Box>
);
