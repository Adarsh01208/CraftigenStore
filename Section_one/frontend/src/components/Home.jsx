import React from 'react';
import Fade from 'react-reveal/Fade';






// import required modules
import { Pagination } from 'swiper/modules';
import { Navigation } from 'swiper/modules';

const Home = () => {
  return (
    <div className=''>
      <div id="carouselExampleDark" className="carousel carousel-dark slide mt-5">
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to={0}
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          />
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to={1}
            aria-label="Slide 2"
          />
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to={2}
            aria-label="Slide 3"
          />
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to={3}
            aria-label="Slide 4"
          />
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to={4}
            aria-label="Slide 5"
          />
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to={5}
            aria-label="Slide 6"
          />

          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to={6}
            aria-label="Slide 7"
          />
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to={7}
            aria-label="Slide 8"
          />
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to={8}
            aria-label="Slide 9"
          />
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval={10000}>
            <img src="https://thebombaystore.com/cdn/shop/files/Brass-Ganesha_Banner.jpg?v=1677564309" className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <Fade top>
                <h5>First slide label</h5>
                <p>Some representative placeholder content for the first slide.</p>
              </Fade>

            </div>
          </div>
          <div className="carousel-item" data-bs-interval={2000}>
            <img src="https://thebombaystore.com/cdn/shop/files/Bell_Banner_-_14-04-2022.png?v=1649938773" className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <Fade top >
                <h5>First slide label</h5>
                <p>Some representative placeholder content for the first slide.</p>
              </Fade>
            </div>
          </div>
          <div className="carousel-item" data-bs-interval={3000}>
            <img src="https://thebombaystore.com/cdn/shop/files/Web-Banner-for-Gifiting-catalog_Web.jpg?v=1665123509" className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5>Third slide label</h5>
              <p>Some representative placeholder content for the third slide.</p>
            </div>
          </div>
          <div className="carousel-item" data-bs-interval={4000}>
            <img src="https://thebombaystore.com/cdn/shop/files/Resin.jpg?v=1687499076" className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5>Fourth slide label</h5>
              <p>Some representative placeholder content for the third slide.</p>
            </div>
          </div>
          <div className="carousel-item" data-bs-interval={5000}>
            <img src="https://thebombaystore.com/cdn/shop/files/TBS6292_1a5b4ed3-4727-447a-a5a7-8b37a32d032c.jpg?v=1687500120" className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5>Fifth slide label</h5>
              <p>Some representative placeholder content for the third slide.</p>
            </div>
          </div>
          <div className="carousel-item" data-bs-interval={6000}>
            <img src="https://thebombaystore.com/cdn/shop/files/TBS6292_1a5b4ed3-4727-447a-a5a7-8b37a32d032c.jpg?v=1687500120" className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5>Six slide label</h5>
              <p>Some representative placeholder content for the third slide.</p>
            </div>
          </div>
          <div className="carousel-item" data-bs-interval={7000}>
            <img src="https://thebombaystore.com/cdn/shop/files/Web-Banner_Umbrella-Campaign_2023.jpg?v=1686221213" className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5>Seven slide label</h5>
              <p>Some representative placeholder content for the third slide.</p>
            </div>
          </div>
          <div className="carousel-item" data-bs-interval={8000}>
            <img src="https://thebombaystore.com/cdn/shop/files/Dwaar_Collection_Banner_-_Low.jpg?v=1648640231" className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5>Eight slide label</h5>
              <p>Some representative placeholder content for the third slide.</p>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      {/* <div className="container">
      <Swiper
        slidesPerView={2}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="">
            <div className="card-body">
              <img className='img-fluid' src="https://thebombaystore.com/cdn/shop/collections/Wedding_640x.jpg?v=1664780511" alt="" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="">
            <div className="card-body">
              <img className='img-fluid' src="https://thebombaystore.com/cdn/shop/collections/TBS19627_640x.webp.jpg?v=1669266292" alt="" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="">
            <div className="card-body">
             <img className='img-fluid' src="https://thebombaystore.com/cdn/shop/collections/For_her_640x.jpg?v=1660973778" alt="" />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      </div> */}
      <div className='container-fluid homebg'>
        <h1 className='text-center p-4'>Feature Categories</h1>
        <div className='row justify-content-evenly justify-content-center'>
          <div className='col-md-6'>
            <div className='card mx-5 '>
              <div className='card-body homeimg1 '>
                <div className='homeimg2ds'>
                  <h4>Brass</h4>
                  <p>Add elegance and charm to your home with these beautiful masterpieces</p>
                  <button className='btn btn-warning border-white mt-3 rounded-0'>Shop Now</button>
                </div>
              </div>
            </div>
          </div>
          <div className='col-md-6'>
            <div className='card mx-5 '>
              <div className='card-body homeimg2'>
                <div className='homeimg2ds'>
                  <h4>Brass</h4>
                  <p>Add elegance and charm to your home with these beautiful masterpieces</p>
                  <button className='btn btn-warning border-white mt-3 rounded-0'>Shop Now</button>
                </div>

              </div>
            </div>
          </div>
        </div>

        <h1 className='text-dark text-center pt-5'>Collections</h1>

        <div className='row justify-content-evenly justify-content-center'>
          <div className='col-md-4 p-5 justify-content-evenly justify-content-center'>
            <div className='card border-0' >
              <div className='card-head'>
              <img className='img-fluid ' src="https://thebombaystore.com/cdn/shop/files/Collection_Ajrakh.jpg?v=1664781166" alt="" />
              </div>
              <div className='card-body cardbg p-3  '>
                <h3>Ajrakh</h3>
               <p> With origins from thousands of years ago, Ajrakh hails from the desert regions of Kutch, Gujarat. The printing is done by hand with  hand carved wooden blocks. It is distinguished by its color - Indigo &amp; Maroon.</p>
               <button className='btn btn-warning border-white mt-3 rounded-0'>Shop Now</button>
              </div>
            </div>
          </div>
          <div className='col-md-4 p-5 justify-content-evenly justify-content-center'>
            <div className='card border-0'>
              <div className='card-head'>
              <img className='img-fluid' src="https://thebombaystore.com/cdn/shop/files/Collection_Kalamkari.jpg?v=1664781209" alt="" />
              </div>
              <div className='card-body cardbg p-3 '>
                <h3>Kalamkari</h3>
               <p> Kalamkari’ is an ancient style of hand painting. The term Kalamkari comes from the words ‘kalam’ meaning pen and ‘kari’ meaning craftsmanship. It was done with a tamarind pen &amp; natural dyes, using interlacing patterns of leaves, flowers and birds design!.</p>
               <button className='btn btn-warning border-white mt-3 rounded-0'>Shop Now</button>
              </div>
            </div>
          </div>
          <div className='col-md-4 p-5 justify-content-evenly justify-content-center'>
            <div className='card border-0'>
              <div className='card-head'>
              <img className='img-fluid' src="https://thebombaystore.com/cdn/shop/files/Collection_Sui-Dhagga.jpg?v=1664781222" alt="" />
              </div>
              <div className='card-body cardbg  p-3 '>
                <h3 >Sui Dhaga</h3>
               <p> Sui Dhaaga is a representation of different embroideries of India, like Kantha, Aari and Sheesha. The Design is inspired by Ornate patterns and stitches, amalgamated into beautiful collage.</p>
               <button className='btn btn-warning border-white mt-3 rounded-0'>Shop Now</button>
              </div>
            </div>
          </div>
        </div>

      </div>

    </div>
  )
}

export default Home;