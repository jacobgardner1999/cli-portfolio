import React from "react";
import {Box, Text} from "ink";

const today = new Date();
const age = today.getFullYear() - 1999;
if(today.getMonth() < 5 || (today.getMonth == 5 && today.getDay() < 28)) {
	age--;
};

const DescBox = () => {
	return (
		<Box borderStyle="double" flexDirection="column">
			<Text>
				<Text color="cyan" bold>Name: </Text>
				<Text>Jacob Gardner</Text>
			</Text>
			<Text>
				<Text color="cyan" bold>Age: </Text>
				<Text>{age}</Text>
			</Text>
			<Text>
				<Text>I'm a graduate software developer and business analyst for BJSS currently working with TPICAP. I'm passionate about learning new tech and solving complex problems!</Text>
			</Text>
		</Box>

	);
};

export default DescBox;
