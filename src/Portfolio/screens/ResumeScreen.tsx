import React, { Fragment, useContext } from 'react';
import { Resume } from '../../Resume/Resume';

const printResume = () => {
	const iframe = document.createElement('iframe');
	iframe.src = window.location.href;
	iframe.style.position = 'absolute';
	iframe.style.top = '-10000px';
	document.body.appendChild(iframe);

	iframe.contentWindow.addEventListener('DOMContentLoaded', () => {
		iframe.contentWindow.print();

		setTimeout(() => {
			document.body.removeChild(iframe);
		}, 2000);
	});
};

export const ResumeScreen = () => {
	return (
		<>
			<button style={{ position: 'absolute', top: 0, right: 0, zIndex: 1 }} onClick={printResume}>
				Print My Resume
			</button>

			<Resume css={{ zIndex: '1', width: '80%', minWidth: '800px', maxWidth: '1000px' }} />
		</>
	);
};
