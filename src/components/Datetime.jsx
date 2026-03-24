import React, { useState, useEffect } from "react";

const Datetime = () => {
  const [datetime, setDatetime] = useState("");

  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();

      const str = now
        .toLocaleString("en-US", {
          weekday: "short",
          month: "short",
          day: "numeric",
          hour: "numeric",
          minute: "2-digit",
          hour12: true,
        })
        .replace(",", "");

      setDatetime(str);
    };

    updateDateTime();
    const interval = setInterval(updateDateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  return <span>{datetime}</span>;
};

export default Datetime;