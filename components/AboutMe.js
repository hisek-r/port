import React from "react";
import userData from "../constants/data";

export default function AboutMe() {
  return (
    <section className="bg-white dark:bg-gray-800">
      <div className="max-w-6xl mx-auto h-48 bg-white dark:bg-gray-800">
        <h1 className=" text-5xl md:text-9xl font-bold py-20 text-center md:text-left">
          About Me.
        </h1>
      </div>
      <div className="bg-[#F1F1F1] -mt-10 dark:bg-gray-900">
        <div className="text-container max-w-6xl mx-auto pt-20">
          <p
            className="leading-loose text-2xl md:text-4xl font-semibold  mx-4"
            style={{ lineHeight: "3rem" }}
          >
            {userData.about.title}
            
          </p>
        </div>
      </div>
      <div className="bg-[#F1F1F1] dark:bg-gray-900 px-4">
        <div className="pt-20 grid grid-cols-1 md:grid-cols-3 max-w-6xl mx-auto gap-y-20 gap-x-20">
          {/* Social Buttons */}
          <div className="inline-flex flex-col">
            <div>
              <h1 className="text-xl font-semibold text-gray-700 dark:text-gray-200">
                Contact
              </h1>
              <p className="text-lg text-gray-500 mt-4 dark:text-gray-300">
                If there is a way i can contribute with my skills, Go Ahead send me a {" "} 
                <a
                  href={`mailto:${userData.email}`}
                  className="text-gray-800 border-b-2 border-gray-800 dark:border-gray-300 font-bold dark:text-gray-300"
                >
                  mail
                </a>{" "}
                and I'll get back.
              </p>
            </div>
            <div className="mt-8">
              <h1 className="text-xl font-semibold text-gray-700 dark:text-gray-200">
                Job Opportunities
              </h1>
              <p className="text-lg text-gray-500 mt-4 dark:text-gray-300">
                I'm looking for a job currently, If you see me as a good fit,
                check my{" "}
                <a
                  href={userData.resumeUrl}
                  target="__blank"
                  className="text-gray-800 border-b-2 border-gray-800 dark:border-gray-300 font-bold dark:text-gray-300"
                >
                  CV
                </a>{" "}
                and I'd love to work for you.
              </p>
            </div>
            {/* Social Links */}
            <h1 className="text-xl font-semibold text-gray-700 mt-8 dark:text-gray-200">
              Social Links
            </h1>
            <div className="mt-4 ml-4">
              
              <div className="flex flex-row justify-start items-center">
                <a
                  href={userData.socialLinks.linkedin}
                  className="flex flex-row items-center space-x-4 group"
                >
                  <div className="my-4">&rarr;</div>
                  <div className="text-lg text-gray-500 font-mono relative overflow-hidden dark:text-gray-300">
                    <div className="absolute h-0.5 w-full bg-gray-400 bottom-0 transform -translate-x-24 group-hover:translate-x-0 transition duration-300"></div>
                    LinkedIn
                  </div>
                </a>
              </div>
              
              <div className="flex flex-row justify-start items-center">
                <a
                  href={userData.socialLinks.twitter}
                  className="flex flex-row items-center space-x-4 group"
                >
                  <div className="my-4">&rarr;</div>
                  <div className="text-lg text-gray-500 font-mono relative overflow-hidden dark:text-gray-300">
                    <div className="absolute h-0.5 w-full bg-gray-400 bottom-0 transform -translate-x-24 group-hover:translate-x-0 transition duration-300"></div>
                    Twitter
                  </div>
                </a>
              </div>
              <div className="flex flex-row justify-start items-center">
                <a
                  href={userData.socialLinks.github}
                  className="flex flex-row items-center space-x-4 group"
                >
                  <div className="my-4">&rarr;</div>
                  <div className="text-lg text-gray-500 font-mono relative overflow-hidden dark:text-gray-300">
                    <div className="absolute h-0.5 w-full bg-gray-400 bottom-0 transform -translate-x-24 group-hover:translate-x-0 transition duration-300"></div>
                    GitHub
                  </div>
                </a>
              </div>
              <div className="flex flex-row justify-start items-center">
                <a
                  href={userData.socialLinks.leetcode}
                  className="flex flex-row items-center space-x-4 group"
                >
                  <div className="my-4">&rarr;</div>
                  <div className="text-lg text-gray-500 font-mono relative overflow-hidden dark:text-gray-300">
                    <div className="absolute h-0.5 w-full bg-gray-400 bottom-0 transform -translate-x-24 group-hover:translate-x-0 transition duration-300"></div>
                    Leetcode
                  </div>
                </a>
              </div>
              
            </div>
          </div>
          {/* Text area */}
          <div className="col-span-1 md:col-span-2">
            {userData.about.description?.map((desc, idx) => (
              <p
                key={idx}
                className="text-xl text-gray-700 mb-4 dark:text-gray-300 "
              >
                {desc}
              </p>
            ))}

            <h1 className="bg-red-500 text-3xl rounded-md px-2 py-1 inline-block font-bold text-gray-50">
              Tech Stack
            </h1>
            <div className="flex flex-row flex-wrap mt-8">
              <img
                src="https://github.com/hisek-r/img/assets/64548917/dde50e19-2eb6-4ef7-a4d3-0d6878b53865"
                className="h-20 w-20 mx-4 my-4"
              />
              <img
                src="https://github.com/hisek-r/img/assets/64548917/261b373a-5cc5-4632-80b5-e6fbc8427c6c"
                className="h-20 w-20 mx-4 my-4"
              />
              <img
                src="https://github.com/hisek-r/img/assets/64548917/4b5d20e8-199e-4ba7-9a51-9b50d8f3f980"
                className="h-20 w-20 mx-4 my-4"
              />
              <img
                src="https://github.com/hisek-r/img/assets/64548917/371cdf2d-011b-40dd-b180-77ce416b5037"
                className="h-20 w-20 mx-4 my-4"
              />
              <img
                src="https://github.com/hisek-r/img/assets/64548917/071839b6-3e2d-4534-9c27-6158c13f16d6"
                className="h-20 w-20 mx-4 my-4"
              />
              <img
                src="https://github.com/hisek-r/img/assets/64548917/8f18bd35-9fa7-41ba-90e8-9a863d10a70f"
                className="h-20 w-20 mx-4 my-4"
              />
              <img
                src="https://github.com/hisek-r/img/assets/64548917/bbf99f4d-345e-4828-9b58-a625466a8b3e"
                className="h-20 w-20 mx-4 my-4"
              />
              <img
                src="https://github.com/hisek-r/img/assets/64548917/ed2b27fc-06ee-4a8d-a9cf-7861d4ee7f70"
                className="h-20 w-20 mx-4 my-4"
              />
              <img
                src="https://github.com/hisek-r/img/assets/64548917/ab7a237a-27c8-4a77-b6fc-883799001add"
                className="h-20 w-20 mx-4 my-4"
              />
              <img
                src="https://github.com/hisek-r/img/assets/64548917/3e02c60f-15bb-4b3c-a3b5-cec2b940ed63"
                className="h-20 w-20 mx-4 my-4"
              />
              <img
                src="https://github.com/hisek-r/img/assets/64548917/7935e752-6579-4a4c-af1f-e76de4f709bf"
                className="h-20 w-20 mx-4 my-4"
              />
              <img
                src="https://github.com/hisek-r/img/assets/64548917/7e220b50-f87e-4a06-823c-406e388016cb"
                className="h-20 w-20 mx-4 my-4"
              />
          
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
