import {
  QueryKeyBreakpointsType,
  QuerySizeType,
  keyBreakpoints,
  size,
} from "@/constants/theme";

const formatBreakpoint = (
  key: QueryKeyBreakpointsType = "up",
  keySize: QuerySizeType = "mobile"
) => {
  const value = `(${keyBreakpoints[key] + size[keySize]})`;

  return value;
};

export { formatBreakpoint };
