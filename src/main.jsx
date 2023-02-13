import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
import { transitions, positions, Provider as AlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";

const options = {
	position: positions.TOP_CENTER,
	timeout: 10000,
	transition: transitions.SCALE,
};

ReactDOM.createRoot(document.getElementById("root")).render(
	<Router>
		<AlertProvider template={AlertTemplate} {...options}>
			<App />
		</AlertProvider>
	</Router>
);
