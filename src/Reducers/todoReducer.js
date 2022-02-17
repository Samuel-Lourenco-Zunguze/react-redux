import { ADD_TODO_ITEM, DEL_TODO_ITEM, GET_TODO_ITEMS } from "../Actions/Types";

const estadoInicial = {
	__todos: [
		{
			id: 1,
			titulo: "Ir a faculdade",
			completed: false,
		},
		{
			id: 2,
			titulo: "Ir a Well Wise",
			completed: true,
		},
		{
			id: 3,
			titulo: "Ir ao Centro",
			completed: false,
		},
	],
	// todo: {},
};
export default function todoReducer(state = estadoInicial, action) {
	if (action.type === ADD_TODO_ITEM) {
		console.log("adding");
		return [
			...state.__todos,
			{
				id: action.payload.id,
				titulo: action.payload.titulo,
				completed: false,
			},
		];
	} else if (action.type === GET_TODO_ITEMS) {
		return {
			...state,
		};
	} else if (action.type === DEL_TODO_ITEM) {
		console.log("eliminando");
		console.log(action.payload);
		// return {
		// 	...state,
		// 	_todos: state.__todos.filter((todo) => todo.id === action.payload),
		// };
	} else {
		return state;
	}
}
