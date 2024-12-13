import emailjs from "emailjs-com";
import { appStrings } from "../data/Data";

export default function Contact() {

  function sendEmail(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    emailjs
      .sendForm(
        appStrings.serviceId,
        appStrings.templateId,
        event.currentTarget,
        appStrings.userId
      )
      .then(() => {
        alert(appStrings.alertSended);
      })
      .catch(() => {
        alert(appStrings.alertError);
      });
  }

  return (
    <div
      id="contact_section"
      className="overflow-x-hidden flex items-center h-auto w-full max-md:flex-col max-md:mt-4"
    >
      <div className="mt-4">
        <p className="text-left mx-8 md:w-64">{appStrings.contactDesc}</p>
      </div>
      <form id="form" className="p-8 w-full" onSubmit={sendEmail}>
        <div className="mb-4">
          <label className="block text-sm mb-2" htmlFor="name">
            {appStrings.formName}
          </label>
          <input
            type="text"
            id="name"
            name="from_name"
            autoComplete="true"
            className="shadow appearance-none border-[1px] rounded-2xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring focus:border-sky-300"
            placeholder={appStrings.formNamePH}
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm mb-2" htmlFor="email">
            {appStrings.formEmail}
          </label>
          <input
            type="email"
            id="email"
            name="from_email"
            autoComplete="true"
            className="shadow appearance-none border-[1px] rounded-2xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring focus:border-sky-300"
            placeholder={appStrings.formEmailPH}
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm mb-2" htmlFor="message">
            {appStrings.formMSJ}
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            className="shadow appearance-none border-[1px] rounded-2xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring focus:border-sky-300"
            placeholder={appStrings.formMSJPH}
            required
          ></textarea>
        </div>

        <div className="flex items-center justify-between">
          <button
            id="send"
            type="submit"
            className="bg-sky-700 hover:bg-sky-800 font-bold py-2 px-4 rounded-2xl focus:outline-none focus:shadow-outline"
          >
            <p className="text-white">{appStrings.sendBtn}</p>
          </button>
        </div>
      </form>
    </div>
  );
}
