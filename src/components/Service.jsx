import ImgService from './assets/ic-monitor.svg'
import ImgPen from './assets/ic-pentool.svg'
import ImgSet from './assets/ic-settings.svg'
import ImgTv from './assets/ic-tv.svg'

function Service() {

    return(
        <section className='flex justify-center pt-50 '>
            <div className="container service flex gap-10 justify-center">
                <div className="column-1 mt-30">
                    <h3 data-aos="fade-up" className='text-blue-500 text-2xl font-semibold pb-6'>Our Service</h3>
                    <h1  data-aos="fade-up" data-aos-delay="300" className='lg:text-5xl md:tex-4xl text-3xl font-semibold'>Perfect and Fast <span className='span-ser flex'>Movement</span></h1>
                    <p  data-aos="fade-up" data-aos-delay="500" className='lg:text-xl text-md text-gray-400 pt-10 '>We move with make a Creative Strategy for help your business goal, we help to improve your income by a services we have. make your content look interesting and make people look for your business</p>
                </div>

                <div className="column-2 flex flex-col gap-6">
                    
                  <div className="card-cont-1 flex gap-6">
                  <div data-aos="zoom-in" data-aos-delay="300" className="card-ser transition-all border-1 border-gray-300 py-9 rounded-3xl px-15 flex flex-col justify-center items-center cursor-pointer ">
                        <div className="img flex items-center justify-center w-[100px] h-[100px] rounded-full bg-blue-500">
                        <img src={ImgService} alt="" className='' />
                        </div>
                        <p className='text-center text-2xl font-semibold pt-5'>Social Media Management</p>
                    </div>
                  <div data-aos="zoom-in" data-aos-delay="500" className="card-ser transition-all border-1 border-gray-300 py-9 rounded-3xl px-15 flex flex-col justify-center items-center cursor-pointer ">
                        <div className="img flex items-center justify-center w-[100px] h-[100px] rounded-full bg-red-500">
                        <img src={ImgSet} alt="" className='' />
                        </div>
                        <p className='text-center text-2xl font-semibold pt-5'>Social Media Management</p>
                    </div>

                    
                  </div>

                   <div className="card-cont-2 flex gap-6">
                  <div data-aos="zoom-in" data-aos-delay="700" className="card-ser transition-all border-1 border-gray-300 py-9 rounded-3xl px-15 flex flex-col justify-center items-center cursor-pointer ">
                        <div className="img flex items-center justify-center w-[100px] h-[100px] rounded-full bg-green-500">
                        <img src={ImgPen} alt="" className='' />
                        </div>
                        <p className='text-center text-2xl font-semibold pt-5'>Social Media Management</p>
                    </div>
                  <div data-aos="zoom-in" data-aos-delay="900" className="card-ser transition-all border-1 border-gray-300 py-9 rounded-3xl px-15 flex flex-col justify-center items-center cursor-pointer ">
                        <div className="img flex items-center justify-center w-[100px] h-[100px] rounded-full bg-yellow-500">
                        <img src={ImgTv} alt="" className='' />
                        </div>
                        <p className='text-center text-2xl font-semibold pt-5'>Social Media Management</p>
                    </div>

                   </div>
                </div>
            </div>
        </section>
    )
}

export default Service