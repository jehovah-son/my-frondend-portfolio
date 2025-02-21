
import Nike from "../images/nike-logo.png";
import Chef from "../images/chef.png";
import Sancus from "../images/sancus-logo.png";
import Charleson from "../images/Charleson Group.svg";

export default function Project() {
  return (
    <section className="bg-gray-950 pt-20 ">
      <div  data-aos="flip-up" className="flex justify-center pb-12">
        <h1 className="text-white text-4xl sm:text-5xl font-bold font-serif">
          Projects (Practice)
        </h1>
      </div>
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center">
          {/* project 1 */}
          <div>
            <div data-aos="zoom-in" className="bg-white w-full max-w-[240px] h-60 rounded-lg shadow-md flex items-center justify-center hover:scale-110 transition-transform duration-300">
              <a href="https://github.com/jehovah-son/nike-UI">
                {" "}
                <img
                  src={Nike}
                  alt="nike"
                  className="w-full h-full object-contain p-4 "
                />
              </a>
            </div>
            <p className="text-white text-lg md:text-xl text-center mt-3 font-bold">
              Nike
            </p>
            <p className="text-white text-lg md:text-xl text-center ">
              Online shoe shop
            </p>
          </div>
          {/* project 2 */}
          <div>
            <div data-aos="zoom-out-right" className="bg-white w-full max-w-[240px] h-60 rounded-lg shadow-md flex items-center justify-center hover:scale-110 transition-transform duration-300">
              <a href="https://github.com/jehovah-son/chef-clude">
                <img
                  src={Chef}
                  alt="nike"
                  className="w-60 h-60 object-contain p-4"
                />
              </a>
            </div>
            <p className="text-white text-lg md:text-xl text-center mt-3 font-bold">
              Chef Success
            </p>
            <p className="text-white text-lg md:text-xl text-center ">
              Ingredient list
            </p>
          </div>
          {/* project 3 */}
          <div>
            <div  data-aos="zoom-in" className="bg-white w-full max-w-[240px] h-60 rounded-lg shadow-md flex items-center justify-center hover:scale-110 transition-transform duration-300">
              <a href="https://sancus-frontend.vercel.app/">
                <img
                  src={Sancus}
                  alt="nike"
                  className="w-full h-full object-contain p-4"
                />
              </a>
            </div>
            <p className="text-white text-lg md:text-xl text-center mt-3 font-bold">
              Sancus Africa (in progress)
            </p>
            <p className="text-white text-lg md:text-xl text-center ">
              Crypto and gift card trading
            </p>
          </div>
          {/* project 4 */}
          <div>
            <div data-aos="zoom-out-left" className="bg-white w-full max-w-[240px] h-60 rounded-lg shadow-md flex items-center justify-center hover:scale-110 transition-transform duration-300">
              <a href="https://github.com/ryanfavour4/charleson-group">
                {" "}
                <img
                  src={Charleson}
                  alt="nike"
                  className="w-full h-full object-contain p-4 "
                />
              </a>
            </div>
            <p className="text-white text-lg md:text-xl text-center mt-3 font-bold">
              Charleson Group
            </p>
            <p className="text-white text-lg md:text-xl text-center ">
              Luxury hotel
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
