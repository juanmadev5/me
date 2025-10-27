import emailjs from "emailjs-com";
import { strings } from "../app/Strings";
import icSend from "/ic-send.svg";

export default function Contact() {
  const serviceId = import.meta.env.VITE_EJS_SERVICE_ID
  const templateId = import.meta.env.VITE_EJS_TEMPLATE_ID
  const userId = import.meta.env.VITE_EJS_USER_ID

  function sendEmail(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    emailjs
      .sendForm(
        serviceId,
        templateId,
        event.currentTarget,
        userId
      )
      .then(() => {
        alert(strings.alertSended);
      })
      .catch(() => {
        alert(strings.alertError);
      });
  }

  return (
    <form className="sm:mx-0 max-md:mx-2 xl:mx-32" onSubmit={sendEmail}>
        <div className="mb-4">
          <label className="block text-sm mb-2 text-onSurface" htmlFor="name">
            {strings.formName}
          </label>
          <input
            type="text"
            id="name"
            name="from_name"
            autoComplete="true"
            className="bg-onSecondary shadow appearance-none rounded-2xl w-full py-2 px-3 text-onSurface leading-tight focus:outline-none"
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
            className="bg-onSecondary shadow appearance-none rounded-2xl w-full py-2 px-3 text-onSurface leading-tight focus:outline-none"
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
            className="rezise-none bg-onSecondary shadow appearance-none rounded-2xl w-full py-2 px-3 text-onSurface leading-tight focus:outline-none"
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
  );
}
