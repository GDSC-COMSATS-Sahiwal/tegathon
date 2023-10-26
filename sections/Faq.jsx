import { faqs } from "../constants";

const Faqs = () => {
  return (
    <section
      id="faq"
      className="w-full flex flex-col items-center min-h-[160vh] sm:-h-[110vh] gap-10 max-container"
    >
      <h1 className="section-title">FAQs</h1>
      <div>
        {faqs.map((faq, index) => (
          <div key={index} className="mb-2">
            <input
              type="checkbox"
              name={`detail-${index}`}
              id={`detail-${index}`}
            />
            <details className="w-[100%] sm:w-[80vw]" open>
              <summary className="text-sm sm:text-[1.25rem]">
                <label htmlFor={`detail-${index}`}>{faq.summary}</label>
              </summary>
              <div className="content sm:text-lg">
                <p>{faq.details}</p>
              </div>
            </details>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Faqs;
