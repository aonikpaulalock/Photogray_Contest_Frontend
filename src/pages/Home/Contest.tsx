import Container from "../../components/Container/Container";
import shape from "../../assets/landingPage/shape.png"
import SearchBar from "../../components/Contest/SearchBar";
import FilterButtons from "../../components/Contest/FilterButtons";
import ContestCard from "../../components/Contest/ContestCard";
import { useManageAdminContestsQuery } from "../../redux/feature/contestHolder/contestHolderApi";
import Pagination from "../../components/pagination/Pagination";
import { useState } from "react";
import { TPhotographyContest } from "../../types";
const Contest = () => {
  const [page, setPage] = useState(1)
  const { data: contests } = useManageAdminContestsQuery(
    {
      page: page,
      limit: 4,
    },
    {
      refetchOnMountOrArgChange: true
    }
  );
  const metaData = contests?.meta;
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
              contests?.data?.map((contest: TPhotographyContest) => <ContestCard
                key={contest._id}
                contest={contest}
              />)
            }
          </div>
          {/* Pagination Components */}
          <Pagination
            current={page}
            onChange={(value) => setPage(value)}
            pageSize={metaData?.limit}
            total={metaData?.total}
          />

        </div>

      </Container>
    </div>
  )
};

export default Contest;