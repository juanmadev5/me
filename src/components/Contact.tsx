import emailjs from "emailjs-com";
import { service } from "../service/service";
import { strings } from "../app/Strings";
import icSend from "/ic-send.svg";

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
        <p className="max-md:text-center lg:text-start mx-8 md:w-64 text-onSurface">
          {strings.contactDesc}
        </p>
      </div>
      <form id="form" className="p-8 w-full" onSubmit={sendEmail}>
        <div className="mb-4">
          <label className="block text-sm mb-2 text-onSurface" htmlFor="name">
            {strings.formName}
          </label>
          <input
            type="text"
            id="name"
            name="from_name"
            autoComplete="true"
            className="bg-onSecondary shadow appearance-none rounded-2xl w-full py-2 px-3 text-onBackground leading-tight focus:outline-none"
            placeholder={strings.formNamePH}
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm mb-2 text-onSurface" htmlFor="email">
            {strings.formEmail}
          </label>
          <input
            type="email"
            id="email"
            name="from_email"
            autoComplete="true"
            className="bg-onSecondary shadow appearance-none rounded-2xl w-full py-2 px-3 text-onBackground leading-tight focus:outline-none"
            placeholder={strings.formEmailPH}
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm mb-2 text-onSurface" htmlFor="message">
            {strings.formMSJ}
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            className="rezise-none bg-onSecondary shadow appearance-none rounded-2xl w-full py-2 px-3 text-onBackground leading-tight focus:outline-none"
            placeholder={strings.formMSJPH}
            required
          ></textarea>
        </div>

        <div className="flex items-center justify-end">
          <button
            id="send"
            type="submit"
            className="bg-primary hover:bg-secondary font-bold py-2 px-4 rounded-3xl focus:outline-none focus:shadow-outline"
          >
            <img src={icSend} className="invert"></img>
          </button>
        </div>
      </form>
    </div>
  );
}
