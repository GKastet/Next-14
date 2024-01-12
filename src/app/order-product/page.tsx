"use client"
import { useRouter } from "next/navigation";

export default function OrderProduct() {
  const router = useRouter();
  const handleClick = () => {
    console.log("Placing your order");
    router.push("/blog")//navigates to indicated route-page (blog)
    //router.replace("/")// navigates to home
    //router.back()// navigates to the previous page
    //router.forward()// navigates forward to the next page
  };
  return (
    <>
      <h1>Order product</h1>
      <button type="button" onClick={handleClick}>
        Place order
      </button>
    </>
  );
}
