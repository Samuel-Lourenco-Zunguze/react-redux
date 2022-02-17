import * as actions from "../actions/types";

const initialState = {
	items: [
		{ id: 1, nome: "sanms", idade: 21 },
		{ id: 2, nome: "samuel", idade: 21 },
	],
};

export default function ItemReducer(state = initialState, action) {
	switch (action.type) {
		case actions.GET_ITEMS:
			return {
				...state,
			};
		default:
			return {
				state,
			};
	}
}
