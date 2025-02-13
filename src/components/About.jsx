import ImgAbout from './assets/about-web.png'

function About() {

    return(
        <section className='pt-40 flex justify-center '>
            <div>
            <h3 className='text-center pb-5 text-3xl font-semibold text-blue-500'>About Us</h3>
                <h1 className='text-center pb-10 text-5xl font-semibold'>Our Teammate</h1>
            <div className="container flex justify-center items-center">
                <div className="header-about flex gap-8 items-center justify-center">
                    <img src={ImgAbout} alt="about" width="600px" />
                <div className="detail text-xl font-medium">
                  <p className='pb-10'>  
                   We move with make a Creative Strategy for help your business goal, we help to improve your income by a services we have. make your content 
                   look interesting and make people look for your business
                  </p>

                  <p>
                  We move with make a Creative Strategy for help your business goal, we help to improve your income by a services we have. make your content look interesting and make people look for your business
                </p> 

                <div className="btn-about flex items-center gap-10 pt-10">
                    <a href="" className='text-white bg-blue-500 py-3 px-13 rounded-4xl'>About Us</a>
                    <a href="" className='border-2 border-blue-500 text-blue-500 py-3 px-13 rounded-4xl'>Our Story</a>
                </div>
                </div>
                </div>
            </div>
            </div>
        </section>
    )
}

export default About