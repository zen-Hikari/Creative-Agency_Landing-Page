import ImgUser from './assets/user.jpg'

const Testi = () => {
    return (
        <section className=" flex flex-col justify-center">
            <div>
            <h3 data-aos="fade-up" className="text-center text-2xl font-semibold text-blue-500 pb-7">Testimonial</h3>
            <h1 data-aos="fade-up" data-aos-delay="300" className="lg:text-5xl md:text-4xl text-3xl  text-center font-semibold">People Talk about us</h1>
            </div>

            <div className="flex justify-center">
            <div className="container testi-cont py-10 flex gap-10 justify-center mt-10 overflow-hidden">
                
                <div data-aos="zoom-in" data-aos-delay="300" className="card-testi rounded-3xl py-10 px-10">
                    <div className="profile flex items-center gap-7">
                      <img src={ImgUser} alt="" width="70px"/>
                      <div className="name-user">
                        <h1 className='text-blue-500 text-xl font-semibold'>Angel Rose</h1>
                        <p className='text-sm mt-1'>Creative Manager</p>
                      </div>
                    </div>

                    <div className="desc">
                        <p className='text-xl mt-6 mb-10 text-gray-500'>There are many variations passages of Lorem Ipsum majority some by words which don`t look .</p>
                    </div>
                </div>
            
                <div data-aos="zoom-in" data-aos-delay="500" className="card-testi rounded-3xl py-10 px-10">
                    <div className="profile flex items-center gap-7">
                      <img src={ImgUser} alt="" width="70px"/>
                      <div className="name-user">
                        <h1 className='text-blue-500 text-xl font-semibold'>Angel Rose</h1>
                        <p className='text-sm mt-1'>Creative Manager</p>
                      </div>
                    </div>

                    <div className="desc">
                        <p className='text-xl mt-6 mb-10 text-gray-500'>There are many variations passages of Lorem Ipsum majority some by words which don`t look .</p>
                    </div>
                </div>
            
                <div data-aos="zoom-in" data-aos-delay="700" className="card-testi rounded-3xl py-10 px-10">
                    <div className="profile flex items-center gap-7">
                      <img src={ImgUser} alt="" width="70px"/>
                      <div className="name-user">
                        <h1 className='text-blue-500 text-xl font-semibold'>Angel Rose</h1>
                        <p className='text-sm mt-1'>Creative Manager</p>
                      </div>
                    </div>

                    <div className="desc">
                        <p className='text-xl mt-6 mb-10 text-gray-500'>There are many variations passages of Lorem Ipsum majority some by words which don`t look .</p>
                    </div>
                </div>
        </div>
            </div>
        </section>
    )
}

export default Testi