import React, { Component } from 'react';
import { connect } from 'react-redux';
import { feedback } from '../redux/actions';
import TextInput from 'grommet/components/TextInput';
import FormField from 'grommet/components/FormField';
import Button from 'grommet/components/Button';
import Footer from 'grommet/components/Footer';
import ReactStars from 'react-stars'

class Feedback extends Component {
  constructor(props) {
    super(props)
    this.state = {
      description: ''
    }
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.redirect.logout !== nextProps.redirect.logout) {
      this.props.history.push('/login')
    }
  }


  feedbackSubmit() {
    const params = {
      email: localStorage.getItem('userEmail'),
      overall: this.state.overAllRating,
      verbal: this.state.verbalRating,
      logical: this.state.logicalRating,
      quantitative: this.state.quantsRanting,
      description: this.state.description,
      resultId: this.props.resultId
    }
    this.props.feedback(params)
  }


  render() {
    const overAllRating = (newRating) => {
      this.setState({ overAllRating: newRating });
    }
    const verbalRating = (newRating) => {
      this.setState({ verbalRating: newRating });
    }
    const logicalRating = (newRating) => {
      this.setState({ logicalRating: newRating });
    }
    const quantsRanting = (newRating) => {
      this.setState({ quantsRanting: newRating });
    }
    return (
      <div className="container mb-5">
        <div className="ui raised very padded text container segment ng-scope" id="instruction">
          <h2 className="ui header">Feedback:</h2>
          <div className="ui red segment">Overall Rating
						<ReactStars
              count={5}
              onChange={overAllRating}
              size={24}
              color1={'gray'}
              color2={'#ffd700'}
              half={false}
              value={this.state.overAllRating} />
          </div>
          <div className="ui teal segment">Verbal
					<ReactStars
              count={5}
              onChange={verbalRating}
              size={24}
              color1={'gray'}
              color2={'#ffd700'}
              half={false}
              value={this.state.verbalRating} />
          </div>
          <div className="ui yellow segment">Logical
					<ReactStars
              count={5}
              onChange={logicalRating}
              size={24}
              color1={'gray'}
              color2={'#ffd700'}
              half={false}
              value={this.state.logicalRating} />
          </div>
          <div className="ui olive segment">Quantitative
					<ReactStars
              count={5}
              onChange={quantsRanting}
              size={24}
              color1={'gray'}
              color2={'#ffd700'}
              half={false}
              value={this.state.quantsRanting} />
          </div>
          <div className="ui purple segment">Description
							<FormField>
              <TextInput
                id='feedbackDescription'
                name="feedbackDescription"
                placeHolder="Any suggestion?"
                value={this.state.description}
                onDOMChange={(e) => this.setState({
                  description: e.target.value
                })}
                required />
            </FormField>
          </div>
          <Footer pad={{ "vertical": "medium" }}>
            <Button label='Submit'
              type='submit'
              primary={true}
              onClick={() => this.feedbackSubmit()} />
          </Footer>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  resultId: state.questionsData.resultId,
  redirect: state.feedbackData,
});

export default connect(mapStateToProps, { feedback })(Feedback);
