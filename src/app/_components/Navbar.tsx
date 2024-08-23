"use client"
import Image from "next/image";
import React from "react";
import Valyuta from "../../../public/valyuta.png";
import { Button } from "~/components/ui/button";
import { useRouter } from "next/navigation";
type Props = {};

const Navbar = (props: Props) => {
  const router = useRouter();
  const navigateTo = (path: string) => {
    router.push(path);
  };
  return (
    <div className="h-max-content flex items-center justify-between bg-white">
      <div className="flex items-center justify-center">
        <Image width={150} height={150} alt="logo" src={Valyuta} />
        <Button
          variant="ghost"
          className="text-xl"
          onClick={() => navigateTo("/")}
        >
          Əsas
        </Button>
        <Button
          variant="ghost"
          className="text-xl"
          onClick={() => navigateTo("/currencies")}
        >
          Valyutalar
        </Button>
        <Button
          variant="ghost"
          className="text-xl"
          onClick={() => navigateTo("/tools")}
        >
          İnstrumentlər
        </Button>
      </div>
      <div className="flex gap-4 p-4">
        <Button className="text-md" variant="outline">
          Daxil Ol
        </Button>
        <Button color="#4E31AA" className="text-md bg-[#4E31AA]">
          Qeydiyyat
        </Button>
      </div>
    </div>
  );
};

export default Navbar;
