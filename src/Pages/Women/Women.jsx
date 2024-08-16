
import { useEffect, useState } from "react";
import ProductItem from "../../Components/ProductItem/ProductItem";
import image1 from '../../assets/Images/image-product-1.jpg'
import image2 from '../../assets/Images/image-product-2.jpg'
import image3 from '../../assets/Images/image-product-3.jpg'
import image4 from '../../assets/Images/image-product-4.jpg'


function Women() {
    const [product, setProduct] = useState([
        {
            id: 1,
            productName: "Sneaker company",
            Title: "Fall Limited Edition Sneakers",
            Description: "These low-profile sneakers are perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.",
            Total: "$125.00",
            Discount: "50%",
            price: "$250.00",
            ProductPhoto1: image1,
            ProductPhoto2: image2,
            ProductPhoto3: image3,
            ProductPhoto4: image4,

        }



    ])









    // useEffect(() => {
    //     function CallApi() {
    //         fetch("http://localhost:3000/products")
    //             .then((respon) => {
    //                 return respon.json()
    //             })
    //             .then((finalResult) => {
    //                 setProduct(finalResult)
    //             })
    //     }
    //     CallApi()
    // }, [])


    return (
        <>
            <div className="pages">
                {
                    product.map((item) => {
                        return (
                            <ProductItem
                                key={item.id}
                                productName={item.productName}
                                Title={item.Title}
                                Description={item.Description}
                                Total={item.Total}
                                Discount={item.Discount}
                                price={item.price}
                                ProductPhoto1={item.ProductPhoto1}
                                ProductPhoto2={item.ProductPhoto2}
                                ProductPhoto3={item.ProductPhoto3}
                                ProductPhoto4={item.ProductPhoto4}
                            ></ProductItem>
                        )
                    })
                }
            </div>




        </>
    )

}
export default Women