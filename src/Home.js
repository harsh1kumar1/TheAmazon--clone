import React from 'react'
import "./Home.css"
import Product from './Product'

function Home() {
  return (
    <div className='home'>
     <div className='home__container'>
        <img 
        className='home__image'
        src='https://m.media-amazon.com/images/I/71LbHsact9L._SX3000_.jpg' alt=''
        />

        <div className='home__row'>
           <Product 
           title="Echo Dot (4th Gen, White) Combo with Wipro 12W LED Smart Color Bulb"
           price={98000}
           image='https://m.media-amazon.com/images/I/61WndqAyQXL._SX679_.jpg'
           rating={3}
           />
           <Product 
           id='12343456'
            title="Sennheiser HD 458 ANC Foldable Bluetooth Wireless Over Ear Headphones with Mic, Alexa "
           price={8748}
           image='https://m.media-amazon.com/images/I/71zPb+U1ybL._SY355_.jpg'
           rating={4}/>
           {/* <Product/> */}
           
        </div>
        
        <div className='home__row'>
        <Product 
           id='12343456'
           title="MI Xiaomi Wireless Home Security Camera 2i 2022 Edition "
           price={790}
           image='https://m.media-amazon.com/images/I/51hkb1CYemL._SX522_.jpg'
           rating={3}
           /> <Product 
           id='12343456'
           title="Alienware 610M Wired/Wireless Gaming Mouse "
           price={990}
           image='https://m.media-amazon.com/images/I/819eNuXA-NL._SX679_.jpg'
           rating={4}
           />
            <Product 
            id='12343456'
           title='OnePlus Bullets Z2 Bluetooth Wireless in Ear Earphones  '
           price={489}
           image='https://m.media-amazon.com/images/I/51RP1QMh-mL._SX679_.jpg'
           rating={3}
           />
            {/*product*/}
        </div>

        <div className='home__row'>
        <Product 
          id='12343456'
           title={<p>Dell Alienware x14 Gaming Laptop,Intel i7-12700H Windows 11,14"(35.5cm) FHD 144Hz 400nits GSYNC+Advanced Optimus,16GB DDR5,512GB SSD,Nvidia RTX 3050 Ti 4GB,Dolby Atmos,Lunar Light(1.84 kg) D569938WIN9</p>}
           price={49990}
           image='https://m.media-amazon.com/images/I/41Diz41FkhL._SY300_SX300_.jpg'
           rating={5}
           />
        </div>
        
     </div>
    </div>
  )
}

export default Home
