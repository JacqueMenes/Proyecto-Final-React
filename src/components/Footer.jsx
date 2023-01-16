import React from "react";

const Footer = () => {
  return (
    <footer className="w-100 bg-dark py-3">
      <div className="container">
        <div className="row pt-3">
          <div className="col-lg-6 col-sm-12">
            <p className="text-lg-start text-center txt-color-grey light-300">
              © Copyright 2022 ElectroPoint.
            </p>
          </div>
          <div className="col-lg-6 col-sm-12">
            <p className="text-lg-end text-center txt-color-grey light-300">
              Diseñado por{" "}
              <a
                rel="noopener noreferrer"
                className="text-decoration-none text-light"
                href="https://www.linkedin.com/in/gloria-jacqueline-menes-072315232/"
                target={"_blank"}
              >
                <strong>Jacqueline Menes</strong>
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
