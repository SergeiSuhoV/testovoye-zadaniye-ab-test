import "./Table.scss";
import Chevron from "../images/Chevron.png";

import React from "react";
import TitleActive from "./TitleActive";
import Button from "./Button";

function Table({ products }) {
  const items = [
    {
      id: 0,
      name: "Order basket redesing",
      type: "Classic",
      status: "Online",
      siteId: "market.company.com",
    },
    {
      id: 1,
      name: "Order basket redesing",
      type: "Classic",
      status: "Online",
      siteId: "market.company.com",
    },
    {
      id: 2,
      name: "Order basket redesing",
      type: "Classic",
      status: "Online",
      siteId: "market.company.com",
    },
  ];

  return (
    <table className="table">
      {/* Head table */}
      <thead>
        <tr>
          <th>
            <TitleActive directImage={Chevron}>NAME</TitleActive>
          </th>
          <th>
            <TitleActive directImage={Chevron}>TYPE</TitleActive>
          </th>
          <th>
            <TitleActive>STATUS</TitleActive>
          </th>
          <th>
            <TitleActive>SITE</TitleActive>
          </th>
        </tr>
      </thead>
      {/* End head table */}

      {items.map((item) => (
        <tr className="table__row" key={item.id}>
          <td className="table__name">{item.name}</td>
          <td className="table__type">{item.type}</td>
          <td className="table__status">{item.status}</td>
          <td className="table__site">{item.siteId}</td>
          <td>
            <Button>Results</Button>
          </td>
        </tr>
      ))}
    </table>
  );
}

export default Table;
