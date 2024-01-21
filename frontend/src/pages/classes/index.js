import ClassCard from "@/components/Classes/ClassCard";
import Meta from "@/components/Meta";
import { Input, Typography } from "@material-tailwind/react";
import axios from "axios";
import { useEffect, useState } from "react";

const metaData = {
  title: "Live Classes: Explore classes",
  description: "Explore classes in Live Classes",
};

function Classes({ classes }) {
  const [allClasses, setAllClasses] = useState(classes);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const filteredClasses = classes.filter((classData) => {
      const regex = new RegExp(search, "i");
      if (regex.test(classData.name)) {
        return classData;
      }
    });
    setAllClasses(filteredClasses);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search]);

  return (
    <>
      <Meta title={metaData.title} description={metaData.description} />{" "}
      <section className="py-28 px-8">
        <div className="container mx-auto mb-20 text-center">
          <Typography
            variant="h2"
            color="blue-gray"
            className="mb-4"
            placeholder={"MyProjects"}
          >
            Experience our live classes
          </Typography>
          <Typography
            variant="lead"
            className="mx-auto w-full px-4 font-normal !text-gray-500 lg:w-6/12"
            placeholder={"Description"}
          >
            Live Classes provides engaging instructor led content for people
            everywhere and of all ages, without having to leave the house.
          </Typography>
        </div>
        <div className="container mx-auto mb-10 w-1/3 text-center grid">
          <div className="mb-2 flex w-full flex-col gap-4 md:w-10/12 md:flex-row">
            <Input
              color="gray"
              label="Search for classes"
              size="lg"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>

        <div className="container mx-auto grid grid-cols-1 gap-x-10 gap-y-20 md:grid-cols-2 xl:grid-cols-4">
          {allClasses.length > 0 ? (
            allClasses.map((classData) => (
              <ClassCard key={classData.id} classData={classData} />
            ))
          ) : (
            <div className="text-center">
              <Typography>No classes found</Typography>
            </div>
          )}
        </div>
      </section>
    </>
  );
}

export async function getServerSideProps() {
  try {
    const response = await axios.get(
      `${process.env.API_URL}/classes`,
      {},
      {
        headers: {
          accept: "*/*",
          "Content-Type": "application/json",
        },
      }
    );
    return { props: { classes: response.data?.data || [] } };
  } catch (error) {
    console.log(error);
    return {
      props: { classes: [] },
    };
  }
}

export default Classes;
