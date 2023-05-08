"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
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
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  borderRadius: () => borderRadius,
  colors: () => colors,
  fontSize: () => fontSize,
  fontWeights: () => fontWeights,
  fonts: () => fonts,
  lineHeight: () => lineHeight
});
module.exports = __toCommonJS(src_exports);

// src/colors.ts
var colors = {
  cyan: {
    100: "#ECFEFF",
    200: "#CFFAFE",
    300: "#A5F3FC",
    400: "#67E8F9",
    500: "#22D3EE",
    600: "#06B6D4",
    700: "#0891B2",
    800: "#0E7490",
    900: "#155E75",
    1e3: "#164E63"
  },
  gray: {
    100: "#F9FAFB",
    200: "#F3F4F6",
    300: "#E5E7EB",
    400: "#D1D5DB",
    500: "#9CA3AF",
    600: "#6B7280",
    700: "#4B5563",
    800: "#374151",
    900: "#1F2937",
    1e3: "#111827"
  },
  blue: {
    100: "#EFF6FF",
    200: "#DBEAFE",
    300: "#BFDBFE",
    400: "#93C5FD",
    500: "#60A5FA",
    600: "#3B82F6",
    700: "#2563EB",
    800: "#1D4ED8",
    900: "#1E40AF",
    1e3: "#1E3A8A"
  },
  white: "#FFF",
  black: "#000",
  green: {
    100: "#ECFDF5",
    200: "#D1FAE5",
    300: "#A7F3D0",
    400: "#6EE7B7",
    500: "#34D399",
    600: "#10B981",
    700: "#059669",
    800: "#047857",
    900: "#065F46",
    1e3: "#064E3B"
  },
  purple: {
    100: "#F5F3FF",
    200: "#EDE9FE",
    300: "#DDD6FE",
    400: "#C4B5FD",
    500: "#A78BFA",
    600: "#8B5CF6",
    700: "#7C3AED",
    800: "#6D28D9",
    900: "#5B21B6",
    1e3: "#4C1D95"
  },
  danger: {
    100: "#FEF2F2",
    200: "#FEE2E2",
    300: "#FECACA",
    400: "#FCA5A5",
    500: "#F87171",
    600: "#EF4444",
    700: "#DC2626",
    800: "#B91C1C",
    900: "#991B1B",
    1e3: "#7F1D1D"
  },
  orange: {
    100: "#FFF7ED",
    200: "#FFEDD5",
    300: "#FED7AA",
    400: "#FDBA74",
    500: "#FB923C",
    600: "#F97316",
    700: "#EA580C",
    800: "#C2410C",
    900: "#9A3412",
    1e3: "#7C2D12"
  },
  primary: {
    200: "#244D3F",
    400: "#4CA284",
    500: "#059669"
  },
  secondary: {
    500: "#1A69FF"
  },
  transparent: "transparent"
};

// src/fonts.ts
var fonts = {
  jakarta: "Plus Jakarta Sans, sans-serif",
  poppins: "Poppins, sans-serif",
  "red-hat": "Red Hat Display, sans-serif",
  roboto: "Roboto, sans-serif"
};

// src/font-sizes.ts
var fontSize = {
  xxs: "0.625rem",
  xs: "0.75rem",
  sm: "0.875rem",
  base: "1rem",
  md: "1.125rem",
  lg: "1.25rem",
  xl: "1.5rem",
  "2xl": "1.75rem",
  "3xl": "2rem",
  "4xl": "2.5rem",
  "5xl": "3rem",
  "6xl": "3.5rem",
  "7xl": "4rem",
  "8xl": "4.5rem",
  "9xl": "5rem"
};

// src/font-weight.ts
var fontWeights = {
  regular: "400",
  medium: "500",
  semibold: "600",
  bold: "700",
  black: "900"
};

// src/line-height.ts
var lineHeight = {
  xs: "0.875rem",
  sm: "1rem",
  base: "1.5rem",
  md: "2rem",
  lg: "2.5rem",
  xl: "3rem",
  "2xl": "3.5rem",
  "3xl": "4rem",
  "4xl": "4.5rem",
  "5xl": "5rem",
  "6xl": "6rem",
  "7xl": "6.5rem",
  "8xl": "7rem",
  "9xl": "8rem"
};

// src/radii.ts
var borderRadius = {
  px: "1px",
  xxs: "2px",
  xs: "4px",
  sm: "6px",
  base: "8px",
  md: "10px",
  lg: "12px",
  xl: "16px",
  rounded: "99999px"
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  borderRadius,
  colors,
  fontSize,
  fontWeights,
  fonts,
  lineHeight
});
