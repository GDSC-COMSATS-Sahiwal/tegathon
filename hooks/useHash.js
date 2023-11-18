'use client';
import { useLayoutEffect, useState } from 'react';

const getHash = () =>
  typeof window !== 'undefined'
    ? decodeURIComponent(
        window.location.href.substring(window.location.origin.length)
      )
    : undefined;

const useHash = () => {
  const [hash, setHash] = useState(getHash());
  const [isClient, setIsClient] = useState(false);

  useLayoutEffect(() => {
    setIsClient(true);
    setHash(getHash());
  }, [typeof window !== 'undefined' ? window : null]);

  return isClient ? hash : null;
};

export default useHash;
