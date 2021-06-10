import Header from '../components/Header'
import Head from 'next/head'
import Product from '../components/Product'
import {useRouter} from 'next/router'

function category() {

    const router = useRouter()

    return (
        <div>
            <Head>
                <title>Categories</title>
            </Head>
            <Header />
            <div className="mt-20 flex flex-row ml-8" >
                <div class="card">
                    <img src='https://images.unsplash.com/photo-1586816879360-004f5b0c51e5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80' alt="" class="card__img image"></img>
                        <div class="card__data">
                            <h1 class="card__title logo__one ">Mouses</h1>
                            <br></br>
                            <p class="card__description">Shop a wide range of keyboards with a lot of options available from the best to the most pocket friendly.</p>
                            <a href="#" class="card__button" onClick={() => router.push('mouse')} >Shop Mouses</a>
                        </div>
                </div>
                <div class="card">
                    <img src='https://images.unsplash.com/photo-1614149484421-dcd8185578cb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2978&q=80' alt="" class="card__img image"></img>
                        <div class="card__data">
                            <h1 class="card__title logo__one ">Keyboards</h1>
                            <br></br>
                            <p class="card__description">Shop a wide range of mice with a lot of options available from the best to the most pocket friendly.</p>
                            <a href="#" class="card__button" onClick={() => router.push('keyboards')} >Shop Keyboards</a>
                        </div>
                </div>
                <div class="card">
                    <img src='https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80' alt="" class="card__img image"></img>
                        <div class="card__data">
                            <h1 class="card__title logo__one ">Headphones</h1>
                            <br></br>
                            <p class="card__description">Shop a wide range of headphones with a lot of options available from the best to the most pocket friendly.</p>
                            <a href="#" class="card__button" onClick={() => router.push('headphones')} >Shop Headphones</a>
                        </div>
                </div>
                <div class="card">
                    <img src='https://images.unsplash.com/photo-1526509867162-5b0c0d1b4b33?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80' alt="" class="card__img image"></img>
                        <div class="card__data">
                            <h1 class="card__title logo__one ">Controllers</h1>
                            <br></br>
                            <p class="card__description">Shop a wide range of controllers with a lot of options for all main gaming systems.</p>
                            <a href="#" class="card__button" onClick={() => router.push('consoles')} >Shop Controllers</a>
                        </div>
                </div>
            </div>
            <div className="mt-8 flex flex-row ml-8" >
                <div class="card">
                    <img src='https://images.unsplash.com/photo-1507457379470-08b800bebc67?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1384&q=80' alt="" class="card__img image"></img>
                        <div class="card__data">
                            <h1 class="card__title logo__one ">Systems</h1>
                            <br></br>
                            <p class="card__description">Shop all main gaming systems like PS4, PS5, Nintendo Switch and XBOX.</p>
                            <a href="#" class="card__button" onClick={() => router.push('systems')} >Shop Systems</a>
                        </div>
                </div>
                <div class="card">
                    <img src='https://images.unsplash.com/photo-1616763355548-1b606f439f86?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80' alt="" class="card__img image"></img>
                        <div class="card__data">
                            <h1 class="card__title logo__one ">Monitors</h1>
                            <br></br>
                            <p class="card__description">Shop a wide range of monitors with a lot of options available from the best to the most pocket friendly.</p>
                            <a href="#" class="card__button" onClick={() => router.push('monitors')} >Shop Monitors</a>
                        </div>
                </div>
                <div class="card">
                    <img src='https://images.unsplash.com/photo-1515940175183-6798529cb860?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1487&q=80' alt="" class="card__img image"></img>
                        <div class="card__data">
                            <h1 class="card__title logo__one ">Peripherals</h1>
                            <br></br>
                            <p class="card__description">Shop other small objects that you need for gaming or streaming. These things will be a cherry on the cake for your setup.</p>
                            <a href="#" class="card__button" onClick={() => router.push('peripherals')} >Shop Peripherals</a>
                        </div>
                </div>
            </div>
        </div>
    )
}

export default category
