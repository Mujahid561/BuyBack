import React, { useLayoutEffect } from "react"
import { useEffect } from "react"
import { useParams } from "react-router"

export const usePDPfetchData=(id)=>{
    // const params=useParams()
    const [product,setProduct]=React.useState(null)

    const fetchData=async (id)=>{
const res=await fetch(`https://dummyjson.com/products/${id}`)
const prod= await res.json();
setProduct(prod)
    }
   useLayoutEffect(()=>{
    fetchData(id)
    },[id])

    return product
}