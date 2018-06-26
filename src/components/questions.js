import React, { Component } from 'react';
import { connect } from 'react-redux';
import Title from 'grommet/components/Title';
import FormField from 'grommet/components/FormField';
import Heading from 'grommet/components/Heading';
import RadioButton from 'grommet/components/RadioButton';
import Box from 'grommet/components/Box';
import { fetchQuestions } from '../redux/actions/questions';
import Button from 'grommet/components/Button';
import VERBAL from './question/verbal';
import LOGICAL from './question/logical';
import QUANTITATIVE from './question/quantitative';



class Questions extends Component {
  constructor(props) {
    super(props)
    this.state = {
      checked: null,
      questions: {
        logical: [],
        quantitative: [],
        verbal: [],
      },
      showVerbal: props.questions.showVerbal,
      showLogical: props.questions.showLogical,
      showQuantitative: props.questions.showQuantitative,
    }
  }

  componentDidMount() {
    this.props.requestQuestions();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.questionList !== this.props.questionList) {
      this.setState({ questions: nextProps.questionList });
    }
    if (nextProps.questions.showLogical !== this.props.questions.showLogical) {
      this.setState({ showLogical: nextProps.questions.showLogical });
      this.setState({ showVerbal: nextProps.questions.showVerbal });
    }
    if (nextProps.questions.showQuantitative !== this.props.questions.showQuantitative) {
      this.setState({ showQuantitative: nextProps.questions.showQuantitative });
      this.setState({ showLogical: nextProps.questions.showLogical });
    }
    if(nextProps.questions.sectionNumber == 3) {
      this.props.history.push('/feedback');
    }
  }


  handleOptionChange(index, option, section_type) {
    let category = this.state.questions;
    // let category_type = category[section_type[index]]['user_answer'];
    // let category_type = `${category}.${section_type}[${index}].user_answer`;
    if (section_type === 'verbal') {
      category.verbal[index].user_answer = option;
    } else if (section_type === 'logical') {
      category.logical[index].user_answer = option;
    } else if (section_type === 'quantitative') {
      category.quantitative[index].user_answer = option;
    }
    this.setState({
      questions: category
    })
  }


  render() {
    let { userAnswers } = this.props;
    return (
      <div className="container mb-5">
        {this.state.showVerbal &&
          <VERBAL
            verbal={this.state.questions.verbal}
            handleOptionChange={this.handleOptionChange.bind(this)}
          />
        }
        {this.state.showLogical &&
          <LOGICAL
            logical={this.state.questions.logical}
            handleOptionChange={this.handleOptionChange.bind(this)}
          />
        }
        {this.state.showQuantitative &&
          <QUANTITATIVE
            quantitative={this.state.questions.quantitative}
            handleOptionChange={this.handleOptionChange.bind(this)}
          />
        }
      </div>
    )
  }
}


const mapStateToProps = (state) => ({
  questionList: state.questionsData.items,
  questions: state.questionsData,
});

const mapDispatchToProps = (dispatch) => ({
  requestQuestions() {
    dispatch(fetchQuestions());
  },
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Questions);
