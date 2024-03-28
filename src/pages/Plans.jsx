import plans from "../assets/plans.json";

const Products = () => {
  return (
    <>
      <section className="flex flex-col bg-stone-950 text-white p-24">
        <h1 className="text-8xl text-center">
          Choose between free, pro and max!
        </h1>
        <h2 className="text-5xl text-center mt-4">
          Change the plan monthly in your app{" "}
          <span className="underline">without fees!</span>
        </h2>
      </section>
      <section className="flex place-content-center">
        <div className="plans flex m-8 mt-28">
          {plans.map((elt) => {
            return (
              <div
                key={elt.id}
                className="w-full bg-black flex flex-col border-slate-900 border rounded-3xl m-2 p-10 space-y-8"
              >
                <h3 className="text-7xl text-white">
                  {elt.plan.toUpperCase()}
                </h3>
                <h5 className="text-4xl text-white">► {elt.price} € / month</h5>
                <section className="flex flex-col flex-1 pb-14">
                  {elt.features.map((elt) => {
                    return (
                      <p key={elt} className="text-3xl pt-6 text-white">
                        {elt}
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
    </>
  );
};

export default Products;
