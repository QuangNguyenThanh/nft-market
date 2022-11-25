import React from "react";
import CheckBox from "../../UI/CheckBox";

interface FilterOptionCardProps {
  titleField: string;
}

const FilterOptionCard: React.FunctionComponent<FilterOptionCardProps> = ({
  titleField,
}) => {
  return (
    <>
      <div className="flex flex-col gap-3 p-5 rounded-none sm:rounded-xl border mb-7">
        <div className="font-bold">{titleField}</div>
        <div>
          {[
            "Art",
            "Music",
            "Domain Names",
            "Virtual World",
            "Trading Cards",
            "Sports",
            "Utility",
          ].map((_, index) => {
            return <CheckBox key={index} name={_} id={index} />;
          })}
        </div>
      </div>
    </>
  );
};

export default FilterOptionCard;
