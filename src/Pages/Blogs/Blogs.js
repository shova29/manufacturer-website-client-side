import React from "react";

const Blogs = () => {
  return (
    <div>
      <div className="container my-24 px-6 mx-auto">
        <section className="mb-32 text-gray-800 text-center md:text-left">
          <h2 className="text-primary text-3xl font-bold mb-12 text-center">
            Recent Blogs
          </h2>
          <div className="grid md:grid-cols-2 gap-x-6 xl:gap-x-12 items-center mb-12">
            <div className="mb-6 md:mb-0">
              <div
                className="relative overflow-hidden bg-no-repeat bg-cover ripple shadow-lg rounded-lg"
                data-mdb-ripple="true"
                data-mdb-ripple-color="light"
              >
                <img src="" className="w-full" alt="" />
                <a href="#!">
                  <div
                    className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 hover:opacity-100 transition duration-300 ease-in-out"
                    style={{ backgroundColor: "rgba(251, 251, 251, 0.2)" }}
                  ></div>
                </a>
              </div>
            </div>

            <div className="mb-6 md:mb-0">
              <h3 className="text-secondary text-2xl font-bold mb-3">
                How will you improve the performance of a React Application?
              </h3>
              <p className="text-gray-500 text-justify">
                Optimizing the performance of a React application:{" "}
                <p>1. Keeping element state local wherever necessary.</p>
                <p>2. Memoizing React parts to forestall extra re-renders.</p>
                <p>3. Code-splitting in React exploitation dynamic import().</p>
                <p>4. List virtualization or windowing in React.</p>
                <p>5. Lazy loading pictures in React.</p>
              </p>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-x-6 xl:gap-x-12 items-center mb-12">
            <div className="mb-6 md:mb-0 md:order-2">
              <div
                className="relative overflow-hidden bg-no-repeat bg-cover ripple shadow-lg rounded-lg"
                data-mdb-ripple="true"
                data-mdb-ripple-color="light"
              >
                <img src="" className="w-full" alt="" />
                <a href="#!">
                  <div
                    className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 hover:opacity-100 transition duration-300 ease-in-out"
                    style={{ backgroundColor: "rgba(251, 251, 251, 0.2)" }}
                  ></div>
                </a>
              </div>
            </div>

            <div className="mb-6 md:mb-0 md:order-1">
              <h3 className="text-secondary text-2xl font-bold mb-3">
                What are the different ways to manage a state in a React
                application?
              </h3>
              <p className="text-gray-500 text-justify">
                There are four main forms of state to properly manage in React
                apps:
                <p>1. Local State.</p>
                <p>2. Global State.</p>
                <p>3. Server State.</p>
                <p>4. URL State.</p>
              </p>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-x-6 xl:gap-x-12 items-center mb-12">
            <div className="mb-6 md:mb-0">
              <div
                className="relative overflow-hidden bg-no-repeat bg-cover ripple shadow-lg rounded-lg"
                data-mdb-ripple="true"
                data-mdb-ripple-color="light"
              >
                <img src="" className="w-full" alt="" />
                <a href="#!">
                  <div
                    className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 hover:opacity-100 transition duration-300 ease-in-out"
                    style={{ backgroundColor: "rgba(251, 251, 251, 0.2)" }}
                  ></div>
                </a>
              </div>
            </div>

            <div className="mb-6 md:mb-0">
              <h3 className="text-secondary text-2xl font-bold mb-3">
                How does prototypical inheritance work?
              </h3>
              <p className="text-gray-500 text-justify">
                The Prototypal Inheritance is a that kind of feature in
                javascript which accustomed to add methods and properties in
                objects. It’s a method by that an object will inherit the
                properties and methods of another object. Historically, so as to
                induce and set the [[Prototype]] of an object, we tend to use
                Object.getPrototypeOf and Object.setPrototypeOf.
              </p>
            </div>
          </div>{" "}
          <div className="grid md:grid-cols-2 gap-x-6 xl:gap-x-12 items-center mb-12">
            <div className="mb-6 md:mb-0 md:order-1">
              <div
                className="relative overflow-hidden bg-no-repeat bg-cover ripple shadow-lg rounded-lg"
                data-mdb-ripple="true"
                data-mdb-ripple-color="light"
              >
                <img src="" className="w-full" alt="" />
                <a href="#!">
                  <div
                    className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 hover:opacity-100 transition duration-300 ease-in-out"
                    style={{ backgroundColor: "rgba(251, 251, 251, 0.2)" }}
                  ></div>
                </a>
              </div>
            </div>

            <div className="mb-6 md:mb-0">
              <h3 className="text-secondary text-2xl font-bold mb-3">
                Why you do not set the state directly in React. For example, if
                you have const [products, setProducts] = useState([]). Why you
                do not set products = [...] instead, you use the setProducts
              </h3>
              <p className="text-gray-500 text-justify">
                If we update it directly, calling the setState() afterwards
                could replace the update we created. It returns a pair of
                values: the present state and a function that updates it. This
                can be why we tend to write const [count, setCount] =
                useState(). This can be kind of like this.state.count and
                this.setState in an exceedingly class, except to get them in an
                exceedingly pair. When we directly update the state, it doesn't
                modification this.state directly. Instead, it creates a
                unfinished state transition, and accessing it once calling this
                methodology can solely come the current price.
              </p>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-x-6 xl:gap-x-12 items-center mb-12">
            <div className="mb-6 md:mb-0">
              <div
                className="relative overflow-hidden bg-no-repeat bg-cover ripple shadow-lg rounded-lg"
                data-mdb-ripple="true"
                data-mdb-ripple-color="light"
              >
                <img src="" className="w-full" alt="" />
                <a href="#!">
                  <div
                    className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 hover:opacity-100 transition duration-300 ease-in-out"
                    style={{ backgroundColor: "rgba(251, 251, 251, 0.2)" }}
                  ></div>
                </a>
              </div>
            </div>

            <div className="mb-6 md:mb-0">
              <h3 className="text-secondary text-2xl font-bold mb-3">
                What is a unit test? Why should write unit tests?
              </h3>
              <p className="text-gray-500 text-justify">
                Unit testing, a testing technique exploitation that individual
                modules are tested to work out if there are any problems by the
                developer himself. It’s involved with practical correctness of
                the standalone modules. The main aim is to isolate every unit of
                the system to spot, analyze and fix the defects.
                <br></br>
                Unit testing ensures that all code meets quality standards
                before it’s deployed. This ensures a reliable engineering
                surroundings wherever quality is overriding. Over the course of
                the product development life cycle, unit testing saves time and
                cash, and helps developers write higher code, additional
                efficiently. For the most effective follow, all comes should be
                underneath unit testing, however unremarkably it's used for
                larger projects. Smaller projects will still get pleasure from
                unit tests, however project managers and clients ought to
                appraise the time required to develop unit tests throughout the
                project.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Blogs;
