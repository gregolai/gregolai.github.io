import React from 'react';
import { Box, Text, Flex } from '../../core/primitives';
import { space } from '../../core/tokens';

export default () => {
	return (
		<Flex alignItems="flex-end" height="100%" pb={space._7}>
			<Flex alignItems="flex-end" width="100%">
				<Box flex="1" px={space._7}>
					<Text.MegaTitle as="div">Gregory Dalton</Text.MegaTitle>
					<Box pl={space._6}>
						<Text.Title as="div">Software Engineer</Text.Title>
						<Box>
							<Text.BodyMedium display="inline-block">TypeScript</Text.BodyMedium>
							<Text.BodyMedium display="inline-block" px={space._2}>
								{'\u25CF'}
							</Text.BodyMedium>
							<Text.BodyMedium display="inline-block">JavaScript</Text.BodyMedium>
							<Text.BodyMedium display="inline-block" px={space._2}>
								{'\u25CF'}
							</Text.BodyMedium>
							<Text.BodyMedium display="inline-block">C#</Text.BodyMedium>
							<Text.BodyMedium display="inline-block" px={space._2}>
								{'\u25CF'}
							</Text.BodyMedium>
							<Text.BodyMedium display="inline-block">C++</Text.BodyMedium>
						</Box>
					</Box>
				</Box>

				<Box pr={space._7} pb={space._7}>
					<Box backgroundColor="black" p={space._5} width="300px">
						{/* <Text.BodyBook css={{ color: 'white' }}>
					For instance, I wrote my own little CSS-in-JS component system to support this website,
					without the cruft that comes with using external libraries. I have always been a supporter
					of the "build your own" camp, as it's a great way to learn! I have also learned,
					throughout my professional career, that there's also great value in using trusted,
					well-tested, open source libraries.
				</Text.BodyBook> */}
						<Text.BodyBook color="white">
							Hey, I'm Greg, a software developer in NYC. This site showcases my passion for
							software development and my career experience. I built this site to reflect my joy
							of creation; forging a beautiful website from the ground up, with simplicity in
							mind.
						</Text.BodyBook>
					</Box>
				</Box>
			</Flex>
		</Flex>
	);
};
