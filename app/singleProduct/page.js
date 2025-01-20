import React from 'react';
import Image from 'next/image';
import style from './singleProduct.module.css';

function SinglePage() {
  const productImage = '/product.jpg'; // Example product image path

  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-wrap ">
        <div className="w-full md:w-1/6">
          <div className="card mt-[40px]">
            <Image src={productImage} alt='product' width={200} height={200} className="rounded-lg " />
          </div>
          <div className="card mt-5">
            <Image src={productImage} alt="product" width={200} height={200} className="rounded-lg" />
          </div>
        </div>
        <div className="w-full md:w-5/12 mt-5">
          <div className={`card ${style.image} p-4 rounded-lg`}>
            <Image src={productImage} alt="product" width={500} height={500} className="w-full h-auto rounded-lg" />
          </div>
        </div>
        <div className={`w-full md:w-5/12 flex items-center mt-5 ${style.productDetails}`}>
          <div className="bg-white shadow-md rounded-lg p-4">
            <div className="p-4">
              <h5 className="text-xl font-semibold mb-2">Product Title</h5>
              <p className="text-gray-700 mb-4">
                This is a detailed description of the product. It highlights the key features, benefits, and specifications that make this product unique and desirable. The description should be engaging and informative, providing potential customers with all the information they need to make a purchase decision.
              </p>
              <a href="#" className={`inline-block ${style.background} ${style.buy} text-white px-4 py-2 rounded `}>Buy Now</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SinglePage;
