import React, { useEffect, useState } from "react";
import {Box, Text, Newline} from "ink";

const chars = ["&","?","%","!","£","#","@","$"];

const Scramble = ({len, delay}) => {
	const [currentText, setCurrentText] = useState("****************");

	useEffect(() => {
		const newArray = [];
		let timeout;
		for(let i=0; i<len; i++) {
			const randomInt = Math.floor(Math.random() * chars.length);
			newArray.push(chars[randomInt]);
		};

		timeout = setTimeout(() => {
			setCurrentText(newArray.join(""));
		}, delay);
		return () => clearTimeout(timeout);
	}, [currentText, delay]);

	return <Text>{currentText}</Text>
}

const ProjectsBox = () => {
	return (
		<Box borderStyle="double" flexDirection="column" paddingY="1" paddingX="2">
			<Text color="#5763d4" bold underline>Projects</Text>
			<Text>
				<Text color="cyan" bold>CLI Portfolio: </Text>
				<Text>This is the project you're looking at! It's written in javascript using the ink-react package and published with Node!</Text>
			</Text>
			<Text>
				<Text color="cyan" bold>Repo: </Text>
				<Text>https://github.com/jacobgardner1999/cli-portfolio</Text>
				<Newline />
			</Text>
			<Text>
				<Text color="cyan" bold>Cosmic Beans: </Text>
				<Text>Cosmic Beans is a text based choose your own adventure game written in Java using the JavaFX UI framework. I am continuing to work on this in my spare time and hope to get it finished soon!</Text>
			</Text>
			<Text>
				<Text color="cyan" bold>Link: </Text>
				<Text>https://github.com/jacobgardner1999/CosmicBeans</Text>
				<Newline />
			</Text>
			<Text>
				<Text color="cyan" bold>BroCalc: </Text>
				<Text>I have been on the BroCalc team working for TPICAP as a developer and technical business analayst since June 2023.</Text>
			</Text>
			<Text>
				<Text color="cyan" bold>Link: </Text>
				<Scramble len="20" delay="100" />
			</Text>
		</Box>
	);
};

export default ProjectsBox;
