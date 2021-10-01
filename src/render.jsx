import React from "react";
import { HashRouter, Route } from "react-router-dom";
import Author from "./coms/author";
import Welcome from "./coms/welcome";
const Render = () => {
	return (
		<HashRouter>
			<Route exact path="/" component={Welcome} />
			<Route path="/author" component={Author} />
		</HashRouter>      
	);
};

export default Render;