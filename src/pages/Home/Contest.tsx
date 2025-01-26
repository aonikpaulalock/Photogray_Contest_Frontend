import { motion } from "framer-motion";
import Container from "../../components/Container/Container";
import shape from "../../assets/landingPage/shape.png";
import SearchBar from "../../components/Contest/SearchBar";
import FilterButtons from "../../components/Contest/FilterButtons";
import ContestCard from "../../components/Contest/ContestCard";
import { useManageAdminContestsQuery } from "../../redux/feature/contestHolder/contestHolderApi";
import Pagination from "../../components/pagination/Pagination";
import { useState } from "react";
import { TPhotographyContest } from "../../types";
import Loading from "../../components/Loading/Loading";
import NoContent from "../../components/Loading/NoContent";

const Contest = () => {
  const [page, setPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState<string | undefined>("");
  const [filter, setFilter] = useState<string | undefined>("All");

  const { data: contests, isLoading } = useManageAdminContestsQuery({
    page: page,
    limit: 4,
    searchTerm,
    tags: filter,
  });

  const metaData = contests?.meta;

  return (
      <Container className="mb-28">
        <div className="mx-auto sm:p-6 p-4">

          <motion.div
            className="text-center mb-8"
            initial={{ opacity: 0, y: -40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ ease: "easeInOut", duration: 0.9 }}
          >
            <div>
              <p className="mb-1 text-base font-bold text-[#81BAE3]">
                Let's something about us
              </p>
              <img src={shape} alt="" className="mx-auto" />
            </div>
            <h1 className="text-4xl font-bold text-primary mt-1">
              Find your favorite contest
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ ease: "easeInOut", duration: 1 }}
          >
            <SearchBar setSearchTerm={setSearchTerm} />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ ease: "easeInOut", duration: 1, delay: 0.3 }}
          >
            <FilterButtons setFilter={setFilter} />
          </motion.div>

          <div className="flex flex-col items-center justify-center min-h-[200px]">
            {isLoading ? (
              <Loading />
            ) : contests?.data?.length === 0 ? (
              <NoContent message="No contest found !!" />
            ) : (
              <motion.div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ ease: "easeInOut", duration: 1 }}
              >
                {contests?.data?.map((contest: TPhotographyContest) => (
                  <motion.div
                    key={contest._id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ ease: "easeInOut", duration: 0.7 }}
                  >
                    <ContestCard contest={contest} />
                  </motion.div>
                ))}
              </motion.div>
            )}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ ease: "easeInOut", duration: 0.9 }}
          >
            <Pagination
              current={page}
              onChange={(value) => setPage(value)}
              pageSize={metaData?.limit}
              total={metaData?.total}
            />
          </motion.div>
        </div>
      </Container>
  );
};

export default Contest;
