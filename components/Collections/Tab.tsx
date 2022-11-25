import clsx from "clsx";
import React, { useEffect, useState } from "react";

interface TabProps {
  label: string;
  indexTab: number;
  onClickTabs: (tabCurrent: number) => void;
  tabCurrent: number;
}

const Tab: React.FunctionComponent<TabProps> = ({
  label,
  onClickTabs,
  indexTab,
  tabCurrent,
}) => {
  //   const [tabCurrent, setTabCurrent] = useState<number>(1);
  useEffect(() => {
    // console.log("tab current", tabCurrent === indexTab);
  }, [tabCurrent]);
  return (
    <>
      <div
        className={clsx(
          "w-fit border-none rounded px-[15px] py-[8px] text-primary-color font-bold bg-sps-gray transition-all cursor-pointer bg-primary-color",
          {
            "text-[#ffffff] bg-orange-bg": tabCurrent === indexTab,
          }
        )}
        onClick={onClickTabs.bind(null, indexTab)}
      >
        {label}
      </div>
    </>
  );
};

export default Tab;
