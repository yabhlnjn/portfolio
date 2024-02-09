import React from 'react'
import JobDescription from "../subcomponents/JobDescription";
import { FiArrowUpRight } from "react-icons/fi";

const Journaling = () => {
  return (
    <div className="bgMain h-full flex flex-col gap-4 py-[40px] px-[54px] max-lg:px-[30px] max-lg:py-[30px] rounded-primary">
              <div className="flex justify-between pb-4 border-b-2 border-white border-opacity-10">
                <h1 className="text-htwo w-[80%]">
                  <span className="font-semibold">Ezis is Coding -</span>
                  <span className="font-regular">
                    {" "}
                    Engineer, Freelance Full-Stack Developer
                  </span>
                </h1>
                <FiArrowUpRight
                  size={24}
                  className="h-fit w-fit text-secondary"
                />
              </div>
              <p className="text-hsix font-extralight">Journaling</p>
              <div>
                <ul className="flex flex-col gap-6 px-4 max-lg:px-0">
                  <JobDescription
                    date={"25 janv"}
                    title={"Started a new mobile design project."}
                  />
                  <JobDescription
                    date={"25 janv"}
                    title={
                      "Received a certification in advanced UX design techniques."
                    }
                  />
                  <JobDescription
                    date={"25 janv"}
                    title={
                      "Completed a user research phase for an ongoing web design project."
                    }
                  />
                  <JobDescription
                    date={"25 janv"}
                    title={
                      "Attended a workshop on the latest trends in UI animation."
                    }
                  />
                  <JobDescription
                    date={"25 janv"}
                    title={"Launched a redesigned website for a major client."}
                  />
                </ul>
              </div>
            </div>
  )
}

export default Journaling