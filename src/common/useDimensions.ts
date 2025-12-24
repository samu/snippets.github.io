import {
  Dispatch,
  RefObject,
  SetStateAction,
  useEffect,
  useState,
} from "react";

export type HTMLElementDimensions = {
  x: number;
  y: number;
  width: number;
  height: number;
  top: number;
  right: number;
  bottom: number;
  left: number;
  clientWidth: number;
  clientHeight: number;
};

function extractAndSet(
  target: Element,
  setDimensions: Dispatch<SetStateAction<HTMLElementDimensions | null>>
) {
  const rect = target.getBoundingClientRect();

  setDimensions({
    ...rect.toJSON(),
    clientWidth: target.clientWidth,
    clientHeight: target.clientHeight,
  });
}

export function useDimensions<T extends HTMLElement>(
  ref: RefObject<T | null> | undefined,
  // This can be useful when the measured element is being animated initially
  // (e.g. a modal which scales from 0 to 1).
  options: {
    doPostEvaluation?: boolean;
    // we wrap trigger so we can differ between the intent to use a trigger from
    // the actual trigger. This allows us to conditionally call `useEffect`.
    refreshTrigger?: { trigger: any };
  } = {
    doPostEvaluation: false,
  }
): HTMLElementDimensions | null {
  const [dimensions, setDimensions] = useState<HTMLElementDimensions | null>(
    null
  );

  useEffect(() => {
    // enclose current so the reference can be used in the unsubscribe
    const current = ref?.current;

    if (current) {
      const resizeObserver = new ResizeObserver(
        ([entry]: Array<ResizeObserverEntry>) => {
          extractAndSet(entry.target, setDimensions);
        }
      );

      resizeObserver.observe(current);

      extractAndSet(current, setDimensions);

      const timeout =
        options.doPostEvaluation &&
        setTimeout(() => {
          extractAndSet(current, setDimensions);
        }, 500);

      return () => {
        resizeObserver.unobserve(current);

        timeout && clearTimeout(timeout);
      };
    }

    return undefined;
  }, [ref?.current]);

  options.refreshTrigger &&
    useEffect(() => {
      ref?.current && extractAndSet(ref.current, setDimensions);
    }, [options.refreshTrigger?.trigger]);

  return dimensions;
}
