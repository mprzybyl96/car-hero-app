"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { IShowMoreCars } from "@/types";
import { CustomButton } from ".";
import { updateSearchParams } from "@/utlis";

const ShowMoreCars = ({ pageNumber, isNext }: IShowMoreCars) => {
  const router = useRouter();
  const handleNavigation = () => {
    const newLimit = (pageNumber + 1) * 10;
    const newPathName = updateSearchParams("limit", String(newLimit));
    router.push(newPathName);
  };

  return (
    <div className="w-full flex-center gap-5 mt-10">
      {!isNext && (
        <CustomButton
          title="Show More"
          btnType="button"
          containerStyles="bg-primary-blue rounded-full text-white"
          handleClick={handleNavigation}
        />
      )}
    </div>
  );
};

export default ShowMoreCars;
