import React from 'react';
import { Screen } from '../../Screen/Screen';
import { Box, Flex, Text } from '../../../core/primitives';
import { space } from '../../../core/tokens';
/*
				{
					name: 'SNEK',
					dates: 'May 2017',
					download: {
						title: 'Source Code',
						url: 'snek/snek.zip'
					},
					images: [
						{
							title: 'SNEK',
							url: 'img/projects/snek1.png',
							thumb: 'img/projects/thumbs/snek1.jpg'
						}
					],
					items: ['100% Vanilla HTML/JS/CSS'],
					playInline: {
						title: 'Play SNEK',
						src: `https://gregoryland.com/projects/snek/`,
						height: '800px'
					}
				},
*/

const Snek = () => {
	return (
		<Screen
			id="snek"
			link={{
				label: 'Snek',
				pathname: '/snek'
			}}
			css={{
				height: '700px'
				// background: 'linear-gradient(180deg,transparent 0%, rgb(169, 203, 236) 50%, transparent 100%)'
			}}
		>
			<Flex justifyContent="space-between" px={space._7}>
				<Box>
					<Text.Caption>May 2017</Text.Caption>
					<Text.Caption as="a" href={'https://gregoryland.com/projects/snek/snek.zip'}>
						Source Code
					</Text.Caption>

					<Text.Caption as="a" href={'https://gregoryland.com/projects/snek/'}>
						Play SNEK
					</Text.Caption>
				</Box>
				<Box>
					<Box backgroundColor="black" p={space._5} width="300px">
						<Text.BodyBook color="white">100% Vanilla HTML/JS/CSS</Text.BodyBook>
					</Box>
				</Box>
			</Flex>
			<Box></Box>
		</Screen>
	);
};
export default Snek;
