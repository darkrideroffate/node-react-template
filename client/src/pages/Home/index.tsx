import React from "react";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import Row from "react-bootstrap/Row";
import { useTranslation } from "react-i18next";

type Props = {};

const Home: React.FC<Props> = () => {
  const { t } = useTranslation();
  return (
    <div className="h-100 d-flex flex-column justify-content-center border border-dark border-1 p-3 rounded-3">
      {/* <Row> */}
      {/* <Link to="/issues" className=" btn btn-success  mb-2">
        {t("Issues")}
      </Link>
      <Link to="/issues/add" className=" btn  btn-primary">
        {t("Add Issue")}
      </Link> */}
      {/* </Row> */}
    </div>
  );
};

export default Home;
