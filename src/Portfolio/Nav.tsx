import React from 'react';
import { Box, Flex, Text } from '../core/primitives';
import { space } from '../core/tokens';
import { PageLink } from '../Router/NewRouter';

const SocialLink = ({ name, url }) => (
	<Text.BodyMedium textAlign="right" pr={space._3}>
		<a href={url}>{name}</a>
	</Text.BodyMedium>
);

const Gradient = ({ children, color }) => (
	<>
		<Box flex="1" background={`linear-gradient(transparent, ${color})`} />
		<Box position="relative" background={color}>
			{children}
		</Box>
		<Box flex="1" background={`linear-gradient(${color}, transparent)`} />
	</>
);

const Nav = ({ currentScreen, screens }) => {
	const options = screens.map(({ id, link }) => ({
		label: link.label,
		pathname: link.pathname,
		value: id
	}));
	const value = currentScreen?.id;

	return (
		<Flex flexDirection="column" position="fixed" left="0px" top="0px" height="100%" width="160px">
			<Gradient color="rgba(255,255,255,0.95)">
				{options.map((option) => {
					const isActive = option.value === value;
					return (
						<PageLink
							key={option.value}
							as={Text.BodyMedium}
							borderRight={isActive && '2px solid black'}
							justifyContent="flex-end"
							py={space._1}
							pl={space._5}
							pr={space._3}
							textDecoration="none"
							css={{
								':focus': {
									textDecoration: 'underline'
								},
								':hover': {
									textDecoration: 'underline'
								}
							}}
							to={option.pathname}
						>
							{option.label}
						</PageLink>
					);
				})}
				<SocialLink key="ig" name="Instagram" url="https://www.instagram.com/gregolai/" />
				<SocialLink key="li" name="LinkedIn" url="https://www.linkedin.com/in/gregolai/" />
			</Gradient>
		</Flex>
	);
};

export default Nav;
