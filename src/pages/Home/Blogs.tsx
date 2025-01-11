import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

import Container from '../../components/Container/Container';
import { Pagination } from 'swiper/modules';
import BlogsCard from '../../components/Blogs/BlogsCard';
import shape from "../../assets/landingPage/shape.png";
import { useGetAllBlogsQuery } from '../../redux/feature/user/blogApi';
import { Blog } from '../../types';
import Loading from '../../components/Loading/Loading';
import NoContent from '../../components/Loading/NoContent';

const Blogs = () => {
  const { data: blogs, isLoading } = useGetAllBlogsQuery({});

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
              slidesPerView={isLoading || !blogs?.data?.length ? 1 : 3}
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
              {/* Loading State */}
              {isLoading && (
                <SwiperSlide>
                  <div className="flex justify-center items-center min-h-[300px]">
                    <Loading />
                  </div>
                </SwiperSlide>
              )}

              {/* No Content State */}
              {!isLoading && (!blogs?.data || blogs.data.length === 0) && (
                <SwiperSlide>
                  <div className="flex justify-center items-center min-h-[300px]">
                    <NoContent message="No blogs found!" />
                  </div>
                </SwiperSlide>
              )}

              {/* Blogs Data */}
              {!isLoading &&
                blogs?.data?.map((blog: Blog) => (
                  <SwiperSlide key={blog._id}>
                    <BlogsCard blog={blog} />
                  </SwiperSlide>
                ))}
            </Swiper>

            {/* Custom Pagination */}
            <div className="custom-pagination flex justify-center mt-14 cursor-pointer p-1"></div>
          </div>
        </section>
      </Container>
    </div>
  );
};

export default Blogs;
