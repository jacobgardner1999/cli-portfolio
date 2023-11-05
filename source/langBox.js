import React from "react";
import {Box, Text, Newline} from "ink";

const LangBox = () => {
	return (
		<Box borderStyle="double" flexDirection="column" paddingY="1" paddingX="2">
			<Text color="#5763d4" bold underline>Languages</Text>
			<Text color="cyan">These are the languages and frameworks I am proficient in: </Text>
			<Text>{'>'} Java</Text>
			<Text>{'>'} Javascript</Text>
			<Text>{'>'} Typescript</Text>
			<Text>{'>'} React</Text>
			<Text>{'>'} Python</Text>
			<Text>{'>'} CSS</Text>
			<Newline />
			<Text color="cyan">These are the languages and frameworks I am currently learning:</Text>
			<Text>{'>'} GoLang</Text>
			<Text>{'>'} Next.js</Text>
			<Text>{'>'} Rust</Text>
		</Box>
	);
};

export default LangBox;
