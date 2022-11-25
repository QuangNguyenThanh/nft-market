import React, { CSSProperties } from "react";

interface LoadingProps {
  loading?: false | true;
  style?: CSSProperties;
}

const Loading: React.FunctionComponent<LoadingProps> = ({ loading, style }) => {
  return (
    <>
      <div className="loader__overlay" style={{ ...style }}>
        <div className="logo-container">
          <span className="spinner"></span>
          <span className="background"></span>
          {/* <img className="logo" src={logo_maxbit} height="42" /> */}
        </div>
      </div>
    </>
  );
};

export default Loading;
