import React from 'react';
import {Box, Text} from 'ink';

import DescBox from "./descBox.js";
import LangBox from "./langBox.js";

const App = () => (
	<Box borderStyle="single" flexWrap="wrap" alignContent="flex-start" width="90%">
		<Text color="white" bold underline width="100%">Portfolio</Text>
		<Box width="100%">
			<Box flex="3" flex-direction="column">
				<DescBox />
			</Box>
			<LangBox flex="1"/>
		</Box>
	</Box>
);

export default App;
