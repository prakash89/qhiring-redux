import React, { Component } from 'react';
import { connect } from 'react-redux';
import Title from 'grommet/components/Title';
import FormField from 'grommet/components/FormField';
import Heading from 'grommet/components/Heading';
import RadioButton from 'grommet/components/RadioButton';
import Box from 'grommet/components/Box';
import { submitAnswers } from '../../redux/actions/questions';
import Button from 'grommet/components/Button';

class Verbal extends Component {

  render() {
    let { verbal, handleOptionChange, userAnswers } = this.props;
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
            Verbal Section
          </Heading>
          {
            verbal.map((item, index) => {
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
                              onChange={(e) => handleOptionChange(index, option, 'verbal')}
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
                onClick={(e) => userAnswers(verbal, 1)} />
            </Box>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  userAnswers(answers, section_number) {
    dispatch(submitAnswers(answers, section_number));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Verbal);


