import React from "react";

interface IntroProps {}

const Intro: React.FunctionComponent<IntroProps> = (props) => {
  return (
    <>
      <section id="section-intro">
        <div className="flex flex-wrap gap-8">
          <div className=""></div>
        </div>
      </section>
    </>
  );
};

export default Intro;
