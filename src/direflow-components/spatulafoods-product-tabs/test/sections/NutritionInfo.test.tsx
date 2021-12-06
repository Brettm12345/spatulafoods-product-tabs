import { render, unmountComponentAtNode } from 'react-dom';
import renderer from 'react-test-renderer';
import {NutritionInfo} from '../../sections/NutritionInfo'
import { product } from './__mocks__/product';

it('renders without crashing', () => {
  const div = document.createElement('div');
  render(<NutritionInfo {...product} />, div)
  unmountComponentAtNode(div)
})

it('matches snapshot as expected', () => {
  const renderTree = renderer.create(<NutritionInfo {...product} />)
  expect(renderTree).toMatchSnapshot()
})