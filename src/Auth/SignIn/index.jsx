import React from 'react';
import Presentational from './Presentational';
import FieldsControllerHOC from '../../FieldsControllerHOC';

export default class Signin extends React.Component {
  constructor(props) {
    super(props)
    this.onSubmit = this.onSubmit.bind(this)
  }

  onSubmit(fields) {
    console.log(fields)
  }

  render() {
    const Signin = FieldsControllerHOC(Presentational);
    return <Signin onSubmit={this.onSubmit} />
  }
}
