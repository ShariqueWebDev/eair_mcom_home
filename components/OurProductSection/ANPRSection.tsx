import React from "react";
import Wrapper from "../Others/Wrapper";
import EmblaCarouselProductSection from "./EmblaCarouselProductSection";
import { EmblaOptionsType } from "embla-carousel";
import EmblaANPRcarouselSection from "./EmblaANPRcaruselSection";
export const OPTIONS: EmblaOptionsType = {};

export type slideProductDataProps = {
  id: number;
  title: string;
  subtitle: string;
  imgPath: string;
  features: string[];
};

export const ANPRslidesData: slideProductDataProps[] = [
  {
    id: 1,
    title: "ANPR Features",
    subtitle: "Smart AI Black Light WDR Box Camera",
    imgPath: "/anpr/anpr1.webp",
    features: [
      `Can capture number plates of the vehicle at the speed of 200 km.`,
      `Recognize plate color, font color, plate type and country.`,
      `Integrate with police CMS.`,
      `Camera wise licensing system & maximum 16 camera support.`,
      `5000+ installations in United Arab Emirates.`,
    ],
  },
  {
    id: 2,
    title: "ANPR Highway System",
    subtitle: "HD IPC IR Vandal proof Dome Camera",
    imgPath: "/anpr/anpr-road.webp",

    features: [
      `Over speed, under speed, unfastened safety belt, calling while driving, running red light.`,
      `Supports statistics (by lane and by time period) on vehicle flow, average speed, vehicle type, occupancy, average queue length and supports exporting reports, etc.`,
      `Motor vehicle: Plate, type, color, logo, and series of vehicle, calling while driving; Non-motor vehicle: Type (non-motor vehicle or pedestrian), wearing helmet or not.`,
      `Supports recognizing large, medium-sized, small vehicles and motorcycles in the baseline version.`,
    ],
  },
  {
    id: 3,
    title: "ANPR Parking System",
    subtitle: "HD IPC IR Vandal proof Varifocal Dome Camera",
    imgPath: "/anpr/anpr-park.webp",

    features: [
      "Provide photographic evidence, time stamped of arrival and departure.",
      `Monitor and prevent misuse of disabled parking.`,
      `Be supplemented by wardens if you desire, who are able to focus on any specific parking issues you have.`,
      `Incorporate a 20 minute grace period above the time limit on your signage.`,
      `Allow staff to register vehicles for longer than the time limit allowed if required.`,
      `Operate a ‘One Chance’ system, so a PCN is only issued in response to a second offence.`,
    ],
  },
  {
    id: 4,
    title: "ANPR Access Control System",
    subtitle: "HD IPC IR Vandalproof Dome Camera",
    imgPath: "/anpr/anpr-access.webp",

    features: [
      `Access control devices regulate the flow of traffic in a parking lot & tolls.`,
      `The most widely used method is the gate, which is placed at the entry and exit.`,
      `After collecting tickets and making payments, the automobile enters and exits respectively.`,
      `Saves payroll cost – If a machine issues tickets, directing traffic and collecting payments there is no need to employee, people thus cutting costs for facility owners.`,
      `Decreases revenue leakage – By installing machines, facility owners can avoid thefts by employees and mishaps due to lack of attention.`,
      `Maintains records – The machine documents all transactions, giving owners access to such data in the future.`,
    ],
  },
  {
    id: 5,
    title: "ANPR Applications",
    subtitle: "HD IPC IR Bullet Camera",
    imgPath: "/anpr/anpr-application.webp",

    features: [
      `Police – Speed and motoring offences, tax violations, insurance etc.`,
      `Retail – Car parks, parking monitoring, traffic flow, violations.`,
      `Councils – Car parks, public areas, bus lanes, emergency vehicle areas.`,
      `Hospitals – Visitor Parking, acute areas, ambulances, traffic flow.`,
      `Airports – Car parks, traffic flow, offences, congestion control.`,
      `Private Individuals – Estates, homes, tracking and recording of vehicle movements, offences.`,
      `Public / Private Roads – Motoring offences, congestion, speeding, disabled parking.`,
      `Motorways – Speeding, audits, congestion, offences, restricted areas, maintenance.`,
    ],
  },
];
const ANPRSection = () => {
  return (
    <Wrapper className="md:py-16 py-10">
      <div className="">
        <h3
          className="mb-7 text-2xl font-bold text-gray-800 heading-all sm:text-4xl uppercase xl:text-4xl text-center"
          data-aos="fade-up"
        >
          Our Lastest Products
        </h3>
        <div className="">
          <EmblaANPRcarouselSection
            key={""}
            slides={ANPRslidesData}
            options={OPTIONS}
          />
        </div>
      </div>
    </Wrapper>
  );
};

export default ANPRSection;
