import React from "react";
import Categories from "@/components/Categories";
import MainBanner from "@/components/MainBanner";
import FlashSalesSlider from "@/components/FlashSalesSlider";
import SearchCategoriesSlider from "@/components/SearchCategoriesSlider";
import BestSellingSlider from "@/components/BestSellingSlider";
import ExploreProduct from "@/components/ExploreProduct";
import FooterLogos from "@/components/FooterLogos";

const Page = () => {
  return (
    <div>
      <div className="flex">
        <div className="w-1/5 border-r border-gray-300 hidden lg:block">
          <Categories />
        </div>
        <div className="flex-1">
          <MainBanner />
        </div>
      </div>
      <FlashSalesSlider />
      <SearchCategoriesSlider />
      <BestSellingSlider />
      <ExploreProduct />
      <FooterLogos />
    </div>
  );
};

export default Page;
