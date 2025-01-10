import emailjs from "emailjs-com";
import { service } from "../service/service";
import { strings } from "../app/Strings";

export default function Contact() {

  function sendEmail(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    emailjs
      .sendForm(
        service.serviceId,
        service.templateId,
        event.currentTarget,
        service.userId
      )
      .then(() => {
        alert(strings.alertSended);
      })
      .catch(() => {
        alert(strings.alertError);
      });
  }

  return (
    <div
      id="contact_section"
      className="overflow-x-hidden flex items-center h-auto w-full max-md:flex-col max-md:mt-4"
    >
      <div className="mt-4">
        <p className="text-left mx-8 md:w-64">{strings.contactDesc}</p>
      </div>
      <form id="form" className="p-8 w-full" onSubmit={sendEmail}>
        <div className="mb-4">
          <label className="block text-sm mb-2" htmlFor="name">
            {strings.formName}
          </label>
          <input
            type="text"
            id="name"
            name="from_name"
            autoComplete="true"
            className="shadow appearance-none border-[1px] rounded-2xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring focus:border-sky-300"
            placeholder={strings.formNamePH}
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm mb-2" htmlFor="email">
            {strings.formEmail}
          </label>
          <input
            type="email"
            id="email"
            name="from_email"
            autoComplete="true"
            className="shadow appearance-none border-[1px] rounded-2xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring focus:border-sky-300"
            placeholder={strings.formEmailPH}
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm mb-2" htmlFor="message">
            {strings.formMSJ}
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            className="shadow appearance-none border-[1px] rounded-2xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring focus:border-sky-300"
            placeholder={strings.formMSJPH}
            required
          ></textarea>
        </div>

        <div className="flex items-center justify-between">
          <button
            id="send"
            type="submit"
            className="bg-sky-700 hover:bg-sky-800 font-bold py-2 px-4 rounded-2xl focus:outline-none focus:shadow-outline"
          >
            <p className="text-white">{strings.sendBtn}</p>
          </button>
        </div>
      </form>
    </div>
  );
}
