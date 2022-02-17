export const getItemTeste = () => {
	return {
		type: "getItems",
	};
};

// export const getTodoItem = () => (dispatch) =>
// 	dispatch({
// 		type: "getItems",
// 	});

export const addItem = (item) => {
	return {
		type: "addItem",
		item,
	};
};

export const delItem = (id) => {
	return {
		type: "delItem",
		id,
	};
};
export const limparLista = () => {
	return {
		type: "limparLista",
	};
};
