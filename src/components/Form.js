import React, { Component } from 'react';
import PropTypes from 'prop-types'
import '../css/styles.css';
import FormFirstPage from './FormPages/FormFirstPage';
import FormSecondPage from './FormPages/FormSecondPage';
import FormThirdPage from './FormPages/FormThirdPage';


class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            page: 1
        }
    }

    nextPage = () => {
        this.setState({
            page: this.state.page + 1
        })
    }

    previousPage = () => {
        this.setState({
            page: this.state.page - 1
        })
    }

    render() {
        const { onSubmit } = this.props;
        const { page } = this.state;
        return (
            <div>
                {page === 1 &&
                    <FormFirstPage
                        onSubmit={this.nextPage} />}
                {page === 2 &&
                    <FormSecondPage
                        previousPage={this.previousPage}
                        onSubmit={this.nextPage} />}
                {page === 3 &&
                    <FormThirdPage
                        previousPage={this.previousPage}
                        onSubmit={onSubmit} />}
            </div>
        );
    }
}

Form.propTypes = {
    onSubmit: PropTypes.func.isRequired
}

export default Form;
