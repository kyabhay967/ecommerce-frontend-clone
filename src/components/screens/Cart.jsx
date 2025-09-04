// import React, { useState } from 'react';

// const Cart = () => {
//   const [cart, setCart] = useState([
//     { id: 1, name: 'Wireless Mouse ', price: 255.9, quantity: 2 },
//     { id: 9, name: 'Coffe Mug', price: 78.75, quantity: 1 },
//   ]);

//   const increaseQty = (id) => {
//     setCart(prev =>
//       prev.map(item =>
//         item.id === id ? { ...item, quantity: item.quantity + 1 } : item
//       )
//     );
//   };

//   const decreaseQty = (id) => {
//     setCart(prev =>
//       prev.map(item =>
//         item.id === id && item.quantity > 1
//           ? { ...item, quantity: item.quantity - 1 }
//           : item
//       )
//     );
//   };

//   const removeItem = (id) => {
//     setCart(prev => prev.filter(item => item.id !== id));
//   };

//   const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

//   return (
//     <div className="min-h-screen bg-gray-100 p-6 flex justify-center items-start">
//       <div className="bg-white w-full max-w-2xl rounded shadow-md p-6">
//         <h2 className="text-2xl font-bold mb-6 text-center">Shopping Cart</h2>

//         {cart.length === 0 ? (
//           <p className="text-center text-gray-600">Your cart is empty.</p>
//         ) : (
//           <>
//             {cart.map(item => (
//               <div key={item.id} className="flex justify-between items-center border-b py-4">
//                 <div>
//                   <h3 className="text-lg font-semibold">{item.name}</h3>
//                   <p className="text-gray-600">₹{item.price} each</p>
//                 </div>

//                 <div className="flex items-center gap-2">
//                   <button
//                     onClick={() => decreaseQty(item.id)}
//                     className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
//                   >−</button>
//                   <span className="px-2">{item.quantity}</span>
//                   <button
//                     onClick={() => increaseQty(item.id)}
//                     className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
//                   >+</button>
//                 </div>

//                 <div className="flex items-center gap-4">
//                   <p className="font-medium">₹{item.price * item.quantity}</p>
//                   <button
//                     onClick={() => removeItem(item.id)}
//                     className="text-red-500 hover:underline text-sm"
//                   >
//                     Remove
//                   </button>
//                 </div>
//               </div>
//             ))}

//             <div className="text-right mt-6">
//               <p className="text-xl font-bold">Total: ₹{total}</p>
//               <button className="mt-4 px-5 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
//                 Checkout
//               </button>
//             </div>
//           </>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Cart;


import React from 'react'

const Cart = () => {
  return (
    <div className='bg-cyan-500'>
      Cart
    </div>
  )
}

export default Cart
