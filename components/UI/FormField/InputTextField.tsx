import clsx from "clsx";
import { ComponentProps, forwardRef, ReactNode, useId } from "react";

import { FieldError } from "../Form";

interface Props extends Omit<ComponentProps<"input">, "prefix"> {
  label?: string;
  prefix?: string | ReactNode;
  className?: string;
  helper?: ReactNode;
  error?: boolean;
}

export const InputTextField = forwardRef<HTMLInputElement, Props>(
  function Input(
    { label, prefix, type = "text", error, className = "", helper, ...props },
    ref
  ) {
    const id = useId();
    return (
      <label className="w-full" htmlFor={id}>
        {label && (
          <div className="flex items-center mb-1 space-x-1.5">
            <div className="font-medium text-[#333333]">{label}</div>
          </div>
        )}
        <div className="flex">
          {prefix && (
            <span className="inline-flex items-center px-3 text-gray-500 bg-gray-100 rounded-l-xl border border-r-0 border-gray-300 dark:bg-gray-900 rounded=-xl dark:border-gray-700/80">
              {prefix}
            </span>
          )}
          <input
            id={id}
            className={clsx(
              { "!border-red-500 placeholder-red-500": error },
              { "": prefix },
              { "": !prefix },
              "border border-gray-300 focus:border-primary-color focus:ring-brand-400 disabled:opacity-60 disabled:bg-gray-500 disabled:bg-opacity-20 outline-none w-full border-2 focus:transition-colors",
              className
            )}
            type={type}
            ref={ref}
            {...props}
          />
        </div>
        {props.name && <FieldError name={props.name} />}
      </label>
    );
  }
);
