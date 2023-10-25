import { faqs } from "../constants";

const Faqs = () => {
  return (
    <section
      id="faq"
      className="w-full flex flex-col items-center min-h-screen gap-10 max-container"
    >
      <h1 className="section-title">FAQs</h1>

      <div className="flex flex-col">
        {faqs.map((faq, index) => (
          <details key={index}>
            <summary className="text-[#FDD200] cursor-pointer">
              {faq.summary}
            </summary>
            <p className="text-white">{faq.details}</p>
          </details>
        ))}
      </div>
    </section>
  );
};

export default Faqs;
