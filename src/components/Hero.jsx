import ImgHero from './assets/header-web.png'

function Hero() {

    return(
        <section className='flex justify-center'>
            <div className="container text-center">
                <h1 className='text-6xl  font-extrabold mb-10 mt-20'>
                    Make your dream <span className='flex justify-center'>business goal come true</span> 
                </h1>
                <p className='text-xl tetx-center'>
                    when you us for improve your business,then come with us help your <span className='flex justify-center text-center'>business have reach it, you just sit and feel that goal</span>
                </p>

                <div className="btn pt-10">
                    <a href="" className='border-2 border-blue-500 py-2 px-10 text-lg rounded-4xl text-white bg-blue-500 font-medium'>Start Project</a>
                </div>

                <div className="img-hero pt-10">
                    <img src={ImgHero} alt="" />
                </div>
            </div>
        </section>
    )
}

export default Hero