import React from "react";
import { HashRouter, Route } from "react-router-dom";
// import { useHistory } from "react-router";
// const history = useHistory();
import Author from "./coms/author";
import Welcome from "./coms/welcome";
const Render = () => {
	return (
		<div>
			<HashRouter>
				<Route exact path="/" component={Welcome} />
				<Route path="/author" component={Author} />
			</HashRouter>      
		</div>

	);
};

export default Render;