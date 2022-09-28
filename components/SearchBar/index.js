import React from 'react';
import { IoSearch } from 'react-icons/io5';

export default function SearchBar({ handleClick, className }) {
  return (
    <div className={`relative flex mb-8 ${className}`}>
      <input
        type="text"
        className="w-full h-12 p-4 border-r-0 rounded-lg rounded-r-none outline-none"
        placeholder="Search all articles"
        onChange={(e) => {
          e.preventDefault();
          handleClick(e.target.value);
        }}
      />
      <button
        type="submit"
        className="h-12 text-lg text-center text-white rounded-lg rounded-l-none w-14 bg-navbar"
      >
        <IoSearch size={30} className="mx-auto" />
      </button>
    </div>
  );
}
