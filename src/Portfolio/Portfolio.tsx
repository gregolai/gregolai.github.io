import React, { createContext, useContext, useState, useEffect } from 'react';

import Screens from './Screens';
import { Box } from '../core/primitives';
import { PageRouter } from '../Router/NewRouter';
import Nav from './Nav';
import { useDocumentScrollY } from '../utils/DocumentScrollProvider';
import { useWindowInnerDimensions } from '../utils/WindowInnerDimensionsProvider';

interface LinkProps {
	pathname: string;
	label: string;
}

interface ScreenProps {
	el: HTMLElement;
	id: string;
	link: LinkProps;
}

export const PortfolioContext = createContext({
	registerScreen: (opts: ScreenProps) => {}
});

const TRANSITION_DURATION = 300;

export const Portfolio = () => {
	const [screens, setScreens] = useState<ScreenProps[]>([]);

	const [currentScreen, setCurrentScreen] = useState(null);

	const [transition, setTransition] = useState({
		state: 0,
		screen: undefined
	});

	const [currentWindowScreen, setCurrentWindowScreen] = useState<ScreenProps>(null);

	{
		const scrollY = useDocumentScrollY();
		const [windowWidth, windowHeight] = useWindowInnerDimensions();

		useEffect(() => {
			const atY = scrollY + windowHeight * 0.5;

			for (let i = 0; i < screens.length; ++i) {
				const screen = screens[i];
				if (currentWindowScreen === screen) {
					continue;
				}

				const { offsetHeight, offsetTop } = screen.el;
				if (atY >= offsetTop && atY < offsetTop + offsetHeight) {
					setCurrentWindowScreen(screen);
					break;
				}
			}
		}, [scrollY, windowHeight, screens]);
	}

	console.log({ currentWindowScreen: currentWindowScreen?.id });

	useEffect(() => {
		const { state, screen } = transition;

		let timeoutId;
		if (state === 1) {
			timeoutId = setTimeout(() => {
				document.scrollingElement.scrollTo(0, screen.el.offsetTop);

				setTransition({
					state: 2,
					screen
				});
			}, TRANSITION_DURATION);
		} else if (state === 2) {
			timeoutId = setTimeout(() => {
				setTransition({
					state: 0,
					screen: undefined
				});
			}, TRANSITION_DURATION);
		}

		return () => {
			clearTimeout(timeoutId);
		};
	}, [transition.state]);

	return (
		<PageRouter
			onTransition={(location, action) => {
				if (transition.state !== 0) return;

				const nextScreen = screens.find((s) => s.link.pathname === location.pathname);
				if (!nextScreen) return;

				setTransition({
					state: 1,
					screen: nextScreen
				});
				setCurrentScreen(nextScreen);
			}}
		>
			<PortfolioContext.Provider
				value={{
					registerScreen: (screen: ScreenProps) => {
						setScreens((state) => [...state, screen]);
					}
				}}
			>
				<Box
					opacity={transition.state === 1 ? '0' : '1'}
					overflow="hidden"
					transition={`opacity ${TRANSITION_DURATION}ms ease-in-out`}
				>
					<Screens />
				</Box>
				<Nav screens={screens} currentScreen={currentWindowScreen} />
			</PortfolioContext.Provider>
		</PageRouter>
	);
};
