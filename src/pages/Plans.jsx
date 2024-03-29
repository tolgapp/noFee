import plans from "../assets/plans.json";
import src from "../assets/cashbackpartner.json";
import ImageData from "../components/ImageData";
import flight from "../assets/staralliance.json";
import lounge2 from "/images/lounge2.jpg";

const Products = () => {
  return (
    <>
      <section className="flex flex-col bg-stone-950 text-white p-24">
        <h1 className="text-8xl text-center">
          Choose between free, pro and max!
        </h1>
        <h2 className="text-5xl text-center mt-4">
          Change the plan monthly in your app{" "}
          <span className="before:absolute before:-inset-2 before:-skew-y-2 before:bg-orange-500 relative inline-block">
            <span className="underline relative text-white">without fees!</span>
          </span>
        </h2>
      </section>
      <section className="flex place-content-center mb-20 ">
        <div className="plans flex flex-col md:flex-row m-8 mt-28 ">
          {plans.map((elt) => {
            return (
              <div
                key={elt.id}
                className="w-full bg-black flex flex-col border-slate-900 border rounded-3xl m-3 p-10 space-y-12 md:transition md:duration-300 md:ease-in-out md:hover:scale-105 md:hover:bg-slate-800"
              >
                <h3 className="text-7xl text-white">
                  {elt.plan.toUpperCase()}
                </h3>
                <h5 className="text-4xl text-white">► {elt.price} € / month</h5>
                <section className="flex flex-col flex-1 pb-14">
                  {elt.features.map((elt) => {
                    return (
                      <p key={elt} className="text-3xl pt-6 text-white">
                        • {elt}
                      </p>
                    );
                  })}
                </section>
                <button className="text-2xl p-4 border text-white rounded-lg w-4/6 bg-slate-500 ">
                  Let's start with {elt.plan.toUpperCase()}
                </button>
              </div>
            );
          })}
        </div>
      </section>
      <section className="flex flex-col rounded-t-3xl mt-1 text-white place-content-center items-center border-b">
        <h3 className="text-black text-4xl md:text-6xl">
          Some of the cashback partners
        </h3>
        <div className="flex mt-20 mb-32 flex-wrap place-content-center gap-8">
          {src.map((elt) => {
            return (
              <img
                src={elt.image}
                className="w-40 ml-8 mr-8 rounded-full border border-gray-100 p-2"
                alt="cashback partner logo"
                key={elt.id}
              />
            );
          })}
        </div>
      </section>
      <ImageData image={lounge2} info={flight} />
    </>
  );
};

export default Products;
