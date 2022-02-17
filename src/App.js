import "./App.css";

// function App() {
//   return (
//     <div className="App">

//     </div>
//   );
// }

// export default App;
// import store from "./store";

import React, { Component } from "react";

import { Provider } from "react-redux";
// import { addTodo, getTodoItem } from "./Actions/todoActions";

// import Todos from "./components/Todos";
// import Cabecalho from "./layouts/Cabecalho";
// import AdicionarTarefa from "./components/AdicionarTarefa";
// import { delTodoItem } from "./Actions/todoActions";

// import uuid from "uuid"

import Titulo from "./componentes_2/titulo";
import Butao from "./componentes_2/butao";
import Lista from "./componentes_2/lista";

import store from "./componentes_2/mini_redux/store";

class App extends Component {
	state = {};
	//  marca e dismarca a finalizacao
	// markComplete = (id) => {
	// 	this.setState({
	// 		todos: this.props.__todos.map((todo) => {
	// 			if (todo.id === id) {
	// 				todo.completed = !todo.completed;
	// 			}
	// 			return todo;
	// 		}),
	// 	});
	// };

	// eliminar todo
	// delTodo = (id) => {
	// this.setState({
	// 	todos: [...this.state.todos.filter((todo) => todo.id !== id)],
	// });

	// 	delTodoItem(id);
	// };

	// adicionar Tarefa
	// addTarefa = (tarefa) => {
	// 	const dados = {
	// 		id: parseInt(Math.random() * 10000 + 1),
	// 		titulo: tarefa,
	// 		completed: false,
	// 	};
	// 	this.setState({ todos: [...this.props.__todos, dados] });
	// };
	render() {
		return (
			<Provider store={store}>
				{/* <div className="App">
					<Cabecalho />
					<AdicionarTarefa addTarefa={this.addTarefa} />
					<Todos
						todos={this.props.__todos}
						markComplete={this.markComplete}
						delTodo={this.delTodo}
					></Todos>
				</div> */}
				<div className="geral">
					<Titulo></Titulo>
					<Lista />
					<Butao></Butao>
				</div>
			</Provider>
		);
	}
}

export default App;
