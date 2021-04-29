import React from "react";
import Col from "react-bootstrap/Col";

const SocialPlatforms = () => {
  return (
    <>
      <Col xs={{ span: 3, offset: 3 }}>
        <a
          href="https://github.com/DavitKvartskhava"
          target="_blank"
          rel="noreferrer"
        >
          <div id="github"></div>
        </a>
      </Col>

      <Col xs={{ span: 3 }}>
        <a
          href="https://www.linkedin.com/in/davit-kvartskhava-940b87166/"
          rel="noreferrer"
          target="_blank"
        >
          <div id="linkedin"></div>
        </a>
      </Col>
    </>
  );
};

export default SocialPlatforms;
