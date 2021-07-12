import React, { Fragment } from 'react';
import { Splat } from '../Screen/Splat';
import { MusicPlayer } from '../../MusicPlayer/MusicPlayer';
import { Box, Text } from '../../core/primitives';
import { space } from '../../core/tokens';

export default () => {
	return (
		<Box>
			<MusicPlayer />
			<Text.Caption pt={space._4} textAlign="center">
				Designed by <a href="https://dribbble.com/AntonSKV">Anton Skvortsov</a>
			</Text.Caption>
		</Box>
	);
};
