import react from 'react'
import {useRouter} from 'next/router'
import {useDispatch} from 'react-redux'
import {addToBasket} from '../slices/basketSlice'

function ProductBox({img, title, desc, button, link, type, price}) {

    const dispatch = useDispatch()

    const router = useRouter()

    const addItemToBasket = () => {

        const product = {
            img, title, desc, button, link, type, price
        }

        dispatch(addItemToBasket(product))
    }

    return (
        <div>
            <div class="card">
                <img src={img} alt="" class="card__img image"></img>
                     <div class="card__data">
                         <h1 class="card__title logo__one ">{title}</h1>
                         <span class="card__price bg-black ">{price}</span>
                         <p class="card__description">{desc}</p>
                         <a href="#" class="card__button">{button}</a>
                         <h5 className=" mr-80 mt-3 bg-black cursor-pointer" onClick={() => router.push(`${link}`)}  >{type}</h5>
                    </div>
            </div>
        </div>
    )
}

export default ProductBox
