import React from 'react';
import { shallow } from 'enzyme';
import ExampleWork, { ExampleWorkBubble } from '../js/example-work';

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter()});

// Test Cases
const myWork = [
    {   
        'title': 'Work Example 1',
        'img': {
            'src': 'images/example1.png',
            'desc': 'example screenshot of a project involving code'
        },
    },
    {   
        'title': 'Work Example 2',
        'img': {
            'src': 'images/example2.png',
            'desc': 'example screenshot of a project involving chemistry'
        },
    }
];

describe("ExampleWork Component", () => {
    let component = shallow(<ExampleWork work={myWork}/>)

    it("Should be a section element", () => {
        expect(component.type()).toEqual('section');
    })

    it("Should contain as many elements as there are examples", () => {
        expect(component.find("ExampleWorkBubble").length).toEqual(myWork.length)
    })
});

describe("ExampleWorkBubble Component", () => {
    let component = shallow(<ExampleWorkBubble example={myWork[1]}/>)
    let images = component.find('img')
    it("Should contain a single image element", () => {
        expect(images.length).toEqual(1);
    })
});
