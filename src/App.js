import { Button } from './components/ui/button';
import { Navigation, Pagination, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './App.css';

function App() {
  return (
    <div>
      <div className="flex justify-center mx-auto border border-red-700">
        <div>Hello World!</div>
        <Button>Click me!</Button>
      </div>
      <section class="py-2 mt-1 bg-white-100">
        <div class="container">
          <div class="col-md-8">
            <div class="row">
              <h2 className="poppins-bold">Sedang <font className="text-red-500">Populer</font></h2>
            </div>
          </div>
          <Swiper
            modules={[Navigation, Pagination, A11y]}
            centeredSlides={false}
            spaceBetween={50}
            slidesPerView={3}
            pagination={{ clickable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
            breakpoints={{
              0: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
              1280: {
                slidesPerView: 5,
                spaceBetween: 40,
              },
            }}
          >
            <SwiperSlide className="flex justify-center">
              <div className="border flex flex-col w-64 h-auto px-2">
                <div><img src="" className="w-64 h-64"/></div>
                <div className="poppins-bold">Lorem Ipsum</div>
                <div className="poppins-light">Osaka, Japan</div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="flex justify-center">
              <div className="border flex flex-col w-64 h-auto px-2">
                <div><img src="" className="w-64 h-64"/></div>
                <div className="poppins-bold">Lorem Ipsum</div>
                <div className="poppins-light">Osaka, Japan</div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="flex justify-center">
              <div className="border flex flex-col w-64 h-auto px-2">
                <div><img src="" className="w-64 h-64"/></div>
                <div className="poppins-bold">Lorem Ipsum</div>
                <div className="poppins-light">Osaka, Japan</div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="flex justify-center">
              <div className="border flex flex-col w-64 h-auto px-2">
                <div><img src="" className="w-64 h-64"/></div>
                <div className="poppins-bold">Lorem Ipsum</div>
                <div className="poppins-light">Osaka, Japan</div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="flex justify-center">
              <div className="border flex flex-col w-64 h-auto px-2">
                <div><img src="" className="w-64 h-64"/></div>
                <div className="poppins-bold">Lorem Ipsum</div>
                <div className="poppins-light">Osaka, Japan</div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="flex justify-center">
              <div className="border flex flex-col w-64 h-auto px-2">
                <div><img src="" className="w-64 h-64"/></div>
                <div className="poppins-bold">Lorem Ipsum</div>
                <div className="poppins-light">Osaka, Japan</div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="flex justify-center">
              <div className="border flex flex-col w-64 h-auto px-2">
                <div><img src="" className="w-64 h-64"/></div>
                <div className="poppins-bold">Lorem Ipsum</div>
                <div className="poppins-light">Osaka, Japan</div>
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
        <div className="flex">
          <div className="flex flex-col w-1/2 h-auto">
            <div className="flex flex-col boxTitle-service">
              <font className="text-red-500 title">PRIVATE TRIP</font>
              <h1 className="poppins-bold mt-2 drop-shadow-lg">Berangkat <font className="text-red-500 title">Kapan Saja </font>Semaumu</h1>
            </div>
            <div className="poppins-regular px-5 text-gray-400 grid grid-cols-2 gap-4 mt-3 container-tripAdvantage">
              <div className="border p-2">
                <div className="flex items-center">
                  <div className="w-1/6"></div>
                  <div className="w-5/6">
                    Tentukan tanggal keberangkatan sesukamu
                  </div>
                </div>
              </div>
              <div className="border p-2">
                <div className="flex items-center">
                  <div className="w-1/6"></div>
                  <div className="w-5/6">
                    Tidak ada kuota minimum, jadi pasti berangkat
                  </div>
                </div>
              </div>
              <div className="border p-2">
                <div className="flex items-center">
                  <div className="w-1/6"></div>
                  <div className="w-5/6">
                    Fleksibel, bebas tentukan destinasi dan aktivitas perjalanan
                  </div>
                </div>
              </div>
              <div className="border p-2">
                <div className="flex items-center">
                  <div className="w-1/6"></div>
                  <div className="w-5/6">
                    Liburan jadi lebih exclusive untuk kamu dan keluarga
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-1/2 h-auto">
            <div className="w-full rounded-l-xl text-white" style={{background: 'linear-gradient(to right, rgb(204, 0, 0) 0%, rgb(255, 51, 51) 40%, rgb(255, 158, 34) 80%)'}}>
              <div className="w-full p-5 grid grid-cols-2 gap-4">
                <div className="border p-2">
                  <div className="p-3 flex flex-col" style={{backgroundColor: 'rgba(255, 255, 255, 0.25)'}}>
                    <div><img className="w-16 h-16"></img></div>
                    <div className="poppins-bold">Lorem Ipsum</div>
                    <div className="poppins-regular">Lorem Ipsum</div>
                  </div>
                </div>
                <div className="border p-2">
                  <div className="p-3 flex flex-col" style={{backgroundColor: 'rgba(255, 255, 255, 0.25)'}}>
                    <div><img className="w-16 h-16"></img></div>
                    <div className="poppins-bold">Lorem Ipsum</div>
                    <div className="poppins-regular">Lorem Ipsum</div>
                  </div>
                </div>
                <div className="border p-2">
                  <div className="p-3 flex flex-col" style={{backgroundColor: 'rgba(255, 255, 255, 0.25)'}}>
                    <div><img className="w-16 h-16"></img></div>
                    <div className="poppins-bold">Lorem Ipsum</div>
                    <div className="poppins-regular">Lorem Ipsum</div>
                  </div>
                </div>
                <div className="border p-2">
                  <div className="p-3 flex flex-col" style={{backgroundColor: 'rgba(255, 255, 255, 0.25)'}}>
                    <div><img className="w-16 h-16"></img></div>
                    <div className="poppins-bold">Lorem Ipsum</div>
                    <div className="poppins-regular">Lorem Ipsum</div>
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
            modules={[Navigation, Pagination, A11y]}
            centeredSlides={false}
            spaceBetween={50}
            slidesPerView={3}
            pagination={{ clickable: true }}
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
              <div className="border flex flex-col w-64 h-auto px-2">
                <div><img src="" className="w-64 h-64"/></div>
                <div className="poppins-bold">Lorem Ipsum</div>
                <div className="poppins-light">Osaka, Japan</div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="flex justify-center">
              <div className="border flex flex-col w-64 h-auto px-2">
                <div><img src="" className="w-64 h-64"/></div>
                <div className="poppins-bold">Lorem Ipsum</div>
                <div className="poppins-light">Osaka, Japan</div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="flex justify-center">
              <div className="border flex flex-col w-64 h-auto px-2">
                <div><img src="" className="w-64 h-64"/></div>
                <div className="poppins-bold">Lorem Ipsum</div>
                <div className="poppins-light">Osaka, Japan</div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="flex justify-center">
              <div className="border flex flex-col w-64 h-auto px-2">
                <div><img src="" className="w-64 h-64"/></div>
                <div className="poppins-bold">Lorem Ipsum</div>
                <div className="poppins-light">Osaka, Japan</div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="flex justify-center">
              <div className="border flex flex-col w-64 h-auto px-2">
                <div><img src="" className="w-64 h-64"/></div>
                <div className="poppins-bold">Lorem Ipsum</div>
                <div className="poppins-light">Osaka, Japan</div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="flex justify-center">
              <div className="border flex flex-col w-64 h-auto px-2">
                <div><img src="" className="w-64 h-64"/></div>
                <div className="poppins-bold">Lorem Ipsum</div>
                <div className="poppins-light">Osaka, Japan</div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="flex justify-center">
              <div className="border flex flex-col w-64 h-auto px-2">
                <div><img src="" className="w-64 h-64"/></div>
                <div className="poppins-bold">Lorem Ipsum</div>
                <div className="poppins-light">Osaka, Japan</div>
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
        <div className="mt-6 flex flex-col lg:flex-row">
          <div className="flex flex-col">

          </div>
        </div>
      </section>
      <section className="py-24 bg-gray-100">
        <div className="container">
          <div className="mb-5 flex flex-col lg:flex-row lg:justify-between">
            <div className="w-3/4">
              <h2 className="poppins-bold">Baca Juga</h2>
            </div>
            <div className="w-1/4 flex lg:justify-end">
              <Button variant="outline">LIHAT SEMUA ARTIKEL</Button>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-white drop-shadow-lg rounded-xl">
              <div className="border"><img src="" className="w-full aspect-square" /></div>
              <div className="p-5">
                <div className="h-24 my-2">
                  <h5 className="poppins-bold mb-1">Gaya Hidup Dan Rahasia Sehat Masyarakat Eropa</h5>
                  <p className="poppins-regular text-gray-400">12 Juni 2024</p>
                </div>
                <a className="">Lanjutkan Membaca</a>
              </div>
            </div>
            <div className="bg-white drop-shadow-lg rounded-xl">
              <div className="border"><img src="" className="w-full aspect-square" /></div>
              <div className="p-5">
                <div className="h-24 my-2">
                  <h5 className="poppins-bold mb-1">Siapa Kami ? - Nadya Riapratama</h5>
                  <p className="poppins-regular text-gray-400">12 Juni 2024</p>
                </div>
                <a className="">Lanjutkan Membaca</a>
              </div>
            </div>
            <div className="bg-white drop-shadow-lg rounded-xl">
              <div className="border"><img src="" className="w-full aspect-square" /></div>
              <div className="p-5">
                <div className="h-24 my-2">
                  <h5 className="poppins-bold mb-1">8 Pasar Natal Terbaik di Eropa yang Wajib Dikunjungi</h5>
                  <p className="poppins-regular text-gray-400">12 Juni 2024</p>
                </div>
                <a className="">Lanjutkan Membaca</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
