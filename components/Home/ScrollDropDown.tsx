import React from "react";

interface ScrollDrowDownProps {}

const ScrollDrowDown: React.FunctionComponent<ScrollDrowDownProps> = (
  props
) => {
  return (
    <div
      className="page-wrap m-auto w-[100] flex items-center justify-center -top-[70px] relative"
      data-aos="fade-up"
      data-aos-delay="600"
    >
      <section className="example example--2">
        <span className="scroll-icon">
          <span className="scroll-icon__dot"></span>
        </span>
      </section>
    </div>
  );
};

export default ScrollDrowDown;
