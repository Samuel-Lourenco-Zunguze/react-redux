import { ADD_TODO_ITEM, DEL_TODO_ITEM, GET_TODO_ITEMS } from "./Types";

var id = 10;
export function addTodo(tarefa) {
	// return {
	// 	type: ADD_TODO_ITEM,
	// 	payload: {
	// 		id: ++id,
	// 		titutlo: tarefa,
	// 	},
	// };
	return function (dispatch) {
		// console.log(1233);
		dispatch({
			type: ADD_TODO_ITEM,
			payload: {
				id: ++id,
				titutlo: tarefa,
			},
		});
	};
}

export const delTodoItem = (id) => (dispatch) => {
	console.log(id);
	dispatch({
		type: DEL_TODO_ITEM,
		payload: id,
	});
};
// primeira versao
// export function getTodoItem() {

// 	return function (dispatch) {
// 		dispatch({
// 			type: GET_TODO_ITEMS,
// 			payload: {
// 				nome: "sa",
// 			},
// 		});
// 	};
// }

// versao arrrow
export const getTodoItem = () => (dispatch) =>
	dispatch({
		type: GET_TODO_ITEMS,
	});

// export const getTodoItem = () => {
// 	return {
// 		type: GET_TODO_ITEMS,
// 	};
// };
