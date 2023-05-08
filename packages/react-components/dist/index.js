"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  Text: () => Text
});
module.exports = __toCommonJS(src_exports);

// src/components/Text.tsx
var import_react = require("react");
var import_classnames = __toESM(require("classnames"));
var import_jsx_runtime = require("react/jsx-runtime");
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
  const styled = (0, import_classnames.default)(
    textAlign[align],
    lineHeight[height],
    textSizes[size],
    textWeight[weight],
    fontFamily[family],
    className
  );
  const TextRender = (0, import_react.useCallback)(() => {
    if (type === "small")
      return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", { className: styled, children: label });
    if (type === "span")
      return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: styled, children: label });
    if (type === "b")
      return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { className: styled, children: label });
    if (type === "i")
      return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", { className: styled, children: label });
    if (type === "p")
      return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { className: styled, children: label });
    if (type === "h6")
      return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h6", { className: styled, children: label });
    if (type === "h5")
      return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h5", { className: styled, children: label });
    if (type === "h4")
      return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", { className: styled, children: label });
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: label });
  }, []);
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextRender, {});
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Text
});
