import React from "react";
import { Text, Img } from "./..";

export default function TaskManagementDashboardRowmariamemon({
  mariamemon = "Maria Memon",
  uiuxdesigner = "UI/UX Designer",
  ...props
}) {
  return (
    <div {...props}>
      <Img src="images/img_group_13_1.png" alt="image" className="ml-3.5 h-[38px] w-[38px] object-cover" />
      <div className="flex flex-col items-start gap-[5px] self-end">
        <Text size="xl" as="p" className="!font-helvetica !font-normal !text-blue_gray-900">
          {mariamemon}
        </Text>
        <Text size="md" as="p" className="!font-helvetica !text-blue_gray-900_7f">
          {uiuxdesigner}
        </Text>
      </div>
    </div>
  );
}
