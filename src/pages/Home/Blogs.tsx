import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

import Container from '../../components/Container/Container';
import { Pagination } from 'swiper/modules';
import BlogsCard from '../../components/Blogs/BlogsCard';
import { blogs } from '../../components/Blogs/BlogsData';
import shape from "../../assets/landingPage/shape.png"



const Blogs = () => {
  return (
    <div>
      <Container>
        <section className="py-16">
          <div className="text-center mb-12">
            <div className="mb-2">
              <p className="mb-1 text-base font-bold text-[#81BAE3]">Blog</p>
              <img src={shape} alt="" className="mx-auto" />
            </div>
            <h1 className="text-4xl font-bold text-primary">Explore our latest Blog</h1>
          </div>
          <div>
            <Swiper
              spaceBetween={30}
              slidesPerView={3}
              pagination={{
                el: '.custom-pagination',
                clickable: true,
                renderBullet: (index, className) => {
                  return `<span class="${className} custom-pagination-item"></span>`;
                },
              }}
              modules={[Pagination]}
              className="mySwiper"
            >
              {blogs.map((blog) => (
                <SwiperSlide key={blog.id}>
                  <BlogsCard blog={blog} />
                </SwiperSlide>
              ))}
            </Swiper>
            {/* ===== Custom design with control ======= */}
            <div className="custom-pagination flex justify-center mt-14 cursor-pointer p-1"></div>
          </div>
        </section>
      </Container>
    </div>
  );
};

export default Blogs;
