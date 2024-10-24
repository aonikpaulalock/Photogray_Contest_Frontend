import Container from "../../components/Container/Container";
import shape from "../../assets/landingPage/shape.png"
import SearchBar from "../../components/Contest/SearchBar";
import FilterButtons from "../../components/Contest/FilterButtons";
import { contestData } from "../../components/Contest/ContestData";
import ContestCard from "../../components/Contest/ContestCard";
import ContestPagination from "../../components/Contest/ContestPagination";
const Contest = () => {
  return (
    <div className="mb-28">
      <Container>
        <div className="mx-auto p-6">
          {/* <!-- Content --> */}
          <div className="text-center mb-8">
            <div>
              <p className="mb-1 text-base font-bold text-[#81BAE3]">Let's something about us</p>
              <img src={shape} alt="" className="mx-auto" />
            </div>
            <h1 className="text-4xl font-bold text-primary mt-1">Find your favorite contest</h1>
          </div>

          {/* <!-- Search Bar --> */}
          <SearchBar />

          {/* <!-- Filter Buttons --> */}
          <FilterButtons />

          {/* <!-- Contest Cards Grid --> */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {
              contestData.map((contset) => <ContestCard key={contset.id} contest={contset} />)
            }
          </div>
          {/* Pagination Components */}
          <ContestPagination />

        </div>

      </Container>
    </div>
  )
};

export default Contest;