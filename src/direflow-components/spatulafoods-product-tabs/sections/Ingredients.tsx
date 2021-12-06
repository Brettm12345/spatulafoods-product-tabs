import {FC} from 'react';
import {Product} from '../data/products';

export const Ingredients: FC<Product> = ({ingredients, contains}) => {
  const sections = [
    ['Ingredients', ingredients],
    ['Contains', contains],
  ] as const;
  return (
    <div className="flex flex-col mx-auto px-1 text-lg leading-relaxed space-y-4 md:px-0">
      {sections.map(([title, values]) => (
        <div key={title}>
          <b>{title}:</b> {values.join(', ')}
        </div>
      ))}
    </div>
  );
};
