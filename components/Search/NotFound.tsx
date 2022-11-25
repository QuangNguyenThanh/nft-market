import Link from "next/link";
import React from "react";
import Image from "next/image";

interface NotFoundProps {}

const NotFound: React.FunctionComponent<NotFoundProps> = (props) => {
  return (
    <>
      <div className="text-center">
        <Image
          src={"/nyan-cat.gif"}
          alt="Logo"
          objectFit="contain"
          width={400}
          height={200}
          className=""
        />
        <div className="py-10 text-center">
          <h1 className="mb-4 text-3xl font-bold">Oops, Lost‽</h1>
          <div className="mb-4">This page could not be found.</div>
        </div>
      </div>
    </>
  );
};

export default NotFound;
