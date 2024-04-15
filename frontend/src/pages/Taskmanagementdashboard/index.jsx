import React from "react";
import { Helmet } from "react-helmet";
import { CloseSVG } from "../../assets/images";
import { Text, Button, Heading, Img, Input } from "../../styles/components";
import TaskManagementDashboardCard from "../../styles/components/TaskManagementDashboardCard";
import TaskManagementDashboardRowmariamemon from "../../styles/components/TaskManagementDashboardRowmariamemon";
import { MenuItem, Menu, Sidebar } from "react-pro-sidebar";

const data = [
  { one: "Mon" },
  { one: "Tue" },
  { one: "Wed" },
  { one: "Thu" },
  { one: "Fri" },
  { one: "Sat" },
  { one: "Sun" },
  { one: "29" },
  { one: "30" },
  { one: "31" },
  { one: "01" },
  { one: "02" },
  { one: "03" },
  { one: "04" },
];

export default function TaskmanagementdashboardPage() {
  const [searchBarValue, setSearchBarValue] = React.useState("");
  const [collapsed, setCollapsed] = React.useState(false);

  //use this function to collapse/expand the sidebar
  //function collapseSidebar() {
  //    setCollapsed(!collapsed)
  //}

  return (
    <>
      <Helmet>
        <title>Task Dashboard - Organize Your Daily Schedules & Progress</title>
        <meta
          name="description"
          content="Stay on top of your daily tasks with our Task Management Dashboard. Track project progress, view schedules, and collaborate with team members efficiently."
        />
      </Helmet>

      {/* main content section */}
      <div className="flex w-full items-start justify-center gap-[22px] bg-gray-100 md:flex-col">
        {/* sidebar navigation section */}
        <Sidebar
          width="133px !important"
          collapsedWidth="80px !important"
          collapsed={collapsed}
          className="!sticky top-0 flex h-screen flex-col gap-[91px] overflow-auto rounded-[20px] bg-white-A700_01 p-[30px] md:hidden md:gap-[68px] md:p-5 sm:gap-[45px]"
        >
          <Img src="images/img_fire.svg" alt="fire_one" className="ml-[3px] mt-2.5 h-[54px] w-[76%] md:ml-0" />
          <Menu
            menuItemStyles={{
              button: {
                padding: "17px",
                borderRadius: "31px",
                [`&:hover, &.ps-active`]: { backgroundColor: "#9854cb !important" },
              },
            }}
            rootStyles={{ ["&>ul"]: { gap: "56.00px" } }}
            className="mb-[338px] flex w-full flex-col"
          >
            <MenuItem icon={<Img src="images/img_vector.svg" alt="vector_one" className="h-[28px] w-[28px]" />} />
            <MenuItem icon={<Img src="images/img_checkmark.svg" alt="checkmark_one" className="h-[28px] w-[28px]" />} />
            <MenuItem icon={<Img src="images/img_qrcode.svg" alt="qrcode_one" className="h-[28px] w-[28px]" />} />
            <MenuItem
              icon={<Img src="images/img_vector_blue_gray_900.svg" alt="vector_three" className="h-[24px] w-[24px]" />}
            />
            <MenuItem icon={<Img src="images/img_search.svg" alt="search_one" className="h-[28px] w-[28px]" />} />
          </Menu>
        </Sidebar>

        {/* task summary section */}
        <div className="flex flex-1 items-center gap-[19px] md:flex-col md:self-stretch md:p-5">
          {/* task list section */}
          <div className="flex flex-1 flex-col gap-[31px] md:self-stretch">
            <div className="relative h-[311px]">
              <div className="absolute bottom-[0.00px] left-0 right-0 m-auto flex w-full flex-col items-start justify-center rounded-[20px] bg-white-A700_01 p-[34px] sm:p-5">
                <Heading size="md" as="h1">
                  Gestor Manager
                </Heading>
                <Text size="2xl" as="p" className="ml-1.5 !font-helvetica !text-blue_gray-900 md:ml-0">
                  Gestor de tareas empresarial
                </Text>
              </div>
              <Input
                name="search"
                placeholder={`Buscar`}
                value={searchBarValue}
                onChange={(e) => setSearchBarValue(e)}
                suffix={
                  searchBarValue?.length > 0 ? (
                    <CloseSVG onClick={() => setSearchBarValue("")} height={18} width={18} fillColor="#000000ff" />
                  ) : (
                    <Img
                      src="images/img_akariconssearch.svg"
                      alt="akar-icons:search"
                      className="h-[18px] w-[18px] cursor-pointer"
                    />
                  )
                }
                className="absolute left-[0.00px] top-[3.00px] m-auto flex h-[47px] w-[26%] items-center justify-center gap-[35px] rounded-[20px] bg-white-A700_01 pl-[26px] pr-[35px] font-helvetica text-base text-black-900_66 sm:px-5"
              />
              <Img
                src="images/img_time_management_amico.svg"
                alt="timemanagement"
                className="absolute bottom-0 right-[8%] top-0 my-auto h-[307px] w-[32%]"
              />
            </div>

            {/* task cards section */}
            <div className="flex gap-[22px] md:flex-col">
              <div className="flex w-full flex-col items-center rounded-[22px] bg-white-A700_01 p-[9px]">
                <div className="flex items-center justify-between gap-5 self-stretch">
                  <Heading size="xs" as="h2" className="self-end text-center !font-helvetica !text-blue_gray-100">
                    Abril 10, 2024
                  </Heading>
                  <Img src="images/img_notification.svg" alt="nov_22022_one" className="h-[20px] w-[20px] self-start" />
                </div>
                <Heading as="h3" className="ml-[25px] mt-3 self-start md:ml-0">
                  Dashboard
                </Heading>
                <Text
                  size="xl"
                  as="p"
                  className="ml-[25px] mt-[3px] self-start !font-helvetica !text-blue_gray-900 md:ml-0"
                >
                  
                </Text>
                <div className="relative mt-2.5 h-[9px] w-[86%] rounded bg-blue_gray-100">
                  <div style={{ width: "89%" }} className="absolute h-full rounded bg-purple-400" />
                </div>
                <div className="mt-2.5 flex w-[86%] flex-wrap justify-between gap-5 md:w-full">
                  <Text size="lg" as="p" className="self-end !font-helvetica !text-blue_gray-900">
                    Progreso
                  </Text>
                  <Text size="lg" as="p" className="self-start text-right !font-helvetica !text-blue_gray-900">
                    90%
                  </Text>
                </div>
                <div className="mt-[26px] h-[2px] self-stretch bg-blue_gray-100_7f" />
                <div className="mb-1.5 mt-2 flex items-center justify-between gap-5 self-stretch">
                  <div className="flex w-[31%] justify-center gap-[21px]">
                    <div className="flex flex-1">
  
                    </div>
                    <Button className="flex h-[25px] w-[25px] items-center justify-center self-start rounded-[12px] bg-purple-400">
                      <Img src="images/img_akar_icons_plus.svg" alt="plus"/>
                    </Button>
                  </div>
                  <Button className="flex h-[26px] min-w-[93px] items-center justify-center rounded-[13px] bg-purple-100_66 px-4 text-center font-helvetica text-xs font-bold text-deep_purple-600">
                    3 dias restantes
                  </Button>
                </div>
              </div>
              <div className="flex w-full flex-col items-center rounded-[22px] bg-white-A700_01 p-[9px]">
                <div className="flex items-center justify-between gap-5 self-stretch">
                  <Heading size="xs" as="h4" className="self-end text-center !font-helvetica !text-blue_gray-100">
                    Abril 13, 2024
                  </Heading>
                  <Img src="images/img_notification.svg" alt="notification" className="h-[20px] w-[20px] self-start" />
                </div>
                <Heading as="h5" className="ml-[22px] mt-[13px] self-start text-center md:ml-0">
                  Backend
                </Heading>

                <div className="mt-[11px] flex w-[86%] md:w-full">
                  <Img
                    src="images/img_television.svg"
                    alt="television_one"
                    className="relative z-[1] h-[9px] w-[25%] rounded"
                  />
                  <div className="relative ml-[-81px] h-[9px] flex-1">
                    <div style={{ width: "0%" }} className="absolute h-full" />
                  </div>
                </div>
                <div className="mt-2.5 flex w-[86%] flex-wrap justify-between gap-5 md:w-full">
                  <Text size="lg" as="p" className="self-end !font-helvetica !text-blue_gray-900">
                    Progreso
                  </Text>
                  <Text size="lg" as="p" className="self-start text-right !font-helvetica !text-blue_gray-900">
                    20%
                  </Text>
                </div>
                <div className="mt-[26px] h-[2px] w-[86%] bg-blue_gray-100_7f" />
                <div className="mb-1.5 mt-[9px] flex items-center justify-between gap-5 self-stretch">
                  <div className="flex w-[31%] justify-center gap-5">
                    <div className="flex flex-1">
                  
                    </div>
                    <Button className="flex h-[25px] w-[25px] items-center justify-center rounded-[12px] bg-indigo-300">
                      <Img src="images/img_akar_icons_plus.svg" />
                    </Button>
                  </div>
                  <Button className="flex h-[22px] min-w-[93px] items-center justify-center self-start rounded-[11px] bg-indigo-50 px-[13px] text-center font-helvetica text-xs font-bold text-indigo-300">
                    20 dias restantes
                  </Button>
                </div>
              </div>
            </div>

            {/* team section */}
            <div className="flex items-center gap-[19px] md:flex-col">
              <div className="mt-[5px] flex-1 rounded-[20px] bg-white-A700_01 p-[18px] md:self-stretch">
                <div className="mb-[5px] flex flex-col items-start">
                  <Heading as="h6" className="ml-[25px] text-center md:ml-0">
                    Tareas Completadas
                  </Heading>
                  <div className="relative mt-[-10px] flex flex-col items-end gap-[26px] self-stretch">
                    <div className="mr-[89px] h-[11px] w-[11px] rounded-[5px] border border-solid border-deep_purple-A200 bg-white-A700 md:mr-0" />
                    <div className="relative h-[189px] self-stretch md:h-auto">
                      <div className="flex w-full items-center justify-center md:flex-col">
                        <div className="relative h-[189px] flex-1 md:w-full md:flex-none md:self-stretch">
                          <Img
                            src="images/img_vector_4.png"
                            alt="vectorfour_one"
                            className="absolute bottom-0 left-0 right-0 top-0 m-auto h-[186px] w-full object-cover"
                          />
                          <div className="absolute bottom-0 left-0 right-0 top-0 m-auto flex h-max w-full flex-col gap-16 sm:gap-8">
                            <div>
                              <Img
                                src="images/img_vector_5.svg"
                                alt="vectorfive_one"
                                className="h-[113px] w-full md:h-auto"
                              />
                            </div>
                            <div className="ml-[11px] flex w-[84%] flex-wrap justify-between gap-5 md:ml-0 md:w-full">
                              <Text size="xs" as="p" className="text-center !font-avertaregular !text-gray-500">
                                Lunes
                              </Text>
                              <Text size="xs" as="p" className="text-center !font-avertaregular !text-gray-500">
                                Martes
                              </Text>
                              <Text size="xs" as="p" className="text-center !font-avertaregular !text-gray-500">
                                Miercoles
                              </Text>
                              <Text size="xs" as="p" className="text-center !font-avertaregular !text-gray-500">
                                Jueves
                              </Text>
                              <Text size="xs" as="p" className="text-center !font-avertaregular !text-gray-500">
                                Viernes
                              </Text>
                            </div>
                          </div>
                        </div>
                        <Text
                          size="xs"
                          as="p"
                          className="relative z-[2] ml-[-14px] self-end !font-avertaregular !text-gray-500 md:ml-0"
                        >
                          Saturday
                        </Text>
                      </div>
                      <div className="absolute bottom-[19.00px] right-[15%] m-auto h-[6px] w-[6px] rounded-[3px] border border-solid border-deep_purple-A200 bg-white-A700" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex w-[31%] flex-col items-start gap-[15px] rounded-[20px] bg-white-A700_01 p-[9px] md:w-full">
                <Heading as="h5" className="ml-[47px] text-center md:ml-0">
                  Miembros
                </Heading>
                <div className="flex w-[88%] flex-col gap-2.5 self-center md:w-full md:flex-row sm:flex-col">
                  <div className="flex flex-1 cursor-pointer items-center gap-4 rounded-[10px] bg-white-A700_01 shadow-sm hover:shadow-sm">
                    <Img
                      src="images/img_group_7_1.png"
                      alt="ali_ahmad_one"
                      className="ml-[15px] h-[38px] w-[38px] self-start object-cover"
                    />
                    <div className="flex flex-col self-start">
                      <Text
                        size="xl"
                        as="p"
                        className="text-shadow-ts !font-helvetica !font-normal !text-blue_gray-900"
                      >
                        Lenin Camilo
                      </Text>
                      <Text size="md" as="p" className="text-shadow-ts !font-helvetica !text-blue_gray-900_7f">
                        Backend Developer
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-1 cursor-pointer items-end gap-4 rounded-[10px] bg-white-A700_01 hover:shadow-sm">
                    <Img src="images/img_group_20_2.png" alt="image" className="ml-4 h-[38px] w-[38px] object-cover" />
                    <div className="mt-1 flex flex-col items-start gap-[5px]">
                      <Text size="xl" as="p" className="!font-helvetica !font-normal !text-blue_gray-900">
                        Juan Pablo
                      </Text>
                      <Text size="md" as="p" className="!font-helvetica !text-blue_gray-900_7f">
                        Backend Developer
                      </Text>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* agency info section */}
          <div className="relative h-[1001px] w-[28%] md:w-full">
            <div className="absolute bottom-0 left-0 right-0 top-0 m-auto h-max w-full rounded-[20px] bg-white-A700_01 px-[30px] pb-[30px] sm:px-5 sm:pb-5">
              <div className="mb-[371px] rounded-[20px] bg-gray-100_01 p-[18px]">
                <div className="mb-10 mt-[30px] flex flex-col items-start">
                  
                  <div className="ml-[5px] mt-[21px] h-[2px] self-stretch bg-blue_gray-100_7f md:ml-0" />
                  <Img
                    src="images/img_design_community_pana.svg"
                    alt="design_one"
                    className="mt-6 h-[187px] w-full md:h-auto"
                  />
                  <Heading as="h3" className="ml-[5px] mt-[22px] w-[84%] leading-[134%] md:ml-0 md:w-full">
                     ¡TRABAJA EN EQUIPO!            
                  </Heading>
               
                </div>
              </div>
            </div>
            <div className="absolute bottom-[0.00px] left-0 right-0 m-auto flex w-[84%] flex-col items-start gap-[17px] rounded-[20px] border border-solid border-blue_gray-900 bg-gray-100_01 pt-[39px] sm:pt-5">
              <Heading as="h4" className="ml-[25px] md:ml-0">
                Abril 2024
              </Heading>
              <div className="self-stretch rounded-[20px] bg-gray-100_01 p-[19px] shadow-xs">
                <div className="mb-[17px] flex flex-col gap-px">
                  <div className="grid flex-1 grid-cols-7 justify-center sm:grid-cols-1">
                    {data.map((d, index) => (
                      <div key={"gridone" + index} className="flex w-full flex-col items-center justify-center p-1.5">
                        <Text as="p" className="mb-1 mt-[3px] text-center !text-[11.92px] !text-blue_gray-900">
                          {d.one}
                        </Text>
                      </div>
                    ))}
                  </div>
                  <div className="flex flex-1">
                    <div className="flex flex-col items-center p-2.5">
                      <Text as="p" className="text-center !text-[11.92px]">
                        05
                      </Text>
                    </div>
                    <div className="flex flex-col items-center p-2.5">
                      <Text as="p" className="text-center !text-[11.92px]">
                        06
                      </Text>
                    </div>
                    <div className="flex flex-col items-center p-2.5">
                      <Text as="p" className="text-center !text-[11.92px]">
                        07
                      </Text>
                    </div>
                    <Button className="flex h-[39px] min-w-[39px] items-center justify-center rounded-[9px] border border-solid border-deep_purple-600 px-2.5 text-center text-[11.92px] text-deep_purple-600">
                      08
                    </Button>
                    <div className="flex flex-col items-center p-2.5">
                      <Text as="p" className="text-center !text-[11.92px]">
                        09
                      </Text>
                    </div>
                    <div className="flex flex-col items-center p-2.5">
                      <Text as="p" className="text-center !text-[11.92px]">
                        10
                      </Text>
                    </div>
                    <div className="flex flex-col items-center p-2.5">
                      <Text as="p" className="text-center !text-[11.92px]">
                        11
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-1">
                    <div className="flex flex-col items-center p-2.5">
                      <Text as="p" className="text-center !text-[11.92px]">
                        12
                      </Text>
                    </div>
                    <div className="flex flex-col items-center p-2.5">
                      <Text as="p" className="text-center !text-[11.92px]">
                        13
                      </Text>
                    </div>
                    <div className="flex flex-col items-center p-2.5">
                      <Text as="p" className="text-center !text-[11.92px]">
                        14
                      </Text>
                    </div>
                    <div className="flex flex-col items-center p-2.5">
                      <Text as="p" className="text-center !text-[11.92px]">
                        15
                      </Text>
                    </div>
                    <div className="flex flex-col items-center p-2.5">
                      <Text as="p" className="text-center !text-[11.92px]">
                        16
                      </Text>
                    </div>
                    <Button className="flex h-[39px] min-w-[39px] items-center justify-center rounded-[9px] bg-purple-400 px-3.5 text-center text-[11.92px] text-gray-100_01">
                      17
                    </Button>
                    <div className="flex flex-col items-center p-2.5">
                      <Text as="p" className="text-center !text-[11.92px]">
                        18
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-1">
                    <div className="flex flex-col items-center p-2.5">
                      <Text as="p" className="text-center !text-[11.92px]">
                        19
                      </Text>
                    </div>
                    <div className="flex flex-col items-center p-2.5">
                      <Text as="p" className="text-center !text-[11.92px]">
                        20
                      </Text>
                    </div>
                    <div className="flex flex-col items-center p-2.5">
                      <Text as="p" className="text-center !text-[11.92px]">
                        21
                      </Text>
                    </div>
                    <div className="flex flex-col items-center p-2.5">
                      <Text as="p" className="text-center !text-[11.92px]">
                        22
                      </Text>
                    </div>
                    <div className="flex flex-col items-center p-2.5">
                      <Text as="p" className="text-center !text-[11.92px]">
                        23
                      </Text>
                    </div>
                    <div className="flex flex-col items-center p-2.5">
                      <Text as="p" className="text-center !text-[11.92px]">
                        24
                      </Text>
                    </div>
                    <div className="flex flex-col items-center p-2.5">
                      <Text as="p" className="text-center !text-[11.92px]">
                        25
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-1">
                    <div className="flex flex-col items-center p-2.5">
                      <Text as="p" className="text-center !text-[11.92px]">
                        26
                      </Text>
                    </div>
                    <div className="flex flex-col items-center p-2.5">
                      <Text as="p" className="text-center !text-[11.92px]">
                        27
                      </Text>
                    </div>
                    <div className="flex flex-col items-center p-2.5">
                      <Text as="p" className="text-center !text-[11.92px]">
                        28
                      </Text>
                    </div>
                    <div className="flex flex-col items-center p-2.5">
                      <Text as="p" className="text-center !text-[11.92px]">
                        29
                      </Text>
                    </div>
                    <div className="flex flex-col items-center p-2.5">
                      <Text as="p" className="text-center !text-[11.92px]">
                        30
                      </Text>
                    </div>
                    <div className="flex flex-col items-center p-2.5">
                      <Text as="p" className="text-center !text-[11.92px] !text-blue_gray-900">
                        01
                      </Text>
                    </div>
                    <div className="flex flex-col items-center p-2.5">
                      <Text as="p" className="text-center !text-[11.92px] !text-blue_gray-900">
                        02
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
