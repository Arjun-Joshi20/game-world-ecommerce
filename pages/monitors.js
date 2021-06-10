import Index from './index'
import Header from '../components/Header'
import Head from 'next/head'
import Product from '../components/Product'

function monitors() {
    return (
        <div>
            <Head>
                <title>Monitors</title>
            </Head>
            <Header />
            <h1 className=" gaming-font text-3xl mt-10 "><span className='logo__one' >Moni</span><span className='logo__two' >tors:</span></h1>
        <div className="darkish-bg flex flex-row ml-8 mt-20" >
          <Product 
          type="Monitors"
          link='monitors'
          button='Add to Cart'
          price='$100'
          title='LG Monitor 21"' 
          img='https://images.unsplash.com/photo-1589241062272-c0a000072dfa?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80' 
          desc="This is a state of the art gaming monitor that helps you spot even more enemies and win your games."
          className='gaming-font' 
          />
          <Product 
          type="Monitors"
          link='monitors'
          button='Add to Cart'
          price='$150'
          title='BenQ Monitor 24"'
          img='https://images.unsplash.com/photo-1593305841991-05c297ba4575?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1253&q=80'
          desc='This is a state of the art gaming monitor that helps you spot even more enemies and win your games.'
          />
          <Product 
          type="Monitors"
          link='monitors'
          button='Add to Cart'
          price='$120'
          title='Agon Monitor 24"'
          img='https://images.unsplash.com/photo-1598550463415-d397fdddc3e0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
          desc='This is a state of the art gaming monitor that helps you spot even more enemies and win your games.'
          />
          <Product 
          type="Monitors"
          link='monitors'
          button='Add to Cart'
          price='$200'
          title=' Wide Monitor 28"'
          img='https://images.unsplash.com/photo-1590109976148-bbc058ee025a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1349&q=80'
          desc="This is a state of the art gaming monitor that helps you spot even more enemies and win your games."
          />
        </div>
        </div>
    )
}

export default monitors
