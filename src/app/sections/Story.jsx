import Image from "next/image";
import story from "public/assets/story.png";
const Story = () => {
  return (
    <section className="py-24">
      <h2 className="text-yellow text-3xl xs:text-4xl sm:text-[40px]  md:text-5xl xl:text-6xl 2xl:text-[65px] font-display leading-normal mb-5  lg:mb-8 text-center">Our Story</h2>
      <p className="max-sm:px-6 text-white font-sans xs:text-lg sm:text-2xl xl:text-3xl 2xl:text-[40px]   text-center">
        A journey for making successful luxury restaurant <span className="sm:block mt-2 md:mt-4"> with the best services</span>
      </p>

      <main className="flex max-sm:flex-col-reverse px-4 sm:space-x-8 lg:space-x-0 md:px-8 lg:px-12 xl:px-32 py-12 md:py-24">
        <div className="flex-1 flex max-lg:justify-center items-center">
          <Image src={story} placeholder="blur" quality={100} className="max-sm:w-[90vw] max-sm:h-[50vw] md:w-[400px] lg:w-[585px] md:h-[280px] lg:h-[400px] object-cover story" />
        </div>

        <div className="flex-1 flex flex-col justify-end items-end max-sm:mb-12">
          <div className="flex justify-end">
            {" "}
            <h3 className="text-white md:w-[76%] lg:w-[80%] xl:w-[58%] xs:text-base  xl:text-lg 2xl:text-[40px] ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer feugiat urna id leo euismod rhoncus. Aliquam erat volutpat. Nulla id aliquam neque, at dignissim quam. Praesent et lacus
              accumsan, consequat nisl a, mattis sapien.{" "}
              <span className="block mt-8">
                Nam sodales ullamcorper aliquet. Phasellus ut pretium libero, vitae imperdiet purus. Sed sed tincidunt velit. Aliquam vitae ipsum molestie, vehicula nisi quis, finibus leo.
              </span>
            </h3>
          </div>

          <div className="w-[50%] mt-4 text-end">
            <a href="/" className="text-yellow font-sans text-end">
              More...
            </a>
          </div>
        </div>
      </main>
    </section>
  );
};

export default Story;
