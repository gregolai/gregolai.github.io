import React, { Fragment, useState } from 'react';
import { Flex, Box, Text, Button } from '../../core/primitives';
import { space } from '../../core/tokens';

const PlayInline = ({ height, src, title }) => {
	const [isOpen, setOpen] = useState(false);

	return (
		<Box>
			{isOpen && <Button onClick={() => setOpen(false)}>Close</Button>}
			<Flex alignItems="center" backgroundColor="rgba(0,0,0,0.2)" justifyContent="center">
				{!isOpen && (
					<Button
						onClick={() => setOpen(true)}
						backgroundColor="rgba(255,255,255,0.4)"
						my={space._7}
						px={space._4}
						py={space._3}
						css={{
							':hover': {
								backgroundColor: 'rgba(255,255,255,0.6)'
							}
						}}
					>
						{title}
					</Button>
				)}
				{isOpen && (
					<iframe
						// @ts-ignore
						webkitallowfullscreen="true"
						mozallowfullscreen="true"
						allowFullScreen
						style={{ width: '100%', height }}
						src={src}
					/>
				)}
			</Flex>
		</Box>
	);
};

export const ProjectsScreen = () => {
	return (
		<>
			{[
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
				{
					name: 'HTML5 Video Player Coding Exercise',
					dates: 'September 2016',
					download: {
						title: 'Source Code',
						url: 'vimeo-player/vimeo-player-src.zip'
					},
					images: [
						{
							title: 'User Interface',
							url: 'img/projects/html5-player1.png',
							thumb: 'img/projects/thumbs/html5-player1.jpg'
						},
						{
							title: 'Fullscreen',
							url: 'img/projects/html5-player2.png',
							thumb: 'img/projects/thumbs/html5-player2.jpg'
						}
					],
					items: [
						'A coding exercise I worked on for Vimeo to demonstrate how an HTML5 video player could be designed and developed.',
						'Self-designed interface with playhead scrubbing, video buffer, fullscreen capabilities, and switching to next/previous video.',
						'Uses vanilla javascript with no 3rd party libraries.',
						'Not mobile-friendly at the moment, but I could fix that by rendering the video to a canvas and creating a custom UI.'
					],
					playInline: {
						title: 'Play Vimeo Coding Project',
						src: 'https://gregoryland.com/projects/vimeo-player/public/',
						height: '800px'
					}
				},
				{
					name: 'StarField (JavaScript)',
					dates: 'April 2016',
					download: {
						title: 'Source Code',
						url: 'starfield-js/starfield-js.zip'
					},
					images: [
						{
							title: 'Pretty colors',
							url: 'img/projects/starfield-js-1.png',
							thumb: 'img/projects/thumbs/starfield-js-1.jpg'
						}
					],
					items: [
						'I wanted to port the Star Field project from ActionScript over to JavaScript canvas, so I did.',
						'If using Chrome, the sliders will sometimes cause the page to freeze. Use Firefox if you encounter this issue.'
					],
					playInline: {
						title: 'Play Starfield',
						src: 'https://gregoryland.com/projects/starfield-js/',
						height: '700px'
					}
				},
				{
					name: 'War Game',
					dates: 'April 2012 - 2014',
					note: 'A browser-based RTS',
					play: {
						title: 'Play',
						url: 'warnew/'
					},
					images: [
						{
							title: 'Similar to "Warcraft 3" - five units are selected, but 3 peasants are grouped as active (as shown by the yellow icon border)',
							url: 'img/projects/war1.png',
							thumb: 'img/projects/thumbs/war1.jpg'
						},
						{
							title: 'Units moving, Debug mode - Quad tree, grid coords, unit IDs',
							url: 'img/projects/war2.png',
							thumb: 'img/projects/thumbs/war2.jpg'
						}
					],
					items: [
						'An attempt at an HTML5 web port of Warcraft 2',
						'Contains multiplayer support using websockets, web workers, and the lock-step algorithm for keeping players in-sync.',
						'I have refactored the codebase for awhile and decided to put this project on hold.'
					],
					playInline: {
						title: 'Play War Game',
						src: 'https://gregoryland.com/projects/warnew/',
						height: '90vh'
					}
				},
				{
					name: 'Masking Demo',
					dates: 'December 2012',
					note: '2D or WebGL? Why not both!',
					download: {
						title: 'Source Code',
						url: 'masking/masking.zip'
					},
					images: [
						{
							title: 'Two 2D inputs; One WebGL output',
							url: 'img/projects/masking.png',
							thumb: 'img/projects/thumbs/masking.jpg'
						}
					],
					items: [
						'Demonstrates using two 2D canvas elements and a shader to do masking using WebGL.',
						'This could be used for fast 2D shadows or for other interesting purposes.'
					],
					playInline: {
						title: 'Play Masking Demo',
						src: 'https://gregoryland.com/projects/masking/',
						height: '660px'
					}
				},
				{
					name: 'CmdTool',
					dates: 'March 2012 - July 2012',
					note: 'A GUI helper for the command-line',
					play: {
						title: 'View',
						url: 'cmdtool/'
					},
					images: [
						{
							title: 'Command listing',
							url: 'img/projects/cmdtool1.png',
							thumb: 'img/projects/thumbs/cmdtool1.jpg'
						},
						{
							title: 'Editor',
							url: 'img/projects/cmdtool2.png',
							thumb: 'img/projects/thumbs/cmdtool2.jpg'
						},
						{
							title: 'Command page',
							url: 'img/projects/cmdtool3.png',
							thumb: 'img/projects/thumbs/cmdtool3.jpg'
						},
						{
							title: 'You can pop it out for multiple instances!',
							url: 'img/projects/cmdtool4.png',
							thumb: 'img/projects/thumbs/cmdtool4.jpg'
						},
						{
							title: 'Editor command version selector',
							url: 'img/projects/cmdtool5.png',
							thumb: 'img/projects/thumbs/cmdtool5.jpg'
						},
						{
							title: 'Select desired version on command page',
							url: 'img/projects/cmdtool6.png',
							thumb: 'img/projects/thumbs/cmdtool6.jpg'
						}
					],
					items: [
						'An idea my friend and I had for creating a GUI for UNIX/Windows-based command-line parameters.',
						'It would function like wikipedia, where users would visually create and edit the GUIs to generate command-line parameters.',
						'The tool was quite ambitious for a web project, but fun to work on.',
						'We got relatively far in our progress and created a basic versioning system for the edited GUIs.'
					]
				},
				{
					name: 'StarField (ActionScript)',
					dates: 'February 2012',
					// play: {
					// 	title: 'Run (.swf file is safe)',
					// 	url: 'starfield-as/bin-debug/Starfield.swf'
					// },
					download: {
						title: 'Source Code (FlashBuilder ActionScript)',
						url: 'starfield-as/starfield-as.zip'
					},
					images: [
						{
							title: 'Star Field',
							url: 'img/projects/starfield-as-1.png',
							thumb: 'img/projects/thumbs/starfield-as-1.jpg'
						}
					],
					items: [
						'A project I wrote in ActionScript that mimics the old Windows starfield screensaver.',
						'It continues to create stars until the FPS reaches the target FPS and efficiently buffers them for reuse.',
						'If the target FPS is greater than the real FPS, the application will start removing stars until an equilibrium is formed.',
						'Decrease / Increase target FPS: E / R',
						'Decrease / Increase acceleration: D / F',
						'Decrease / Increase star growth time: C / V',
						'Toggle GUI: X'
					]
				},
				{
					name: 'IcoSphere',
					dates: 'March 2010',
					note: 'Planet level-of-detail (LOD)',
					download: {
						title: 'Source Code (C++)',
						url: 'icosphere/Icosphere.zip'
					},
					images: [
						{
							title: 'Lowest level-of-detail',
							url: 'img/projects/ico-lod0-1.png',
							thumb: 'img/projects/thumbs/ico-lod0-1.jpg'
						},
						{
							title: 'Highest level-of-detail',
							url: 'img/projects/ico-lod5-1.png',
							thumb: 'img/projects/thumbs/ico-lod5-1.jpg'
						}
					],
					items: [
						'I wanted to make a 3D planet-to-planet RTS game, so I tested the use of a sub-divided <a href="https://upload.wikimedia.org/wikipedia/commons/9/9c/Icosahedron-golden-rectangles.svg">icosahedron</a> for the planets.',
						'I could decrease the level-of-detail as planets got further and increase it as planets got nearer.',
						'This worked out alright, until I realized that texture-mapping and pathfinding would be incredibly difficult.',
						'I think extruding a cube would have been a better choice for a coordinate system and I realized the scope of the project was ridiculous. I had fun with the math, though.',
						'A / Z - Increase / Decrease Level-of-Detail (LOD).'
					]
				},
				{
					name: 'Klepto Kitty',
					dates: 'February 2010',
					note: 'A C++/OpenGL game I started with my friend.',
					download: {
						title: 'Source Code (C++)',
						url: 'catgame/CatGame.zip'
					},
					images: [
						{
							title: 'Screenshot #1',
							url: 'img/projects/catgame1.png',
							thumb: 'img/projects/thumbs/catgame1.jpg'
						},
						{
							title: 'Screenshot #2',
							url: 'img/projects/catgame2.png',
							thumb: 'img/projects/thumbs/catgame2.jpg'
						}
					],
					items: [
						'I worked on this game with my friend, <a href="http://gmiller.net">Greg Miller</a>, in an attempt to combine our talents (programming and design).',
						'I wanted to write a game completely in C++/OpenGL without using any 3rd party libraries and we gave ourselves a 3-day weekend to do it.',
						'Our game was inspired by a news story about <a href="https://www.youtube.com/watch?v=xhRW4WmfrDA">Dusty the Kleptomaniac Kitty</a>, a burglar cat in San Mateo, California.',
						'The ideas is that you play as a cat that walks around the neighborhood solving quests and <strike>stealing</strike> collecting stuff from people.'
					]
				}
			].map((proj, i) => (
				<Box key={i} px={space._7}>
					<Flex alignItems="center">
						<Text.Title>{proj.name}</Text.Title>
						{proj.play && (
							<Text.Caption
								ml={space._7}
								as="a"
								href={`https://gregoryland.com/projects/${proj.play.url}`}
							>
								{proj.play.title}
							</Text.Caption>
						)}
						{proj.download && (
							<Text.Caption
								ml={space._7}
								as="a"
								href={`https://gregoryland.com/projects/${proj.download.url}`}
							>
								{proj.download.title}
							</Text.Caption>
						)}
					</Flex>
					{proj.images && (
						<Flex alignItems="stretch">
							{proj.images.map(({ title, url, thumb }, i) => (
								<Flex
									key={i}
									alignItems="center"
									flexDirection="column"
									justifyContent="space-between"
									maxWidth="300px"
									p={space._4}
								>
									<Text.Label>{title}</Text.Label>
									<a href={url} style={{ display: 'block' }}>
										<img src={thumb} style={{ display: 'block', height: '120px' }} />
									</a>
								</Flex>
							))}
						</Flex>
					)}
					<Box pb={space._6}>
						{proj.items.map((item, i2) => (
							<Text.BodyBookTabular key={i2} pl={space._6} pt={space._1}>
								{item}
							</Text.BodyBookTabular>
						))}
					</Box>
					{proj.playInline && <PlayInline {...proj.playInline} />}
				</Box>
			))}
		</>
	);
};
