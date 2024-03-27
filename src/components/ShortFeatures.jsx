import broker from "/icons/broker.png";
import payment from "/icons/applegoogle.png";
import dividens from "/icons/dividends.png";
import visa from "/icons/visa.png";

const ShortFeatures = () => {
  return (
    <>
      <div className="short flex flex-col border p-24 space-y-20 md:space-y-0 md:flex-row md:justify-between md:p-48">
        <section className="flex flex-col items-center">
            <img className="w-20 md:w-32 md:mb-3" src={dividens} alt="dividends " />
            <h3 className="text-2xl md:text-4xl mt-4">8% Dividends</h3>
        </section>
        <section className="flex flex-col items-center">
            <img className="w-20 md:w-32 md:mb-3" src={broker} alt="brokerage icon" />
            <h3 className="text-2xl md:text-4xl mt-4">Trading</h3>
        </section>
        <section className="flex flex-col items-center">
            <img className="w-20 md:w-32 md:mb-3" src={visa} alt="visa icon" />
            <h3 className="text-2xl md:text-4xl mt-4">Free Visa Debit Card</h3>
        </section>
        <section className="flex flex-col items-center">
            <img className="w-44 md:w-72" src={payment} alt="card payment icon"  />
            <h3 className="text-2xl md:text-4xl mt-4">Contactless Pay</h3>
        </section>
      </div>
    </>
  );
};

export default ShortFeatures;
