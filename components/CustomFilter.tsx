"use client";

import React, { Fragment, useState } from "react";
import Image from "next/image";
import { Listbox, Transition } from "@headlessui/react";
import { ICustomFilter } from "@/types";
import { useRouter } from "next/navigation";
import { updateSearchParams } from "@/utlis";

const CustomFilter = ({ title, options }: ICustomFilter) => {
  const [selected, setSelected] = useState(options[0]);
  const router = useRouter();

  const handleUpdateParams = (e: { title: string; value: string }) => {
    const newPathName = updateSearchParams(title, e.value.toLowerCase());
    router.push(newPathName);
  };
  const Options = () => {
    return options.map((option) => (
      <Listbox.Option
        className={({ active }) =>
          `relative cursor-default py-2 px-4 ${
            active ? "bg-primary-blue text-white" : "text-grey-900"
          }`
        }
        key={option.title}
        value={option}
      >
        <span
          className={`block truncate ${
            selected ? "font-medium" : "font-normal"
          }`}
        >
          {option.title}
        </span>
      </Listbox.Option>
    ));
  };

  return (
    <div className="w-fit">
      <Listbox
        value={selected}
        onChange={(e) => {
          setSelected(e);
          handleUpdateParams(e);
        }}
      >
        <div className="relative w-fit z-10">
          <Listbox.Button className="custom-filter__btn">
            <span className="block truncate">{selected.title}</span>
            <Image
              src="/chevron-up-down.svg"
              alt="chupd"
              width={20}
              height={20}
              className="ml-4 object-contain"
            ></Image>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="custom-filter__options">
              <Options />
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
};

export default CustomFilter;
