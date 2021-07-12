import React, { lazy, Fragment } from 'react';
import { TitleScreen } from './screens/TitleScreen';
import { Screen } from './Screen/Screen';
import { space } from '../core/tokens';
import { Box } from '../core/primitives';

// Height not initially known
import { ResumeScreen } from './screens/ResumeScreen';
import { ProjectsScreen } from './screens/ProjectsScreen';
import { SocialScreen } from './screens/SocialScreen';
import { Splat } from './Screen/Splat';
import { useDocumentScrollY } from '../utils/DocumentScrollProvider';

import Snek from './screens/projects/Snek';

const MusicPlayerScreen = lazy(() =>
	import(
		/* webpackChunkName: "MusicPlayerScreen" */
		'./screens/MusicPlayerScreen'
	).then((module) => ({ default: module.MusicPlayerScreen }))
);

const FourthScreen = lazy(() =>
	import(
		/* webpackChunkName: "FourthScreen" */
		'./screens/FourthScreen'
	).then((module) => ({ default: module.FourthScreen }))
);

const TitleImage = () => {
	const maskImage = 'linear-gradient(to bottom, black 80%, transparent 100%)';
	const scrollY = useDocumentScrollY();
	return (
		<Box
			position="relative"
			height="70vh"
			overflow="hidden"
			maskImage={maskImage}
			webkitMaskImage={maskImage}
		>
			<img
				style={{
					// Fake parallax
					marginTop: `-${scrollY * 0.2}px`,
					width: '100%',
					objectFit: 'none'
				}}
				src="img/IMG-2660.jpg"
			/>
		</Box>
	);
};

export default () => (
	<>
		<Screen
			id="title"
			background={<TitleImage />}
			link={{
				label: 'Home',
				pathname: '/'
			}}
			css={{
				height: '100vh'
			}}
		>
			<TitleScreen />
		</Screen>
		<Screen id="social">
			<SocialScreen />
		</Screen>
		<Screen
			id="resume"
			link={{
				label: 'Resume',
				pathname: '/resume'
			}}
			background={
				<>
					<Splat color="rgba(255,255,255,0.5)" width="1800px" x="200px" y="600px" colorPos="20%" />
					{/* DIAGONAL LINE BACK */}
					<div
						style={{
							background: 'black',
							height: '500px',
							position: 'absolute',
							width: '100%',
							transform: 'translateY(250px) rotate(25deg) scaleX(20)',

							right: '0px',
							bottom: '0px',
							transformOrigin: 'right top'
						}}
					/>
				</>
			}
			center
			css={{
				minHeight: '100vh',
				py: space._6
			}}
		>
			<ResumeScreen />
		</Screen>
		<Screen
			id="music"
			link={{
				label: 'Music Player',
				pathname: '/music'
			}}
			background={
				<>
					<Splat color="rgba(255,255,255,0.3)" x="20%" y="20%" width={900} />
					<Splat color="rgba(255,255,255,0.3)" x="80%" y="80%" width={1400} />

					{/* DIAGONAL LINE BACK */}
					<div
						style={{
							background: 'rgb(97, 95, 107)',
							height: '500px',
							position: 'absolute',
							width: '100%',
							transform: 'translateY(-250px) rotate(-25deg) scaleX(20)',

							top: '0px',
							right: '0px',
							transformOrigin: 'right top'
						}}
					/>
				</>
			}
			center
			css={{
				height: '800px',
				background:
					'linear-gradient(transparent 0%, rgba(175, 204, 232, 0.5) 50%, transparent 100%), radial-gradient(circle at 50% 50%, rgba(181, 175, 233, 0.3) 0%, transparent 350px)'
			}}
		>
			<MusicPlayerScreen />
		</Screen>
		<Screen
			id="fourth"
			link={{
				label: 'Music Player 2',
				pathname: '/fourth'
			}}
			background={
				<>
					<Splat x="50%" y="0%" color="rgba(255,255,255,0.4)" width="1200px" />
					<Splat x="10%" y="70%" color="rgba(255,0,255,0.2)" width="2100px" />
					<Splat x="80%" y="30%" color="rgba(255,137,60,0.2)" width="2100px" />
				</>
			}
			center
			css={{
				minHeight: '640px',
				height: '100vh'
			}}
		>
			<FourthScreen />
		</Screen>
		<Screen
			id="projects"
			link={{
				label: 'Projects',
				pathname: '/projects'
			}}
			css={{
				minHeight: '100vh',
				background: 'linear-gradient(180deg,transparent 0%, rgb(169, 203, 236) 50%, transparent 100%)'
			}}
		>
			<ProjectsScreen />
		</Screen>
		<Snek />
	</>
);
