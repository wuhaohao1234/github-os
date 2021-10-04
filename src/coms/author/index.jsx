import React, { useState, useEffect } from "react";
import { Card, Tag , Table, Button} from "antd";
import { useLocation, useHistory } from "react-router";
import qs from "querystring";
import "./index.less";
function Author() {
	const location = useLocation();
	const history = useHistory();
	const [userDataBase, setUserDataBase] = useState(null);
	const [followerDataSource, setFollowerDataSource] = useState([]);
	const getUser = async (name) => {
		const result = await fetch(`https://api.github.com/users/${name}`).then(res => res.json());
		setUserDataBase(result);
	};
	const getFollowers = async (name) => {
		let result = await fetch(`https://api.github.com/users/${name}/followers`).then(res => res.json());
		result.forEach((item, key) => {
			item.key = key;
		});
		setFollowerDataSource(result);
	};
	const follwerColumns = [
		{
			dataIndex: "id",
			title: "id",
		},
		{
			dataIndex: "login",
			title: "user",
		},
		{
			dataIndex: "html_url",
			title: "url",
			render: key => (
				<Tag color="blue" >
					<a href={key} target="_blank" rel="noreferrer" >{key}</a>
				</Tag>
			)
		},
		{
			dataIndex: "login",
			title: "详情",
			render: key => (
				<Button type="primary" onClick={()=> {history.push(`/author?user=${key}`);}} >详情</Button>
			)
		}
	];
	useEffect(() => {
		try {
			const name = (qs.parse(location.search.slice(1))).user;
			getUser(name);
			getFollowers(name);
		} catch (error) {
			console.log(error);
		}
	}, [history.location]);

	return (
		<div className="author" >
			{
				userDataBase ?
					<Card title={userDataBase.name|| userDataBase.bio} extra={<a target="_blank" href={`http://github.com/${userDataBase.name}`} rel="noreferrer">More</a>} style={{ width: 300, height: "100vh" }}>
						<p><span className="item-title" >姓名: </span>
							<Tag color="cyan" >
								{userDataBase.bio? userDataBase.bio : "-"}
							</Tag>
						</p>
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
						<p><span className="item-title" >blog: </span>
							{
								userDataBase.blog ?
									<Tag color="blue" >
										<a target="_blank" href={"https://"+userDataBase.blog} rel="noreferrer">
											{userDataBase.blog}
										</a>
									</Tag>: null
							}
						</p>
						<p><span className="item-title" >创建时间: </span>
							<Tag color="blue" >
								{new Date(userDataBase.created_at).getFullYear() + "年"}
							</Tag>
						</p>
						<p><span className="item-title" >更新时间: </span>
							<Tag color="blue" >
								{new Date(userDataBase.updated_at).getFullYear() + "年"}
							</Tag>
						</p>
					</Card> : null}
			<div className="flower">
				<Table columns={follwerColumns} dataSource={followerDataSource} />
			</div>
		</div>
	);
}

export default Author;
