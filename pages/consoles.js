import Index from './index'
import Header from '../components/Header'
import Head from 'next/head'
import Product from '../components/Product'

function consoles() {
    return (
        <div>
            <Head>
                <title>Consoles</title>
            </Head>
            <Header />
            {/*Consoles and Controllers*/}
      <div className=" h-screen ml-8 ">
        <div className="darkish-bg flex flex-row mt-16 " >
          <Product 
          type="Controllers"
          link="consoles"
          button='Add to Cart'
          price='$50'
          title='PS4 Controller' 
          img='https://images.unsplash.com/photo-1593118247619-e2d6f056869e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80' 
          desc="This PS4 controller in blue is the best in looks and functionality. Have the best PS4 gaming experience through this."
          className='gaming-font' 
          />
          <Product 
          type="Controllers"
          link="consoles"
          button='Add to Cart'
          price='$70'
          title='PS5 Controller'
          img='https://images.unsplash.com/photo-1617807666231-331677e1c41f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
          desc='This PS5 controller in blue is the best in looks and functionality. Have the best PS5 gaming experience through this.'
          />
          <Product 
          type="Controllers"
          link="consoles"
          button='Add to Cart'
          price='$30'
          title='XBOX Controller'
          img='https://images.unsplash.com/photo-1605640194512-2f7440046c2a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
          desc='This blue XBOX controller is the best ever controller for XBOX. Have a smooth gaming experience through this.'
          />
          <Product 
          type="Controllers"
          link="consoles"
          button='Add to Cart'
          price='$50'
          title='Nintendo Switch Controller'
          img='https://images.unsplash.com/photo-1617096200347-cb04ae810b1d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
          desc="Look at this beauty, attatchable and deattatchable. Have the best gaming experience through this."
          />
        </div>
      </div>
        </div>
    )
}

export default consoles
