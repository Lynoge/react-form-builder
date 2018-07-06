import React, { Component } from 'react'
import { connect } from 'react-redux'

import { addFieldAction, removeFieldAction } from '../store/form/actionCreators'

const mapStateToProps = (state) => ({
  form: state.form
})

const mapDispatchToProps = (dispatch) => ({
  addField: (field) => dispatch(addFieldAction(field)),
  removeField: () => dispatch(removeFieldAction())
})

const Input = ({ removeField }) => (
  <div className="form-group">
    <input type="text" className="form-control" id="name" placeholder="Name" />
    <button type="button" class="btn btn-danger" onClick={removeField}>Remove</button>
  </div>
)

const Textarea = ({ removeField }) => (
  <div className="form-group">
    <textarea className="form-control" id="text" rows="3"></textarea>
    <button type="button" class="btn btn-danger" onClick={removeField}>Remove</button>
  </div>
)

class Home extends Component {
  createInputField = () => {
    const { addField } = this.props

    const field = {
      type: 'input',
      placeholder: 'Name',
      position: 0,
      required: true
    }

    return addField(field)
  }

  createTextareaField = () => {
    const { addField } = this.props

    const field = {
      type: 'textarea',
      placeholder: 'Name',
      position: 0,
      required: true
    }

    return addField(field)
  }


  render() {
    const {
      form,
      removeField
    } = this.props

    return (
      <div>
        <ul className="nav justify-content-center">
          <li className="nav-item">
            <a className="nav-link" href="#" onClick={this.createInputField}>Input</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#" onClick={this.createTextareaField}>Textarea</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Radio</a>
          </li>
        </ul>

        <div className="container">
          { form.map((field) => {
            if (field.type === 'input') {
              return <Input removeField={removeField} />
            } else if (field.type === 'textarea') {
              return <Textarea removeField={removeField} />
            }
          }) }
          { form.length === 0 && <p>There are no fields.</p> }
        </div>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
