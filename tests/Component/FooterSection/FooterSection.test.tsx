import React from "react";
import { mount } from "enzyme";
import FooterSection from "../../../src/Component/FooterSection/FooterSection";
import { BrowserRouter as Router } from 'react-router-dom';
// import renderer from 'react-test-renderer';

describe('Render UI FooterSection', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = mount(
            <Router><FooterSection /></Router>
        );
    })

describe('Text render', () => {
    it('should render h1 text', () => {
        expect(wrapper.find('#helloText').text()).toBe('hello');
    });
    it('should render h2 text', () => {
        expect(wrapper.find('#helloText2').text()).toBe('hello World');
    });
});

});


// describe('Render UI', () => {
//     it('renders correctly', () => {
//         const tree = renderer.create(<FooterSection />).toJSON()
//         expect(tree).toBeTruthy();
//       })
// });