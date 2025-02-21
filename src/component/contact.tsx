import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import { toast } from "react-hot-toast";

export default function Contact() {
  const [state, handleSubmit] = useForm("xkgozzlj");
  const formRef = React.useRef<HTMLFormElement | null>(null);

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await handleSubmit(e)
      .then(() => {
        toast.success("Email sent successfully!");
        if (formRef.current) {
          formRef.current.reset();
          console.log(formRef.current);
        }
      })
      .catch((err: any) => {
        toast.error("An error occurred, please try again!");
        console.log(err);
      });
  };

  return (
    <section className="bg-gray-950">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="mb-4">
          <div className="mb-6 max-w-3xl text-center sm:text-center md:mx-auto md:mb-12">
            <p className="text-base font-semibold uppercase tracking-wide text-primary/70 text-white">
              Contact
            </p>
            <h2 className="font-heading mb-4 font-bold tracking-tight text-white text-3xl sm:text-5xl pt-3">
              Get in Touch
            </h2>
          </div>
        </div>
        <div className="flex items-stretch justify-center">
          <div className="grid md:grid-cols-2">
            <div className="h-full pr-6">
              <p className="mt-3 mb-12 text-lg font-bold text-white">
                Am Ready to Work and available for interview. Please feel free
                to reach out to me via email or phone number below
              </p>
              <ul className="mb-6 md:mb-0">
                <li className="flex">
                  <div className="flex h-10 w-10 items-center justify-center rounded bg-primary text-gray-50">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-6 w-6"
                    >
                      <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2"></path>
                      <path d="M15 7a2 2 0 0 1 2 2"></path>
                      <path d="M15 3a6 6 0 0 1 6 6"></path>
                    </svg>
                  </div>
                  <div className="ml-4 mb-10">
                    <h3 className="mb-2 text-lg font-medium leading-6 text-white">
                      Contact
                    </h3>
                    <p className="text-white text-xl">phone: 08118477430</p>
                  </div>
                </li>
                <li className="flex"></li>
              </ul>
            </div>
            <div className="card h-fit max-w-6xl p-5 md:p-12" id="form">
              <h2 className="mb-4 text-2xl font-bold text-white">Email</h2>
              <form ref={formRef} onSubmit={handleFormSubmit}>
                <div className="mb-6">
                  <div className="mx-0 mb-1 sm:mb-4">
                    <div className="mx-0 mb-1 sm:mb-4">
                      <label
                        htmlFor="name"
                        className="pb-1 text-xs uppercase tracking-wider"
                      ></label>
                      <input
                        type="text"
                        id="name"
                        placeholder="Your name"
                        className="mb-2 w-full rounded-md border bg-slate-300 border-gray-400 py-2 pl-2 pr-4 shadow-md sm:mb-0"
                        name="name"
                        required
                      />
                    </div>
                    <div className="mx-0 mb-1 sm:mb-4">
                      <label
                        htmlFor="email"
                        className="pb-1 text-xs uppercase tracking-wider"
                      ></label>
                      <input
                        type="email"
                        id="email"
                        placeholder="Your email address"
                        className="mb-2 w-full rounded-md border bg-slate-300 border-gray-400 py-2 pl-2 pr-4 shadow-md sm:mb-0 "
                        name="email"
                        required
                      />
                      <p className="text-red-500">
                        <ValidationError
                          prefix="Email"
                          field="email"
                          errors={state.errors}
                        />
                      </p>
                    </div>
                  </div>
                  <div className="mx-0 mb-1 sm:mb-4">
                    <label
                      htmlFor="message"
                      className="pb-1 text-xs uppercase tracking-wider"
                    ></label>
                    <textarea
                      id="message"
                      name="message"
                      cols={30}
                      rows={5}
                      placeholder="Write your message..."
                      className="mb-2 w-full rounded-md border bg-slate-300 border-gray-400 py-2 pl-2 pr-4 shadow-md sm:mb-0"
                      required
                    ></textarea>
                    <p className="text-red-500">
                      <ValidationError
                        prefix="Message"
                        field="message"
                        errors={state.errors}
                      />
                    </p>
                  </div>
                </div>
                <div className="text-center">
                  <button
                    type="submit"
                    disabled={state.submitting}
                    className="w-full bg-white text-gray-950 px-6 py-3 font-xl rounded-md sm:mb-0"
                  >
                    {state.submitting ? "Sending..." : "Send Message"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
