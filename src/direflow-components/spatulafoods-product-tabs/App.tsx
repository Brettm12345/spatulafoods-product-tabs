import {Styled} from 'direflow-component';
import React, {FC} from 'react';
import styles from './styles/tailwind.css';
import {DesktopView} from './views/DesktopView';
import {MobileView} from './views/MobileView';
import {products} from './data/products';

export interface AppProps {
  productId: string;
}

const App: FC<AppProps> = ({productId}) => {
  const id = parseInt(productId);
  const product = products?.[id];
  if (!product) return null;
  return (
    <Styled styles={styles}>
      <div className="font-sans">
        <div className="hidden md:block">
          <DesktopView product={product} />
        </div>
        <div className="block md:hidden">
          <MobileView product={product} />
        </div>
      </div>
    </Styled>
  );
};
export default App;
