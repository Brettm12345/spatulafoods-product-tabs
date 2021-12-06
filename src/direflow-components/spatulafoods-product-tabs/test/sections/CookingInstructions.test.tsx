import { render, unmountComponentAtNode } from "react-dom";
import renderer from 'react-test-renderer';
import { product } from "./__mocks__/product";
import {CookingInstructions} from '../../sections/CookingInstructions'

it('renders without crashing', () => {
  const div = document.createElement('div');
  render(<CookingInstructions {...product} />, div)
  unmountComponentAtNode(div)
})

it('matches snapshot as expected', () => {
  const renderTree = renderer.create(<CookingInstructions {...product} />)
  expect(renderTree).toMatchSnapshot()
})