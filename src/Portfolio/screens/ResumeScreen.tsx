import React, { Fragment, useContext } from 'react';
import { Resume } from '../../Resume/Resume';
import { AppContext } from '../../App';

export default () => {
	const { printResume } = useContext(AppContext);

	return (
		<Fragment>
			<button style={{ position: 'absolute', top: 0, right: 0, zIndex: 1 }} onClick={printResume}>
				Print My Resume
			</button>

			<Resume css={{ zIndex: '1', width: '80%', minWidth: '800px', maxWidth: '1000px' }} />
		</Fragment>
	);
};
