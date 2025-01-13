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

// Animation Variants
const textAnimation = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const Blogs = () => {
  const { data: blogs, isLoading } = useGetAllBlogsQuery({});

  return (
    <div>
      <Container>
        <section className="py-16">
          {/* Animated Header */}
          <motion.div
            className="text-center mb-12"
            initial="hidden"
            whileInView="visible" // Animation triggers when in view
            viewport={{ once: false, amount: 0.2 }} // Custom viewport settings
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

          {/* Swiper Section */}
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

              {/* Blogs Data with Animation */}
              {!isLoading &&
                blogs?.data?.map((blog: Blog) => (
                  <SwiperSlide key={blog._id}>
                    <motion.div
                      initial="hidden"
                      whileInView="visible" // Trigger animation on scroll
                      viewport={{ once: false, amount: 0.3 }} // 30% visibility triggers animation
                      variants={textAnimation}
                      transition={{ duration: 0.5, ease: "easeInOut" }}
                    >
                      <BlogsCard blog={blog} />
                    </motion.div>
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
