import React from 'react';
import { HeaderContact } from './HeaderContact';
import { Job } from './Job';
import { Text, Box, Ul, Li, Flex } from './primitives';
import { space } from './tokens';

export const Resume = (props) => (
	<Box
		backgroundColor="white"
		boxShadow="4px 4px 2px rgba(0,0,0,0.3)"
		lineHeight="1" // Keep lineHeight: '1' until it's defaulted to globally
		p={space._8}
		{...props}
		css={{
			...props.css,
			'@media print': {
				p: space._0
			}
		}}
	>
		{/* HEADER */}
		<Flex justifyContent="space-between" pb={space._7} minHeight="310px">
			<Flex flex="0" flexDirection="column" justifyContent="space-between" pr={space._9}>
				<Text.MegaTitle>Gregory Dalton</Text.MegaTitle>

				{/* SKILLS */}
				<Flex justifyContent="space-around">
					<Text.BodyMedium display="inline-block">TypeScript</Text.BodyMedium>
					<Text.BodyMedium display="inline-block" px={space._2}>
						{'\u25CF'}
					</Text.BodyMedium>
					<Text.BodyMedium display="inline-block">JavaScript</Text.BodyMedium>
					<Text.BodyMedium display="inline-block" px={space._2}>
						{'\u25CF'}
					</Text.BodyMedium>
					<Text.BodyMedium display="inline-block">C#</Text.BodyMedium>
					<Text.BodyMedium display="inline-block" px={space._2}>
						{'\u25CF'}
					</Text.BodyMedium>
					<Text.BodyMedium display="inline-block">C++</Text.BodyMedium>
				</Flex>
			</Flex>

			<Flex
				flexDirection="column"
				justifyContent="sapce-between"
				maxWidth="352px"
				pt={space._8} // Perception modifier
			>
				{/* CONTACT */}
				<Box>
					<HeaderContact label="Phone" text="(714) 651-2126" />
					<HeaderContact label="Email" text="gregolai@gmail.com" />
					<HeaderContact label="Site" text="www.gregoryland.com" />
				</Box>
				{/* EDUCATION */}
				<Box>
					<Text.Subtitle>B.S. Computer Science</Text.Subtitle>
					<Text.Label>California State University, Long Beach</Text.Label>
					<Text.Label pb={space._4}>Class of 2009</Text.Label>
					<Ul>
						<Li>
							<Text.BodyBook>
								Participated in the programming team and two regional competitions.
							</Text.BodyBook>
						</Li>
						<Li>
							<Text.BodyBook>
								Tau Beta Pi Engineering Honor Society member, Theta Chapter.
							</Text.BodyBook>
						</Li>
					</Ul>
				</Box>
			</Flex>
		</Flex>

		{/* BODY */}
		<Box px={space._5} pt={space._5}>
			<Job where="Squarespace" from="May 2017" to="Present" role="Software Engineer">
				<Ul>
					<Li>
						<Text.BodyBook>Design Platform Team - Level 3 Engineer</Text.BodyBook>
					</Li>
					<Li>
						<Text.BodyBook>
							Configured build tools, NPM package management systems, and code migration
							strategies.
						</Text.BodyBook>
					</Li>
					<Li>
						<Text.BodyBook>
							Part of a team effort to move a deeply integrated, consumer-facing DESKTOP CMS to
							be a responsive and mobile-friendly experience.
						</Text.BodyBook>
					</Li>
					<Li>
						<Text.BodyBook>
							Some React-Native experience, targeting iOS and Android devices.
						</Text.BodyBook>
					</Li>
					<Li>
						<Text.BodyBook>
							Unit and integration tests using Jest, Enzyme, Puppeteer/Cypress. Some test-driven
							development used for refactoring and codemods.
						</Text.BodyBook>
					</Li>
					<Li>
						<Text.BodyBook>
							Consideration on exposiing a clean API, composition patterns, and tradeoffs
							between simplicity and flexibility.
						</Text.BodyBook>
					</Li>
				</Ul>
			</Job>
			<Job where="Agorafy" from="December 2016" to="May 2017" role="Software Engineer">
				<Ul>
					<Li>
						<Text.BodyBook>
							Engineered a CMS frontend from scratch, allowing users to search and filter
							through a wide variety of real estate properties
						</Text.BodyBook>
						<Text.BodyBook>
							Communication with our backend developers to sync the needs of our backend REST
							API with the needs of our frontend.
						</Text.BodyBook>
					</Li>
					<Li>
						<Text.BodyBook>
							Implementing new technologies at the time, such as React + Redux.
						</Text.BodyBook>
					</Li>
				</Ul>
			</Job>
			<Job where="YouVisit" from="January 2015" to="April 2016" role="Software Engineer">
				<Ul>
					<Li>
						<Text.BodyBook>
							Hybrid app development and testing for both mobile and desktop systems using
							JavaScript, PHP, MySQL, and Node. Used an MVC back-end with a RESTful API and some
							unit testing.
						</Text.BodyBook>
					</Li>
					<Li>
						<Text.BodyBook>
							Developed a project tracking system in our CMS to track the stages of tour
							production.
						</Text.BodyBook>
					</Li>
					<Li>
						<Text.BodyBook>
							Implemented mobile geolocation tracking, batching requests from Node to our
							database, and using Google Maps API to view campus paths and hotspots.
						</Text.BodyBook>
					</Li>
					<Li>
						<Text.BodyBook>
							Organized large-scale analytics of site visitor data into useful for our clients
							to download.
						</Text.BodyBook>
					</Li>
					<Li>
						<Text.BodyBook>
							Worked on embedding tours into 3rd party websites using JavaScript with JSONP to
							load iframe settings.
						</Text.BodyBook>
					</Li>
					<Li>
						<Text.BodyBook>
							Coordinated with design, sales, and marketing to implement A/B testing with a
							massive redesign and refactor for our visitor registration form, using jQuery,
							AJAX, PHP, and MySQL.
						</Text.BodyBook>
					</Li>
					<Li>
						<Text.BodyBook>
							Daily standups, Jira, and git workflow for tasks, code reviews, QA, staging, and
							release.
						</Text.BodyBook>
					</Li>
				</Ul>
			</Job>
			<Job where="M & M Environmental" from="August 2014" to="December 2014" role="Software Engineer">
				<Ul>
					<Li>
						<Text.BodyBook>
							Built a calendar and scheduling application using PHP, MySQL/MSSQL, and JavaScript
							for managing technician availability.
						</Text.BodyBook>
					</Li>
					<Li>
						<Text.BodyBook>
							Implemented a Vehicle GPS viewer using Google Maps API with JavaScript for
							monitoring technician proximity to their scheduled appointments.
						</Text.BodyBook>
					</Li>
					<Li>
						<Text.BodyBook>
							Created a Yelp review scraper that would email our recent Yelp reviews to our
							staff.
						</Text.BodyBook>
					</Li>
					<Li>
						<Text.BodyBook>
							Built an admin portal using JavaScript/Auth0 single-sign-on through Google. Used
							Wordpress for viewing work shift calendars, technician locations, and Yelp
							reviews.
						</Text.BodyBook>
					</Li>
				</Ul>
			</Job>
		</Box>
	</Box>
);
