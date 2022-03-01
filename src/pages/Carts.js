import React from 'react'
import {useCart} from "react-use-cart";
import Updatemsg from "../components/Updatemsg";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import styled from 'styled-components';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
const Container = styled.div``;

const Wrapper = styled.div`
  padding: 20px;
  
`;

export default function Carts() {
  const history=useHistory();
    const {
        isEmpty,
        totalUniqueItems,
        items,
        totalItems,
        cartTotal,
        updateItemQuantity,
        removeItem,
        emptyCart
        }=useCart();
        console.log(isEmpty,totalUniqueItems)
        console.log("items",items)
        if(isEmpty) return <h1 className='textcenter'>Your Cart is Empty</h1>
        console.log("itemscart",items)
        
          console.log(items.quantity,items.id)
        
  return (
    <Container>
    <Navbar />
   
    <Wrapper>
    <div className="dflex jsc" style={{width:'1500px'}}>
      <div className="col">
        <button style={{display:'flex',alignItems:'left'}} onClick={()=>history.push("/")}>Continue Shopping</button>
          <h5>Cart ({totalUniqueItems})total Items:({totalItems})</h5>
          <table className="table"style={{border:'1px solid gray',borderCollapse:'collapse',padding:'20px'}}>
              <tbody>
        {items.map((items,index)=>{
            return(
 <tr key={index} style={{border:'1px solid gray'}}>
     <td style={{border:'1px solid gray',padding:'20px'}}>{index+1}</td>
 <td style={{border:'1px solid gray',padding:'20px'}}>
    <img src={items.img} style={{height:'6rem',padding:'20px'}} alt="fdg"/>
 </td>
 <td style={{border:'1px solid gray',padding:'20px'}}>{items.price}</td>
 <td style={{border:'1px solid gray',padding:'20px'}}>Quanity({items.quantity})</td>
 <td style={{border:'1px solid gray',padding:'20px'}}>{console.log(items.id,items.quantity)}
     <button style={{border:'1px solid gray',padding:'20px',margin:'10px'}} onClick={()=>updateItemQuantity(items.id,items.quantity -1)}>-</button>
     <button style={{border:'1px solid gray',padding:'20px',margin:'10px'}} onClick={()=>updateItemQuantity(items.id,items.quantity +1)}>+</button>
     {console.log(items.id,items.quantity)}
     <button style={{border:'1px solid gray',padding:'20px'}} onClick={()=>removeItem(items.id)}>Remove Items</button>
 </td>
</tr>
            )

        })}
           </tbody>
          </table>
          <div>
              <h2>Total Price:Rs {cartTotal}</h2>
          </div>
          <div>
              <button style={{padding:'20px',margin:'10px'}} onClick={()=>emptyCart()}>clear cart</button>
               <button style={{padding:'20px',margin:'10px'}}>Paynow</button>
          </div>
      </div>
    </div>
    </Wrapper>
    <Updatemsg/>
    <Footer />
  </Container>
  )
}

