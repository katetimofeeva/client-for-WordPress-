"use client";
import ClientCardInfo from "@/components/ClientCardInfo";
import { IClient } from "../../type";
import { useState } from "react";
import Image from "next/image";
import useGetData from "@/hooks/useGetData";
import Button from "@/components/Button";

export default function Home() {
  const [clients] = useGetData<IClient[]>(
    `${process.env.NEXT_PUBLIC_API_URL}/wp-json/twentytwentyone-child/v1/clients`
  );
  const [index, setIndex] = useState(0);

  const handleLeft = () => {
    if (index <= 0) {
      setIndex(clients.length - 1);
    } else {
      setIndex(index => index - 1);
    }
  };

  const handleRight = () => {
    if (index >= clients.length - 1) {
      setIndex(0);
    } else {
      setIndex(index => index + 1);
    }
  };

  return (
    <div>
      <section>
        <h2 className="text-center text-2xl bold my-6">
          What Our Clients Are Saying
        </h2>
        <div className="flex justify-center items-center">
          <Button
            handleClick={handleLeft}
            className="w-12 h-12 bg-lime-200 rounded-full p-1 md:p-4 flex justify-center items-center mx-4"
          >
            <Image
              src="/icon/left.svg"
              alt="left icon"
              width={20}
              height={20}
            />
          </Button>
          <div className="flex-shrink-0">
            {clients[index] && (
              <ClientCardInfo
                key={clients[index].ID}
                client={clients[index]}
              />
            )}
          </div>
          <Button
            handleClick={handleRight}
            className="w-12 h-12 bg-lime-200 rounded-full p-1 md:p-4 flex justify-center items-center mx-4"
          >
            <Image
              src="/icon/right.svg"
              alt="left icon"
              width={20}
              height={20}
            />
          </Button>
        </div>
      </section>
    </div>
  );
}
