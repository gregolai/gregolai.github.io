import React, { useContext, useLayoutEffect } from 'react';
import { useRafState } from 'react-use';

interface Props {
	children: React.ReactElement;
}

const Context = React.createContext<number>(null);

export const DocumentScrollProvider = ({ children }: Props) => {
	const [scrollY, setScrollY] = useRafState(document.scrollingElement.scrollTop);

	useLayoutEffect(() => {
		const onScroll = (e: Event) => {
			setScrollY(document.scrollingElement.scrollTop);
		};

		const options: AddEventListenerOptions = {
			capture: false,
			passive: true
		};

		document.addEventListener('scroll', onScroll, options);

		return () => document.removeEventListener('scroll', onScroll, options);
	}, []);

	return <Context.Provider value={scrollY}>{children}</Context.Provider>;
};

export const useDocumentScrollY = () => useContext(Context);
