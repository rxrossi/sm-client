import React from 'react';

// receives a presentational and intject the props:
// fields, handleChange, handleSubmit

// expect each input to have:
// - onChange={handleChange}
// - name
// - value={fields[name]}

// expect a submit button with onClick={handleSubmit}

// returns a Component that requires onSubmit function
// ex: <resul onSubmit={} />

export default function FieldsControllerHOC(Component) {
  return class extends React.Component {
    constructor(props) {
      super(props);
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);

      this.state = {
        fields: {}
      }
    }

    handleChange(e) {
      const { name, value } = e.target;
      this.setState(prevState => {
        return {
          ...prevState,
          fields: {
            ...prevState.fields,
            [name]: value
          }
        }
      });
    }

    handleSubmit(e) {
      const { onSubmit } = this.props;
      onSubmit(this.state.fields);
    }

    render() {
      const { fields } = this.state;
      return ( <Component fields={fields} handleChange={this.handleChange} handleSubmit={this.handleSubmit} /> )
    }
  }
}
