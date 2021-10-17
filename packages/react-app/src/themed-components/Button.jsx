import React from "react";
import classnames from "classnames";

function ThemedButton({ children, className, transparent, padding = "6", disabled, loading = false, ...props }) {
  return (
    <button
      {...props}
      disabled={disabled}
      className={classnames(
        `text-white  font-spacemono text-base px-${padding} py-3 rounded`,
        { "bg-green-teal": !transparent && !disabled },
        { "bg-gray-300": disabled },
        className,
      )}
    >
      {children}
    </button>
  );
}

export default ThemedButton;
