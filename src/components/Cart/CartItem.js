import { useDispatch, useSelector } from 'react-redux';
import classes from './CartItem.module.css';
import { cartActions } from '../../store/cartReducer';

const CartItem = (props) => {
  const { title, quantity, total, price } = props.item;
  const dispatch=useDispatch();
  const quantityNumber=useSelector(state=>state.cart.CartArray)
  console.log(quantityNumber)

  return (
    <ul>
      {
        quantityNumber.map((item)=> <li className={classes.item}>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>
            ${item.quantity.toFixed(2)*6}{' '}
            <span className={classes.itemprice}>(${item.price.toFixed(2)}/item)</span>
          </div>
        </header>
        <div className={classes.details}>
          <div className={classes.quantity}>
            x <span>{item.quantity}</span>
          </div>
          <div className={classes.actions}>
            <button onClick={()=>dispatch(cartActions.decrementQuantity({title,price}))}>-</button>
            <button onClick={()=>dispatch(cartActions.increamentQuantity({title,price}))}>+</button>
          </div>
        </div>
      </li>)
      }
    </ul>
   
  );
};

export default CartItem;
