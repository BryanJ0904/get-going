import '../../App.css';
import { useEffect } from 'react';

function Navbar({ items }) {
    useEffect(() => {
        const handleScroll = () => {
            let navbarFixed = document.getElementById("navbar-fixed");
            let dropBox1 = document.getElementById("dropdown1");
            let dropBox2 = document.getElementById("dropdown2");
            let scrollPosition = window.pageYOffset;
            if (scrollPosition > 75) {
                navbarFixed.style.setProperty("top", "0");
                dropBox1.classList.remove("flex");
                dropBox1.classList.add("hidden");
            } else {
                navbarFixed.style.setProperty("top", "-99px");
                dropBox2.classList.remove("flex");
                dropBox2.classList.add("hidden");
            } 
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        let dropBox1 = document.getElementById("dropdown1");
        let dropBox2 = document.getElementById("dropdown2");
        function handleResize() {
            if (window.innerWidth > 1024) {
                dropBox1.classList.remove("flex");
                dropBox1.classList.add("hidden");
                dropBox2.classList.remove("flex");
                dropBox2.classList.add("hidden");
            }
        }

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        let navbarFixed = document.getElementById("navbar-fixed");
        navbarFixed.style.setProperty("top", "-99px");
    })

    function toggleDropdown1(){
        let dropBox = document.getElementById("dropdown1");
        if(dropBox?.classList.contains("flex")){
            dropBox?.classList.remove("flex");
            dropBox?.classList.add("hidden");
        }else{
            dropBox?.classList.remove("hidden");
            dropBox?.classList.add("flex");
        }
    }

    function toggleDropdown2(){
        let dropBox = document.getElementById("dropdown2");
        if(dropBox?.classList.contains("flex")){
            dropBox?.classList.remove("flex");
            dropBox?.classList.add("hidden");
        }else{
            dropBox?.classList.remove("hidden");
            dropBox?.classList.add("flex");
        }
    }

    return( 
        <div className="container pb-5">
        <div id="navbar" className="flex justify-center items-center w-full h-16 lg:h-24 bg-white z-50">
            <div className="w-5/6 flex justify-between">
                <div className="w-3/5 lg:w-1/2 flex">
                    <div className="w-fit h-auto">
                        <img className="w-auto" src={`${process.env.PUBLIC_URL}/images/logo.png`}/>
                    </div>
                    <div className="w-3/4 flex justify-between items-center">
                        <form className="w-full mx-auto">   
                            <label for="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                            <div className="flex relative">
                                <div className="w-full"><input type="search" id="default-search" className="block w-full p-2 ps-3 text-sm text-gray-900 rounded-full bg-gray-50 focus:ring-red-500 focus:border-red-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500 shadow-[0_0_15px_5px_rgba(239,68,68,0.7)]" placeholder="Cari negara, kota, atau guide" required /></div>
                                <div className="absolute flex justify-center items-center w-auto h-full aspect-square end-0"><button type="submit" className="text-white w-auto h-3/4 aspect-square end-2.5 bottom-0 bg-red-500 hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-full text-sm dark:bg-red-500 dark:hover:bg-red-600 dark:focus:bg-red-600"><img className="aspect-square w-1/2 h-auto mx-auto" src={`${process.env.PUBLIC_URL}/images/ArrowRight.svg`}/></button></div>
                            </div>
                        </form>
                    </div>
                </div>
                { items == "1" ? ( 
                <div className="w-[30%] hidden justify-between items-center lg:flex text-sm">
                    <a href="#" className="poppins-bold text-red-500 cursor-pointer">Beranda</a>
                    <a href="#" className="poppins-regular text-red-500 cursor-pointer">Servis Kami</a>
                    <a href="#" className="poppins-regular text-red-500 cursor-pointer">Blog</a>
                    <a href="#" className="w-1/4 poppins-bold text-end text-gray-500 tracking-[.3em] cursor-pointer">LOGIN</a>
                </div>
                ) : null}
                <div className="w-fit flex lg:hidden items-center cursor-pointer" onClick={() => toggleDropdown1()}>
                    <img className="h-8 lg:h-16" src={`${process.env.PUBLIC_URL}/images/Hamburger.svg`} />
                </div>
            </div>
        </div>  
        <div id="dropdown1" className="absolute hidden flex-col bg-white top-16 right-0 z-50">
            <div className="flex p-3"><a href="#" className="poppins-regular text-red-500 hover:text-red-600 cursor-pointer">Beranda</a></div>
            <div className="flex p-3"><a href="#" className="poppins-regular text-red-500 hover:text-red-600 cursor-pointer">Servis Kami</a></div>
            <div className="flex p-3"><a href="#" className="poppins-regular text-red-500 hover:text-red-600 cursor-pointer">Blog</a></div>
            <div className="flex p-3"><a href="#" className="poppins-bold text-gray-500 tracking-[.3em] cursor-pointer">LOGIN</a></div>
        </div>
        <div id="navbar-fixed" className="fixed container flex justify-center items-center w-full pt-14 h-12 lg:h-16 z-50" style={{transition: 'top 0.3s ease-in-out'}}>
            <div className="w-5/6 flex justify-between p-4 rounded-full backdrop-blur-md">
                <div className="w-3/5 lg:w-1/2 flex">
                    <div className="w-auto h-full lg:w-1/6 lg:h-auto">
                        <img className="w-1/2" src={`${process.env.PUBLIC_URL}/images/logo2.png`}/>
                    </div>
                    <div className="w-3/4 flex justify-between items-center">
                        <form className="w-full mx-auto">   
                            <label for="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                            <div className="flex relative">
                                <div className="w-full"><input type="search" id="default-search" className="block w-full p-2 ps-3 text-sm text-gray-900 rounded-full bg-gray-50 focus:ring-red-500 focus:border-red-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500 shadow-[0_0_15px_5px_rgba(239,68,68,0.7)]" placeholder="Cari negara, kota, atau guide" required /></div>
                                <div className="absolute flex justify-center items-center w-auto h-full aspect-square end-0"><button type="submit" className="text-white w-auto h-3/4 aspect-square end-2.5 bottom-0 bg-red-500 hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-full text-sm dark:bg-red-500 dark:hover:bg-red-600 dark:focus:bg-red-600"><img className="aspect-square w-1/2 h-auto mx-auto" src={`${process.env.PUBLIC_URL}/images/ArrowRight.svg`}/></button></div>
                            </div>
                        </form>
                    </div>
                </div>
                { items == "1" ? ( 
                <div className="w-[30%] hidden justify-between items-center lg:flex text-sm">
                    <a href="#" className="poppins-bold text-red-500 cursor-pointer">Beranda</a>
                    <a href="#" className="poppins-regular text-red-500 cursor-pointer">Servis Kami</a>
                    <a href="#" className="poppins-regular text-red-500 cursor-pointer">Blog</a>
                    <a href="#" className="w-1/4 poppins-bold text-end text-gray-500 tracking-[.3em] cursor-pointer">LOGIN</a>
                </div>
                ) : null}
                <div className="w-fit flex lg:hidden items-center cursor-pointer" onClick={() => toggleDropdown2()}>
                    <img className="h-8 lg:h-16" src={`${process.env.PUBLIC_URL}/images/Hamburger.svg`} />
                </div>
            </div>
            <div id="dropdown2" className="fixed hidden flex-col bg-white top-16 right-0 z-50">
                <div className="flex p-3"><a href="#" className="poppins-regular text-red-500 hover:text-red-600 cursor-pointer">Beranda</a></div>
                <div className="flex p-3"><a href="#" className="poppins-regular text-red-500 hover:text-red-600 cursor-pointer">Servis Kami</a></div>
                <div className="flex p-3"><a href="#" className="poppins-regular text-red-500 hover:text-red-600 cursor-pointer">Blog</a></div>
                <div className="flex p-3"><a href="#" className="poppins-bold text-gray-500 tracking-[.3em] cursor-pointer">LOGIN</a></div>
            </div>
        </div>
        </div>     
    )
}

export default Navbar;