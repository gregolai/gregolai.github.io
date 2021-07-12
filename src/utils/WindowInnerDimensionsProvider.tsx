import React, { useContext, useLayoutEffect } from 'react';
import { useRafState } from 'react-use';

interface Props {
	children: React.ReactElement;
}

type Dimensions = [number, number];

const Context = React.createContext<Dimensions>(null);

const getDimensions = () => [window.innerWidth, window.innerHeight] as Dimensions;

export const WindowInnerDimensionsProvider = ({ children }: Props) => {
	const [dimensions, setDimensions] = useRafState<Dimensions>(getDimensions());

	useLayoutEffect(() => {
		const onResize = () => {
			setDimensions(getDimensions());
		};

		/**
		 * Orientation changes don't immediately update window.innerHeight, but
		 * they fire a resize event afterwards which does:
		 * https://stackoverflow.com/a/49383279
		 */
		const onAfterOrientationChange = () => {
			window.removeEventListener('resize', onAfterOrientationChange);
			onResize();
		};

		const onOrientationChange = () => {
			window.addEventListener('resize', onAfterOrientationChange);
		};

		window.addEventListener('resize', onResize);
		window.addEventListener('orientationchange', onOrientationChange);

		return () => {
			window.removeEventListener('resize', onResize);
			window.removeEventListener('resize', onAfterOrientationChange);
			window.removeEventListener('orientationchange', onOrientationChange);
		};
	}, []);

	return <Context.Provider value={dimensions}>{children}</Context.Provider>;
};

export const useWindowInnerDimensions = () => useContext(Context);
