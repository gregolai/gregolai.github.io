import React from 'react';
import { useEffect, useState } from 'react';
import { compiler } from 'markdown-to-jsx';
import { Page } from './Blog';
import { Text } from '../core/primitives';

interface Props {
	page: Page;
}

export default (props: Props) => {
	const { page } = props;

	const [content, setContent] = useState(null);

	useEffect(() => {
		page.md().then((content) => {
			setContent(content.default);
		});
	}, [page]);

	return content
		? compiler(content, {
				overrides: {
					h1: {
						component: Text.Title
					}
				},
				...page.mdOptions
		  })
		: null;
};
