import { useEffect, useState } from "react";
import { mask, unMask } from "remask";

export function InputCep({ onChange, value, ...props }) {
  const [cep, setCep] = useState("");

  useEffect(() => {
    if (value) setCep(value);
  }, [value]);

  function valueMasked(e) {
    setCep(mask(unMask(e), ["99999-999"]));
    if (onChange) onChange(e);
  }

  return (
    <div>
      <input
        {...props}
        className=" w-full h-10 px-3 placeholder-gray-600  block py-2.5 text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
        value={cep}
        onChange={(e) => {
          valueMasked(e.target.value);
        }}
      />
    </div>
  );
}

export default InputCep;
