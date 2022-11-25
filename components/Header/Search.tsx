import { useRouter } from "next/router";
import React, { ChangeEvent, useState } from "react";
import { Input } from "../UI/Input";

interface SearchProps {
  className?: string;
}

const Search: React.FunctionComponent<SearchProps> = ({ className }) => {
  const [searchText, setSearchText] = useState<string>("");
  const router = useRouter();
  const handleKeyDown = (e: any) => {
    e.preventDefault();
    if (searchText.indexOf("0x") === 0) {
      router.push(`/search?address=${searchText}`);
    } else {
      router.push(
        `/collections/0x7086109a11eC0f81313a2D06E030DF2FdE6eC218/${searchText}`
      );
      searchText;
    }
    setSearchText("");
  };

  const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
    const keyword = event.target.value;
    setSearchText(keyword);
  };
  return (
    <>
      <div aria-hidden="true">
        <form onSubmit={handleKeyDown}>
          <Input
            type="text"
            className={`py-2 px-3 text-sm ${className}`}
            placeholder="Search address, collections, and accounts.."
            value={searchText}
            onChange={handleSearch}
          />
        </form>
      </div>
    </>
  );
};

export default Search;
