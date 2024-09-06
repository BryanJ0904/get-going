import Footer from './components/ui/footer';
import Navbar from './components/ui/navbar';

import { Button } from './components/ui/button';
import { EffectCoverflow, Autoplay, Navigation, Pagination, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useRef, useEffect } from "react";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './App.css';

function App() {
  const swiper1Ref = useRef(null);
  const swiper2Ref = useRef(null);

  useEffect(() => {
    if (swiper1Ref.current && swiper2Ref.current) {
      swiper1Ref.current.swiper.on('slideChange', () => {
        const activeIndex = swiper1Ref.current.swiper.activeIndex;
        swiper2Ref.current.swiper.slideTo(activeIndex);
      });

      swiper2Ref.current.swiper.on('slideChange', () => {
        const activeIndex = swiper2Ref.current.swiper.activeIndex;
        swiper1Ref.current.swiper.slideTo(activeIndex);
      });
    }
  }, []);

  return (
    <div className="poppins-regular">
      <Navbar items='1' />
      <section>
      <Swiper navigation={true} modules={[Autoplay, Navigation]} className="mySwiper h-[500px] sm:h-[700px] lg:h-[350px]" loop={true} autoplay={{delay: 2500, disableOnInteraction: false}}>
        <SwiperSlide className="flex justify-center text-center">
          <div className="flex flex-col lg:flex-row container w-4/5 h-[500px] sm:h-[700px] lg:h-[350px]">
            <div className="flex justify-center h-1/2 lg:h-auto lg:w-1/2">
              <div className="h-full w-full max-h-80 lg:max-h-none rounded-xl overflow-hidden"><img className="w-full h-auto" src={`${process.env.PUBLIC_URL}/images/slide1.JPG`} /></div>
            </div>
            <div className="flex justify-center items-center h-1/2 lg:h-auto lg:w-1/2">
              <div className="flex flex-col justify-center lg:w-3/4 lg:h-3/4 my-auto">
                <div className="text-gray-400 tracking-[.3em]">EXPLORE DAN NIKMATI MUDAH LIBURAN KE LUAR NEGERI DENGAN</div>
                <h2 className="py-2 poppins-bold">Aplikasi GetGoing</h2>
                <div className="text-gray-400 tracking-[.3em]">DAPAT DIDOWNLOAD DI :</div>
                <div className="flex w-full justify-around">
                  <div className="w-2/5"><a href="https://apps.apple.com/us/app/getgoing/id1602015694"><img src={`${process.env.PUBLIC_URL}/images/AppStore.svg`}/></a></div>
                  <div className="w-2/5"><a href="https://play.google.com/store/apps/details?id=com.getgoing.app"><img src={`${process.env.PUBLIC_URL}/images/GooglePlay.svg`}/></a></div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="flex flex-col lg:flex-row justify-center">
          <div className="flex flex-col lg:flex-row container w-4/5 h-[500px] sm:h-[700px] lg:h-[350px]">
            <div className="flex justify-center h-1/2 lg:h-auto lg:w-1/2">
              <div className="h-full w-full max-h-80 lg:max-h-none rounded-xl overflow-hidden"><img className="w-full h-auto" src={`${process.env.PUBLIC_URL}/images/slide2.JPG`} /></div>
            </div>
            <div className="flex justify-center items-center h-1/2 lg:h-auto lg:w-1/2">
              <div className="flex flex-col justify-between w-full lg:w-3/4 h-full">
                <div className="text-center text-gray-400 tracking-[.3em]">APA YANG GETGOING PUNYA ?</div>
                <div className="flex items-center h-1/4 transition ease-in-out translate-y-1 hover:translate-y-0 hover:cursor-pointer">
                  <div className="flex justify-center items-center w-1/6"><div className="w-3/4 h-auto aspect-square rounded-full bg-gray-100"></div></div>
                  <div className="flex flex-col justify-around w-3/4 h-3/4">
                    <div className="text-lg poppins-bold">Trip Planner</div>
                    <div><span className="rounded-xl bg-gray-100 p-1 text-xs poppins-bold">Susun Rute Perjalananmu Sendiri</span></div>
                  </div>
                </div>
                <div className="flex items-center h-1/4 transition ease-in-out translate-y-1 hover:translate-y-0 hover:cursor-pointer">
                  <div className="flex justify-center items-center w-1/6"><div className="w-3/4 h-auto aspect-square rounded-full bg-gray-100"></div></div>
                  <div className="flex flex-col justify-around w-3/4 h-3/4">
                    <div className="text-lg poppins-bold">Guide</div>
                    <div><span className="rounded-xl bg-gray-100 p-1 text-xs poppins-bold">Tour Guide berbahasa Indonesia</span></div>
                  </div>
                  <div></div>
                </div>
                <div className="flex items-center h-1/4 transition ease-in-out translate-y-1 hover:translate-y-0 hover:cursor-pointer">
                  <div className="flex justify-center items-center w-1/6"><div className="w-3/4 h-auto aspect-square rounded-full bg-gray-100"></div></div>
                  <div className="flex flex-col justify-around w-3/4 h-3/4">
                    <div className="text-lg poppins-bold">Info</div>
                    <div><span className="rounded-xl bg-gray-100 p-1 text-xs poppins-bold">Info penting di luar negeri</span></div>
                  </div>
                  <div></div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      </section>
      <section class="py-2 mt-1 bg-white-100">
        <div class="container">
          <div class="py-2">
            <div>
              <h2 className="poppins-bold">Sedang <font className="text-red-500">Populer</font></h2>
            </div>
          </div>
          <Swiper
            className="h-[350px]"
            modules={[Navigation, Pagination, A11y]}
            centeredSlides={false}
            spaceBetween={50}
            slidesPerView={3}
            pagination={{ dynamicBullets: true, clickable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
            breakpoints={{
              0: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 30,
              },
              1280: {
                slidesPerView: 5,
                spaceBetween: 40,
              },
            }}
          >
            <SwiperSlide className="flex justify-center">
              <div className="flex flex-col w-64 h-auto px-2 hover:cursor-pointer">
                <div className="relative transition ease-in-out translate-y-1 hover:translate-y-0 aspect-square max-w-64 max-h-64 rounded-xl overflow-hidden"><img src={`${process.env.PUBLIC_URL}/images/bergabungFormImage_Naurah Annisa Wahyudi.webp`} className="w-full h-auto"/><div className="absolute w-full h-full inset-0 bg-gradient-to-b from-transparent via-transparent to-black"></div></div>
                <div className="poppins-bold mt-3">Naurah</div>
                <div className="poppins-light">Amsterdam, Belanda</div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="flex justify-center">
              <div className="flex flex-col w-64 h-auto px-2 hover:cursor-pointer">
                <div className="relative transition ease-in-out translate-y-1 hover:translate-y-0 aspect-square max-w-64 max-h-64 rounded-xl overflow-hidden"><img src={`${process.env.PUBLIC_URL}/images/bergabungFormImage_Agus Sandra.webp`} className="w-full h-auto"/><div className="absolute w-full h-full inset-0 bg-gradient-to-b from-transparent via-transparent to-black"></div></div>
                <div className="poppins-bold mt-3">Agus</div>
                <div className="poppins-light">Roma, Italia</div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="flex justify-center">
              <div className="flex flex-col w-64 h-auto px-2 hover:cursor-pointer">
                <div className="relative transition ease-in-out translate-y-1 hover:translate-y-0 aspect-square max-w-64 max-h-64 rounded-xl overflow-hidden"><img src={`${process.env.PUBLIC_URL}/images/bergabungFormImage_A8A3A748-BC84-4500-A0F1-15D222EC3219.webp`} className="w-full h-auto"/><div className="absolute w-full h-full inset-0 bg-gradient-to-b from-transparent via-transparent to-black"></div></div>
                <div className="poppins-bold mt-3">Nadhira</div>
                <div className="poppins-light">Paris, Prancis</div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="flex justify-center">
              <div className="flex flex-col w-64 h-auto px-2 hover:cursor-pointer">
                <div className="relative transition ease-in-out translate-y-1 hover:translate-y-0 aspect-square max-w-64 max-h-64 rounded-xl overflow-hidden"><img src={`${process.env.PUBLIC_URL}/images/bergabungFormImage_E220E138-0044-4D6E-963A-50A4B82D1AF2.webp`} className="w-full h-auto"/><div className="border absolute w-full h-full inset-0 bg-gradient-to-b from-transparent via-transparent to-black"></div></div>
                <div className="poppins-bold mt-3">Nuel</div>
                <div className="poppins-light">Paris, Prancis</div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="flex justify-center">
              <div className="flex flex-col w-64 h-auto px-2 hover:cursor-pointer">
                <div className="relative transition ease-in-out translate-y-1 hover:translate-y-0 aspect-square max-w-64 max-h-64 rounded-xl overflow-hidden"><img src={`${process.env.PUBLIC_URL}/images/bergabungFormImage_Pilar Kobenhavn.webp`} className="w-full h-auto"/><div className="border absolute w-full h-full inset-0 bg-gradient-to-b from-transparent via-transparent to-black"></div></div>
                <div className="poppins-bold mt-3">Oben</div>
                <div className="poppins-light">Manchester, Inggris</div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="flex justify-center">
              <div className="flex flex-col w-64 h-auto px-2 hover:cursor-pointer">
                <div className="relative transition ease-in-out translate-y-1 hover:translate-y-0 aspect-square max-w-64 max-h-64 rounded-xl overflow-hidden"><img src={`${process.env.PUBLIC_URL}/images/bergabungFormImage_E5E046B0-9750-458D-BDCF-C9FE6EF2A763.webp`} className="w-full h-auto"/><div className="border absolute w-full h-full inset-0 bg-gradient-to-b from-transparent via-transparent to-black"></div></div>
                <div className="poppins-bold mt-3">Hanifa</div>
                <div className="poppins-light">London, Inggris</div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="flex justify-center">
              <div className="flex flex-col w-64 h-auto px-2 hover:cursor-pointer">
                <div className="relative transition ease-in-out translate-y-1 hover:translate-y-0 aspect-square max-w-64 max-h-64 rounded-xl overflow-hidden"><img src={`${process.env.PUBLIC_URL}/images/bergabungFormImage_Ditri Adnili Adnursa.webp`} className="w-full h-auto"/><div className="border absolute w-full h-full inset-0 bg-gradient-to-b from-transparent via-transparent to-black"></div></div>
                <div className="poppins-bold mt-3">Nili</div>
                <div className="poppins-light">Istanbul, Turki</div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="flex justify-center">
              <div className="flex flex-col w-64 h-auto px-2 hover:cursor-pointer">
                <div className="relative transition ease-in-out translate-y-1 hover:translate-y-0 aspect-square max-w-64 max-h-64 rounded-xl overflow-hidden"><img src={`${process.env.PUBLIC_URL}/images/bergabungFormImage_Muhammad Kadhan Ruskanda.webp`} className="w-full h-auto"/><div className="border absolute w-full h-full inset-0 bg-gradient-to-b from-transparent via-transparent to-black"></div></div>
                <div className="poppins-bold mt-3">Kadhan</div>
                <div className="poppins-light">Milan, Italia</div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="flex justify-center">
              <div className="flex flex-col w-64 h-auto px-2 hover:cursor-pointer">
                <div className="relative transition ease-in-out translate-y-1 hover:translate-y-0 aspect-square max-w-64 max-h-64 rounded-xl overflow-hidden"><img src={`${process.env.PUBLIC_URL}/images/bergabungFormImage_WhatsApp Image 2023-05-08 at 10.54.49.webp`} className="w-full h-auto"/><div className="border absolute w-full h-full inset-0 bg-gradient-to-b from-transparent via-transparent to-black"></div></div>
                <div className="poppins-bold mt-3">Nabilla</div>
                <div className="poppins-light">Paris, Prancis</div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="flex justify-center">
              <div className="flex flex-col w-64 h-auto px-2 hover:cursor-pointer">
                <div className="relative transition ease-in-out translate-y-1 hover:translate-y-0 aspect-square max-w-64 max-h-64 rounded-xl overflow-hidden"><img src={`${process.env.PUBLIC_URL}/images/bergabungFormImage_Edo.webp`} className="w-full h-auto"/><div className="border absolute w-full h-full inset-0 bg-gradient-to-b from-transparent via-transparent to-black"></div></div>
                <div className="poppins-bold mt-3">Edo</div>
                <div className="poppins-light">Paris, Prancis</div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
      <section class="py-1 mb-5 poppins-bold">
          <div class="container">
            <div class="mt-3 text-center pb-lg-2">
              <h2 class="mb-2">"Better to <font className="text-red-500">SEE </font>something once than hear about it <font className="text-blue-500">A THOUSAND TIMES"</font></h2>
              <h4 class="mb-1">- Asian Proverb.</h4>
            </div>
          </div>
      </section>
      <div className="container">
        <div className="flex flex-col sm:flex-row">
          <div className="flex flex-col w-full sm:w-1/2 h-auto">
            <div className="flex flex-col items-center text-center md:items-start md:text-start boxTitle-service">
              <h2 className="text-red-500 title">PRIVATE TRIP</h2>
              <h1 className="poppins-bold mt-2 drop-shadow-lg">Berangkat <font className="text-red-500 title">Kapan Saja </font>Semaumu</h1>
            </div>
            <div className="poppins-regular px-5 text-gray-400 grid grid-cols-1 lg:grid-cols-2 gap-4 mt-3 container-tripAdvantage">
              <div className="p-2">
                <div className="flex items-center">
                  <div className="w-8"><img className="w-1/2 max-w-4" src={`${process.env.PUBLIC_URL}/images/check-circle.png`} alt="Check" /></div>
                  <div className="w-5/6">
                    Tentukan tanggal keberangkatan sesukamu
                  </div>
                </div>
              </div>
              <div className="p-2">
                <div className="flex items-center">
                  <div className="w-8"><img className="w-1/2 max-w-4" src={`${process.env.PUBLIC_URL}/images/check-circle.png`} alt="Check" /></div>
                  <div className="w-5/6">
                    Tidak ada kuota minimum, jadi pasti berangkat
                  </div>
                </div>
              </div>
              <div className="p-2">
                <div className="flex items-center">
                  <div className="w-8"><img className="w-1/2 max-w-4" src={`${process.env.PUBLIC_URL}/images/check-circle.png`} alt="Check" /></div>
                  <div className="w-5/6">
                    Fleksibel, bebas tentukan destinasi dan aktivitas perjalanan
                  </div>
                </div>
              </div>
              <div className="p-2">
                <div className="flex items-center">
                  <div className="w-8"><img className="w-1/2 max-w-4" src={`${process.env.PUBLIC_URL}/images/check-circle.png`} alt="Check" /></div>
                  <div className="w-5/6">
                    Liburan jadi lebih exclusive untuk kamu dan keluarga
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-full sm:w-1/2 h-auto">
            <div className="w-full rounded-l-xl text-white" style={{background: 'linear-gradient(to right, rgb(204, 0, 0) 0%, rgb(255, 51, 51) 40%, rgb(255, 158, 34) 80%)'}}>
              <div className="w-full p-5 grid grid-cols-2 gap-4">
                <div className="p-2">
                  <div className="p-3 rounded-lg flex flex-col" style={{backgroundColor: 'rgba(255, 255, 255, 0.25)'}}>
                    <div><img className="bg-white rounded-xl p-2 w-16 h-16 mb-2" src={`${process.env.PUBLIC_URL}/images/support-gradient.png`}></img></div>
                    <div className="poppins-bold break-words whitespace-normal mb-2">Konsultasi GRATIS</div>
                    <div className="poppins-regular break-words whitespace-normal">Curhatin aja semuanya</div>
                  </div>
                </div>
                <div className="p-2">
                  <div className="p-3 rounded-lg flex flex-col" style={{backgroundColor: 'rgba(255, 255, 255, 0.25)'}}>
                    <div><img className="bg-white rounded-xl p-2 w-16 h-16 mb-2" src={`${process.env.PUBLIC_URL}/images/person-pin-gradient.png`}></img></div>
                    <div className="poppins-bold break-words whitespace-normal mb-2">Local Guide</div>
                    <div className="poppins-regular break-words whitespace-normal">Biar ada temen!</div>
                  </div>
                </div>
                <div className="p-2">
                  <div className="p-3 rounded-lg flex flex-col" style={{backgroundColor: 'rgba(255, 255, 255, 0.25)'}}>
                    <div><img className="bg-white rounded-xl p-2 w-16 h-16 mb-2" src={`${process.env.PUBLIC_URL}/images/commute-gradient.png`}></img></div>
                    <div className="poppins-bold break-words whitespace-normal mb-2">Transportasi</div>
                    <div className="poppins-regular break-words whitespace-normal">Bebas pilih transportasi apa</div>
                  </div>
                </div>
                <div className="p-2">
                  <div className="p-3 rounded-lg flex flex-col" style={{backgroundColor: 'rgba(255, 255, 255, 0.25)'}}>
                    <div><img className="bg-white rounded-xl p-2 w-16 h-16 mb-2" src={`${process.env.PUBLIC_URL}/images/star-gradient.png`}></img></div>
                    <div className="poppins-bold break-words whitespace-normal mb-2">Lengkap Pokoknya</div>
                    <div className="poppins-regular break-words whitespace-normal">Hotel, Asuransi, Visa, Wifi, dll.</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section class="py-5 mt-1 bg-white-100">
        <div class="container">
          <div class="col-md-8">
            <div class="row">
              <h2 className="poppins-bold">Kota <font className="text-red-500">Populer</font></h2>
            </div>
          </div>
          <Swiper
            className="h-[450px]"
            modules={[Navigation, Pagination, A11y]}
            centeredSlides={false}
            spaceBetween={50}
            slidesPerView={3}
            pagination={{ dynamicBullets: true, clickable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
            breakpoints={{
              0: {
                slidesPerView: 2
              },
              768: {
                slidesPerView: 3
              },
              1024: {
                slidesPerView: 4
              },
              1280: {
                slidesPerView: 5
              },
            }}
          >
            <SwiperSlide className="flex justify-center">
              <div className="relative flex flex-col w-64 h-auto hover:cursor-pointer">
                <div className="relative transition ease-in-out translate-y-1 hover:translate-y-0 aspect-[2/3] max-w-64 rounded-xl overflow-hidden">
                  <img src="https://ik.imagekit.io/getgoing/tr:w-800,h-1000/v0/b/getgoing-prod.appspot.com/o/cityImages%2F5cc12ad5-84cc-4c57-a9b7-8af97998c704?alt=media&token=f4b37f93-42fa-4cf6-830e-2e4d32afaf61" className="w-auto h-full"/>
                  <div className="absolute w-full h-full inset-0 bg-gradient-to-b from-transparent via-transparent to-black"></div>
                  <div className="absolute w-full h-1/3 sm:h-1/4 bottom-0 text-white px-4">
                    <h3 className="poppins-bold">Paris</h3>
                    <div className="poppins-regular">Perancis</div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="flex justify-center">
              <div className="relative flex flex-col w-64 h-auto hover:cursor-pointer">
                <div className="relative transition ease-in-out translate-y-1 hover:translate-y-0 aspect-[2/3] max-w-64 rounded-xl overflow-hidden">
                  <img src="https://ik.imagekit.io/getgoing/tr:w-800,h-1000/v0/b/getgoing-prod.appspot.com/o/cityImages%2FBern-City(1).png?alt=media&token=4d7ec828-93dd-4a46-89d7-630e349135ea" className="w-auto h-full"/>
                  <div className="absolute w-full h-full inset-0 bg-gradient-to-b from-transparent via-transparent to-black"></div>
                  <div className="absolute w-full h-1/3 sm:h-1/4 bottom-0 text-white px-4">
                    <h3 className="poppins-bold">Bern</h3>
                    <div className="poppins-regular">Swiss</div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="flex justify-center">
              <div className="relative flex flex-col w-64 h-auto hover:cursor-pointer">
                <div className="relative transition ease-in-out translate-y-1 hover:translate-y-0 aspect-[2/3] max-w-64 rounded-xl overflow-hidden">
                  <img src="https://ik.imagekit.io/getgoing/tr:w-800,h-1000/v0/b/getgoing-prod.appspot.com/o/cityImages%2F82baab12-2d5f-4e42-9ae0-438bcdc1224d?alt=media&token=b8ae1420-250a-4869-b1cc-01fb66a367ae" className="w-auto h-full"/>
                  <div className="absolute w-full h-full inset-0 bg-gradient-to-b from-transparent via-transparent to-black"></div>
                  <div className="absolute w-full h-1/3 sm:h-1/4 bottom-0 text-white px-4">
                    <h3 className="poppins-bold">Amsterdam</h3>
                    <div className="poppins-regular">Belanda</div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="flex justify-center">
              <div className="relative flex flex-col w-64 h-auto hover:cursor-pointer">
                <div className="relative transition ease-in-out translate-y-1 hover:translate-y-0 aspect-[2/3] max-w-64 rounded-xl overflow-hidden">
                  <img src="https://ik.imagekit.io/getgoing/tr:w-800,h-1000/v0/b/getgoing-prod.appspot.com/o/tripPlanner%2F1706723624lucas-davies-iP8ElEhqHeY-unsplash.jpg?alt=media&token=c191c6ec-c7d7-4c46-a3ba-7152dc06d3c2" className="w-auto h-full"/>
                  <div className="absolute w-full h-full inset-0 bg-gradient-to-b from-transparent via-transparent to-black"></div>
                  <div className="absolute w-full h-1/3 sm:h-1/4 bottom-0 text-white px-4">
                    <h3 className="poppins-bold">London</h3>
                    <div className="poppins-regular">Inggris</div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="flex justify-center">
              <div className="relative flex flex-col w-64 h-auto hover:cursor-pointer">
                <div className="relative transition ease-in-out translate-y-1 hover:translate-y-0 aspect-[2/3] max-w-64 rounded-xl overflow-hidden">
                  <img src="https://ik.imagekit.io/getgoing/tr:w-800,h-1000/v0/b/getgoing-prod.appspot.com/o/cityImages%2FUntitled%20design%20(19)-min.png?alt=media&token=84487726-2ddc-4ce8-838f-070b8e3d78e7" className="w-auto h-full"/>
                  <div className="absolute w-full h-full inset-0 bg-gradient-to-b from-transparent via-transparent to-black"></div>
                  <div className="absolute w-full h-1/3 sm:h-1/4 bottom-0 text-white px-4">
                    <h3 className="poppins-bold">Roma</h3>
                    <div className="poppins-regular">Italia</div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="flex justify-center">
              <div className="relative flex flex-col w-64 h-auto hover:cursor-pointer">
                <div className="relative transition ease-in-out translate-y-1 hover:translate-y-0 aspect-[2/3] max-w-64 rounded-xl overflow-hidden">
                  <img src="https://ik.imagekit.io/getgoing/tr:w-800,h-1000/v0/b/getgoing-prod.appspot.com/o/cityImages%2FGallery%201.png?alt=media&token=05b1d2ee-8140-4dd2-840d-98c5223d7d82" className="w-auto h-full"/>
                  <div className="absolute w-full h-full inset-0 bg-gradient-to-b from-transparent via-transparent to-black"></div>
                  <div className="absolute w-full h-1/3 sm:h-1/4 bottom-0 text-white px-4">
                    <h3 className="poppins-bold">Zurich</h3>
                    <div className="poppins-regular">Swiss</div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="flex justify-center">
              <div className="relative flex flex-col w-64 h-auto hover:cursor-pointer">
                <div className="relative transition ease-in-out translate-y-1 hover:translate-y-0 aspect-[2/3] max-w-64 rounded-xl overflow-hidden">
                  <img src="https://ik.imagekit.io/getgoing/tr:w-800,h-1000/v0/b/getgoing-prod.appspot.com/o/cityImages%2FUntitled%20design%20(21)-min%20(1).png?alt=media&token=97a44f3f-3efd-4d7d-96be-a5764a79b37f" className="w-auto h-full"/>
                  <div className="absolute w-full h-full inset-0 bg-gradient-to-b from-transparent via-transparent to-black"></div>
                  <div className="absolute w-full h-1/3 sm:h-1/4 bottom-0 text-white px-4">
                    <h3 className="poppins-bold">Praha</h3>
                    <div className="poppins-regular">Ceko</div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="flex justify-center">
              <div className="relative flex flex-col w-64 h-auto hover:cursor-pointer">
                <div className="relative transition ease-in-out translate-y-1 hover:translate-y-0 aspect-[2/3] max-w-64 rounded-xl overflow-hidden">
                  <img src="https://ik.imagekit.io/getgoing/tr:w-800,h-1000/v0/b/getgoing-prod.appspot.com/o/cityImages%2FUntitled%20design%20(22)-min.png?alt=media&token=671d26df-88cd-4018-9ee4-261085dc4299" className="w-auto h-full"/>
                  <div className="absolute w-full h-full inset-0 bg-gradient-to-b from-transparent via-transparent to-black"></div>
                  <div className="absolute w-full h-1/3 sm:h-1/4 bottom-0 text-white px-4">
                    <h3 className="poppins-bold">Berlin</h3>
                    <div className="poppins-regular">Jerman</div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="flex justify-center">
              <div className="relative flex flex-col w-64 h-auto hover:cursor-pointer">
                <div className="relative transition ease-in-out translate-y-1 hover:translate-y-0 aspect-[2/3] max-w-64 rounded-xl overflow-hidden">
                  <img src="https://ik.imagekit.io/getgoing/tr:w-800,h-1000/v0/b/getgoing-prod.appspot.com/o/tripPlanner%2F1695136431neil-martin-nFo5hbJTM8A-unsplash.jpg?alt=media&token=a0182101-fa13-4502-9b80-2afdfd813270" className="w-auto h-full"/>
                  <div className="absolute w-full h-full inset-0 bg-gradient-to-b from-transparent via-transparent to-black"></div>
                  <div className="absolute w-full h-1/3 sm:h-1/4 bottom-0 text-white px-4">
                    <h3 className="poppins-bold">Liverpool</h3>
                    <div className="poppins-regular">Inggris</div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="flex justify-center">
              <div className="relative flex flex-col w-64 h-auto hover:cursor-pointer">
                <div className="relative transition ease-in-out translate-y-1 hover:translate-y-0 aspect-[2/3] max-w-64 rounded-xl overflow-hidden">
                  <img src="https://ik.imagekit.io/getgoing/tr:w-800,h-1000/v0/b/getgoing-prod.appspot.com/o/cityImages%2F2845db6f-60f5-4cae-8150-eb36790fdb82?alt=media&token=e563b344-e9eb-4e22-8536-24ee73bae5a8" className="w-auto h-full"/>
                  <div className="absolute w-full h-full inset-0 bg-gradient-to-b from-transparent via-transparent to-black"></div>
                  <div className="absolute w-full h-1/3 sm:h-1/4 bottom-0 text-white px-4">
                    <h3 className="poppins-bold">Istanbul</h3>
                    <div className="poppins-regular">Turki</div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
      <section class="container my-5">
        <div className="text-center flex flex-col">
          <h2 className="poppins-bold">Kata <font className="text-red-500">Mereka</font></h2>
          <p className="poppins-regular text-gray-400">Cerita dari mereka yang telah menjelajahi Eropa bersama kami</p>
        </div>
        <div className="mt-6 flex flex-col lg:flex-row items-center h-fit lg:h-96">
          <div className="flex items-center w-3/4 lg:w-1/2 h-full mb-10 lg:mb-0 text-center lg:text-start">
            <Swiper
              ref={swiper1Ref}
              modules={[Pagination]}
              pagination={{ dynamicBullets: true, clickable: true }}
              className="swiper1 h-3/4"
            >
              <SwiperSlide>
                <div>
                  <h4 className="poppins-bold mb-2">Keluar negeri pertama kali tanpa rasa khawatir</h4>
                  <p className="poppins-regular text-sm text-gray-400 leading-6">GetGoing bikin liburan keluar negeri tanpa rasa khawatir dan bener-bener kerasa kayak cuma punya kami berdua. Apalagi ada aplikasinya juga yang bisa dipakai untuk mengeksplor kota dengan informasinya yang cukup lengkap. Bintang 5 pokoknya</p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div>
                  <h4 className="poppins-bold mb-2">Liburan seperti yang aku mau</h4>
                  <p className="poppins-regular text-sm text-gray-400 leading-6">Best banget segalanya mau aku recokin kapanpun (bahkan tengah malampun ready hahaha) Bener2 seperti yg ku mau, yakni sistem "partner trip" bukan "jasa tour". Temen2 yg di kirim ke aku buat nemenin jg baik2 n sabar2.. Thankyouuu banyak yah mbaa See you aku recokin di negara2 lain ya mbaaa.</p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div>
                  <h4 className="poppins-bold mb-2">Liburan keluarga yang sangat berkesan dan menyenangkan</h4>
                  <p className="poppins-regular text-sm text-gray-400 leading-6">Sekali lagi, terima kasih semua yg tak terhingga pada All Team GetGoing yang SUPER DUPER KEREN! yang udah gercep pandu kita, gercep belikan tiket reshecedhule kemarin, kasih ide2 get lost yang mantap, kasih hotel yang nyaman dll semua nya yg ga bisa saya sebutkan satu per satu... Alhamdulillah ini liburan keluarga yg sgt berkesan dan menyenangkan, dan bucket list impian ke swiss bisa terwujud... Alhamdulillaaah 🤲🏻🤲🏻 THE BEST BUAT GETGOING TEAM KALIAAAN TERBAIIIIKKKK.</p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div>
                  <h4 className="poppins-bold mb-2">Liburan mengesankan di hari anniversary</h4>
                  <p className="poppins-regular text-sm text-gray-400 leading-6">Liburan kami penuh dengan cerita dan pengalaman yang luar biasa. Dapat kejutan kue Black Forest saat literally di Black Forest di kota Freiburg untuk anniversary kami. Kalau bisa saya dan suami mau kasih sepuluh bintang untuk Tim Getgoing. Terima kasih untuk service yang luar biasa sebelum berangkat, selama liburan bahkan sesudahnya. So, thank you so much dear Tim GetGoing, You guys are the best. Kita doain Tim GetGoing semakin sukses ke depannya.</p>
                </div>
                </SwiperSlide>
              <SwiperSlide>
                <div>
                  <h4 className="poppins-bold mb-2">Perpaduan servis dan kemauan liburan</h4>
                  <p className="poppins-regular text-sm text-gray-400 leading-6">Keputusan kita menggunakan GetGoing sangat tepat karena mereka bisa memadukan servis sesuai dengan kemauan kita dan preferensi kita dan mereka juga siap konsultasi 2 arah dengan kita ! Jadi buat kalian yang mau explore Europe for the first time aku sangat saranin pakai GetGoing. Sukses terus buat GetGoing!.</p>
                </div>
                </SwiperSlide>
            </Swiper>
          </div>
          <div className="flex w-3/4 lg:w-1/2 h-auto">
            <Swiper
              ref={swiper2Ref}
              effect={'coverflow'}
              grabCursor={true}
              centeredSlides={true}
              slidesPerView={3}
              coverflowEffect={{
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
              }}
              modules={[EffectCoverflow, Pagination]}
              className="swiper2"
            >
              <SwiperSlide className="aspect-square">
                <img className="h-full aspect-square" src="https://ik.imagekit.io/getgoing/tr:w-500,h-500/v0/b/getgoing-prod.appspot.com/o/CMS%2F171135077820230216_150747-min.jpg?alt=media&token=78f902bb-6967-457e-92cd-1877248b4460" />
              </SwiperSlide>
              <SwiperSlide className="aspect-square">
                <img className="h-full aspect-square" src="https://ik.imagekit.io/getgoing/tr:w-500,h-500/v0/b/getgoing-prod.appspot.com/o/CMS%2F1711350675Image_20221216_075245_899%20(1).jpeg?alt=media&token=05ac57ca-86f1-424d-a4f7-8d260f64e9f9" />
              </SwiperSlide>
              <SwiperSlide className="aspect-square">
                <img className="h-full aspect-square" src="https://ik.imagekit.io/getgoing/tr:w-500,h-500/v0/b/getgoing-prod.appspot.com/o/CMS%2F1711351458D489AF07-D4B4-47D7-A6C1-966BE41F01F7%20(1)-min.jpg?alt=media&token=8ba3ff45-2dff-4e6d-8af4-073b7623813a" />
              </SwiperSlide>
              <SwiperSlide className="aspect-square">
                <img className="h-full aspect-square" src="https://ik.imagekit.io/getgoing/tr:w-500,h-500/v0/b/getgoing-prod.appspot.com/o/CMS%2F171135069520230622_174403-min.jpg?alt=media&token=fc0fa5c4-9b99-4344-b91d-b9211429edd7" />
              </SwiperSlide>
              <SwiperSlide className="aspect-square">
                <img className="h-full aspect-square" src="https://ik.imagekit.io/getgoing/tr:w-500,h-500/v0/b/getgoing-prod.appspot.com/o/CMS%2F1711350701IMG_2064-min.jpg?alt=media&token=b0036122-135b-40da-84aa-a7f9530b2499" />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </section>
      <section className="py-24 bg-gray-100">
        <div className="px-5 sm:container">
          <div className="mb-5 flex flex-col lg:flex-row lg:justify-between">
            <div className="w-3/4">
              <h2 className="poppins-bold">Baca Juga</h2>
            </div>
            <div className="w-1/2 lg:w-1/4 flex lg:justify-end">
              <button className="p-2 rounded-full border border-red-500 text-red-500 hover:bg-red-500 hover:text-white font-bold text-sm transition ease-in-out tracking-[.3em] cursor-pointer">LIHAT SEMUA ARTIKEL</button>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-white drop-shadow-lg rounded-xl transition ease-in-out translate-y-1 hover:translate-y-0 hover:cursor-pointer">
              <div className="border"><img src="https://ik.imagekit.io/getgoing/tr:w-1000,h-1000/v0/b/getgoing-prod.appspot.com/o/tripPlanner%2F17134328501.png?alt=media&token=069486bb-9fbd-426e-9478-15dcc8db7cde" className="w-full aspect-square" /></div>
              <div className="p-5">
                <div className="h-32 lg:h-24 my-2">
                  <h5 className="poppins-bold mb-1">Gaya Hidup Dan Rahasia Sehat Masyarakat Eropa</h5>
                  <p className="poppins-regular text-gray-400">12 Juni 2024</p>
                </div>
                <a className="flex poppins-bold text-red-500 text-sm tracking-[.3em] hover:underline hover:cursor-pointer">LANJUTKAN MEMBACA<img className="ms-2 w-4 h-4" src={`${process.env.PUBLIC_URL}/images/ArrowRight_Red.svg`} /></a>
              </div>
            </div>
            <div className="bg-white drop-shadow-lg rounded-xl transition ease-in-out translate-y-1 hover:translate-y-0 hover:cursor-pointer">
              <div className="border"><img src="https://ik.imagekit.io/getgoing/tr:w-1000,h-1000/v0/b/getgoing-prod.appspot.com/o/blogImage%2F77848697-45ba-4099-ac12-288d2ab29c9c?alt=media&token=2b986349-a46d-4f18-aca5-7168d89bd3d5" className="w-full aspect-square" /></div>
              <div className="p-5">
                <div className="h-32 lg:h-24 my-2">
                  <h5 className="poppins-bold mb-1">Siapa Kami ? - Nadya Riapratama</h5>
                  <p className="poppins-regular text-gray-400">12 Juni 2024</p>
                </div>
                <a className="flex poppins-bold text-red-500 text-sm tracking-[.3em] hover:underline hover:cursor-pointer">LANJUTKAN MEMBACA<img className="ms-2 w-4 h-4" src={`${process.env.PUBLIC_URL}/images/ArrowRight_Red.svg`} /></a>
              </div>
            </div>
            <div className="bg-white drop-shadow-lg rounded-xl transition ease-in-out translate-y-1 hover:translate-y-0 hover:cursor-pointer">
              <div className="border"><img src="https://ik.imagekit.io/getgoing/tr:w-1000,h-1000/v0/b/getgoing-prod.appspot.com/o/blogImage%2Ff7d81d84-52b6-4748-a4c4-38182274abac?alt=media&token=354ca680-8a53-4d7d-a405-a02c6ef53d74" className="w-full aspect-square" /></div>
              <div className="p-5">
                <div className="h-32 lg:h-24 my-2">
                  <h5 className="poppins-bold mb-1">8 Pasar Natal Terbaik di Eropa yang Wajib Dikunjungi</h5>
                  <p className="poppins-regular text-gray-400">12 Juni 2024</p>
                </div>
                <a className="flex poppins-bold text-red-500 text-sm tracking-[.3em] hover:underline hover:cursor-pointer">LANJUTKAN MEMBACA<img className="ms-2 w-4 h-4" src={`${process.env.PUBLIC_URL}/images/ArrowRight_Red.svg`} /></a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default App;
