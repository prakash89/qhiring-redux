import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';
import React from 'react';
import { shallow } from 'enzyme';
import adminQuestionsList from './adminQuestionsList';
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";

configure({ adapter: new Adapter() });
const mockStore = configureMockStore();
const store = mockStore({});



describe('(Component) adminQuestionsList', () => {

  let wrapper

  beforeEach(() => {
    wrapper = shallow(<Provider store={store} ><adminQuestionsList /></Provider>);
  })

  it('renders without exploding', () => {
    expect(wrapper.length).toEqual(1);
  });

  it('It chould render the Table component', () => {
    console.log("==========");
    console.log();
    console.log("==========");
  });
});