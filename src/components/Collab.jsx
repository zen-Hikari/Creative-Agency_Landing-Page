import ImgCol from './assets/collab-web.png'

function Collab() {

    return(
        <section className="pt-40 pb-20">
           <div className="flex justify-center">
           <div className="container collab flex items-center justify-between">
               <div className="collab-title">
                  <h1 data-aos="fade-up" className="coll-title text-5xl font-semibold">
                      Interesting <br />
                      Collaboration <br className="hidden md:block"/>
                      With Us?
                   </h1>
                   <p data-aos="fade-up" data-aos-delay="500" className="coll-desc py-6 text-2xl text-gray-400 ">Help you to reach your business goal</p>
                   <a data-aos="fade-up" data-aos-delay="700" href="" className="btn-coll text-white font-semibold bg-blue-500 rounded-4xl py-3 px-8">Get Started</a>
               </div>

               <div data-aos="fade-up" data-aos-delay="800" className="img-col">
                 <img src={ImgCol} alt="" width="600px"/>
               </div>
            </div>
           </div>
        </section>
    )
}

export default Collab