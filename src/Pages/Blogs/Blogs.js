import React from "react";

const Blogs = () => {
  return (
    <div>
      <div className="container my-24 px-6 mx-auto">
        <section className="mb-32 text-gray-800 text-center md:text-left">
          <h2 className="text-3xl font-bold mb-12 text-center">Recent Blogs</h2>
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
              <h3 className="text-2xl font-bold mb-3">
                How will you improve the performance of a React Application?
              </h3>
              <div className="mb-3 text-red-600 font-medium text-sm flex items-center justify-center md:justify-start"></div>
              <p className="text-gray-500 mb-6">
                <small></small>
              </p>
              <p className="text-gray-500">
                Ut pretium ultricies dignissim. Sed sit amet mi eget urna
                placerat vulputate. Ut vulputate est non quam dignissim
                elementum. Donec a ullamcorper diam.
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
              <h3 className="text-2xl font-bold mb-3">
                What are the different ways to manage a state in a React
                application?
              </h3>
              <div className="mb-3 text-blue-600 font-medium text-sm flex items-center justify-center md:justify-start"></div>
              <p className="text-gray-500 mb-6">
                <small></small>
              </p>
              <p className="text-gray-500">
                Suspendisse in volutpat massa. Nulla facilisi. Sed aliquet diam
                orci, nec ornare metus semper sed. Integer volutpat ornare erat
                sit amet rutrum.
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
              <h3 className="text-2xl font-bold mb-3">
                How does prototypical inheritance work?
              </h3>
              <div className="mb-3 text-yellow-500 font-medium text-sm flex items-center justify-center md:justify-start"></div>
              <p className="text-gray-500 mb-6">
                <small></small>
              </p>
              <p className="text-gray-500">
                Curabitur tristique, mi a mollis sagittis, metus felis mattis
                arcu, non vehicula nisl dui quis diam. Mauris ut risus eget
                massa volutpat feugiat. Donec.
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
              <h3 className="text-2xl font-bold mb-3">
                Why you do not set the state directly in React. For example, if
                you have const [products, setProducts] = useState([]). Why you
                do not set products = [...] instead, you use the setProducts
              </h3>
              <div className="mb-3 text-yellow-500 font-medium text-sm flex items-center justify-center md:justify-start"></div>
              <p className="text-gray-500 mb-6">
                <small></small>
              </p>
              <p className="text-gray-500">
                Curabitur tristique, mi a mollis sagittis, metus felis mattis
                arcu, non vehicula nisl dui quis diam. Mauris ut risus eget
                massa volutpat feugiat. Donec.
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
              <h3 className="text-2xl font-bold mb-3">
                What is a unit test? Why should write unit tests?
              </h3>
              <div className="mb-3 text-yellow-500 font-medium text-sm flex items-center justify-center md:justify-start"></div>
              <p className="text-gray-500 mb-6">
                <small></small>
              </p>
              <p className="text-gray-500">
                Curabitur tristique, mi a mollis sagittis, metus felis mattis
                arcu, non vehicula nisl dui quis diam. Mauris ut risus eget
                massa volutpat feugiat. Donec.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Blogs;
