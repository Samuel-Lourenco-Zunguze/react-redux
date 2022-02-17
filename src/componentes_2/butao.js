import React, { Component } from "react";
import { connect } from "react-redux";
import { limparLista } from "./mini_redux/Actions/testeActions";

class butao extends Component {
	limparDados = () => {
		this.props.limparLista();
	};

	render() {
		return (
			<div>
				<button className="btn" onClick={this.limparDados}>
					Limpar lista
				</button>
			</div>
		);
	}
}

// const mapStateToProps = (state) => {
// 	return {
// 		qtdDados: state.teste,
// 	};
// };
export default connect(null, { limparLista })(butao);
