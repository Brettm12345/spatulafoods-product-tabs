import {Styled} from '@brettm12345/direflow-component';
import {FC} from 'react';
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
      <div className="font-sans subpixel-antialiased">
        <div className="hidden md:block w-full max-w-4xl mx-auto">
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
