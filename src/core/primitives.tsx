import React, { forwardRef } from 'react';
import { Box } from 'pu2';
import { space } from './tokens';

type BoxProps = React.ComponentPropsWithRef<typeof Box>;

export const createComponent = (baseProps: BoxProps) => {
	return forwardRef<HTMLElement, BoxProps>((props: BoxProps, ref) => {
		return <Box {...baseProps} {...props} ref={ref} />;
	}) as React.FC<BoxProps>;
};

export const createTextComponent = (() => {
	return (baseProps: BoxProps) =>
		createComponent({
			textRendering: 'optimizeLegibility',
			webkitFontSmoothing: 'subpixel-antialiased',
			mozOsxFontSmoothing: 'grayscale',
			color: '#313131',
			m: space._0,
			...baseProps
		});
})();

const Label = (() => {
	const baseProps = {
		as: 'p',
		fontSize: '9.75px',
		lineHeight: '11px',
		letterSpacing: '0.75px',
		textTransform: 'uppercase'
	};
	if (__DEV__) {
		baseProps['debug-tag'] = 'Text.Label';
	}
	return createTextComponent(baseProps);
})();

const Caption = (() => {
	const baseProps = {
		as: 'p',
		fontSize: '12px',
		lineHeight: '16px'
	};
	if (__DEV__) {
		baseProps['debug-tag'] = 'Text.Caption';
	}
	return createTextComponent(baseProps);
})();

const Action = (() => {
	const baseProps = {
		as: 'p',
		fontSize: '12.5px',
		lineHeight: '22px',
		letterSpacing: '0.5px',
		textTransform: 'uppercase'
	};
	if (__DEV__) {
		baseProps['debug-tag'] = 'Text.Action';
	}
	return createTextComponent(baseProps);
})();

const BodyBook = (() => {
	const baseProps = {
		as: 'p',
		fontSize: '14px',
		lineHeight: '22px'
	};
	if (__DEV__) {
		baseProps['debug-tag'] = 'Text.BodyBook';
	}
	return createTextComponent(baseProps);
})();

const BodyBookTabular = (() => {
	const baseProps = {
		as: 'p',
		fontSize: '14px',
		lineHeight: '22px',
		'font-feature-settings': '"tnum" on, "lnum" on'
	};
	if (__DEV__) {
		baseProps['debug-tag'] = 'Text.BodyBookTabular';
	}
	return createTextComponent(baseProps);
})();

const BodyMedium = (() => {
	const baseProps = {
		as: 'p',
		fontSize: '14px',
		lineHeight: '22px',
		fontWeight: '600'
	};
	if (__DEV__) {
		baseProps['debug-tag'] = 'Text.BodyMedium';
	}
	return createTextComponent(baseProps);
})();

const Subtitle = (() => {
	const baseProps = {
		as: 'p',
		fontSize: '18px',
		lineHeight: '28px',
		fontWeight: '600',
		letterSpacing: '1px'
	};
	if (__DEV__) {
		baseProps['debug-tag'] = 'Text.Subtitle';
	}
	return createComponent(baseProps);
})();

const Title = (() => {
	const baseProps = {
		as: 'p',
		fontSize: '28px',
		lineHeight: '42px',
		fontWeight: '600',
		letterSpacing: '1px'
	};
	if (__DEV__) {
		baseProps['debug-tag'] = 'Text.Title';
	}
	return createTextComponent(baseProps);
})();

const MegaTitle = (() => {
	const baseProps = {
		as: 'h1',
		fontSize: '78px',
		lineHeight: '90px',
		fontWeight: '600',
		letterSpacing: '1px'
	};
	if (__DEV__) {
		baseProps['debug-tag'] = 'Text.MegaTitle';
	}
	return createTextComponent(baseProps);
})();

export const Text = {
	Label,
	Caption,
	Action,
	BodyBook,
	BodyBookTabular,
	BodyMedium,
	Subtitle,
	Title,
	MegaTitle
};

export const Button = (() => {
	const baseProps = {
		role: 'button',
		cursor: 'pointer',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center'
	};
	if (__DEV__) {
		baseProps['debug-tag'] = 'Button';
	}
	return createComponent(baseProps);
})();

export const Flex = (() => {
	const baseProps = {
		display: 'flex'
	};
	if (__DEV__) {
		baseProps['debug-tag'] = 'Flex';
	}
	return createComponent(baseProps);
})();

export { Box };
