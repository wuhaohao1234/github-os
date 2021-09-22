import React from "react";
import ReactDOM from "react-dom";
import BasicExample from "./components/basic-example";
import store from "./store";
import "./index.less";
import { Provider } from "react-redux";

const App = () => <div>
	<BasicExample/>
</div>;

ReactDOM.render(<React.StrictMode>
	<Provider store={store} >
		<App/>
	</Provider>
</React.StrictMode>, document.getElementById("root"));