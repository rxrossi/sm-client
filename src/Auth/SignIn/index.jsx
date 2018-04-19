import React from 'react';
import Presentational from './Presentational';
import FieldsControllerHOC from '../../FieldsControllerHOC';
import { signin } from './../../API/'

export default class Signin extends React.Component {
  constructor(props) {
    super(props)
    this.onSubmit = this.onSubmit.bind(this)
  }

  async onSubmit(fields) {
    const { token, error } = await signin(fields)
    console.log({token}, {error})
  }

  render() {
    const Signin = FieldsControllerHOC(Presentational);
    return <Signin onSubmit={this.onSubmit} />
  }
}
