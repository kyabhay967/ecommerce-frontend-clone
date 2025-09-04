import React from 'react'
import Card from '../utility components/Card'
import { useNavigate } from 'react-router-dom'

const ProductListing = ({products}) => {
  const navigate = useNavigate()
  return (
    
    <div className='bg-cyan-500 grid md:grid-cols-4 gap-10 space-y-5 sm:grid-cols-2 grid-cols-1 '>
        {
            products.map(({ id, name, category, price, inStock, img, description}) => (
            <div onClick={()=> navigate(`/product-details/${id}`)} >  
              <Card id = {id} name = {name} category = { category} price = {price} inStock = {inStock} img = {img} description = {description} />
            </div>
            
            ))
        }
    </div>
  )
}

export default ProductListing
            