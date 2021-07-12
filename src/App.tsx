import React from 'react';
import { DocumentScrollProvider } from './utils/DocumentScrollProvider';
import { WindowInnerDimensionsProvider } from './utils/WindowInnerDimensionsProvider';
import { Portfolio } from './Portfolio/Portfolio';
import { Resume } from './Resume/Resume';

export const App = () => {
	// SHOW RESUME WHEN IN IFRAME
	if (window.self !== window.top) {
		return <Resume />;
	}

	return (
		<DocumentScrollProvider>
			<WindowInnerDimensionsProvider>
				<Portfolio />
			</WindowInnerDimensionsProvider>
		</DocumentScrollProvider>
	);
};
