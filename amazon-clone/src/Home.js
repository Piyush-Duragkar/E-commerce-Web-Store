import React from 'react';
import './Home.css';
import Product from './Product.js';

function Home() {
  return (
    <div className='home'>
      <div className='home_container'>
        <img className='home_image'
        src="https://vertexbazaar.com/wp-content/uploads/2022/04/amazon-prime-video-banner.jpg"
        alt=''
        />
        <div className='home_row'>
        <Product 
              id="123452"
              title="Bose Headphones 700, Noise Cancelling Bluetooth Over-Ear Wireless Headphones with Built-In Microphone for Clear Calls and Alexa Voice Control, Black" 
              price={379}
              image="https://pimcdn.sharafdg.com/cdn-cgi/image/width=600,height=600,fit=pad/images/000000000001126004_1?1684193977"
              rating={4}/>
            <Product 
              id="123451"
              title="ASUS TUF Gaming 27inch 1080P Gaming Monitor - Full HD, 165Hz (Supports 144Hz), 1ms, Extreme Low Motion Blur, FreeSync Premium, Shadow Boost, Eye Care, HDMI, DisplayPort, Tilt Adjustable "
              price={199}
              image="https://www.asus.com/media/global/gallery/tvzuv8nbdaa738j6_setting_xxx_0_90_end_2000.png"
              rating={5}/>
        </div>
        <div className='home_row'>
            
              <Product 
              id="123456"
              title="VIPERA NVIDIA GeForce RTX 4090 Founders Edition Graphic Card" 
              price={1934}
              image="https://www.viperatech.com/wp-content/uploads/2023/03/1-1.webp"
              rating={3}/>
            <Product 
              id="123453"
              title="WD_BLACK 4TB SN850X NVMe Internal Gaming SSD Solid State Drive - Gen4 PCIe, M.2 2280, Up to 7,300 MB/s - WDS400T2X0E" 
              price={299}
              image="https://cdn.mdcomputers.in/image/cache/catalog/ssd/w-d/wds100t2x0e/wds100t2x0e-image-main-600x600.jpg"
              rating={4}/>
            <Product 
              id="123454"
              title="Bodum 1928-16US4 Chambord French Press Coffee Maker, 1 Liter, 34 Ounce, Chrome" 
              price={30}
              image="https://i.ebayimg.com/images/g/dJ4AAOSwSdRjZHC5/s-l400.jpg"
              rating={3}/>
        </div>
        <div className='home_row'>
            <Product 
              id="123455"
              title="ASUS TUF Dash 15 (2022) Gaming Laptop, 15.6inch 144Hz FHD Display, Intel Core i7-12650H, GeForce RTX 3060, 16GB DDR5, 512GB SSD, Thunderbolt 4, Windows 11 Home, Off Black, FX517ZM-AS73" 
              price={1934}
              image="https://m.media-amazon.com/images/I/71AGOX9MORL._AC_UF1000,1000_QL80_.jpg"
              rating={3}/>
        </div>
      </div>
    </div>
  );
}

export default Home;
