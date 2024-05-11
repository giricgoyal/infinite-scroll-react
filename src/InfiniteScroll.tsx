import React, { useEffect, useRef } from "react";

export default function InfiniteScroll({ children, fetchData }) {
  const ref = useRef();
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries?.[0]?.isIntersecting) {
        fetchData();
      }
    });
    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, [ref, fetchData]);
  return (
    <div>
      {children}
      <div ref={ref}></div>
    </div>
  );
}
