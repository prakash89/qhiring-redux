import React, { Component } from 'react';
import { Button, TextInput, FormFields, FormField, PasswordInput, Box, Select, label, Toast } from 'grommet';
import { connect } from 'react-redux';
import { addQuestion } from "../redux/actions";

class AddQuestionsModal extends Component {

  constructor(props) {
    super(props);
    this.state = {
      title: '',
      option_1: '',
      option_2: '',
      option_3: '',
      option_4: '',
      answer: '',
      section: ''
    }
  }

  inputChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }

  selectChange(e) {
    debugger
    console.log(`vale: ${JSON.stringify(e.value)}`)
    console.log(`vale: ${JSON.stringify(e.label)}`)
    console.log(`vale: ${e.target.name}`)
    this.setState({ [e.target.name]: e.value })
  }

  onSubmit() {
    var value = {
      title: this.state.title,
      option_1: this.state.option_1,
      option_2: this.state.option_2,
      option_3: this.state.option_3,
      option_4: this.state.option_4,
      answer: this.state.answer,
      section_id: this.state.section.value
    }
    console.log(`submit data ${JSON.stringify(this.state)}`)
    this.props.addQuestion(value);
  }

  render() {

    return (
      <Box pad='large'>
        <Toast status='ok'>
          A short message to let the user know something.
        </Toast>
        <FormFields>
          <Box pad='small'>
            <label>Title</label>
            <TextInput
              placeHolder="Title"
              name="title"
              value={this.state.title}
              onDOMChange={(e) => this.inputChange(e)}
            />
          </Box>
          <Box pad="small">
            <TextInput
              placeHolder="Option 1"
              name="option_1"
              value={this.state.option_1}
              onDOMChange={(e) => this.inputChange(e)}
            />
            <TextInput
              placeHolder="Option 2"
              name="option_2"
              value={this.state.option_2}
              onDOMChange={(e) => this.inputChange(e)}
            />
            <TextInput
              placeHolder="Option 3"
              name="option_3"
              value={this.state.option_3}
              onDOMChange={(e) => this.inputChange(e)}
            />
            <TextInput
              placeHolder="Option 4"
              name="option_4"
              value={this.state.option_4}
              onDOMChange={(e) => this.inputChange(e)}
            />
            <TextInput
              placeHolder="Answer"
              name="answer"
              value={this.state.answer}
              onDOMChange={(e) => this.inputChange(e)}
            />
          </Box>
          <Box pad="small">
            <Select placeHolder='Section'
              name="section"
              options={[{ value: 1, label: "Arithmetic" }, { value: 2, label: "Logical" }]}
              value={this.state.section}
              onChange={(e) => this.selectChange(e)} />
          </Box>
        </FormFields>
        <Box pad="small">
          <Button
            primary={true}
            label='Submit'
            onClick={() => this.onSubmit()}
          />
        </Box>
      </Box>
    )
  }
}


const mapStateToProps = (state) => {
  // const { registerSuccess } = state;
  return state;
}

export default connect(mapStateToProps, { addQuestion })(AddQuestionsModal);

