import React, { useState } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import HomeSectionCard from "../homeSectionCard/HomeSectionCard";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { Button } from "@mui/material";


const responsive = {
  0: { items: 1 },
  720: { items: 3 },
  1024: { items: 5 },
};

// ... (previous imports)

const HomeSectionCarousel = ({data,sectionName}) => {
 
  const [activeIndex, setActiveIndex] = useState(0);
  const [datas, setDatas] = useState(data);

  const slidePrev = () => {
    const newIndex = activeIndex - 1;
    setActiveIndex(newIndex >= 0 ? newIndex : 0);
  };

  const slideNext = () => {
    const newIndex = activeIndex + 1;
    setActiveIndex(newIndex < datas.length ? newIndex : datas.length - 1);
  };

  const syncActiveIndex = ({ item }) => setActiveIndex(item);

  const items = datas
    .slice(activeIndex, activeIndex + 10)
    .map((item) => <HomeSectionCard key={item.id} product={item} />);

  return (
    <div className="px-4 lg:px-8 border h-[25rem]">
        <h2 className="text-2xl font-extrabold text-gray-800  py-5">{sectionName}</h2>
      <div className="relative p-5">
        <AliceCarousel
          items={items}
          disableButtonsControls
          responsive={responsive}
          onSlideChanged={syncActiveIndex}
          activeIndex={activeIndex}
          disableDotsControls
        />
        {activeIndex !== 0 && (
          <Button
            onClick={slidePrev}
            variant="contained"
            className="z-50 bg-white"
            sx={{
              position: "absolute",
              top: "10rem",
              left: "0rem",
              transform: "translateX(-30%) rotate(90deg)",
              bgcolor: "white",
            }}
            aria-label="prev"
          >
            <ChevronLeftIcon
              sx={{ transform: "rotate(-90deg)", color: "black" }}
            />
          </Button>
        )}
        {activeIndex !== datas.length - 5 && (
          <Button
            onClick={slideNext}
            variant="contained"
            className="z-50 bg-white"
            sx={{
              position: "absolute",
              top: "10rem",
              right: "0rem",
              transform: "translateX(30%) rotate(90deg)",
              bgcolor: "white",
            }}
            aria-label="next"
          >
            <ChevronRightIcon
              sx={{ transform: "rotate(-90deg)", color: "black" }}
            />
          </Button>
        )}
      </div>
    </div>
  );
};

export default HomeSectionCarousel;