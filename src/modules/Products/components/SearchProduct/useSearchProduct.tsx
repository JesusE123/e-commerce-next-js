import { FormEvent } from "react";
import { useDispatch } from "react-redux";
import { getQueryName } from "@/store/Products/ProductsSlice";

const useSearchProduct = () => {
  const dispatch = useDispatch();
  const handlechange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = (e.target as HTMLInputElement).value;
    setTimeout(() => {
      dispatch(getQueryName(value));
    }, 2000);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  return {
    handlechange,
    handleSubmit,
  };
};

export default useSearchProduct;