import Index from './index'
import Header from '../components/Header'
import Head from 'next/head'
import Product from '../components/Product'

function systems() {
    return (
        <div>
            <Head>
                <title>Systems</title>
            </Head>
            <Header />
            {/*Systems*/}
            <h1 className=" gaming-font text-3xl mt-10 "><span className='logo__one' >Syst</span><span className='logo__two' >ems:</span></h1>
        <div className="darkish-bg flex flex-row mt-16" >
          <Product 
          type="Systems"
          link='systems'
          button='Add to Cart'
          price='$400'
          title='Sony PS4 Pro' 
          img='https://images.unsplash.com/photo-1507457379470-08b800bebc67?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1384&q=80' 
          desc="This is one of the best systems in this whole world! Let's you play any game you want. Play like a Pro with this PS4 Pro!!"
          className='gaming-font' 
          />
          <Product 
          type="Systems"
          link='systems'
          button='Add to Cart'
          price='$500'
          title='Sony PS5'
          img='https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
          desc='This is the best system in the whole world! Classy looks, crazy fast, rich-quality gameplay. All a gamer could want in one package.'
          />
          <Product 
          type="Systems"
          link='systems'
          button='Add to Cart'
          price='$300'
          title='XBOX One S'
          img='https://images.unsplash.com/photo-1605901309584-818e25960a8f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1478&q=80'
          desc="Microsoft's gaming system. One of the best in the world. Grab it and take your gaming skills to the next level."
          />
          <Product 
          type="Systems"
          link='systems'
          button='Add to Cart'
          price='$300'
          title='Nintendo Switch'
          img='https://images.unsplash.com/photo-1578303512597-81e6cc155b3e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
          desc="Enter Switch, brought to you by the OG gaming company Nintendo. Lightweight, portable and powerful, carry it on the go. A must for any gamer."
          />
        </div>
      </div>
    )
}

export default systems
