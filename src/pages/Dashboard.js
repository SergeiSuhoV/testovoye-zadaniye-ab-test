import React, { useState } from "react";
import Button from "../components/Button";
import Search from "../components/Search";
import Table from "../components/Table";
import "./Dashboard.scss";

function Dashboard() {
  const [searchResult, setSearchResult] = useState({});

  return (
    <div className="dashboard">
      <div className="dashboard__search">
        <Search />
      </div>
      <div className="dashboard__table">
        {searchResult ? (
          <>
            <Table />
          </>
        ) : (
          <>
            {/* TO DO: Верстка не очень, с центрированием продумать нужно */}
            <div className="dashboard__not-result">
              <p>Your search did not match any results.</p>
              <Button selectStatusButton="results">Reset</Button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Dashboard;
