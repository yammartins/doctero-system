import { useRef, useState } from "react";
import { ReactNode } from "react";
import { Text } from "./Text";

export interface TooltipProps {
  children: ReactNode;
  label: string;
  direction: "left" | "top" | "right" | "bottom";
  size: number;
}

export function Tooltip({ 
   children,
   label,
   direction,
   size
 }: TooltipProps) {
  const [show, onShow] = useState(false);
  const ref = useRef<HTMLDivElement>()

  return (
    <div 
      className="relative"
      onMouseEnter={() => onShow(true)}
      onMouseLeave={() => onShow(false)}
    >
      <div className="">
        <div className="">
          <Text label={label} />  
        </div>
        <div className="">
          {children}  
        </div>
      </div>
    </div>
  )
}