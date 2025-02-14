import LogoFooter from './assets/logo-footer.svg'

function Footer() {

    return(
        <footer className="bg-gray-900">
            <div className=" flex flex-col">
            <div className="footer flex justify-center pt-15 pb-30 lg:gap-20 gap-15">
                <div className="logo">
                    <img src={LogoFooter} alt="logo footer" className='bg-white rounded-3xl'/>
                </div>

                <div className="link-1 text-white">
                    <h1 className='lg:text-2xl md:text-xl text-lg font-semibold mb-4'>Terms & policies</h1>
                    <div className="menu flex flex-col lg:text-xl text-lg gap-3">
                      <a href="#Home">Terms of Service</a>
                      <a href="#Home">Privacy Policy</a>
                    </div>
                </div>

                <div className="link-1 text-white">
                    <h1 className='lg:text-2xl md:text-xl text-lg font-semibold mb-4'>Company</h1>
                    <div className="menu flex flex-col lg:text-xl text-lg gap-3">
                      <a href="#Home">Home</a>
                      <a href="#about">About Us</a>
                      <a href="#Home">Contact Us</a>
                    </div>
                </div>

                <div className="link-1 text-white ">
                    <h1 className='lg:text-2xl md:text-xl text-lg font-semibold mb-4'>Contact</h1>
                    <div className="menu flex flex-col lg:text-xl text-lg gap-3">
                      <a href="#Home">(+62) 123456789</a>
                      <a href="#Home">agenycr@gmail.com</a>
                    </div>
                </div>

                <div className="link-1 text-white">
                    <h1 className='lg:text-2xl md:tex-xl text-lg font-semibold mb-4'>Location</h1>
                    <div className="menu flex flex-col lg:text-xl text-md gap-3">
                      <a href="#Home">PT Karya Hebat</a>
                      <a href="#Home">
                        JL. KH. Wahid <br />
                        Hasyim Kel No.10D <br />
                        Jakarta, Indonesia <br />
                        </a>
                      <a href="#Home">team@karyahebat.com
                      </a>
                    </div>
                </div>
            </div>

            <div className="flex justify-center">
            <div className="flex flex-col pb-10">
                <div className="icon flex justify-center gap-7">
                    <a href="#" className='text-black flex items-center justify-center w-10 h-10 rounded-full hover:-translate-y-1 transition-all bg-white'>
                      <i className="ai-instagram-fill text-2xl"></i>
                    </a>
                    <a href="#" className='text-black flex items-center justify-center w-10 h-10 rounded-full hover:-translate-y-1 transition-all bg-white'>
                      <i className="ai-linkedin-fill text-2xl"></i>
                    </a>
                    <a href="#" className='text-black flex items-center justify-center w-10 h-10 rounded-full hover:-translate-y-1 transition-all bg-white'>
                      <i className="ai-twitter-fill text-2xl"></i>
                    </a>
                    <a href="#" className='text-black flex items-center justify-center w-10 h-10 rounded-full hover:-translate-y-1 transition-all bg-white'>
                      <i className="ai-facebook-fill text-2xl"></i>
                    </a>
                </div>

                  <hr className="text-white my-4"/>

                  <p className="text-center text-white">Copyright &copy; 2023 Agency Creative. All Right Reserved</p> 
            </div>
            </div>
            </div>
        </footer>
    )
}

export default Footer