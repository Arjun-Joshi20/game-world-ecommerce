import { ShoppingCartIcon } from '@heroicons/react/solid'
import {useRouter} from 'next/router'
import {signIn, signOut, useSession} from 'next-auth/client' 
import { useSelector } from 'react-redux'
import { selectItems } from '../slices/basketSlice'


function Header() {

    const router = useRouter()
    const [session] = useSession()
    const selector = useSelector(selectItems)

    return (
        <div className="header darkish-bg mb-6 " >
            <div className="logo"></div>
            <nav className="main__navbar" >
            <li class='header__logo' onClick={() => router.push('/')} ><span className="logo__one">GAME</span><span className="logo__two" >WORLD</span></li>  
                <ul>
                    <li><a href="#products" >Products</a></li>
                    <li><a onClick={!session ? signIn : signOut}>
                    {session ? `Hello ${session.user.name}` : 'Sign In'}
                    </a></li>
                    <li onClick={() => router.push('category')}>Shop by Category</li>
                    <li><a><ShoppingCartIcon onClick={() => router.push('cart')} className=" h-7 -mt-1 " /></a></li>
                </ul>
            </nav>
            <nav className="search" >
                <input placeholder="Search Something Gamers!!" className="nav__search" type="search"></input>
            </nav>
        </div>
    )
}

export default Header
