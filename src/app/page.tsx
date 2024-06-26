"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [data, setData] = useState();
  const getData = async () => {
    try {
      const response = await fetch("/api/contact", {
        method: "GET",
      });

      const contact = await response.json();
      setData(contact?.characters);
      return contact;
    } catch (error) {
      console.error("error!", error);
    }
  };

  useEffect(() => {
    getData();
  }, []);
  return <h1>{data && data}</h1>;
}
