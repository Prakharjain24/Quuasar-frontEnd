import React from "react";
import { mount } from "enzyme";
import Header from "../../../src/Component/LandingPageSection/Header";
import { BrowserRouter as Router } from 'react-router-dom';
import renderer from 'react-test-renderer';

// const props = {
//     matches : false
// };

describe('Render UI HeaderSection', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = mount(
            // <Router><Header {...props} matches={true} /></Router>
            <Router><Header /></Router>
        );
    })

describe('Text render', () => {
    it('should render header component', () => {
        const wrapper = mount(
            <Router><Header /></Router>
        );
        expect(wrapper.find(Header).exists()).toBeTruthy();
    });
    it('should render h2 text', () => {
        expect(wrapper.find('#helloText2').text()).toBe('hello World');
    });
});

});

// describe('Render UI', () => {
//     it('renders correctly', () => {
//         const tree = renderer.create(<Header />).toJSON()
//         expect(tree).toBeTruthy();
//       })
// });
