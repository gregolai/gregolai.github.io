import React, { useContext, useState, useEffect } from 'react';
import { Box, Flex } from '../../core/primitives';

import { Context } from '../MusicPlayerProvider';

/**
 * From Record.css
 */
{
	const styleEl = document.createElement('style');
	document.head.appendChild(styleEl);

	styleEl.sheet.insertRule(
		`@keyframes rotating {
	from { transform: rotate(0deg); }
	to { transform: rotate(360deg); }
}`,
		0
	);
}

export const Record = (props) => {
	const { currentSong, isPlaying, setPlaying, isPlaylistOpen } = useContext(Context);

	const [perspective, setPerspective] = useState(false);
	useEffect(() => {
		if (!perspective) {
			setTimeout(() => {
				setPerspective(true);
			}, 2000);
		}
	}, [perspective]);

	const { art } = currentSong || { art: 'https://placekitten.com/200/300' };
	// if (!currentSong) {
	// 	return null;
	// }

	const centerChildren = {
		alignItems: 'center',
		justifyContent: 'center'
	};

	return (
		<Flex
			{...centerChildren}
			bottom={isPlaylistOpen ? '32px' : '180px'}
			left="0px"
			opacity={isPlaylistOpen ? '0' : '1'}
			position="absolute"
			transform={perspective ? 'perspective(500px) rotateX(30deg)' : 'perspective(0px) rotateX(0deg)'}
			transition="opacity 300ms cubic-bezier(0.770, 0.060, 0.240, 0.925) 100ms, bottom 600ms cubic-bezier(0.770, 0.060, 0.240, 0.925)"
			width="100%"
		>
			<Flex
				{...centerChildren}
				animation={isPlaying && `rotating 8s linear infinite`}
				background="radial-gradient(circle at 100% 0%, #205c92 0%, transparent 60%, transparent 100%), radial-gradient(circle at 0% 100%, purple 0%, transparent 60%, transparent 100%)"
				border="1px solid rgba(0,0,0,0.2)"
				borderRadius="50%"
				boxShadow="1px 1px 1px 0px inset white, -1px -1px 1px 0px inset white, 4px 4px 8px rgba(0,0,0,0.2)"
				height="188px"
				onClick={() => setPlaying(!isPlaying)}
				width="188px"
			>
				<Flex
					{...centerChildren}
					border="1px solid rgba(255,255,255,0.2)"
					borderRadius="50%"
					height="166px"
					width="166px"
				>
					<Flex
						{...centerChildren}
						border="1px solid rgba(255,255,255,0.2)"
						borderRadius="50%"
						height="146px"
						width="146px"
					>
						<Flex
							{...centerChildren}
							animation={isPlaying && `rotating 6s linear infinite`}
							background="linear-gradient(0deg, black, white)"
							border="2px solid white"
							borderRadius="50%"
							height="120px"
							overflow="hidden"
							width="120px"
						>
							<Box as="img" height="100%" objectFit="cover" src={art} width="100%" />
						</Flex>
					</Flex>
				</Flex>
			</Flex>
		</Flex>
	);
};
