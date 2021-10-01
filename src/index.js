import React from "react";
import ReactDOM from "react-dom";
// import BasicExample from "./components/basic-example";
import store from "./store";
import "./index.less";
import { Provider } from "react-redux";
import Render from "./render";

const App = () => <div>
	<Render/>
	{/* <BasicExample/> */}
</div>;

ReactDOM.render(<React.StrictMode>
	<Provider store={store} >
		<App/>
	</Provider>
</React.StrictMode>, document.getElementById("root"));