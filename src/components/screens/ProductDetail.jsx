import React from 'react'
import { useParams } from 'react-router-dom'

const ProductDetail = ({products}) => {
  const params = useParams()

  const {id} = params
  console.log(id,'paramss');
  return (
    <div>
      {products[id-1].name}
    </div>
  )
}

export default ProductDetail
