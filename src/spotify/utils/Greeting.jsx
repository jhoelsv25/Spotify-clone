import { useEffect, useState } from "react";

export const Greeting = () => {
  const currenDate = new Date();
  const hour = currenDate.getHours();
  const [greeting, setGreeting] = useState("");

  useEffect(() => {
    if (hour >= 0 && hour < 12) {
      setGreeting("Good Morning");
    } else if (hour >= 12 && hour < 18) {
      setGreeting("Good Afternoon");
    } else {
      setGreeting("Good Evening");
    }
    return () => {
      setGreeting("");
    };
  }, []);
  return <h1 className="text-3xl font-bold">{greeting}</h1>;
};
