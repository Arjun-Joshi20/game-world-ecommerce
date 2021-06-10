import Index from './index'
import Header from '../components/Header'
import Head from 'next/head'
import Product from '../components/Product'

function keyboards() {
    return (
        <div>
            <Head>
                <title>Keyboards</title>
            </Head>
            <Header />
        <h1 className=" gaming-font text-3xl mt-10 "><span className='logo__one' >Keyb</span><span className='logo__two' >oards:</span></h1>
        <div className="darkish-bg flex flex-row mt-16" >
          <Product 
          type="Keyboards"
          link='keyboards'
          price='$100'
          title="Keychron Mechanical Keyboard" 
          img='https://images.unsplash.com/photo-1589578228447-e1a4e481c6c8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1489&q=80' 
          desc="This is an absolutely colourful mechanical keyboard with backlit RGB lights. This will look absolutely rad while playing."
          className='gaming-font' 
          button='Add to Cart'
          />
          <Product 
          type="Keyboards"
          link='keyboards'
          button='Add to Cart'
          price='$50'
          title="Mars Gaming MK6 Keyboard"
          img='https://images.unsplash.com/photo-1580484144342-caee18aff064?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1434&q=80'
          desc='This is an absolutely colourful mechanical keyboard with backlit RGB lights. This will look absolutely rad while playing.'
          />
          <Product 
          type="Keyboards"
          link='keyboards'
          button='Add to Cart'
          price='$40'
          title="ROG Gaming Keyboard"
          img='https://images.unsplash.com/photo-1544484647-725cbadff6cc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
          desc='This is an absolutely colourful mechanical keyboard with backlit RGB lights. This will look absolutely rad while playing.'
          />
          <Product 
          type="Keyboards"
          link='keyboards'
          button='Add to Cart'
          price='$70'
          title="Amkette Gaming Keyboard"
          img='https://images.unsplash.com/photo-1613160717888-faa82cdb8a94?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
          desc='This is an absolutely colourful mechanical keyboard with backlit RGB lights. This will look absolutely rad while playing.'
          />
        </div>
        </div>
    )
}

export default keyboards
