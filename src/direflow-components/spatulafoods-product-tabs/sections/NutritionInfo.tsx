import {FC, Fragment} from 'react';
import classNames from 'classnames';
import {isCategory, Product} from '../data/products';

const rowPadding = 'p-2 md:p-3';
const numericRow = classNames('text-end', rowPadding);
const row = classNames('text-start', rowPadding);

interface NutritionRowProps {
  dailyValue?: number;
  content: string;
  ingredient: string;
  isSubIngredient?: boolean;
  isLastSubIngredient?: boolean;
}

const NutritionRow: FC<NutritionRowProps> = ({
  dailyValue,
  content,
  ingredient,
  isSubIngredient = false,
  isLastSubIngredient = false,
}) => (
  <tr
    className={classNames(
      {'border-b': !isSubIngredient || isLastSubIngredient},
      'border-gray-200'
    )}
  >
    <td
      className={classNames(
        row,
        isSubIngredient ? 'pl-8 md:pl-8' : 'font-bold'
      )}
    >
      {ingredient}
    </td>
    <td className={numericRow}>{content}</td>
    <td className={numericRow}>{dailyValue ? `${dailyValue}%` : ''}</td>
  </tr>
);

export const NutritionInfo: FC<Product> = ({nutrition, servingSize}) => (
  <table className="table-auto mx-auto w-full text-sm md:text-base">
    <caption className="text-start mb-2 text-lg font-bold">
      Per 1 serving {servingSize}
    </caption>
    <tr className="tracking-wider bg-gray-200 uppercase">
      <th className={row} scope="col">
        Ingredient
      </th>
      <th className={numericRow} scope="col">
        Amount
      </th>
      <th className={numericRow} scope="col">
        % DV
      </th>
    </tr>
    {Object.entries(nutrition).map(([name, value]) => {
      if (isCategory(value)) {
        const {breakdown, total} = value;
        return (
          <Fragment key={name}>
            <NutritionRow
              dailyValue={total.dailyValue}
              content={total.content}
              ingredient={name}
            />
            {Object.entries(breakdown).map(([name, value], index, arr) => (
              <NutritionRow
                key={name}
                dailyValue={value.dailyValue}
                content={value.content}
                ingredient={name}
                isSubIngredient
                isLastSubIngredient={index === arr.length - 1}
              />
            ))}
          </Fragment>
        );
      }
      const {dailyValue, content} = value;
      return (
        <NutritionRow
          key={name}
          dailyValue={dailyValue}
          content={content}
          ingredient={name}
        />
      );
    })}
  </table>
);
