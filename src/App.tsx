import React, { createContext } from 'react';
import { DocumentScrollProvider } from './utils/DocumentScrollProvider';
import { WindowInnerDimensionsProvider } from './utils/WindowInnerDimensionsProvider';
import { Portfolio } from './Portfolio/Portfolio';
import { Resume } from './Resume/Resume';

export const AppContext = createContext({
	printResume: () => {}
});

const printResume = () => {
	const iframe = document.createElement('iframe');
	iframe.src = window.location.href;
	iframe.style.position = 'absolute';
	iframe.style.top = '-10000px';
	document.body.appendChild(iframe);

	const { contentWindow } = iframe;
	contentWindow.addEventListener('DOMContentLoaded', () => {
		contentWindow.print();

		setTimeout(() => {
			document.body.removeChild(iframe);
		}, 2000);
	});
};

export const App = () => {
	// SHOW RESUME WHEN IN IFRAME
	if (window.self !== window.top) {
		return <Resume />;
	}

	return (
		<DocumentScrollProvider>
			<WindowInnerDimensionsProvider>
				<AppContext.Provider
					value={{
						printResume
					}}
				>
					<Portfolio />
				</AppContext.Provider>
			</WindowInnerDimensionsProvider>
		</DocumentScrollProvider>
	);
};
