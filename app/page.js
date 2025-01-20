
import Image from "next/image";
import Category from "./category/page";
import Product from "./product/page";
import Loading from "./product/loading";


export default function Home() {
  return (
    <div className="container">
      <Category/>
      
        <Product />
      
     
    </div>
  );
}
