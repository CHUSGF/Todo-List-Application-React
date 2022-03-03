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
		<div>
			<div className="input mb-2 fs-5">
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
				<ul className="list-group ">
					{TodoList.map((value, index) => (
						<li
							key={index}
							className=" list-group-item mb-1 p-1 border border-dark d-flex justify-content-between">
							{value}
							<button
								className="btn btn-outline-danger btn-sm DelItem"
								onClick={() => DeleteItems(index)}>
								❌
							</button>
						</li>
					))}
				</ul>
				<div>
					<span className="badge bg-light text-dark me-2">
						Total Tasks: {TodoList.length}
					</span>
				</div>
			</div>
		</div>
	);
};
export default TodoList;
