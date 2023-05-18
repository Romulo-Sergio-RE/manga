import { useEffect, useState } from "react";

import { QuerySizeType, QueryKeyBreakpointsType } from "@/constants/theme";
import { formatBreakpoint } from "@/utils";

function useMediaQuery(
  query: QuerySizeType,
  key: QueryKeyBreakpointsType = "down"
) {
  const queryFormatted = formatBreakpoint(key, query);

  const [matches, setMatches] = useState(false);

  function handleChange(e: MediaQueryListEvent) {
    setMatches(e.matches);
  }

  useEffect(() => {
    const matchQueryList = window.matchMedia(queryFormatted);
    setMatches(matchQueryList.matches);

    matchQueryList.addEventListener("change", handleChange);
    return () => {
      matchQueryList.removeEventListener("change", handleChange);
    };
  }, [query]);
  return matches;
}

export { useMediaQuery };
