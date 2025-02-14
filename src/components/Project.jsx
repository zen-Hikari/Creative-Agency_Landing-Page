

function Project() {

    return(
        <section className="text-center py-50">
            <h3  data-aos="fade-up" className="text-blue-500 text-2xl font-semibold">Our Portfolio</h3>
                <h1 data-aos="fade-up" data-aos-delay="300" className="lg:text-5xl md:text-4xl text-3xl font-semibold pt-7">What Do We Do</h1>
            <div className=' flex justify-center'>
             <div className="container text-center">
                <div className="desc">
                    <p  data-aos="fade-up" data-aos-delay="500" className='lg:text-xl text-1xl text-gray-400 py-8'>all projects that we have already done , proven can help to use more
                    <span className='flex justify-center'>comfortable, then can used by client from our business</span></p>
                </div>

                <div className="img-port flex justify-center gap-12 mt-10">
                    <div data-aos="zoom-in" data-aos-delay="300" className="img-bg flex img-bg1 rounded-3xl">
                        <h1 className="text-white text-3xl font-semibold text-start px-5 mt-auto py-5">Design Byte App</h1>
                    </div>
                    <div data-aos="zoom-in" data-aos-delay="500" className="img-bg flex img-bg2 rounded-3xl">
                        <h1 className="text-white text-3xl font-semibold text-start px-5 mt-auto py-5">Cloup App</h1>
                    </div>
                    <div data-aos="zoom-in" data-aos-delay="700" className="img-bg flex img-bg3 rounded-3xl">
                        <h1 className="text-white text-3xl font-semibold text-start px-5 mt-auto py-5"  >Design Furniture App</h1>
                    </div>
                </div>
             </div>
            </div>
        </section>
    )
}

export default Project