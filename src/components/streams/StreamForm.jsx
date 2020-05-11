import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class streamForm extends Component {
	renderError = ({ error, touched }) => {
		if (touched && error) {
			return (
				<div className="ui error message">
					<div className="header">{error}</div>
				</div>
			);
		}
	};
	renderForm = ({ input, label, meta }) => {
		const errorClass = meta.touched && meta.invalid ? 'error' : '';
		return (
			<div className={`field ${errorClass}`}>
				<label>{label}</label>
				<input autoComplete="off" {...input} />
				{this.renderError(meta)}
			</div>
		);
	};
	onFormSubmit = formValues => {
		// console.log(formValues);
		this.props.onSubmit(formValues);
	};
	render() {
		return (
			<form onSubmit={this.props.handleSubmit(this.onFormSubmit)} className="ui form error">
				<Field name="title" component={this.renderForm} label="Title" />
				<Field name="description" component={this.renderForm} label="Description" />
				<button className="ui button primary    ">Submit</button>
			</form>
		);
	}
}

const validate = ({ title, description }) => {
	const errors = {};
	if (!title) errors.title = 'A title is required.';
	if (!description) errors.description = 'A description is required.';
	return errors;
};

export default reduxForm({
	form: 'streamForm',
	validate
})(streamForm);
