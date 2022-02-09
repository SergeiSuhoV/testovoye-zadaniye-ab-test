import "./Table.scss";
import Chevron from "../images/Chevron.png";

import React, { useState } from "react";
import TitleActive from "./TitleActive";
import Button from "./Button";
import Status from "./Status";

function Table({ selectColorPriority, products }) {
  //  const [colorPriority, setColorPriority] = useState("red");

  const items = [
    {
      id: 0,
      name: "Order basket redesing",
      type: "Classic",
      status: "Online",
      siteId: "market.company.com",
      colorPriority: "red",
    },
    {
      id: 1,
      name: "Order basket redesing",
      type: "Classic",
      status: "Paused",
      siteId: "market.company.com",
      colorPriority: "blue",
    },
    {
      id: 2,
      name: "Order basket redesing",
      type: "Classic",
      status: "Draft",
      siteId: "market.company.com",
      colorPriority: "blue-intensive",
    },
    {
      id: 3,
      name: "Order basket redesing",
      type: "Classic",
      status: "Online",
      siteId: "market.company.com",
      colorPriority: "red",
    },
    {
      id: 4,
      name: "Order basket redesing",
      type: "Classic",
      status: "Online",
      siteId: "market.company.com",
      colorPriority: "red",
    },
    {
      id: 5,
      name: "Order basket redesing",
      type: "Classic",
      status: "paused",
      siteId: "market.company.com",
      colorPriority: "blue-intensive",
    },
    {
      id: 6,
      name: "Order basket redesing",
      type: "Classic",
      status: "Online",
      siteId: "market.company.com",
      colorPriority: "blue-intensive",
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
      <tbody>
        {items.map((item) => (
          <tr key={item.id}>
            <td>
              {/* QUESTION: Фиксированные ширины или динамические? */}
              <div className="table__name">
                <div
                  className={`table__element-color ${
                    item.colorPriority &&
                    "table__element-color_" + item.colorPriority
                  }`}
                ></div>
                {item.name}
              </div>
            </td>
            <td>
              <div className="table__type">{item.type}</div>
            </td>
            <td>
              {/* TO DO: похорошему нужно вынести в отдельный компонент, с модификаторами */}
              <Status selectStatus={item.status.toLowerCase()}>
                {item.status}
              </Status>
            </td>
            <td>
              <div className="table__site">{item.siteId}</div>
            </td>
            <td>
              <div className="table__button">
                {/* QUESTION: Зависимо от чего меняется состояние кнопки? */}
                <Button
                  selectStatusButton={
                    item.status.toLocaleLowerCase() === "draft"
                      ? "finalize"
                      : "results"
                  }
                >
                  Results
                </Button>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
