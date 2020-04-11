import React, { lazy, Fragment } from 'react';
import TitleScreen from './screens/TitleScreen';
// import MusicPlayerScreen from './screens/MusicPlayerScreen';
// import LoremIpsumScreen from './screens/LoremIpsumScreen';
// import FourthScreen from './screens/FourthScreen';
// import ResumeScreen from './screens/ResumeScreen';
// import ProjectsScreen from './screens/ProjectsScreen';
import Screen from './Screen';
import { space } from 'core/tokens';

// Height not initially known
import ResumeScreen from './screens/ResumeScreen';
import ProjectsScreen from './screens/ProjectsScreen';
import { ScreenSplat } from './Screen/ScreenSplat';

const MusicPlayerScreen = lazy(() =>
	import(
		/* webpackChunkName: "MusicPlayerScreen" */
		'./screens/MusicPlayerScreen'
	)
);
const LoremIpsumScreen = lazy(() =>
	import(
		/* webpackChunkName: "LoremIpsumScreen" */
		'./screens/LoremIpsumScreen'
	)
);
const FourthScreen = lazy(() =>
	import(
		/* webpackChunkName: "FourthScreen" */
		'./screens/FourthScreen'
	)
);

export default () => (
	<Fragment>
		<Screen
			id="title"
			link={{
				label: 'Home',
				pathname: '/'
			}}
			center
			css={{
				height: '100vh',
				background:
					'linear-gradient(rgb(255, 255, 255) 0%, rgb(242, 246, 250) 10%, rgb(214, 229, 244) 90%)'
			}}
		>
			<TitleScreen />
		</Screen>
		<Screen
			id="resume"
			link={{
				label: 'Resume',
				pathname: '/resume'
			}}
			background={
				<Fragment>
					<ScreenSplat
						color="rgba(255,255,255,0.5)"
						width="1800px"
						x="200px"
						y="600px"
						colorPos="20%"
					/>
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
				</Fragment>
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
			// label="Music Player"
			link={{
				label: 'Music Player',
				pathname: '/music'
			}}
			background={
				<Fragment>
					<ScreenSplat color="rgba(255,255,255,0.3)" x="20%" y="20%" width={900} />
					<ScreenSplat color="rgba(255,255,255,0.3)" x="80%" y="80%" width={1400} />

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
				</Fragment>
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
			id="lorem"
			// label="Lorem Ipsum"
			link={{
				label: 'Lorem Ipsum',
				pathname: '/lorem'
			}}
			background={
				<Fragment>
					<ScreenSplat x="60%" y="30%" color="rgba(255,255,255,0.4)" width="1200px" />
					<ScreenSplat x="10%" y="100%" color="rgba(255,0,255,0.2)" width="2100px" />
					<ScreenSplat x="90%" y="100%" color="rgba(255,137,60,0.2)" width="2100px" />
				</Fragment>
			}
			center
			css={{
				height: '900px',
				background: 'linear-gradient(180deg,transparent 0%, rgb(169, 203, 236) 50%, transparent 100%)'
			}}
		>
			<LoremIpsumScreen />
		</Screen>
		<Screen
			id="fourth"
			link={{
				label: 'Fourth Screen',
				pathname: '/fourth'
			}}
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
			// label="Projects"
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
	</Fragment>
);
