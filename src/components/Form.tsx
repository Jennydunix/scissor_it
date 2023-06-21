import React from "react";
import Link from "next/link";
import MagicIcon from "./icons/magic";

const Form: React.FC = () => {
  return (
    <section className="sform bg-indigo-900">
      <div className="container mx-auto px-4 py-8 flex justify-center items-center">
        <div className="container bg-white rounded-md p-8 w-full sm:w-2/3 md:w-1/2 lg:w-1/3">
          <form>
            <input
              type="text"
              placeholder="Paste URL here..."
              className="w-full border border-blue-400 rounded-md py-3 px-4 placeholder-blue-400"
            />
            <div className="flex flex-col sm:flex-row items-center gap-5 mt-8">
              <select className="w-full sm:w-auto border border-blue-400 rounded-md py-3 px-4 outline-none">
                <option value="Customize domain">Customize domain</option>
              </select>
              <input
                type="text"
                placeholder="Type Alias here"
                className="w-full border border-blue-400 rounded-md py-3 px-4 placeholder-blue-400"
              />
            </div>
            <button className="w-full h-12 bg-blue-500 rounded-md text-white font-semibold flex items-center justify-center gap-2 mt-8">
              Trim URL
              <Link className="flex items-center justify-center" href="/">
                <MagicIcon />
              </Link>
            </button>
          </form>
          <p className="font-medium text-blue-500 text-sm mt-6">
            By clicking Trim URL, I agree to the{" "}
            <span className="font-bold">Terms of Service</span>,{" "}
            <span className="font-bold">Privacy Policy</span>, and Use of
            Cookies.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Form;
