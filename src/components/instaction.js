import React, { Component } from 'react';
import '../css/instaction.css';
import { Button } from 'grommet';
import { Link } from 'react-router-dom'
import Box from 'grommet/components/Box';

class Instructions extends Component {
  constructor(props) {
    super(props)
  }

  redirectQuestions() {
    console.log('redirectQuestions', this.props);
    this.props.history.push('/questions')
  }

  render() {
    return (
      <div className="container mb-5">
        <div className="ui raised very padded text container segment ng-scope" id="instruction">
          <h2 className="ui header">Instructions:</h2>
          <div className="ui red segment">Duration of the test - 60 mins. After 60 mins your answers will be auto submitted.</div>
          <div className="ui teal segment">Total number of questions - 60. 20 questions each in 3 sections of Verbal, Logical and Aptitude (in the same order).</div>
          <div className="ui yellow segment">Cannot Switch between Sections. Finish one to attend the next.</div>
          <div className="ui olive segment">Do not refresh or press back key. If done, new questions will be presented with a penalty of 2 mins time.</div>
          <div className="ui purple segment">If the application is not accessible, notify the invigilator in your room.</div>
          <div className="ui teal segment">No negative marking.</div>
          <div className="ui red segment">Submission on each section - Once answers for a section is submitted you cannot revisit that section.</div>
          <div className="row align-items-center justify-content-center">
            <div className="col-md-8 text-center">
              <Box
                justify='center'
                align='center'
                wrap={true}
                reverse={false}
                pad='medium'
                margin='small'
              >
                <Button
                  label='Next'
                  type='submit'
                  accent={true}
                  // href='/questions'
                  onClick={() => this.redirectQuestions()}
                />
              </Box>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Instructions;
