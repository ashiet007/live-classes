import { useEffect, useState } from "react";
import Meta from "@/components/Meta";
import { Input, Typography } from "@material-tailwind/react";
import dynamic from "next/dynamic";
import axios from "axios";
import Filters from "@/components/Tutors/Filters";
const TutorCard = dynamic(() => import("@/components/Tutors/TutorCard"), {
  ssr: false,
});

const metaData = {
  title: "Live Classes: Explore tutors",
  description: "Explore classes in Live Classes",
};

function Tutors({ tutors }) {
  const [allTutors, setAllTutors] = useState(tutors);
  const [search, setSearch] = useState("");
  const [filters, setFilters] = useState(null);
  const [expFilter, setExpFilter] = useState(null);

  useEffect(() => {
    const filteredTutors = tutors.filter((tutorData) => {
      const regex = new RegExp(search, "i");
      if (regex.test(tutorData.name)) {
        return tutorData;
      }
    });
    setAllTutors(filteredTutors);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search]);

  useEffect(() => {
    if (filters) {
      const filteredTutors = tutors.filter((tutorData) => {
        const priceRange = filters.value.split("-");
        if (
          parseInt(tutorData.price) >= parseInt(priceRange[0]) &&
          parseInt(tutorData.price) < parseInt(priceRange[1])
        ) {
          return tutorData;
        }
      });
      setAllTutors(filteredTutors);
    } else {
      setAllTutors([...tutors]);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filters]);

  return (
    <>
      <Meta title={metaData.title} description={metaData.description} />
      <section className="py-28 px-8">
        <div className="container mx-auto mb-20 text-center">
          <Typography
            variant="h2"
            color="blue-gray"
            className="mb-4"
            placeholder={"MyProjects"}
          >
            Explore our tutors
          </Typography>
          <Typography
            variant="lead"
            className="mx-auto w-full px-4 font-normal !text-gray-500 lg:w-6/12"
            placeholder={"Description"}
          >
            Live Classes has engaging instructor for people everywhere and of
            all ages, without having to leave the house.
          </Typography>
        </div>
        <div className="container mx-auto mb-10 w-1/3 text-center grid">
          <div className="mb-2 flex w-full flex-col gap-4 md:w-10/12 md:flex-row">
            <Input
              color="gray"
              label="Search for tutors..."
              size="lg"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>
        <div className="flex flex-col md:flex-row lg:flex-row">
          <Filters
            filters={filters}
            setFilters={setFilters}
            expFilter={expFilter}
            setExpFilter={setExpFilter}
          />

          {allTutors.length > 0 ? (
            <div className="container w-2/3 mx-auto grid grid-cols-1 gap-x-10 gap-y-20 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
              {allTutors.map((tutorData) => (
                <TutorCard key={tutorData.id} tutorData={tutorData} />
              ))}
            </div>
          ) : (
            <div className="container flex items-center justify-center">
              <Typography>No tutors found</Typography>
            </div>
          )}
        </div>
      </section>
    </>
  );
}

export async function getServerSideProps({ req }) {
  try {
    const response = await axios.get(
      `${process.env.API_URL}/search`,
      {},
      {
        headers: {
          accept: "*/*",
          "Content-Type": "application/json",
        },
      }
    );
    return { props: { tutors: response.data?.data || [] } };
  } catch (error) {
    console.log(error);
    return {
      props: { tutors: [] },
    };
  }
}

export default Tutors;
