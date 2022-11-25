import "tippy.js/dist/tippy.css";

import Tippy from "@tippyjs/react";
import clsx from "clsx";
import React, { FC, ReactNode } from "react";
interface Props {
  children: ReactNode;
  content: ReactNode;
  placement?: "top" | "right" | "left";
  className?: string;
  withDelay?: boolean;
}

export const Tooltip: FC<Props> = ({
  children,
  content,
  placement = "right",
  className = "",
  withDelay = false,
}) => {
  return (
    <Tippy
      placement={placement}
      duration={0}
      delay={[withDelay ? 500 : 0, 0]}
      className="hidden sm:block !text-xs !rounded-lg !leading-6"
      content={<span className={clsx(className)}>{content}</span>}
    >
      <span>{children}</span>
    </Tippy>
  );
};
