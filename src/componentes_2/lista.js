import React, { Component } from "react";
import { connect } from "react-redux";

import { delItem } from "./mini_redux/Actions/testeActions";

class lista extends Component {
	deleteItem = (id) => {
		this.props.delItem(id);
	};
	render() {
		const listagem = this.props.dados.map((dado) => (
			<li key={dado.id} className="li">
				<button
					className="btn-del"
					onClick={this.deleteItem.bind(this, dado.id)}
					// onClick={this.deleteItem(dado.id)}
				>
					X
				</button>
				<span>{dado.nome}</span>
			</li>
		));
		return <ul className="lista">{listagem}</ul>;
	}
}
const mapStateToProps = (state) => {
	return {
		dados: state.teste,
	};
};
export default connect(mapStateToProps, { delItem })(lista);
