import {Carousel} from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

function Banner() {

    

    return (
        <div className="relative" >
            <div className="absolute w-80 bg-gradient-to-t from-white to-transparent bottom-0 z-20" ></div>
            <Carousel
                autoPlay
                infiniteLoop
                showStatus={false}
                showIndicators={false}
                showThumbs={false}
                interval={5000}
            >
                <div>
                    <img class="banner-image " src="https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" loading='lazy'></img>
                    <div class="image__overlay image__overlay--primary">
                        <a href='#men-products' class="image__title">Welcome to GameWorld</a>
                        <p class="image__description">
                            Your complete destination for gaming
                        </p>
                    </div>
                </div>
                <div>
                    <img class="banner-image" src='https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80' loading='lazy'></img>
                    <div class="image__overlay image__overlay--primary">
                        <a href='#men-products' class="image__title">Shop Systems</a>
                        <p class="image__description">
                            Shop powerful systems like PS5, XBOX and NINTENDO SWITCH
                        </p>
                    </div>
                </div>
                <div>
                <img class="banner-image" src="https://images.unsplash.com/photo-1572249930263-64fc5bbdb14b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1489&q=80" loading='lazy'></img>
                <div class="image__overlay image__overlay--primary">
                        <a href='#men-products' class="image__title">Shop RGB Lights</a>
                        <p class="image__description">
                            Shop RGB Lights that makes your rooms look super-cool
                        </p>
                </div>
                </div>

                <div>
                    <img class="banner-image" src='https://images.unsplash.com/photo-1520092352425-9699926a9b0b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80' loading='lazy'></img>
                    <div class="image__overlay image__overlay--primary">
                        <a href='#men-products' class="image__title">Shop Keyboards</a>
                        <p class="image__description">
                            Shop amazing backlit keyboard that go easy on your pocket.
                        </p>
                    </div>
                </div>
                <div>
                    <img class="banner-image" src='https://images.unsplash.com/photo-1592375601764-5dd6be536f99?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80' loading='lazy'></img>
                    <div class="image__overlay image__overlay--primary">
                        <a href='#men-products' class="image__title">Shop Headphones</a>
                        <p class="image__description">
                            Shop amazing gaming headphones from Corsair, SteelSeries, HyperX and many more...
                        </p>
                    </div>
                </div>
            </Carousel>
        </div>

    )
}

export default Banner