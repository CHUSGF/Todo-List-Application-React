import React, { useState } from "react";

const TodoList = () => {
	// Variables del estado
	const [imputText, setImputText] = useState("");
	const [TodoList, setTodoList] = useState([]);

	// funcion para añadir texto
	const addText = (text) => {
		let newText = [...TodoList, text];
		setTodoList(newText);
	};

	// funcion para condicionar el input a lo que queremos
	const handleKey = (event) => {
		if (event.key === "Enter" && imputText !== " " && imputText !== "") {
			addText(imputText);
			setImputText("");
		}
	};
	// Funcion para borrar elementos
	const DeleteItems = (indexItem) => {
		setTodoList((prevState) =>
			prevState.filter((item, index) => index !== indexItem)
		);
	};

	return (
		<div className="container-fluid ">
			<div className="input">
				<input
					type="text"
					onKeyPressCapture={(e) => handleKey(e)}
					onChange={(event) => {
						setImputText(event.target.value);
						console.log(event.target.value);
					}}
					name=""
					id=""
					value={imputText}
				/>
			</div>
			<div>
				<ul className="table ">
					{TodoList.map((value, index) => (
						<li key={index} className="list">
							{value}
							<button
								className="btn DelItem"
								onClick={() => DeleteItems(index)}>
								<i class="fas fa-trash-alt"></i>
							</button>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};
export default TodoList;
