import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"
import SearchCategoryCard from "./SearchCategoryCard"

const SearchCategoryCrousel = ({ deviceType, searchCategory }) => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 7,
      slidesToSlide: 7,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 6,
      slidesToSlide: 6,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 4,
      slidesToSlide: 4,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 3,
      slidesToSlide: 3,
    },
  }

  return (
    <div className="relative z-[1]">
      <Carousel
        swipeable
        draggable={false}
        showDots={false}
        responsive={responsive}
        ssr
        infinite={false}
        autoPlay={false}
        autoPlaySpeed={1000}
        keyBoardControl
        customTransition="all .5s ease-in-out"
        transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        deviceType={deviceType}
        dotListClass="custom-dot-list-style"
        itemClass="px-1 lg:px-1.5 my-1 lg:my-1.5"
      >
        {searchCategory.map((category) => (
          <SearchCategoryCard
            key={category.id}
            id={category.id}
            image={category.image}
            title={category.name}
          />
        ))}
      </Carousel>
    </div>
  )
}

export default SearchCategoryCrousel
