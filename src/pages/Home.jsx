import { Header, Text, Image, Heading } from "../components";

function Home() {
  return (
    <div className="flex flex-col items-center justify-start w-full gap-[100px] bg-gray-100">
      <div className="flex flex-col items-center justify-start w-full gap-12">
        <Header className="flex flex-row justify-center items-center w-full md:h-auto p-[22px] sm:p-5 bg-gray-100" />
        <div className="flex flex-col items-start justify-start w-full gap-[5px] p-5 md:px-5 bg-yellow-100 max-w-7xl rounded-[20px]">
            <Text as="p" className="mt-[5px] ml-2.5 md:ml-0 !text-black-900_02 !font-medium">
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
    </div>
  );
}

export default Home