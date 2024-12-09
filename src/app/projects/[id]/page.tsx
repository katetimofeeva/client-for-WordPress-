"use client";

import { useParams } from "next/navigation";
import { ProjectById } from "../../../../type";
import { useEffect, useState } from "react";

const ProjectPage = () => {
  const { id } = useParams();
  const [data, setData] = useState<ProjectById | null>(null);

  useEffect(() => {
    fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/wp-json/twentytwentyone-child/v1/projects/${id}`
    )
      .then(res => {
        if (!res.ok) {
          throw new Error(`Error: ${res.status}`);
        }
        return res.json();
      })
      .then(data => setData(data))
      .catch(err => {
        console.log(err);
      });
  }, [id]);

  if (!data) {
    return <p>Loading...</p>;
  }
  const {
    title,
    client_name: clientName,
    completion_date: completionDate,
  } = data;

  return (
    <div className="flex justify-center mt-10">
      <div className="text-center p-4 border rounded shadow-lg ">
        <h1>Project ID: {id}</h1>
        <p>{title}</p>
        <p>{clientName}</p>
        <p>{completionDate}</p>
      </div>
    </div>
  );
};

export default ProjectPage;
