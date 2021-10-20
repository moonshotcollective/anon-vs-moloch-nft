import React from "react";
import classnames from "classnames";
import PulseLoader from "react-spinners/PulseLoader";

function ThemedButton({
  children,
  className,
  transparent,
  padding = "6",
  disabled,
  loading = false,
  loadingText,
  ...props
}) {
  // use disabled styling when loading
  disabled = disabled || loading;

  return (
    <button
      {...props}
      disabled={disabled}
      className={classnames(
        `text-white  font-spacemono text-base px-${padding} py-3 rounded`,
        { "bg-green-teal": !transparent && !disabled },
        { "bg-gray-300": disabled },
        !disabled && className,
      )}
    >
      <PulseLoader color={"#efefef"} loading={loading} size={5} />
      <span className={classnames({ "ml-2": loading })}>{loading && loadingText ? loadingText : children}</span>
    </button>
  );
}

export default ThemedButton;
