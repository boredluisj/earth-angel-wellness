"use client";

import { useInView } from "react-intersection-observer";
import ReactCountUp from "react-countup";

interface CountUpProps {
  end: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
}

export default function CountUp({ end, suffix = "", prefix = "", duration = 2.5 }: CountUpProps) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <span ref={ref}>
      {inView ? (
        <ReactCountUp end={end} duration={duration} prefix={prefix} suffix={suffix} />
      ) : (
        <span>0{suffix}</span>
      )}
    </span>
  );
}
