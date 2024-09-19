import { useSelector } from "react-redux"

export const useProductList=()=>{
    const data = useSelector((state) => state.product.data[0]);
    return data
}