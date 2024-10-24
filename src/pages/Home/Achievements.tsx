import Container from "../../components/Container/Container";
import shape from "../../assets/landingPage/shape.png"
const Achievements = () => {
  return (
    <div className="my-[120px]">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
          <div className="text-left md:my-6">
            <div className="mb-2">
              <p className="mb-1 text-base font-bold text-[#81BAE3]">Let's something about us</p>
              <img src={shape} alt="" />
            </div>
            <h1 className="text-4xl leading-[45px] font-bold text-[#001858] mb-10 ">Our Achievements</h1>
            <button className="btn btn-secondary">
              Load More
            </button>
          </div>

          <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 bg-primary text-[#fef6e4] py-[94px] px-[55px] items-center">
            <div className="relative text-center custom-border p-1">
              <h2 className="text-4xl leading-[45px] font-bold">200+</h2>
              <p className="text-[16px] leading-[45px] font-bold">Running contest</p>
            </div>
            <div className="relative text-center custom-border p-2">
              <h2 className="text-4xl leading-[45px] font-bold">16126</h2>
              <p className="text-[16px] leading-[45px] font-bold">Happy Clients</p>
            </div>
            <div className="relative text-center custom-border p-2">
              <h2 className="text-4xl leading-[45px] font-bold">3k</h2>
              <p className="text-[16px] leading-[45px] font-bold">Photography Expert</p>
            </div>
            <div className="relative text-center">
              <h2 className="text-4xl leading-[45px] font-bold">30k</h2>
              <p className="text-[16px] leading-[45px] font-bold">Completed Contests</p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
};

export default Achievements;