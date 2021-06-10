import Index from './index'
import Header from '../components/Header'
import Head from 'next/head'
import Product from '../components/Product'

function peripherals() {
    return (
        <div>
            <Head>
                <title>Peripherals</title>
            </Head>
            <Header />
            {/*Peripherals*/}
            <h1 className=" gaming-font text-3xl mt-10 "><span className='logo__one' >Periph</span><span className='logo__two' >erals:</span></h1>
        <div className="darkish-bg flex flex-row mt-16" >
          <Product 
          type="Peripherals"
          link='peripherals'
          button='Add to Cart'
          price='$300'
          title='Elgato Stream Deck' 
          img='https://www.elgato.com/themes/custom/smalcode/image/products/streaming-deck/personalized_photo.jpg' 
          desc="A stream deck is really important if you are streaming, it helps you to switch between screens. Stream like a pro with this Elgato Stream."
          className='gaming-font' 
          />
          <Product 
          type="Peripherals"
          link='peripherals'
          button='Add to Cart'
          price='$500'
          title='Secretlab Omega Chair'
          img="https://media.wired.com/photos/5f777c7eab008265a183f31b/125:94/w_1328,h_999,c_limit/WI110120_GL_LevelUpGamingChairs_01.jpg"
          desc='Snuggle up into this comfy chair and keep killing oponents. This chair lets you game without being a pain in the back!'
          />
          <Product 
          type="Peripherals"
          button='Add to Cart'
          price='$10'
          title='RGB Led Light Strips'
          img='https://images.unsplash.com/photo-1572249930263-64fc5bbdb14b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1489&q=80'
          desc="These lights make your room look absolutely cool and get you into the gaming vibe. Have a cool streaming room through these lights."
          />
          <Product 
          type="Peripherals"
          button='Add to Cart'
          price='$5'
          title='IKEA Headphone Stand'
          img='https://images.unsplash.com/photo-1597672583947-535985083fbc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1489&q=80'
          desc="Always having this thing makes you a pro. Hang your best-friend headphones to these and give them a nice home!"
          />
        </div>
      </div>
    )
}

export default peripherals
