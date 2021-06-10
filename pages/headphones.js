import Index from './index'
import Header from '../components/Header'
import Head from 'next/head'
import Product from '../components/Product'

function headphones() {
    return (
        <div>
            <Head>
                <title>Headphones</title>
            </Head>
            <Header />
            {/*Headphones*/}
            <h1 className=" gaming-font text-3xl mt-10 "><span className='logo__one' >Headp</span><span className='logo__two' >hones:</span></h1>
        <div className="darkish-bg flex flex-row ml-8 mt-16 " >
          <Product 
          type="Headphones"
          link='headphones'
          button='Add to Cart'
          price='$40'
          title='Audio Technica Headphones' 
          img='https://www.nme.com/wp-content/uploads/2018/11/audio_technica_2000.jpg' 
          desc="This all-rounder headphone helps you do it all: gaming, music-production and casual listening."
          className='gaming-font' 
          />
          <Product 
          type="Headphones"
          link='headphones'
          button='Add to Cart'
          price='$40'
          title='Corsair Virtuoso Headphones'
          img='https://cdn.mos.cms.futurecdn.net/5myUHVVnGpNdq3hUcadtf4-970-80.jpg.webp'
          desc='These headphones made specially for gaming are from the God of peripherals: Corsair. These are the best headphones you can find.'
          />
          <Product 
          type="Headphones"
          link='headphones'
          button='Add to Cart'
          price='$20'
          title='HyperX Stinger Headphones'
          img='https://cdn.mos.cms.futurecdn.net/MmCz4PsFa82cSW74pe3JkN-970-80.jpg.webp'
          desc='These are the best headphones that you can find on a budget. With good sound, these headphones helps you concentrate on your game.'
          />
          <Product 
          type="Headphones"
          link='headphones'
          button='Add to Cart'
          price='$30'
          title='Corsair Void Headphones'
          img='https://images.news18.com/ibnlive/uploads/2017/09/Corsair-Void-Pro.jpg?impolicy=website&width=534&height=356'
          desc="These are one of the most preferred headphones. Look at the classy design. You will absolutely love them!!"
          />
        </div>
      </div>
    )
}

export default headphones
