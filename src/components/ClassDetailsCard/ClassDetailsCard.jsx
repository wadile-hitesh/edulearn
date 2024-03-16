
import { Button, Text, Heading, Image } from "./..";

export default function ClassDetailsCard({
  standard = "Standard One",
  standardDescription = "Standard 1 is a foundation Standard that reflects 7 important concepts...",
  src = "images/img_group.svg",
  ...props
}) {
  return (
    <div {...props}>
      <div className="flex flex-col items-center justify-center w-full gap-[25px] p-[15px] bg-white-A700 rounded-[15px]">
        <div className="flex flex-col items-center justify-start w-full mt-[15px] gap-[19px] md:px-5 max-w-[260px]">
          <Image
            src={src}
            alt="image"
            className="h-[50px] w-[50px]"
          />
          <div className="flex flex-col items-center justify-start w-full gap-[9px]">
            <Heading size="lg" as="h1" className="text-center">
              {standard}
            </Heading>
            <Text as="p" className="text-center !leading-[30px]">
              {standardDescription}
            </Text>
          </div>
        </div>
        <Button
          size="md"
          variant="outline"
          shape="round"
          className="mb-[15px] sm:px-5 font-medium min-w-[159px] sm:min-w-full"
        >
          Class Details
        </Button>
      </div>
    </div>
  );
}
