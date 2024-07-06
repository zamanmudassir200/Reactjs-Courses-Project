import React from "react";

const Four = () => {
  const items = [
    "Items-1",
    "Items-2",
    "Items-3",
    "Items-4",
    "Items-5",
    "Items-6",
    "Items-7",
    "Items-8",
    "Items-9",
    "Items-10",
    "Items-11",
    "Items-12",
    "Items-13",
    "Items-14",
    "Items-15",
    "Items-16",
    "Items-17",
    "Items-18",
    "Items-19",
    "Items-20",
    "Items-21",
    "Items-22",
    "Items-23",
    "Items-24",
    "Items-25",
    "Items-26",
    "Items-27",
    "Items-28",
    "Items-29",
    "Items-30",
  ];
  return (
    <div>
      <div>
        4-
        <ul>
          {items.map((item, index) => {
            return (
              <li key={index}>
                {" "}
                Item: {item} index: {index}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Four;
