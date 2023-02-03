import { useEffect, useState } from "react";
import { mask, unMask } from "remask";

export function InputRg({ onChange, value, ...props }) {
  const [rg, setRg] = useState("");

  useEffect(() => {
    if (value) setRg(value);
  }, [value]);

  function valueMasked(e) {
    setRg(mask(unMask(e), ["9999999999999"]));
    if (onChange) onChange(e);
  }

  return (
    <div>
      <input
        {...props}
        className=" w-full h-10 px-3 placeholder-gray-600  block py-2.5 text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
        value={rg}
        onChange={(e) => {
          valueMasked(e.target.value);
        }}
      />
    </div>
  );
}

export default InputRg;
