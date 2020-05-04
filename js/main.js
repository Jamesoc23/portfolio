import React from 'react';
import ReactDOM from 'react-dom';
import ExampleWork from './example-work';

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
    },
    {   
        'title': 'Work Example 3',
        'img': {
            'src': 'images/example3.png',
            'desc': `“Bengal cat” by roberto shabs is licensed under CC BY 2.0
                    https://www.flickr.com/photos/37287295@N00/2540855181`
        },
    }
]

ReactDOM.render(<ExampleWork work={myWork}/>, document.getElementById('example-work'));