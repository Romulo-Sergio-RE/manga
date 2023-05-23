type KeyBreakpointsType = {
  up: string;
  down: string;
};

type SizeType = {
  mobile: string;
  tablet: string;
  laptop: string;
  laptopL: string;
  desktop: string;
};

const size = {
  mobile: "500px",
  tablet: "770px",
  laptop: "1200px",
  laptopL: "1280px",
  desktop: "1536px",
};

const keyBreakpoints = {
  up: "min-width:",
  down: "max-width:",
};

type QuerySizeType = keyof SizeType;

type QueryKeyBreakpointsType = keyof KeyBreakpointsType;

type EnumPalette =
  | "primary"
  | "secondary"
  | "gradient"
  | "gray"
  | "default"
  | "midnight";

export { size, keyBreakpoints };

export type { QuerySizeType, QueryKeyBreakpointsType, EnumPalette };
