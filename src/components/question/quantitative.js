import React, { Component } from 'react';
import { connect } from 'react-redux';
import Title from 'grommet/components/Title';
import FormField from 'grommet/components/FormField';
import Heading from 'grommet/components/Heading';
import RadioButton from 'grommet/components/RadioButton';
import Box from 'grommet/components/Box';
import { submitAnswers } from '../../redux/actions/questions';
import Button from 'grommet/components/Button';

class Quantitative extends Component {

  render() {
    let { quantitative, handleOptionChange, userAnswers, resultId } = this.props;
    return (
      <div className="container mb-5">
        <div>
          <Heading
            strong={true}
            uppercase={true}
            truncate={false}
            align='center'
            margin='medium'
            tag='h4'>
            Quantitative Section
         </Heading>
          {
            quantitative.map((item, index) => {
              let that = this;
              return (
                <div className="container mb-5" key={item.id}>
                  <Box
                    justify='start'
                    align='start'
                    wrap={true}
                    reverse={false}
                    pad='medium'
                    margin='small'
                    colorIndex='light-2'
                  >
                    <Title truncate={false} pad='medium'>
                      {index + 1}.{item.title}
                    </Title>
                    {item.options.map(function (option) {
                      return (
                        <div key={option}>
                          <Box
                            justify='start'
                            align='start'
                            wrap={true}
                            reverse={false}
                            margin='small'
                          >
                            <RadioButton
                              id={option}
                              name={option}
                              label={option}
                              checked={item.user_answer == option}
                              onChange={(e) => handleOptionChange(index, option, 'quantitative')}
                            />
                          </Box>
                        </div>
                      );
                    })}
                  </Box>
                </div>
              );
            })}
          <div>
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
                onClick={(e) => userAnswers(quantitative, 3, resultId)} />
            </Box>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  resultId: state.questionsData.resultId,
});

const mapDispatchToProps = (dispatch) => ({
  userAnswers(answers, section_number, resultId) {
    dispatch(submitAnswers(answers, section_number, resultId));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Quantitative);


