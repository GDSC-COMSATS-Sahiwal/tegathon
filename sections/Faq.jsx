import { faqs } from "../constants";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

const Faqs = () => {
  return (
    <section className="w-full flex flex-col items-center gap-10 max-container">
      <h1 className="section-title">FAQs</h1>
      <div>
        {faqs.map((faq, index) => (
          <div key={index} className="mb-4">
            <Collapsible className="p-4 sm:p-6 text-white w-[100%] sm:w-[80vw] backdrop-blur-2xl bg-black/50 rounded-3xl border border-[#fdd200]">
              <CollapsibleTrigger className="RemoveTapHighlight CollapsibleTrigger text-left w-[100%] flex sm:pl-2 text-[#fdd200] font-bold text-sm sm:text-[1.25rem]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="inline"
                >
                  <path
                    d="M9 18L15 12L9 6"
                    stroke="#FDD200"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span className="ml-4 lg:ml-8">{faq.summary}</span>
              </CollapsibleTrigger>
              <CollapsibleContent className="CollapsibleContent sm:text-lg ml-[2.5rem] md:ml-[3rem] lg:ml-[4rem] mr-8 ">
                {faq.details}
              </CollapsibleContent>
            </Collapsible>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Faqs;
