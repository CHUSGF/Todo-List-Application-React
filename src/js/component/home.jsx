import React from "react";
import TodoList from "./todolist.jsx";

//create your first component
const Home = () => {
	return (
		<div className="container">
			<div className="row">
				<div className="container">
					<h3 className="title ">TODO LIST</h3>
					<TodoList />
				</div>
			</div>
		</div>
	);
};
export default Home;
