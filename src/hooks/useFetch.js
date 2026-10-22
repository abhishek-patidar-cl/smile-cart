import { useEffect, useState } from "react";

/**
 * Small data-fetching hook. `fetcher` receives an AbortSignal and must return a promise.
 * Pass the values the request depends on via `deps`.
 */
export const useFetch = (fetcher, deps) => {
  const [state, setState] = useState({ data: null, isLoading: true, error: null });

  useEffect(() => {
    const controller = new AbortController();
    setState((prev) => ({ ...prev, isLoading: true, error: null }));

    fetcher(controller.signal)
      .then((data) => setState({ data, isLoading: false, error: null }))
      .catch((error) => {
        if (error.name === "AbortError") return;
        setState({ data: null, isLoading: false, error });
      });

    return () => controller.abort();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);

  return state;
};
