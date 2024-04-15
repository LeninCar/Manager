import React from "react";
import { Button, Img, Text, Heading } from "./..";

export default function TaskManagementDashboardCard({
  nov22022 = "Nov 2, 2022",
  webdashboard = "Animate Illustration",
  designing = "Designing",
  progress = "Progress",
  ninety = "75%",
  p7daysleft = "7 days left",
  ...props
}) {
  return (
    <div {...props}>
      <div className="flex items-center justify-between gap-5 self-stretch">
        <Heading size="xs" as="h1" className="self-end text-center !font-helvetica !text-blue_gray-100">
          {nov22022}
        </Heading>
        <Img src="images/img_notification.svg" alt="notification" className="h-[20px] w-[20px] self-start" />
      </div>
      <div className="mt-3 flex w-[86%] flex-col gap-2.5">
        <div className="flex flex-col items-start gap-1">
          <Heading as="h2">{webdashboard}</Heading>
          <Text size="xl" as="p" className="!font-helvetica !text-blue_gray-900">
            {designing}
          </Text>
        </div>
        <div className="relative h-[9px]">
          <div className="relative bottom-0 left-0 right-0 top-0 m-auto h-[9px] w-full">
            <div style={{ width: "0%" }} className="absolute h-full" />
          </div>
          <Img
            src="images/img_rectangle_18.svg"
            alt="image"
            className="absolute bottom-0 left-[0.00px] top-0 my-auto h-[9px] w-[60%] rounded"
          />
        </div>
        <div className="flex flex-wrap justify-between gap-5">
          <Text size="lg" as="p" className="self-end !font-helvetica !text-blue_gray-900">
            {progress}
          </Text>
          <Text size="lg" as="p" className="self-start text-right !font-helvetica !text-blue_gray-900">
            {ninety}
          </Text>
        </div>
      </div>
      <div className="mt-[26px] h-[2px] w-[86%] bg-blue_gray-100_7f" />
      <div className="mb-1.5 mr-[3px] mt-2 flex items-center justify-between gap-5 self-stretch md:mr-0">
        <div className="flex w-[28%] justify-center gap-[5px]">
          <div className="flex flex-1">
            <Img src="images/img_ellipse_11.png" alt="circleimage" className="h-[25px] w-[25px] rounded-[50%]" />
            <Img
              src="images/img_ellipse_11.png"
              alt="circleimage_one"
              className="relative ml-[-9px] h-[25px] w-[25px] rounded-[50%]"
            />
          </div>
          <Button className="flex h-[25px] w-[25px] items-center justify-center self-start rounded-[12px] bg-deep_orange-300">
            <Img src="images/img_akar_icons_plus.svg" />
          </Button>
        </div>
        <Button className="flex h-[26px] min-w-[93px] items-center justify-center rounded-[13px] bg-deep_orange-100 px-4 text-center font-helvetica text-xs font-bold text-orange-900">
          {p7daysleft}
        </Button>
      </div>
    </div>
  );
}
