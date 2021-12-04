import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import App, {AppProps} from '../App';

const appProps: AppProps = {
  productId: '6966542565568',
};

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App {...appProps} />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('matches snapshot as expected', () => {
  const renderTree = renderer.create(<App {...appProps} />).toJSON();
  expect(renderTree).toMatchSnapshot();
});
