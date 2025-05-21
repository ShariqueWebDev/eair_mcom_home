"use client";
import React from "react";
import CountUp from "react-countup";
import Wrapper from "../components/Others/Wrapper";
import { useInView } from "react-intersection-observer";

const Achievment = () => {
  return (
    <div className="pt-10 pb-16">
      <Wrapper>
        <div className="flex flex-col justify-center items-center">
          <h2 className="text-[40px] max-sm:text-3xl font-semibold uppercase mt-2 mb-12 text-gray-800 heading-all">
            Company Achievements
          </h2>
        </div>
        <div className="grid grid-cols-1 place-items-center md:grid-cols-3 max-sm:!gap-20 ">
          {/* Happy Clients */}
          <CounterItem
            end={20}
            duration={2.5}
            suffix="+"
            label="Year of Expertise"
          />

          {/* Projects */}
          {/* <CounterItem end={521} duration={2.5} suffix="+" label="Projects" /> */}

          {/* Hours of Support */}
          <CounterItem
            end={50}
            duration={2.5}
            suffix="+"
            label="Service Offered"
          />

          {/* Hard Workers */}
          <CounterItem
            end={200}
            duration={5}
            suffix="+"
            label="Projects Completed"
          />
        </div>
      </Wrapper>
    </div>
  );
};

// Reusable CounterItem component
const CounterItem = ({
  end,
  duration,
  suffix,
  label,
}: {
  end: any;
  duration: any;
  suffix: any;
  label: any;
}) => {
  const { ref, inView } = useInView({
    threshold: 0.5, // Trigger when 50% of the element is visible (center of viewport)
    triggerOnce: true, // Only trigger once
  });

  return (
    <div ref={ref} className="space-y-7 max-sm:space-y-3 max-w-[300px] w-full ">
      <div className="text-6xl max-sm:text-5xl bg-[#2f2f84] bg-clip-text text-transparent font-semibold heading-all">
        <CountUp
          start={0}
          end={inView ? end : 0} // Start counting when in view
          duration={duration}
          separator=","
          suffix={suffix}
          startOnMount={false} // Prevent counting on mount
        />
      </div>
      <hr />
      <div className="text-xl text-gray-500">{label}</div>
    </div>
  );
};

export default Achievment;
