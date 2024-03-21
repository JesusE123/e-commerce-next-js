
import { useAppSelector } from "@/hooks/store";
import { useState } from "react";

const useDetailProducts = () => {
    const [isShowDialog, setIsShowDialog] = useState<boolean>(false)
  const state = useAppSelector((state) => state.products.cart);
  let total = 0;
  state.forEach((product: any) => {
    total += product.price * product.quantity;
  });

  total = parseFloat(total.toFixed(2));


  

  return {state,total,setIsShowDialog, isShowDialog}
};

export default useDetailProducts;
