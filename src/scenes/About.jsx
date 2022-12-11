import React from "react";
import LineGradient from "../components/LineGradient";
import myImg from "../assets/mypic.png";

const About = () => {
  return (
    <section id="about" className="my-24">
      <>
        <div className="flex flex-col md:flex-row justify-around gap-4">
          <div className="w-full md:w-1/2 bg-[#0A1929] rounded-lg shadow-xl">
            <img className="w-full  rounded" src={myImg} alt="" />
          </div>
          <div className="w-full md:w-1/2">
            <div className="my-5">
              <p className="font-playfair font-semibold text-6xl my-4">
                <span className="text-red">ABOUT </span>ME
              </p>

              <LineGradient className="text-center" width="w-[120px]" />
              <h2 className="text-[16px] font-bold my-6 text-justify">
                This is MD Aslam Ali. I am a Full Stack Developer. I have
                exclusive knowledge of web technologies besides these I have
                good communication, collaboration, Negotiation, Patience, Time
                management, Visual thinking, and problem-solving skills in
                critical situations with analytical knowledge and the latest
                technology. I am quite adaptable to new technologies and more
                enthusiastic about learning new things. Always I like to code,
                design, and implement websites for a variety of clients.
              </h2>
              <LineGradient className="text-center my-4" width="w-full" />
              <div className="">
                <div>
                  <h1 className="text-2xl font-bold bg-[#0A1929] py-2 px-3 w-36 rounded my-2">
                    {" "}
                    Education
                  </h1>
                  <h2 className="text-sm md:text-xl font-bold">
                    🎓 BA Hon's At University of Dhaka
                  </h2>
                  <h2 className="text-sm  md:text-xl font-bold ml-8">
                    {" "}
                    Dhaka Bangladesh
                  </h2>
                </div>

                <div>
                  {" "}
                  <h1 className="text-2xl font-bold bg-[#0A1929] py-2 px-3 w-36 rounded my-2">
                    {" "}
                    Courses
                  </h1>{" "}
                  <h2 className="text-xl font-bold mb-12">
                    Complete Web Development With Programming Hero
                  </h2>
                </div>
                <a
                  className="border-2 border-gradient-rainblue px-4 py-2 hover:bg-gradient-rainblue"
                  href="/Aslam's_Resume.pdf"
                  download
                >
                  Download Resume
                </a>
              </div>
            </div>
          </div>
        </div>
      </>
    </section>
  );
};

export default About;
