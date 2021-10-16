import React from "react";
import classnames from "classnames";
import { Button } from 'antd';

function ThemedButton({ children, className, transparent, padding = "6", loading = false, ...props }) {
  return (
    <button
      {...props}
      className={classnames(
        `text-white  font-spacemono text-base px-${padding} py-3 rounded`,
        { "bg-green-teal": !transparent },
        className,
      )}
    >
      {children}
    </button>
  );
}

export default ThemedButton;
