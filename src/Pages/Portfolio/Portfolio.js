import React from "react";
import myself from "../../assets/image/myself.jpg";
import project1 from "../../assets/image/project1.png";
import project2 from "../../assets/image/project2.png";
import project3 from "../../assets/image/project3.png";
import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Portfolio = () => {
  return (
    <div className="mt-16 mb-24 ml-16 mr-24">
      <div className="container mx-auto card lg:card-side text-center bg-base-100 shadow-xl">
        <div className="mt-8 ml-16 w-32 h-40 rounded-lg ring ring-primary ring-offset-base-100 ring-offset-2">
          <img
            className="w-36 h-40 rounded-lg"
            src={myself}
            alt="Bibi Halima"
          />
        </div>
        <div className="card-body mb-8">
          <h2 className="text-cyan-600 text-4xl font-bold">Bibi Halima</h2>
          <h3 className="text-slate-500 text-xl font-bold">
            Email: <span className="text-secondary">halima2996@gmail.com</span>{" "}
          </h3>
          <p className="text-slate-500 text-lg font-bold">
            <span>Address:</span> 260/A, Ahmed Nagar, Middle Paikpara, Mirpur-1,
            Dhaka-1216
          </p>
          <p className="text-secondary text-lg font-bold">
            <span className="text-slate-500"> Educational: </span>
            <span>B.Sc. in Computer Science & Engineering</span>
          </p>
          <p className="text-slate-500 font-bold">
            <span>Reach me through Social Link</span>
          </p>
          <div className="md:place-self-center md:justify-self-end">
            <div className="grid grid-cols md:grid-cols-2 lg:grid-cols-3 gap-4">
              <a href="https://www.facebook.com/shovahasan29">
                <FaFacebook className="w-5 h-full mx-auto text-cyan-600 hover:text-cyan-700" />
              </a>
              <a href="https://www.linkedin.com/in/bibi-halima-4b5574154/">
                <FaLinkedin className="w-5 h-full mx-auto text-cyan-600 hover:text-cyan-700" />
              </a>
              <a href="https://github.com/shova29">
                <FaGithub className="w-5 h-full mx-auto text-cyan-600 hover:text-cyan-700" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-16 mb-12 font-bold justify-center lg:justify-start">
        <h1 className="text-slate-500 text-4xl text-center mb-12">
          My <span className="text-primary">Skills</span>
        </h1>
      </div>
      <div className="flex flex-wrap justify-center gap-4 mt-12 mb-12">
        <span className="btn btn-base bg-sky-600 hover:bg-sky-700 text-base  px-4 py-2  border-0 text-white">
          HTML5
        </span>
        <span className="btn btn-base bg-orange-500 hover:bg-orange-600 text-base px-4 py-2  border-0 text-white">
          CSS3
        </span>
        <span className="btn btn-base bg-amber-400 hover:bg-amber-500 text-base px-4 py-2  border-0 text-white">
          JavaScript
        </span>
        <span className="btn btn-base bg-lime-600 hover:bg-lime-700 text-base px-4 py-2  border-0 text-white">
          MongoDB
        </span>
        <span className="btn btn-base bg-cyan-500 hover:bg-cyan-600 text-base px-4 py-2 border-0 text-white">
          React
        </span>
        <span className="btn btn-base bg-slate-600 hover:bg-slate-700 text-base px-4 py-2 border-0 text-white">
          Express
        </span>
        <span className="btn btn-base bg-emerald-500 hover:bg-emerald-600 text-base px-4 py-2  border-0 text-white">
          Node
        </span>
      </div>

      <section>
        <div class="card mx-auto mt-10">
          <h2 className="text-slate-500 text-3xl text-center mt-12 mb-6 font-bold ">
            My <span className="text-primary">Projects</span>
          </h2>
          <div className="mt-16 mb-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div class="card bg-white shadow-xl">
              <div class="card-body">
                <h2 class="text-slate-500 text-2xl font-bold text-center">
                  Perfume Pungent
                </h2>
                <img
                  className="mt-6 w-full mx-auto"
                  src={project1}
                  alt="Warehouse"
                ></img>
                <p className="mt-4 text-justify">
                  <span className="font-bold">Project Description:</span> This
                  is a full-stack website about Perfume Pungent Warehouse
                  management website where multiple inventory items that are
                  managed. The Home page is consists of header section, banner
                  section, our beloved seller section, inventory items section,
                  top rated supplier's section, sold item's section, why perfume
                  Pungent section, contact us section and footer section. There
                  are available 2 categories of the perfume. One is Men's
                  Perfume and another is Women's Perfume. The Inventory page
                  contains all the stocked items of our warehouse that. The
                  About page provides the information about the Perfume Pungent
                  Warehouse. The Blogs page contains three questions and their
                  answers. User can also Signin via Google signin or Github
                  signin and also reset the password. Clicking on the Manage
                  Inventories button it will take manage inventory page where an
                  items can be deleted. There is a button named add new item on
                  the Manage Inventories page. Clicking on the Add New Item
                  button it will take add items page where item can be added.
                  Here used mongodb atlas noSQL database for hosting inventory
                  data.
                </p>
                <div class="card-actions justify-center">
                  <a
                    class="btn btn-primary text-white font-bold"
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
                <h2 class="text-slate-500 text-2xl font-bold text-center">
                  WildQuestLens
                </h2>
                <img
                  className="mt-6 w-full mx-auto"
                  src={project2}
                  alt="WildQuestLens"
                ></img>
                <p className="mt-4 text-justify">
                  <span className="font-bold">Project Description:</span>{" "}
                  WildQuestLens website is about wild photography which provides
                  independent service. The Home page is consists of header
                  section, banner section, services section, award section,
                  image of the month section, and footer section. There are
                  available 6 services for the wild photography. These are as
                  follows environmental, portraits, nature, motion, shadows &
                  light, and fire & ice. The Blog page contains three questions
                  and their answers. The About page provides the information
                  about the developer. User can Create an Account and Signin via
                  Firebase authentication. User can Signin via Google signin or
                  Github signin. Users can book Environmental, Portraits,
                  Nature, Motion, Shadows & Light, and Fire & Ice for
                  photography. Clicking on the book now button it will take user
                  to checkout. Fully responsive web app. Highly Protected Route.
                </p>
                <div class="card-actions justify-center">
                  <a
                    class="btn btn-primary text-white font-bold"
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
                <h2 class="text-slate-500 text-2xl font-bold text-center">
                  Sunglass Sanctuary
                </h2>
                <img
                  className="mt-6 w-full mx-auto"
                  src={project3}
                  alt="Sunglass Sanctuary"
                ></img>
                <p className="mt-4 text-justify">
                  <span className="font-bold">Project Description:</span> This
                  project is about product reviews on the Sunglass Sanctuary
                  website. The Home page is consists of header section and
                  customer reviews. There are available 3 customer reviews on
                  this page. The Reviews page has several reviews from the
                  customer along with their image, review, and ratings. The
                  Dashboard page has four different types of charts which are
                  Line Chart, Area Chart, Bar chart, and Pie Chart. Those charts
                  are made with recharts library and data were given from
                  month-wise sell JSON-data. The Blogs page contains two
                  question and their answers. This project also has about page.
                </p>
                <div class="card-actions justify-center">
                  <a
                    class="btn btn-primary text-white font-bold"
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
