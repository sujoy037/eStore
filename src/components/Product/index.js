import React from 'react'
import './_product.scss'
const products = [
    require("../../assets/img/shop/shop-1.jpg"),
    require("../../assets/img/shop/shop-2.jpg"),
    require("../../assets/img/shop/shop-3.jpg"),
    require("../../assets/img/shop/shop-4.jpg"),
    require("../../assets/img/shop/shop-5.jpg"),
]


const Product = () => {
  return (
    <div className="row">
      {products.map((item, index) => (

  
        <div className="col-lg-3 col-md-6">
            <div className="product_item">
                <div className="product_item_pic">
                    {/* <img src={require("../../assets/img/shop/shop-1.jpg")}/> */}
                    <img src={item}/>
                    <ul className='product_hover'>
                        <li>
                            {/* <a href={require("../../assets/img/shop/shop-1.jpg")}></a> */}
                            <a href={item}></a>
                            <samp className='fa fa-arrows-alt'/>
                        </li>
                    </ul>
                </div>
                <div className='product_item_text'>
                    <h6>
                        <a href='#'>Furry Hooded</a>
                    </h6>
                    <div className="rating">
                        <i className='fa fa-star'></i>
                        <i className='fa fa-star'></i>
                        <i className='fa fa-star'></i>
                        <i className='fa fa-star'></i>
                        <i className='fa fa-star'></i>
                    </div>
                    <div className="product_price">$600</div>
                </div>
            </div>
        </div>
      ))}
    </div>
  )
}

export default Product