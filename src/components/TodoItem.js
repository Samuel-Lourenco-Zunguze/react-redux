import React, { Component } from "react";
import PropTypes from "prop-types";

import { delTodoItem } from "../Actions/todoActions";

import { connect } from "react-redux";

class TodoItem extends Component {
	getStyle = () => {
		return {
			backgroundColor: "#f4f4f4",
			padding: "10px",
			borderBottom: "1px solid #ccc",
			textDecoration: this.props.todo.completed ? "line-through" : "none",
		};
	};


	render() {
		const { id, titulo } = this.props.__todos;
		return (
			<div style={this.getStyle()}>
				<p>
					{/* <input type="checkbox" onChange={this.markComplete.bind(this)}/> {" "} */}
					<input
						type="checkbox"
						onChange={this.props.markComplete.bind(this, id)}
					/>{" "}
					{titulo}
					<button style={btnStyle} onClick={this.props.delTodo.bind(this, id)}>
						x
					</button>
				</p>
			</div>
		);
	}
}

const btnStyle = {
	backgroundColor: "#ff0000",
	color: "#fff",
	border: "none",
	padding: "5px 10px",
	borderRadius: "5px",
	cursor: "pointer",
	float: "right",
};
// PropTypes
TodoItem.propTypes = {
	todo: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
	__todos: state.__todos.__todos,
});

export default connect(mapStateToProps, { delTodoItem })(TodoItem);
