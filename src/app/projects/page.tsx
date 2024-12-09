"use client";
import React from "react";
import { IProject } from "../../../type";
import useGetData from "@/hooks/useGetData";
import Link from "next/link";

const Project = () => {
  const [projects, isLoading] = useGetData<IProject[]>(
    `https://dev-cs-test-50-13.pantheonsite.io/wp-json/twentytwentyone-child/v1/projects`
  );

  if (isLoading) {
    return <p>...Loading</p>;
  }
  return (
    <div className="text-center">
      <h3 className="my-4">Our projects</h3>
      {!projects.length ? (
        <h4> Empty page</h4>
      ) : (
        <div className="flex flex-col flex-wrap p-4 gap-4 md:flex-row">
          {projects.map(({ projectId, clientName, title, completionDate }) => {
            return (
              <div
                key={projectId}
                className="border p-4 basis-full  md:basis-[calc(50%-1rem)] lg:basis-[calc(32%-1rem)]"
              >
                <h5>{title}</h5>
                <p>client name is {clientName}</p>
                <p>date {completionDate}</p>
                <Link href={`/projects/${projectId}`}>
                  <p>{title}</p>
                </Link>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Project;
