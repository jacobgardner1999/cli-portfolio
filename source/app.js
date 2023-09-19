#!/usr/bin/env node

import React from 'react';
import {Box, Text} from 'ink';

import DescBox from "./descBox.js";
import LangBox from "./langBox.js";
import LinkBox from "./linksBox.js";
import ProjectsBox from './projectsBox.js';

const title = [" ___   ___   ___  _____  ___  ___   _     ___  ___  ",
			   "| _ \\ / _ \\ | _ \\|_   _|| __|/ _ \\ | |   |_ _|/ _ \\ ",
			   "|  _/| (_) ||   /  | |  | _|| (_) || |__  | || (_) |",
			   "|_|   \\___/ |_|_\\  |_|  |_|  \\___/ |____||___|\\___/ "]

const yoda = ["__.-._",
			  "\'-._\"7'",
			  " /'.-c",
			  " |  /T",
			  "_)_/LI"]

const App = () => (
	<Box borderStyle="single" flexWrap="wrap" alignContent="flex-start" width="90%" paddingX="3">
		<Box width="100%" justifyContent="space-between">
			<Box flexDirection="column">
				<Text color="white" bold width="100%">{title[0]}</Text>
				<Text color="white" bold width="100%">{title[1]}</Text>
				<Text color="white" bold width="100%">{title[2]}</Text>
				<Text color="white" bold width="100%">{title[3]}</Text>
			</Box>
			<Box flexDirection="column">
				<Text color="white" bold width="100%">{yoda[0]}</Text>
				<Text color="white" bold width="100%">{yoda[1]}</Text>
				<Text color="white" bold width="100%">{yoda[2]}</Text>
				<Text color="white" bold width="100%">{yoda[3]}</Text>
				<Text color="white" bold width="100%">{yoda[4]}</Text>
			</Box>
		</Box>
		<Box width="100%">
			<Box flex="3" justifyContent="space-between" flexDirection="column">
				<DescBox flex="2"/>
				<LinkBox flex="1"/>
			</Box>
			<LangBox flex="1"/>
			<ProjectsBox width="100%"/>
		</Box>
	</Box>
);

export default App;
