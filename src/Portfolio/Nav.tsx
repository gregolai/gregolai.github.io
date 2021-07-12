import React from 'react';
import { Box, Flex, Text } from '../core/primitives';
import { space } from '../core/tokens';
import { PageLink } from '../Router/NewRouter';

const Nav = ({ currentScreen, screens }) => {
	const options = screens.map(({ id, link }) => ({
		label: link.label,
		pathname: link.pathname,
		value: id
	}));
	const value = currentScreen?.id;

	const color = 'rgba(255,255,255,0.95)';

	return (
		<Flex flexDirection="column" position="fixed" left="0px" top="0px" height="100%" width="160px">
			<Box flex="1" background={`linear-gradient(transparent, ${color})`} />
			<Box position="relative" backgroundColor={color}>
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
			</Box>
			<Box flex="1" background={`linear-gradient(${color}, transparent)`} />
		</Flex>
	);
};

export default Nav;
