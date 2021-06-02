import { useState, useEffect } from 'react';

type AsyncFunction<T> = (props?: unknown) => Promise<T>;

interface HookWrapperResponse<T> {
  state: T | Record<string, never>;
  isError: boolean;
  isLoading: boolean;
}

export const hookWrapper = <T>(asyncFunction: AsyncFunction<T>): HookWrapperResponse<T> => {
  const [state, setState] = useState<T | Record<string, never>>({});
  const [isError, setError] = useState(false);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const process = async () => {
      setError(false);
      setLoading(true);
      try {
        const result = await asyncFunction();
        setState(result);
      } catch (error) {
        setError(true);
      }
      setLoading(false);
    };

    process();
  }, []);

  return { state, isError, isLoading };
};
