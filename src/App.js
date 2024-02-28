import { useSelector } from 'react-redux';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';


function App() {
  const a=useSelector(state=>state.cart.cocart);

  console.log(a);
  return (
    <Layout>
     {a && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;
