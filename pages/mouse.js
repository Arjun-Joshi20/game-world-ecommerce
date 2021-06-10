import Header from '../components/Header'
import Category from '../pages/category'
import Product from '../components/Product'
import Head from 'next/head'

function mouse() {
    return (
        <div>
          <Head>
            <title>Mouse</title>
          </Head>
            <Header />
            <h1 className=" gaming-font text-3xl mt-10 "><span className='logo__one' >Mou</span><span className='logo__two' >ses:</span></h1>
        <div className="darkish-bg flex flex-row mt-10 ml-8 " >
          <Product 
          type="Mouse"
          button='Add to Cart'
          price='$20'
          title='Logitech G102 Mouse' 
          img='https://images.unsplash.com/photo-1605773527852-c546a8584ea3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80' 
          desc="This mouse helps you be the absolute best and get many headshots. The RGB Backlit is the cherry on the cake."
          className='gaming-font' 
          />
          <Product 
          type="Mouse"
          button='Add to Cart'
          price='$30'
          title='Aorus M5 Mouse'
          img='https://images.unsplash.com/photo-1588440573874-54185a266452?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80'
          desc='This mouse helps you be the absolute best and get many headshots. The RGB Backlit is the cherry on the cake.'
          />
          <Product 
          type="Mouse"
          button='Add to Cart'
          price='$20'
          title='Logitech G05 Mouse'
          img='https://images.unsplash.com/photo-1563297007-0686b7003af7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1391&q=80'
          desc='This mouse helps you be the absolute best and get many headshots. The RGB Backlit is the cherry on the cake.'
          />
          <Product 
          type="Mouse"
          button='Add to Cart'
          price='$10'
          title='Logitech G03'
          img='https://images.unsplash.com/photo-1618499890638-3a0dd4b278b7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
          desc="This mouse helps you be the absolute best and get many headshots. The RGB Backlit is the cherry on the cake."
          />
        </div>
      </div>
    )
}

export default mouse
