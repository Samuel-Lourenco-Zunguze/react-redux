import React, { Component } from "react";
import TodoItem from "./TodoItem";
import PropTypes from "prop-types";

import { connect } from "react-redux";
import { getTodoItem, delTodoItem } from "../Actions/todoActions";

class Todos extends Component {
	componentWillMount() {
		this.props.getTodoItem();
	}
	render() {
		// console.log(this.props.__todos.__todos);
		// return 0;
		return this.props.__todos.__todos.map((todo) => (
			<TodoItem
				key={todo.id}
				markComplete={this.props.markComplete}
				todo={todo}
				delTodo={this.props.delTodo}
			/>
		));
	}
}

// PropTypes
Todos.propTypes = {
	__todos: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
	__todos: state.__todos,
});

export default connect(mapStateToProps, { getTodoItem, delTodoItem })(Todos);
