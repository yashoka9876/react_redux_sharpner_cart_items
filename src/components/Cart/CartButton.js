import { useDispatch, useSelector } from 'react-redux';
import classes from './CartButton.module.css';
import { cartActions } from '../../store/cartReducer';

const CartButton = (props) => {
  const cartArray=useSelector(state=>state.cart.CartArray);
  const dispatch=useDispatch();
  
  return (
    <button onClick={()=>dispatch(cartActions.cartHandler())} className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}>{cartArray.length>0 ? cartArray[0].quantity:0}</span>
    </button>
  );
};

export default CartButton;
