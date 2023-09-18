import React from "react";
import {Box, Text} from "ink";

const LinkBox = () => {
	return(
		<Box borderStyle="double" flexDirection="column" paddingY="1" paddingX="2">
			<Text color="#5763d4" bold underline>Links</Text>
			<Text>
				<Text color="cyan" bold>LinkedIn: </Text>
				<Text>https://www.linkedin.com/in/jacob-gardner-a45aba176/</Text>
			</Text>
			<Text>
				<Text color="cyan" bold>GitHub: </Text>
				<Text>https://github.com/jacobgardner1999</Text>
			</Text>
			<Text>
				<Text color="cyan" bold>Email: </Text>
				<Text>Jacob.Gardner@bjss.com</Text>
			</Text>
		</Box>
	);
};

export default LinkBox;
