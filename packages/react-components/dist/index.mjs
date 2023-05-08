// src/components/Text.tsx
import { useCallback } from "react";
import classNames from "classnames";
import { jsx } from "react/jsx-runtime";
function Text({
  label,
  align = "left",
  family = "roboto",
  size = "base",
  weight = "regular",
  height = "base",
  type = "p",
  className
}) {
  const textAlign = {
    left: "text-left",
    center: "text-center",
    right: "text-right"
  };
  const lineHeight = {
    xs: "leading-xs",
    sm: "leading-sm",
    base: "leading-base",
    md: "leading-md",
    lg: "leading-lg",
    xl: "leading-xl",
    "2xl": "leading-2xl",
    "3xl": "leading-3xl",
    "4xl": "leading-4xl",
    "5xl": "leading-5xl",
    "6xl": "leading-6xl",
    "7xl": "leading-7xl",
    "8xl": "leading-8xl",
    "9xl": "leading-9xl"
  };
  const textSizes = {
    xxs: "text-xxs",
    xs: "text-xs",
    sm: "text-sm",
    base: "text-base",
    md: "text-md",
    lg: "text-lg",
    xl: "text-xl",
    "2xl": "text-2xl",
    "3xl": "text-3xl",
    "4xl": "text-4xl",
    "5xl": "text-5xl",
    "6xl": "text-6xl",
    "7xl": "text-7xl",
    "8xl": "text-8xl",
    "9xl": "text-9xl"
  };
  const textWeight = {
    regular: "regular",
    medium: "medium",
    semibold: "semibold",
    bold: "bold",
    black: "black"
  };
  const fontFamily = {
    jakarta: "font-jakarta",
    poppins: "font-poppins",
    "red-hat": "font-red-hat",
    roboto: "font-roboto"
  };
  const styled = classNames(
    textAlign[align],
    lineHeight[height],
    textSizes[size],
    textWeight[weight],
    fontFamily[family],
    className
  );
  const TextRender = useCallback(() => {
    if (type === "small")
      return /* @__PURE__ */ jsx("small", { className: styled, children: label });
    if (type === "span")
      return /* @__PURE__ */ jsx("span", { className: styled, children: label });
    if (type === "b")
      return /* @__PURE__ */ jsx("b", { className: styled, children: label });
    if (type === "i")
      return /* @__PURE__ */ jsx("i", { className: styled, children: label });
    if (type === "p")
      return /* @__PURE__ */ jsx("p", { className: styled, children: label });
    if (type === "h6")
      return /* @__PURE__ */ jsx("h6", { className: styled, children: label });
    if (type === "h5")
      return /* @__PURE__ */ jsx("h5", { className: styled, children: label });
    if (type === "h4")
      return /* @__PURE__ */ jsx("h4", { className: styled, children: label });
    return /* @__PURE__ */ jsx("p", { children: label });
  }, []);
  return /* @__PURE__ */ jsx(TextRender, {});
}
export {
  Text
};
