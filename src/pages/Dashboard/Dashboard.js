import Button from "../../components/Button/Button";
import Search from "../../components/Search/Search";
import Table from "../../components/Table/Table";
import "./Dashboard.scss";
import { useEffect, useMemo, useState } from "react";
import api from "../../utility/api";

function Dashboard() {
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoadedData, setIsLoadedData] = useState(false);
  const [dataTable, setDataTable] = useState([]);
  const [listSite, setListSite] = useState(null);

  const searchRows = useMemo(() => {
    console.log("memo");
    return dataTable.filter((row) =>
      row.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery, dataTable]);

  useEffect(() => {
    Promise.all([api.getTests(), api.getSites()])
      .then(([dataTests, dataSites]) => {
        setDataTable(dataTests);
        setListSite(dataSites);
      })
      .catch((err) => {
        console.log(`Error: ${err}`);
      })
      .finally(() => {
        setIsLoadedData(true);
      });
    console.log("promise");
  }, []);

  // сортировка столбца
  function handleSortType(direct) {
    if (direct) {
      setDataTable([...dataTable].sort((a, b) => a.type.localeCompare(b.type)));
    } else {
      setDataTable([...dataTable].sort((a, b) => b.type.localeCompare(a.type)));
    }
  }

  function handleInputSearch(e) {
    setSearchQuery(e.target.value);
  }

  function handleInputSearchFocus(e) {
    setSearchQuery("");
  }
  function handleClearInput(e) {
    setSearchQuery("");
  }

  return (
    <div className="dashboard">
      <div className="dashboard__search">
        <Search
          placeholder={"What test are you looking for?"}
          textItems={`${searchRows.length} test`}
          onChange={handleInputSearch}
          value={searchQuery}
          onFocus={handleInputSearchFocus}
        />
      </div>
      <div className="dashboard__table">
        {isLoadedData ? (
          <>
            {searchRows.length ? (
              <Table
                data={searchRows}
                dataListSite={listSite}
                onChangeDirect={handleSortType}
              />
            ) : (
              // вывод, не найдено в таблице
              <div className="dashboard__not-result">
                <p>Your search did not match any results.</p>
                <Button selectStatusButton="results" onClick={handleClearInput}>
                  Reset
                </Button>
              </div>
            )}
          </>
        ) : (
          <>
            <p>LOADING SPINER...</p>
          </>
        )}
      </div>
    </div>
  );
}

export default Dashboard;
