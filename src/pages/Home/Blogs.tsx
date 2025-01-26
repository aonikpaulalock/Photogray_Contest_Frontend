import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { motion } from 'framer-motion';
import Container from '../../components/Container/Container';
import { Pagination } from 'swiper/modules';
import BlogsCard from '../../components/Blogs/BlogsCard';
import shape from "../../assets/landingPage/shape.png";
import { useGetAllBlogsQuery } from '../../redux/feature/user/blogApi';
import { Blog } from '../../types';
import Loading from '../../components/Loading/Loading';
import NoContent from '../../components/Loading/NoContent';

const textAnimation = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const Blogs = () => {
  const { data: blogs, isLoading } = useGetAllBlogsQuery({});

  return (
    <Container>
      <section className="py-16">

        <motion.div
          className="text-center mb-12"
          initial="hidden"
          animate="visible"
          variants={textAnimation}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          <div className="mb-2">
            <p className="mb-1 text-base font-bold text-[#81BAE3]">Blog</p>
            <img src={shape} alt="" className="mx-auto" />
          </div>
          <h1 className="text-4xl font-bold text-primary">
            Explore our latest Blog
          </h1>
        </motion.div>

        <div>
          <Swiper
            spaceBetween={30}
            slidesPerView={isLoading || !blogs?.data?.length ? 1 : 3}
            pagination={{
              el: '.custom-pagination',
              clickable: true,
              renderBullet: (index, className) => {
                void index;
                return `<span class="${className} custom-pagination-item"></span>`;
              },
            }}
            modules={[Pagination]}
            breakpoints={{
              300: { slidesPerView: 1 },
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="mySwiper"
          >

            {isLoading && (
              <SwiperSlide>
                <div className="flex justify-center items-center min-h-[300px]">
                  <Loading />
                </div>
              </SwiperSlide>
            )}

            {!isLoading && (!blogs?.data || blogs.data.length === 0) && (
              <SwiperSlide>
                <div className="flex justify-center items-center min-h-[300px]">
                  <NoContent message="No blogs found!" />
                </div>
              </SwiperSlide>
            )}

            {!isLoading &&
              blogs?.data?.map((blog: Blog) => (
                <SwiperSlide key={blog._id}>
                  <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={textAnimation}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                  >
                    <BlogsCard blog={blog} />
                  </motion.div>
                </SwiperSlide>
              ))}
          </Swiper>

          <div className="custom-pagination flex justify-center mt-14 cursor-pointer p-1"></div>
        </div>
      </section>
    </Container>
  );
};

export default Blogs;
