import Container from "../../components/Container/Container";

const HeroSection = () => {
  return (
    <div className="bg-hero-pattern bg-cover bg-center h-screen">
      <Container>
        <div className="flex h-full items-center">
          <div className="text-white text-left">
            <h1 className="text-7xl font-bold mb-5">Welcome to our</h1>
            <h2 className="text-7xl font-extrabold mb-10">Biggest Community</h2>
            <p className="text-[16px] leading-8 font-poppins font-bold text-white mb-[58px]">Photography is an art of teleporting the past into the future.</p>
            <button className="btn btn-primary">
              Browse Contest
            </button>
          </div>
        </div>
      </Container >
    </div >
  )
};

export default HeroSection;