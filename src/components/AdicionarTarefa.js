import React, { Component } from "react";

import { connect } from "react-redux";
import { addTodo } from "../Actions/todoActions";

class adicionarTarefa extends Component {
	state = {
		titulo: "",
	};

	//modificacoes do input {generico}
	onChange = (e) => this.setState({ [e.target.name]: [e.target.value] });

	onSubmit = (e) => {
		e.preventDefault();
		// this.props.addTarefa(this.state.titulo);

		// inserir dados no store
		this.props.addTodo(this.state.titulo);

		this.setState({ titulo: "" });
	};

	render() {
		// console.log(this.props.__todos);
		return (
			<form style={{ display: "flex" }} onSubmit={this.onSubmit}>
				<input
					type="text"
					placeholder="adicionar tarefa..."
					name="titulo"
					value={this.state.titulo}
					onChange={this.onChange}
					style={{ flex: "10", padding: "5px", outline: "none" }}
				/>
				<button style={btnStyle}>Submeter</button>
			</form>
		);
	}
}

const btnStyle = {
	flex: "1",
	padding: "5px 10px",
	color: "#fff",
	backgroundColor: "#333",
	border: "none",
	cursor: "pointer",
};

const mapStateToProps = (state) => ({
	__todos: state.__todos,
});

// const mapDispatchToProps = (dispatch) => {
// 	return {
// 		addTodo: () => dispatch(addTodo()),
// 	};
// };

export default connect(mapStateToProps, { addTodo })(adicionarTarefa);
