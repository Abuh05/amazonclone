import React from 'react';
import "./Home.css";
import Product from "./Product";

function Home() {
    return (
        <div className="home">
           <img className="home_image"
           src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
            alt=""
            />
            {/* Product id, title, price, rating, image */}

            <div className="home_row">
            <Product 
                id="12321341"
                title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
                price={11.96}
                rating={5}
                image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
            />
             <Product 
                id="49538094"
                title="KENWOOD Kitchen Mixer KMX51"
                price={239.0}
                rating={4}
                image="https://cf.shopee.com.my/file/d4ba4a8518729812ca25acdb7b9a4000"
            />
            </div>
            <div className="home_row">
            <Product 
                id="23445930"
                title="Amazon Echo (3rd Gen) – Smart Speaker with Alexa - Charcoal"
                price={199.99}
                rating={3}
                image="https://www.thesource.ca/medias/20190926144729-108085276-A.jpg-mediaConversion-640-x-480-mediaConversion-400-x-300-0?context=bWFzdGVyfGltYWdlc3w0MjQ1OXxpbWFnZS9qcGVnfGltYWdlcy9oYzgvaDFlLzkxODM0Njg0ODY2ODYuanBnfDkxNTNmNTk2YjdmOTY1ZTNmYWQ0OWU1NGY1MGVmMzk3NTBmOWZjMjVkZGY5NTQ5MmNhY2I3YmZiOWIzNzlmYWI"
            />
             <Product 
                id="12321341"
                title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
                price={11.96}
                rating={2}
                image="https://s.sdgcdn.com/10/2018/12/9264a9f55fc456abe90f13f7a355e9e22962724b_9dcbbb5c005c52ffe7487d4f66c83b81acdf6ac8_2016_09_15_08_00_26_026_f10a_optimized.jpg"
            
            
            />
             <Product 
                id="12321341"
                title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
                price={11.96}
                rating={3}
                image="https://pisces.bbystatic.com/image2/BestBuy_US/images/products/3755/3755015_sd.jpg"
            />
            </div>
            <div className="home_row">
            
             <Product 
                id="49538094"
                title=" Samsung LC49HG90DMUXEN 49 Curved Ultra Wide LED Monitor - 3840 x 1080"
                price={239.0}
                rating={4}
                image="https://images-na.ssl-images-amazon.com/images/I/81vlA84pg6L._AC_SL1500_.jpg"
            />
            </div>
           
            {/* Product */}
        </div>
    )
}

export default Home
