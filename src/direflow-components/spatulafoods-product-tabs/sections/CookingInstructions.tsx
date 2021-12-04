import classNames from 'classnames';
import React, {FC} from 'react';
import {Product} from '../data/products';

export const CookingInstructions: FC<Product> = ({cookingInstructions}) => (
  <div
    className={classNames(
      'prose px-4',
      'md:flex md:justify-center md:px-0 md:min-w-full'
    )}
  >
    {cookingInstructions}
  </div>
);
