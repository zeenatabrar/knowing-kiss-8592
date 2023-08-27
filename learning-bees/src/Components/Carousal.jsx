import { useEffect, useReducer, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import { Button, HStack, Heading, Text, Box } from "@chakra-ui/react";

import Cards from "./Cards";

function Carousal() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleGetData = async () => {
    setLoading(true);
    const res = await fetch(
      "https://64e9400e99cf45b15fe08db2.mockapi.io/education"
    );
    const data = await res.json();
    setData(data);
    console.log("single Data data", data);
    setLoading(false);
  };

  useEffect(() => {
    handleGetData();
  }, []);

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <>
      <Carousel responsive={responsive}>
        {/* <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
  <div>Item 4</div> */}

        {data.map((item) => (
          <Cards
            key={item.id}
            id={item.id}
            name={item.name}
            avatar={item.avatar}
            description={item.description}
          />
        ))}
      </Carousel>

      <Box w="100px" m="auto">
        <Button
          marginTop={25}
          width={200}
          borderRadius={25}
          backgroundColor="pink"
        >
          View More Categories
        </Button>
      </Box>
    </>
  );
}
export default Carousal;
