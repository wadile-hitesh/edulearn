import { Header, Text, Image, Heading, Button, ClassDetailsCard } from "../components";

function Home() {
  return (
    <div className="flex flex-col items-center justify-start w-full gap-[100px] bg-gray-100">
      <div className="flex flex-col items-center justify-start w-full gap-12">
        <Header className="flex flex-row justify-center items-center w-full md:h-auto p-[22px] sm:p-5 bg-gray-100" />
        <div className="flex flex-col items-start justify-start w-full gap-[5px] p-5 md:px-5 bg-yellow-100 max-w-7xl rounded-[20px]">
          <Text
            as="p"
            className="mt-[5px] ml-2.5 md:ml-0 !text-black-900_02 !font-medium"
          >
            Home | Courses
          </Text>
          <div className="flex flex-row md:flex-col justify-between items-center w-[99%] md:w-full ml-2.5 gap-[436px] md:gap-10 md:ml-0">
            <Heading size="3xl" as="h1" className="w-[33%] !font-semibold">
              <>
                Educatsy Courses
                <br />
                For All Standards
              </>
            </Heading>
            <div className="h-[210px] w-[32%] md:w-full relative">
              <div className="h-[14px] w-full bottom-[1%] right-0 left-0 m-auto bg-black-900_cc backdrop-opacity-[0.5] blur-[81.00px] absolute rounded-[50%]" />
              <Image
                src="images/hero_background.png"
                alt="image_one"
                className="justify-center h-[210px] w-[97%] sm:w-full left-0 bottom-0 right-0 top-0 m-auto object-cover absolute"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-start w-full gap-[47px]">
        <div className="flex flex-row md:flex-col justify-start w-full gap-5 md:px-5 max-w-7xl">
          <Button
            color="white_A700"
            className="sm:px-5 font-medium min-w-[142px] rounded-[10px]"
          >
            All Courses
          </Button>
          <Button
            color="white_A700"
            className="sm:px-5 font-medium min-w-[142px] rounded-[10px]"
          >
            Kindergarten
          </Button>
          <Button
            color="white_A700"
            className="sm:px-5 font-medium min-w-[142px] rounded-[10px] active:bg-orange-200_01"
          >
            High School
          </Button>
          <Button
            color="white_A700"
            className="sm:px-5 font-medium min-w-[142px] rounded-[10px]"
          >
            College
          </Button>
          <Button
            color="white_A700"
            className="sm:px-5 font-medium min-w-[142px] rounded-[10px]"
          >
            Computer
          </Button>
          <Button
            color="white_A700"
            className="sm:px-5 font-medium min-w-[142px] rounded-[10px]"
          >
            Science
          </Button>
          <Button
            color="white_A700"
            className="sm:px-5 font-medium min-w-[142px] rounded-[10px]"
          >
            Engineering
          </Button>
          <Button
            color="white_A700"
            className="!text-deep_orange-400 font-medium min-w-[142px] rounded-[10px]"
          >
            More Courses
          </Button>
        </div>
        <div className="flex flex-row justify-center w-full">
          <div className="flex flex-col items-start justify-start w-full gap-[23px] md:px-5 max-w-7xl">
            <Heading size="xl" as="h2">
              Standard Classes
            </Heading>
            <div className="flex flex-row justify-start w-full">
              <div className="w-full gap-10 grid-cols-4 md:grid-cols-2 md:gap-5 sm:grid-cols-1 grid">
                <ClassDetailsCard
                  className="flex flex-col items-center justify-start w-full"
                  standard="Standard One"
                  standardDescription="Standard 1 is a foundation Standard that reflects 7 important concepts..."
                  src="images/standard1.svg"
                />
                <ClassDetailsCard
                  className="flex flex-col items-center justify-start w-full"
                  standard="Standard Two"
                  standardDescription="Standard 2 builds on the foundations of Standard 1 and includes requirements..."
                  src="images/standard2.svg"
                />
                <ClassDetailsCard
                  className="flex flex-col items-center justify-start w-full"
                  standard="Standard Three"
                  standardDescription="Standard 3 of the Aged Care Quality Standards applies to all services delivering personal..."
                  src="images/standard3.svg"
                />
                <ClassDetailsCard
                  className="flex flex-col items-center justify-start w-full"
                  standard="Standard Four"
                  standardDescription="Standard 4 of the Aged Care Quality Standards focuses on services and supports..."
                  src="images/standard4.svg"
                />
                <ClassDetailsCard
                  className="flex flex-col items-center justify-start w-full"
                  standard="Standard Five"
                  standardDescription="Standard 5 Learning Resources. Learning Resources ensure that the school has the..."
                  src="images/standard5.svg"
                />
                <ClassDetailsCard
                  className="flex flex-col items-center justify-start w-full"
                  standard="Standard Six"
                  standardDescription="Standard 6 requires an organisation to have a system to resolve complaints..."
                  src="images/standard6.svg"
                />
                <ClassDetailsCard
                  className="flex flex-col items-center justify-start w-full"
                  standard="Standard Seven"
                  standardDescription="Standard 7 Blood Management mandates that leaders of health service organizations..."
                  src="images/standard7.svg"
                />
                <ClassDetailsCard
                  className="flex flex-col items-center justify-start w-full"
                  standard="Standard Eight"
                  standardDescription="Standard 1 is a foundation Standard that reflects 7 important concepts..."
                  src="images/standard8.svg"
                />
                <ClassDetailsCard
                  className="flex flex-col items-center justify-start w-full"
                  standard="Standard Nine"
                  standardDescription="Standard 5 Learning Resources. Learning Resources ensure that the school has the..."
                  src="images/standard9.svg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home