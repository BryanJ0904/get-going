import '../../App.css';

function Footer(){
    return(
        <footer className="relative">
            <div className="py-10 bg-red-600 text-white">
                <div className="container">
                    <div className="flex flex-col lg:flex-row justify-between">
                        <div className="flex flex-col md:flex-row justify-around w-full lg:w-1/2">
                            <div className="w-full md:w-1/3 mb-5 lg:mb-0">
                                <div className="poppins-bold mb-3">INFORMASI KONTAK</div>
                                <ul className="poppins-regular">
                                    <li>
                                        <i><img /></i>
                                        <span>BSD Green Office Park 1, 6th Floor, BSD City, Tangerang, Banten 15345</span>
                                    </li>
                                    <li>
                                        <i><img /></i>
                                        <span>24/7 - Online</span>
                                    </li>
                                    <li>
                                        <i><img /></i>
                                        <span>lets@getgoing.co.id</span>
                                    </li>
                                    <li>
                                        <i><img /></i>
                                        <span>@getgoing.co.id</span>
                                    </li>
                                    <li>
                                        <i><img /></i>
                                        <span>@getgoing.co.id</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="w-full md:w-1/2">
                                <img src={`${process.env.PUBLIC_URL}/images/mockupApp.png`}/>
                            </div>
                        </div>
                        <div className="flex flex-col md:flex-row justify-around w-full lg:w-1/2">
                            <div className="w-full md:w-1/3 items-center">
                                <div className="poppins-bold mb-3">DOWNLOAD DI</div>
                                <ul>
                                    <li>
                                        <a href="https://apps.apple.com/us/app/getgoing/id1602015694"><img src={`${process.env.PUBLIC_URL}/images/AppStore.svg`}/></a>
                                    </li>
                                    <li>
                                        <a href="https://play.google.com/store/apps/details?id=com.getgoing.app"><img src={`${process.env.PUBLIC_URL}/images/GooglePlay.svg`}/></a>
                                    </li>
                                </ul>
                            </div>
                            <div className="w-full md:w-1/3 items-center mb-5 lg:mb-0">
                                <div className="poppins-bold mb-3">INFORMASI KONTAK</div>
                                <ul className="poppins-regular">
                                    <li>
                                        <i><img /></i>
                                        <span>Syarat dan Ketentuan</span>
                                    </li>
                                    <li>
                                        <i><img /></i>
                                        <span>Kebijakan Privasi</span>
                                    </li>
                                    <li>
                                        <i><img /></i>
                                        <span>Dokumentasi</span>
                                    </li>
                                    <li>
                                        <i><img /></i>
                                        <span>Penghargaan</span>
                                    </li>
                                    <li>
                                        <i><img /></i>
                                        <span>Login</span>
                                    </li>
                                    <li>
                                        <i><img /></i>
                                        <span>Press</span>
                                    </li>
                                    <li>
                                        <i><img /></i>
                                        <span>F.A.Q</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="py-6 bg-black text-gray-300">
                <div className="container">
                    <div className="flex">
                        <div className="w-1/2 text-center md:text-start poppins-regular">
                            © 2024 - PT. Gue Eksplorasi Terus. All rights reserved.
                        </div>
                        <div className="w-1/2">

                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;