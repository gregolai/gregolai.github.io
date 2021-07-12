import React, { useContext, CSSProperties } from 'react';
import { Context } from '../MusicPlayerProvider';
import { PrimaryButton } from './PrimaryButton';
import { SongDetails } from './SongDetails';
import { Record } from './Record';
import { DragHandle } from './DragHandle';
import MainPanelStore from './MainPanelStore';
import { Box, Button, Flex } from '../../core/primitives';

const createSvgStyle = (width: string) => ({
	width,
	height: width,
	opacity: '40%'
});
const svgStyle8px = createSvgStyle('8px');
const svgStyle10px = createSvgStyle('10px');
const svgStyle20px = createSvgStyle('20px');

const SvgIcon = (props: React.SVGProps<SVGSVGElement>) => (
	<svg
		preserveAspectRatio="xMidYMid"
		version="1.1"
		viewBox="0 0 100 100"
		xmlns="http://www.w3.org/2000/svg"
		{...props}
	/>
);

const PlaySvg = () => (
	<SvgIcon style={svgStyle10px}>
		<polygon points="10,0 90,50 10,100" fill="black" />
	</SvgIcon>
);

const PauseSvg = () => (
	<SvgIcon style={svgStyle10px}>
		<rect x="10" y="0" width="20" height="100" fill="black" />
		<rect x="70" y="0" width="20" height="100" fill="black" />
	</SvgIcon>
);

const PrevSongSvg = () => (
	<SvgIcon style={svgStyle8px}>
		<rect x="0" y="0" width="20" height="100" fill="black" />
		<polygon points="20,50 100,0 100,100" fill="black" />
	</SvgIcon>
);

const NextSongSvg = () => (
	<SvgIcon style={svgStyle8px}>
		<rect x="80" y="0" width="20" height="100" fill="black" />
		<polygon points="80,50 0,0 0,100" fill="black" />
	</SvgIcon>
);

const PlusSvg = () => (
	<SvgIcon style={svgStyle10px}>
		<rect x="40" y="0" width="20" height="100" fill="black" />
		<rect x="0" y="40" width="100" height="20" fill="black" />
	</SvgIcon>
);

const LoopSvg = (() => {
	// arrow distance x and y
	const ax = 22;
	const ay = 16;

	const p0 = [20, 50];
	const c = [20, 30];
	const p1 = [60, 30];

	const a0 = [p1[0], p1[1] - ay];
	const a1 = [p1[0] + ax, p1[1]];
	const a2 = [p1[0], p1[1] + ay];

	const pathTopLeft: React.SVGProps<SVGPathElement> = {
		d: `M${p0} C${c} ${c} ${p1}`,
		stroke: 'black',
		fill: 'transparent',
		style: {
			stroke: 'black',
			strokeWidth: 10
		}
	};
	const polygonArrowRight: React.SVGProps<SVGPolygonElement> = {
		points: `${a0} ${a1} ${a2}`,
		fill: 'black'
	};

	const pathBottomRight: React.SVGProps<SVGPathElement> = {
		d: `M${100 - p0[0]},${100 - p0[1]} C${100 - c[0]},${100 - c[1]} ${100 - c[0]},${100 - c[1]} ${
			100 - p1[0]
		},${100 - p1[1]}`,
		stroke: 'black',
		fill: 'transparent',
		style: {
			stroke: 'black',
			strokeWidth: 10
		}
	};
	const polygonArrowLeft: React.SVGProps<SVGPolygonElement> = {
		points: `${100 - a0[0]},${100 - a0[1]} ${100 - a1[0]},${100 - a1[1]} ${100 - a2[0]},${100 - a2[1]}`,
		fill: 'black'
	};

	return () => (
		<SvgIcon style={svgStyle20px}>
			<path {...pathTopLeft} />
			<polygon {...polygonArrowRight} />
			<path {...pathBottomRight} />
			<polygon {...polygonArrowLeft} />
		</SvgIcon>
	);
})();

const AuxButton = ({ children }) => (
	<Button height="48px" width="48px">
		{children}
	</Button>
);

const _MainPanel = (props) => {
	const { isPlaylistOpen, setPlaylistOpen, knockAt, isPlaying, setPlaying } = useContext(Context);
	const { dragY, isDragging } = useContext(MainPanelStore.Context);

	return (
		<Box
			background="linear-gradient(155deg, #F2F6FA 10%, #D6E5F4 90%)"
			borderRadius="16px"
			bottom={isPlaylistOpen ? 'calc(100% - 140px)' : '0px'}
			boxShadow="0 0 36px rgba(0,0,0,0.2)"
			left="0px"
			overflow="hidden"
			position="absolute"
			top="0px"
			transform={isDragging && `translateY(${dragY}px)`}
			width="100%"
			zIndex="2"
		>
			<SongDetails />

			<Record />

			{/* CONTROLS */}
			<Flex
				alignItems="center"
				bottom={isPlaylistOpen ? '32px' : '42px'}
				justifyContent="space-between"
				left="0px"
				position="absolute"
				transition="all 600ms cubic-bezier(0.770, 0.060, 0.240, 0.925)"
				width="100%"
			>
				<AuxButton>
					<LoopSvg />
				</AuxButton>
				<Flex alignItems="center">
					<PrimaryButton isSmall onClick={() => {}} /*onMouseDown={knockAt}*/>
						<PrevSongSvg />
					</PrimaryButton>
					<PrimaryButton
						onClick={() => setPlaying(!isPlaying)}
						/* onMouseDown={knockAt} */
					>
						{isPlaying ? <PauseSvg /> : <PlaySvg />}
					</PrimaryButton>
					<PrimaryButton isSmall onClick={() => {}} /*onMouseDown={knockAt}*/>
						<NextSongSvg />
					</PrimaryButton>
				</Flex>
				<AuxButton>
					<PlusSvg />
				</AuxButton>
			</Flex>

			<DragHandle />
		</Box>
	);
};

export const MainPanel = (props) => (
	<MainPanelStore>
		<_MainPanel {...props} />
	</MainPanelStore>
);
