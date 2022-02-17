import React, { Component } from "react";
import { connect } from "react-redux";
import { addItem } from "./mini_redux/Actions/testeActions";

class titulo extends Component {
	state = {
		nome: "",
	};

	modificacoes = (e) => this.setState({ [e.target.name]: [e.target.value] });

	submit = (e) => {
		e.preventDefault();

		// gerador de id
		const id = Math.floor((Math.random() + 1) * 1000);

		const novoObj = {
			id,
			nome: this.state.nome[0],
		};

		this.props.addItem(novoObj);
	};
	render() {
		return (
			<div className="input">
				<form onSubmit={this.submit}>
					<input name="nome" type="text" onChange={this.modificacoes}></input>
					<input onClick={this.submit} type="button" value="submeter"></input>
				</form>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		usuario: state.teste,
	};
};
// const mapDispatchToProps = (dispatch) => {
// 	return {
// 		getItems: () => dispatch(getItemTeste()),
// 	};
// };
export default connect(mapStateToProps, { addItem })(titulo);
