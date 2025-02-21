
import CheckMark from "../icons/checkmark.svg";

export default function Skills() {
  return (
    <section className="bg-gray-950 pt-20">
      <div data-aos="zoom-in" className="flex justify-center pb-12">
        <h1 className="text-white text-4xl sm:text-5xl font-bold font-serif">
          Skills
        </h1>
      </div>
      <div>
        {/* html css JAVASCRIPT node section */}
        <div data-aos="fade-right" className="grid grid-cols-4 px-10 md:grid-cols-4 gap-5 place-items-center pb-10">
          {["HTML", "CSS", "JAVASCRIPT", "NODE"].map((tech, index) => (
            <span key={index} className="flex items-center gap-2">
              <img
                src={CheckMark}
                alt="Checkmark"
                className="w-5 h-5 md:w-8 md:h-8"
              />
              <p className="text-white text-lg md:text-xl">{tech}</p>
            </span>
          ))}
        </div>
        {/* border */}
        <div className="border-t-2 border-white pb-10  mx-20"></div>
        {/* react tailwind typescript flutter section */}
        <div data-aos="fade-left" className="grid grid-cols-4 px-10 md:grid-cols-4 gap-5 place-items-center pb-10">
          {["REACT", "TAILWIND CSS", "TYPESCRIPT", "FLUTTER"].map(
            (tech, index) => (
              <span key={index} className="flex items-center gap-2">
                <img
                  src={CheckMark}
                  alt="Checkmark"
                  className="w-5 h-5 md:w-8 md:h-8"
                />
                <p className="text-white text-lg md:text-xl">{tech}</p>
              </span>
            )
          )}
        </div>
        {/* border */}
        <div data-aos="fade-down-left" className="border-t-2 border-white pb-10  mx-20"></div>
        {/* Git section */}
        <span data-aos="fade-down-left" className="flex items-center gap-2 justify-center">
          <img
            src={CheckMark}
            alt="Checkmark"
            className="w-5 h-5 md:w-8 md:h-8"
          />
          <p className="text-white text-lg md:text-xl">GIT</p>
        </span>
      </div>
    </section>
  );
}
