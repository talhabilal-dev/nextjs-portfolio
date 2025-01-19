import React from "react";

const ContactForm = () => {
  return (
    <section className="w-full lg:flex-row flex items-center gap-[30px] flex-col justify-between bg-transparent p-[40px] rounded-xl">

      <form className="lg:w-[60%] w-full">
        <div className="lg:w-[80%] w-full mx-auto">
          <div className="text-white">
            <h1 className="text-[1.7rem] font-[600] leading-[35px]">
              Let’s connect constellations
            </h1>

            <p className="text-[0.9rem] mt-2 mb-8">
              Let"s align our constellations! Reach out and let the magic of
              collaboration illuminate our skies.
            </p>
          </div>

          <div className="flex sm:flex-row flex-col items-center gap-[20px]">
            <div className="flex flex-col gap-[5px] w-full sm:w-[50%]">
              <input
                type="text"
                placeholder="Your name"
                className="peer border-[#383844] border rounded-md outline-none px-4 py-3 w-full bg-[#22222f] text-gray-400 transition-colors duration-300"
              />
            </div>

            <div className="flex flex-col gap-[5px] w-full sm:w-[50%]">
              <input
                type="email"
                placeholder="Email address"
                className="peer border-[#383844] border rounded-md outline-none px-4 py-3 w-full bg-[#22222f] text-gray-400 transition-colors duration-300"
              />
            </div>
          </div>

          <div className="flex flex-col gap-[5px] w-full mt-[20px]">
            <textarea
              placeholder="Write message"
              className="peer min-h-[200px] border-[#383844] border rounded-md outline-none px-4 bg-[#22222f] py-3 w-full text-gray-400 transition-colors duration-300"
            ></textarea>
          </div>

          <button
            type="submit"
            className={`py-2.5 px-6 bg-gradient-to-r from-[#763AF5] to-[#A604F2] text-white rounded-md text-[1rem] mt-[10px] w-full`}
          >
            Submit
          </button>
        </div>
      </form>

      <div className="">
        <img
          src="https://i.ibb.co/h7rjVJS/Image.png"
          alt="image"
          className="w-full"
        />
      </div>
    </section>
  );
};

export default ContactForm;
