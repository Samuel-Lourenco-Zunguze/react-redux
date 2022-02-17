const estadoInicial = {
	teste: [
		// { id: 1, nome: "samuel L.z" },
		// { id: 2, nome: "samuel Samson" },
	],
};
export default function testeReducer(state = estadoInicial, action) {
	switch (action.type) {
		case "getItems":
			return {
				...state,
			};
		case "addItem":
			return {
				...state,
				teste: [...state.teste, action.item],
			};
		case "delItem":
			return {
				...state,
				teste: state.teste.filter((item) => item.id !== action.id),
			};
		case "limparLista":
			return {
				...state,
				teste: (state.teste = []),
			};
		default:
			return state;
	}
}
