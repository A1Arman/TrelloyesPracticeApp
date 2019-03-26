import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import List from './List';


describe('List component', () => {
    it('renders without crashing', () => {
        const section = document.createElement('section');
        ReactDOM.render(<List cards={[ ]}/>, section);
        ReactDOM.unmountComponentAtNode(section);
    });
    
    it('Testing the List output', () => {
        const tree = renderer
            .create(<List header='Hello' cards={[ ]} />)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
});




