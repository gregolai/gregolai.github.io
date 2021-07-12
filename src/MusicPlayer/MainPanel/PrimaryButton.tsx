import React from 'react';
import { Button, Flex } from '../../core/primitives';

interface PrimaryButtonProps {
	children: React.ReactElement;
	onClick: (e: React.MouseEvent) => void;
	isSmall?: boolean;
}

export const PrimaryButton = ({ children, onClick, isSmall }: PrimaryButtonProps) => {
	return (
		<Button
			background="linear-gradient(155deg, #EBF0FA 0%, #B5CCE3 100%)"
			borderRadius="50%"
			boxShadow="1px 1px 0px 0px inset rgba(0,0,0,0.1)"
			height={isSmall ? '32px' : '56px'}
			mx={!isSmall && '8px'}
			onClick={onClick}
			width={isSmall ? '32px' : '56px'}
		>
			<Flex
				alignItems="center"
				background="radial-gradient(circle at 70% 100%, #F5F3F7 14%, #D3DFED 74%, #F5F3F7 88%)"
				borderRadius="50%"
				boxShadow="0 0 4px 0px rgba(0,0,0,0.4), 0px 1px rgba(0,0,0,0.2)"
				height={isSmall ? '24px' : '46px'}
				justifyContent="center"
				width={isSmall ? '24px' : '46px'}
			>
				{children}
			</Flex>
		</Button>
	);
};
