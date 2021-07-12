import React, { useEffect, createContext, useState, useCallback, useContext } from 'react';

import { LocationListener, Location } from 'history';
import { BrowserRouter, useHistory, Link, Route, NavLink } from 'react-router-dom';
import { Button } from '../core/primitives';

const PageRouterContext = createContext<{
	links: string[];
	addLink: (pathname: string) => void;
	removeLink: (pathname: string) => void;
	onHistoryChange: LocationListener;
}>(null);

interface PageRouterProps {
	children: any;
	onTransition: (location: Location, action: string) => void;
}
export const PageRouter: React.FC<PageRouterProps> = ({ children, onTransition }) => {
	const [links, setLinks] = useState<string[]>([]);

	const addLink = useCallback(
		(pathname: string) => {
			setLinks([...links, pathname]);
		},
		[links]
	);

	const removeLink = (pathname: string) => {
		const nextLinks = [...links];
		nextLinks.splice(nextLinks.indexOf(pathname), 1);
		setLinks(nextLinks);
	};

	const onHistoryChange: LocationListener = async (location, action) => {
		await onTransition(location, action);
	};

	return (
		<BrowserRouter>
			<PageRouterContext.Provider
				value={{
					links,
					addLink,
					removeLink,

					onHistoryChange
				}}
			>
				<Route path="*">{children}</Route>
			</PageRouterContext.Provider>
		</BrowserRouter>
	);
};

type ButtonProps = React.ComponentProps<typeof Button>;
type LinkProps = React.ComponentProps<typeof Link>;

const LinkAnchor = ({ as: Component, navigate, ...rest }: ButtonProps & { navigate: () => void }) => {
	const { onClick, onKeyPress } = rest;

	return (
		<Button
			{...rest}
			onClick={(e) => {
				onClick && onClick(e);
				e.preventDefault();
				navigate();
			}}
			onKeyPress={(e) => {
				onKeyPress && onKeyPress(e);
				if (e.key === ' ' || e.key === 'Enter') {
					e.preventDefault();
					navigate();
				}
			}}
		>
			{rest.children}
		</Button>
	);
};

export const PageLink = ({ children, to, ...rest }: ButtonProps & LinkProps) => {
	const { addLink, removeLink, onHistoryChange } = useContext(PageRouterContext);

	const history = useHistory();

	useEffect(() => {
		const unlisten = history.listen((location, action) => {
			if (location.pathname === to) {
				onHistoryChange(location, action);
			}
		});
		addLink(to as string);
		return () => {
			removeLink(to as string);
			unlisten();
		};
	}, [history, to]);

	return (
		<Link {...rest} component={LinkAnchor} to={to}>
			{children}
		</Link>
	);
};
