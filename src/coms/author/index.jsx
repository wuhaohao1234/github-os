import React, { useState, useEffect } from "react";
import { Card, Tag } from "antd";
import { useLocation } from "react-router";
import qs from "querystring";
import "./index.less";
function Author() {
	const location = useLocation();
	const [userDataBase, setUserDataBase] = useState(null);
	const getUser = async (name) => {
		const result = await fetch(`https://api.github.com/users/${name}`).then(res => res.json());
		console.log(result);
		setUserDataBase(result);
	};
	useEffect(() => {
		try {
			const name = (qs.parse(location.search.slice(1))).user;
			getUser(name);
		} catch (error) {
			console.log(error);
		}
	}, []);

	return (
		<div className="author" >
			{
				userDataBase ?
					<Card title={userDataBase.bio || userDataBase.name} extra={<a target="_blank" href={`http://github.com/${userDataBase.name}`} rel="noreferrer">More</a>} style={{ width: 300 }}>
						<p><span className="item-title" >id: </span>
							<Tag color="red" >
								{userDataBase.id}
							</Tag>
						</p>
						<p><span className="item-title" >开源项目: </span>
							<Tag color="gold" >
								{userDataBase.public_repos}
							</Tag>
						个
						</p>
						<p><span className="item-title" >跟随: </span>
							<Tag color="green" >
								{userDataBase.following}
							</Tag>
						个</p>
						<p><span className="item-title" >被跟随: </span>
							<Tag color="blue" >
								{userDataBase.followers}
							</Tag>
						个</p>
					</Card> : null}
		</div>
	);
}

export default Author;
