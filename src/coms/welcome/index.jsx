import React, { useState } from "react";
import { Input, List, Divider } from "antd";
import "./index.less";
import { titleSvg } from "./title-svg";
import { useHistory } from "react-router";

const mockData = [
	"Racing car sprays burning fuel into crowd.",
	"Japanese princess to wed commoner.",
	"Australian walks 100km after outback crash.",
	"Man charged over missing wedding girl.",
	"Los Angeles battles huge wildfires.",
];

const Welcome = () => {
	const [value, setValue] = useState("");
	const history = useHistory();
	const handleChange = e => {
		setValue(e.target.value);
	};
	const handleEnter = () => {
		history.push(`/author?user=${value}`);
	};
	const handleKey = e => {
		if(e.keyCode === 13) {
			handleEnter();
		}
	};
	return (
		<div className="basic" >
			<div className="content">
				{titleSvg()}
				<Input onKeyDown={e => handleKey(e)} value={value} placeholder="请输入作者" onChange={e => handleChange(e)} />
				<Divider orientation="center">探索</Divider>
				<List
					bordered
					dataSource={mockData}
					renderItem={item => (
						<List.Item>
							{item}
						</List.Item>
					)}
				/>
			</div>
		</div>
	);
};

export default Welcome;
