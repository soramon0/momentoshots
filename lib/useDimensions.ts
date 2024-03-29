import { MutableRefObject, useEffect, useRef } from 'react';

const useDimensions = (ref: MutableRefObject<any>) => {
  const dimensions = useRef({ width: 0, height: 0 });

  useEffect(() => {
    dimensions.current.width = ref.current.offsetWidth;
    dimensions.current.height = ref.current.offsetHeight;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return dimensions.current;
};

export default useDimensions;
