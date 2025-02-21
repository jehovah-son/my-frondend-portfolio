import headerId from "../images/id.png";
import GitHubWhite from "../icons/github-white.svg";
import Xwhite from "../icons/twitter-white.svg";
import LinkedinWhite from "../icons/linkedin-white.svg";

export default function Header() {
  return (
    <section className="flex flex-col  md:flex-row items-center justify-center gap-10 md:gap-24 pt-32 bg-gray-950 px-4">
      {/* Profile Image */}
      <div data-aos="fade-right" className="w-48 h-48 md:w-72 md:h-72 rounded-full border overflow-hidden">
        <img
          src={headerId}
          alt="header profile"
          className="w-full h-full object-center"
        />
      </div>

      {/* Content */}
      <div data-aos="fade-left" className="text-center md:text-center">
        <div className="space-y-2">
          <h1 className="text-white text-4xl sm:text-6xl font-bold font-serif">
            Chukwuka
          </h1>
          <h1 className="text-white text-4xl sm:text-6xl font-bold font-serif">
            Success
          </h1>
          <h2 className="text-white text-xl sm:text-xl font-bold font-serif">
           Jnr FRONTEND DEVELOPER
          </h2>
        </div>

        {/* Social Links */}
        <div className="flex justify-center md:justify-center gap-5 mt-6">
          <a
            href="https://github.com/dashboard"
            target="github"
            rel="noopener noreferrer"
          >
            <img
              src={GitHubWhite}
              alt="GitHub"
              className="w-8 h-8 md:w-10 md:h-10 hover:opacity-80 transition-opacity"
            />
          </a>
          <a
            href="https://x.com/middlemangadget"
            target="twitter"
            rel="noopener noreferrer"
          >
            <img
              src={Xwhite}
              alt="Twitter"
              className="w-8 h-8 md:w-10 md:h-10 hover:opacity-80 transition-opacity"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/chukwuka-success-804691326/"
            target="linkedin"
            rel="noopener noreferrer"
          >
            <img
              src={LinkedinWhite}
              alt="LinkedIn"
              className="w-8 h-8 md:w-10 md:h-10 hover:opacity-80 transition-opacity"
            />
          </a>
        </div>

        {/* Description */}
        <div className="mt-6 space-y-1">
          <p className="text-white text-lg md:text-xl">With a passion for</p>
          <p className="text-white text-lg md:text-xl">
            crafting user-friendly
          </p>
          <p className="text-white text-lg md:text-xl">web applications for</p>
          <p className="text-white text-lg md:text-xl">commercial businesses</p>
        </div>
      </div>
    </section>
  );
}
