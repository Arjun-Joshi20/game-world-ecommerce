import Header from '../components/Header'
import Head from 'next/head'
import {selectItems} from '../slices/basketSlice'
import {useSelector} from 'react-redux'

function cart() {

    const items = useSelector(selectItems);

    return (
        <div className="text-white" >
            <Head>
                <title>Cart</title>
                <link rel="icon" href="data:image/png;base64,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" />
            </Head>
            <Header />
            {/*Image Row*/}

            <div className="flex flex-row" >
                <img 
                src='https://images.unsplash.com/photo-1560252719-59e35a3bbc6d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
                className='h-60'
                ></img>
                <img
                src='https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1350&q=80'
                className='h-60'
                ></img>
                <img
                src='https://images.unsplash.com/photo-1615680022647-99c397cbcaea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1350&q=80'
                className='h-60'
                ></img>
                <img
                src='https://images.unsplash.com/photo-1555864326-5cf22ef123cf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1347&q=80'
                className='h-60'
                ></img>
            </div>

            {/*Left*/}

            <div className='flex flex-col p-5 space-y-10' >
                <h1 className=" gaming-font text-3xl border-b pb-4 "><span className='logo__one'>Your Gam</span><span className='logo__two' >ing Inventory</span></h1>
                {items.map((item, i) => (
                    <CheckoutProduct 
                    img={item.img}
                    title={item.title}
                    price={item.price}
                    desc={item.desc}
                    />
                ))}
            </div>

            {/*Right*/}
        </div>
    )
}

export default cart
