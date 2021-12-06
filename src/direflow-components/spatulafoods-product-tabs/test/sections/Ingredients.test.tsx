import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import renderer from 'react-test-renderer';
import {Ingredients} from '../../sections/Ingredients'
import { product } from './__mocks__/product';

it('renders without crashing', () => {
  const div = document.createElement('div');
  render(<Ingredients {...product} />, div)
  unmountComponentAtNode(div)
})

it('matches snapshot as expected', () => {
  const renderTree = renderer.create(<Ingredients {...product} />)
  expect(renderTree).toMatchSnapshot()
})