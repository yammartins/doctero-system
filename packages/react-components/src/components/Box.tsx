import { ReactNode } from "react";

export interface BoxProps {
  children: ReactNode,
} 

export function Box({ children }: BoxProps) {
  return (
    <div className="bg-gray-300 rounded-base p-4 border border-gray-400">
      {children}  
    </div>
  )  
}