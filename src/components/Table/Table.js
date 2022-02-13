import "./Table.scss";
import Chevron from "../../assets/images/Chevron.png";
import TitleActive from "../../components/Title-active/TitleActive";
import Button from "../../components/Button/Button";
import Status from "../../components/Status/Status";

import PropTypes from "prop-types";
Table.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.number.isRequired,
      name: PropTypes.string,
      type: PropTypes.string,
      status: PropTypes.string,
      siteId: PropTypes.number,
    })
  ),
};

// Не ясно как работают цвета по ТЗ. Это рандом или чего))) ?
function Table({ data, dataListSite, onChangeDirect }) {
  const colorSticks = {
    1: "table__element-color_red",
    2: "table__element-color_blue",
    3: "table__element-color_blue-intensive",
  };

  function setColor(colorSet, setColor) {
    return colorSet[setColor] ? colorSet[setColor] : "";
  }

  return (
    <table className="table">
      {/* Head table */}
      <thead>
        <tr>
          <th>
            <TitleActive>NAME</TitleActive>
          </th>
          <th>
            <TitleActive
              onChangeDirect={onChangeDirect}
              imageDirection={Chevron}
            >
              TYPE
            </TitleActive>
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
        {data.map((item) => (
          <tr key={item.id}>
            <td>
              {/* QUESTION: У таблицы фиксированные ширины или динамические? */}
              <div className="table__name">
                <div
                  className={`table__element-color ${setColor(
                    colorSticks,
                    item.siteId
                  )}`}
                ></div>
                {item.name}
              </div>
            </td>
            <td>
              <div className="table__type">{item.type}</div>
            </td>
            <td>
              <Status selectStatus={item.status.toLowerCase()}>
                {item.status}
              </Status>
            </td>
            <td>
              <div className="table__site">
                {dataListSite[item.siteId - 1].url}
              </div>
            </td>
            <td>
              <div className="table__button">
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
