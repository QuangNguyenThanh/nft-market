import React, { useEffect, useState } from "react";
import Tab from "./Tab";

interface TabsProps {
  tabCurrent: number;
  setTabCurrent: (tabCurrent: number) => void;
}

const Tabs: React.FunctionComponent<TabsProps> = ({
  tabCurrent,
  setTabCurrent,
}) => {
  const onClickTabs = (tabCurrent: number) => {
    setTabCurrent(tabCurrent);
  };

  return (
    <>
      <div className="flex gap-2">
        {["Details", "History"].map((label, index) => (
          <Tab
            label={label}
            key={index}
            onClickTabs={onClickTabs}
            indexTab={index + 1}
            tabCurrent={tabCurrent}
          />
        ))}
      </div>
    </>
  );
};

export default Tabs;
