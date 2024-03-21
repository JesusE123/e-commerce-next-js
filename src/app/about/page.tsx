import React from "react";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import Link from "next/link";

const page = () => {
  return (
    <div className="text-white text-center">
      <p>
        This was a demo of an e-commerce to simulate an online store. using the
        fakestore api : https://fakestoreapi.com/.
      </p>

        <div className="flex justify-center space-x-4 mt-2">
      <h1 className="text-3xl">thank you very much for trying it by</h1>
      <Link href="https://github.com/JesusE123" target="_blank" className="hover:scale-125 transition inline-block">
      <GitHubLogoIcon className="text-white h-8 w-8"/>
      </Link>
    </div>
      
    </div>
    
  );
};

export default page;
