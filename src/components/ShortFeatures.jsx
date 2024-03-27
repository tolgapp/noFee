import broker from "/icons/broker.png";
import payment from "/icons/applegoogle.png";
import dividens from "/icons/dividends.png";
import visa from "/icons/visa.png";


const ShortFeatures = () => {
  return (
    <>
      <div className="short flex justify-between p-48 border">
        <section className="flex flex-col items-center">
            <img src={dividens} alt="dividends " />
            <h3 className="text-4xl mt-4">8% Dividends</h3>
        </section>
        <section className="flex flex-col items-center">
            <img src={broker} alt="brokerage icon" />
            <h3 className="text-4xl mt-4">Trading</h3>
        </section>
        <section className="flex flex-col items-center">
            <img src={visa} alt="visa icon" />
            <h3 className="text-4xl mt-4">Free Visa Debit Card</h3>
        </section>
        <section className="flex flex-col items-center">
            <img src={payment} alt="card payment icon" className="w-80" />
            <h3 className="text-4xl mt-4">Contactless Pay</h3>
        </section>
      </div>
    </>
  );
};

export default ShortFeatures;
