import React from 'react';
import { Box, Text, Flex } from '../../core/primitives';
import { space } from '../../core/tokens';

const { BodyBook, BodyMedium } = Text;

const Lang = ({ children }) => <BodyMedium display="inline-block">{children}</BodyMedium>;
const LangDivider = () => (
	<BodyMedium display="inline-block" px={space._2}>
		{'\u25CF'}
	</BodyMedium>
);

export const TitleScreen = () => {
	return (
		<Flex alignItems="flex-end" pb={space._7}>
			<Flex width="100%">
				<Box flex="1" px={space._7}>
					<Text.MegaTitle as="div">Gregory Dalton</Text.MegaTitle>

					<Flex justifyContent="space-between">
						<Box>
							<Text.Title as="div">Human</Text.Title>
							<Box>A never-ending quest figuring out why I'm on this planet.</Box>
						</Box>
						<Box>
							<Text.Title as="div">Software Engineer</Text.Title>
							<Box>
								<Lang>TypeScript</Lang>
								<LangDivider />
								<Lang>JavaScript</Lang>
								<LangDivider />
								<Lang>C#</Lang>
							</Box>
						</Box>
					</Flex>
				</Box>

				<Box pr={space._7} pb={space._7}>
					<Box backgroundColor="black" p={space._5} width="300px">
						{/* <BodyBook css={{ color: 'white' }}>
					For instance, I wrote my own little CSS-in-JS component system to support this website,
					without the cruft that comes with using external libraries. I have always been a supporter
					of the "build your own" camp, as it's a great way to learn! I have also learned,
					throughout my professional career, that there's also great value in using trusted,
					well-tested, open source libraries.
				</BodyBook> */}
						<BodyBook color="white">
							Hey, I'm Greg, a software developer in NYC. This site showcases my passion for
							software development and my career experience. I built this site to reflect my joy
							of creation; forging a beautiful website from the ground up, with simplicity in
							mind.
						</BodyBook>
					</Box>
				</Box>
			</Flex>
		</Flex>
	);
};
