import React from "react";
import myself from "../../assets/image/myself.jpg";
import project1 from "../../assets/image/project1.png";
import project2 from "../../assets/image/project2.png";
import project3 from "../../assets/image/project3.png";

const Portfolio = () => {
  return (
    <div className="mt-16 mb-24 ml-16 mr-24">
      <div className="container mx-auto card lg:card-side text-center bg-base-100 shadow-xl">
        <div className="mt-8 ml-16 w-32 h-32 rounded-lg ring ring-primary ring-offset-base-100 ring-offset-2">
          <img
            className="w-32 h-32 rounded-lg"
            src={myself}
            alt="Bibi Halima"
          />
        </div>
        <div className="card-body mb-8">
          <h2 className="text-2xl font-bold">Bibi Halima</h2>
          <h3 className="font-bold">
            Email: <span className="text-secondary">halim2996@gmail.com</span>{" "}
          </h3>
          <p className="font-bold">
            Education:{" "}
            <span className="text-gray">
              B.Sc. in Computer Science & Engineering
            </span>
          </p>
        </div>
      </div>
      <div className=" text-base mt-16 mb-12 font-bold justify-center lg:justify-start">
        <div className="text-4xl text-center">
          <p>
            My <span className="text-secondary">Skills</span>
          </p>
        </div>
      </div>
      <div className="flex flex-wrap justify-center gap-4 mt-12 mb-12">
        <span className="btn btn-base bg-red-500 text-base  px-4 py-2  border-0 text-white">
          HTML5
        </span>
        <span className="btn btn-base bg-orange-300 text-base px-4 py-2  border-0 text-white">
          CSS3
        </span>
        <span className="btn btn-base bg-amber-400 text-base px-4 py-2  border-0 text-white">
          JavaScript
        </span>
        <span className="btn btn-base bg-lime-600 text-base px-4 py-2  border-0 text-white">
          MongoDB
        </span>
        <span className="btn btn-base bg-cyan-500 text-base px-4 py-2 border-0 text-white">
          React
        </span>
        <span className="btn btn-base bg-fuchsia-500 text-base px-4 py-2 border-0 text-white">
          Express
        </span>
        <span className="btn btn-base bg-emerald-500 text-base px-4 py-2  border-0 text-white">
          Node
        </span>
      </div>

      <section>
        <div class="card mx-auto mt-10">
          <h1 className="text-4xl text-center mt-12 mb-6 font-bold ">
            My <span className="text-secondary">Projects</span>
          </h1>
          <div className="mt-16 mb-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div class="card bg-white shadow-xl">
              <div class="card-body">
                <h2 class="text-2xl font-semibold text-center">
                  Perfume Pungent
                </h2>
                <img
                  className="w-100 mx-auto"
                  src={project1}
                  alt="Warehouse"
                ></img>
                <div class="card-actions justify-center font-bold">
                  <a
                    class="btn btn-secondary"
                    target="_blank"
                    rel="noreferrer"
                    href="https://warehouse-management-web-2b489.web.app/"
                  >
                    Demo Live
                  </a>
                </div>
              </div>
            </div>
            <div class="card bg-base-100 shadow-xl">
              <div class="card-body">
                <h2 class="text-2xl font-semibold text-center">
                  WildQuestLens
                </h2>
                <img
                  className="w-100 mx-auto"
                  src={project2}
                  alt="WildQuestLens"
                ></img>
                <div class="card-actions justify-center">
                  <a
                    class="btn btn-secondary"
                    target="_blank"
                    rel="noreferrer"
                    href="https://independent-service-prov-a1011.web.app/"
                  >
                    Demo Live
                  </a>
                </div>
              </div>
            </div>
            <div class="card bg-base-100 shadow-xl">
              <div class="card-body">
                <h2 class="text-2xl font-semibold text-center">
                  Sunglass Sanctuary
                </h2>
                <img
                  className="w-100 mx-auto"
                  src={project3}
                  alt="Sunglass Sanctuary"
                ></img>
                <div class="card-actions justify-center">
                  <a
                    class="btn btn-secondary"
                    target="_blank"
                    rel="noreferrer"
                    href="https://product-analysis-shova29.netlify.app/"
                  >
                    Demo Live
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
