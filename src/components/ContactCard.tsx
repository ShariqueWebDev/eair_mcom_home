import React from "react";

interface Props {
  item: {
    icon: any;
    label: string;
    value: string;
  };
}

const ContactCard: React.FC<Props> = ({ item }) => {
  return (
    <div
      data-aos="fade-up"
      className="bg-gray-100
       flex items-center gap-5 p-6 rounded-xl "
    >
      <div>
        <div className="bg-gradient-to-r from-darkGolden to-lightGolden p-3 rounded-lg">
          <item.icon size={30} strokeWidth={1.5} className="text-[#2e2f87]" />
        </div>
      </div>
      <div>
        <h3 className="text-lightGolden text-lg uppercase font-semibold tracking-wider text-gray-900">
          {item.label}
        </h3>
        <p className="text-sm tracking-wide text-gray-600">{item.value}</p>
      </div>
    </div>
  );
};

export default ContactCard;
