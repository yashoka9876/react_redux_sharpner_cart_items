import { useDispatch, useSelector } from 'react-redux';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { useEffect } from 'react';
import { UiActions } from './store/uiSlice';
import Notification from './components/Notification/Notification';
import { cartActions } from './store/cartReducer';

let initialOne=true;

function App() {
  const a=useSelector(state=>state.cart.cocart);
  const cartItem=useSelector(state=>state.cart.CartArray);
  const dispatch=useDispatch();
  const notification=useSelector(state=>state.uiUpdate.notification)


  useEffect(()=>{

    const sendData=async()=>{

      dispatch(UiActions.showNotification({
        status:'sending...',
        title:'sending data',
        message:'data is sending..'
      }))

      const response=await fetch('https://ng-course-recipe-book-1cd83-default-rtdb.firebaseio.com/cart.json',{
        method:'PUT',
        body:JSON.stringify(cartItem)
      })

      if(!response.ok){
        throw new Error('data don\'t get submitted');
      }

      dispatch(UiActions.showNotification({
        status:'succsesfull!',
        title:'success',
        message:'data have been sent'
      }))

    

    }
    if(initialOne){
      initialOne=false;
      return ;
    }
   
    sendData().catch(error=>{
      dispatch(UiActions.showNotification({
        status:'error',
        title:'failed',
        message:'we got some error'
      }))

    })


  },[cartItem,dispatch])

 //here we will useEffect and to render all items on first render
 useEffect(()=>{
  const getData=async()=>{
    dispatch(UiActions.showNotification({
      status:'sending...',
      title:'sending data',
      message:'data is sending..'
    }))

    const response=await fetch('https://ng-course-recipe-book-1cd83-default-rtdb.firebaseio.com/cart.json');
    if(!response.ok){
      throw new Error('we get one error');
    }
    const data=await response.json();
    console.log(data)
    dispatch(cartActions.addInitialValue(data));

    dispatch(UiActions.showNotification({
      status:'succsesfull!',
      title:'success',
      message:'data got data brother.'
    }))
  }
  getData().catch((error)=>{
    dispatch(UiActions.showNotification({
      status:'error',
      title:'failed',
      message:'we got some error'
    }))
    console.log(error);
  })
 },[])

 // here this componenet returning jsx element brohter.let's keep it up
  return (
    <>
   {notification && <Notification 
   status={notification.satus} 
   title={notification.title}
    message={notification.message}
    />}
     <Layout>
     {a && <Cart />}
      <Products />
    </Layout>
    </>
   
  );
}

export default App;
