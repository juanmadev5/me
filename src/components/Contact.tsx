import emailjs from "emailjs-com";
import ProvideData from "../data/Data";

export default function Contact() {
  const data = ProvideData();

  function sendEmail(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    emailjs
      .sendForm(
        data.serviceId,
        data.templateId,
        event.currentTarget,
        data.userId
      )
      .then(() => {
        alert(data.alertSended);
      })
      .catch(() => {
        alert(data.alertError);
      });
  }

  return (
    <div
      id="contact_section"
      className="overflow-x-hidden flex items-center h-auto w-full max-md:flex-col max-md:mt-4"
    >
      <div className="mt-4">
        <p className="text-white text-left mx-8">{data.contactDesc}</p>
      </div>
      <form id="form" className="p-8 w-full" onSubmit={sendEmail}>
        <div className="mb-4">
          <label className="block text-sm mb-2 text-white" htmlFor="name">
            {data.formName}
          </label>
          <input
            type="text"
            id="name"
            name="from_name"
            autoComplete="true"
            className="shadow appearance-none border-[1px] rounded-2xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring focus:border-sky-300"
            placeholder={data.formNamePH}
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm mb-2 text-white" htmlFor="email">
            {data.formEmail}
          </label>
          <input
            type="email"
            id="email"
            name="from_email"
            autoComplete="true"
            className="shadow appearance-none border-[1px] rounded-2xl w-full py-2 px-3 leading-tight focus:outline-none focus:ring focus:border-sky-300"
            placeholder={data.formEmailPH}
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm mb-2 text-white" htmlFor="message">
            {data.formMSJ}
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            className="shadow appearance-none border-[1px] rounded-2xl w-full py-2 px-3 leading-tight focus:outline-none focus:ring focus:border-sky-300"
            placeholder={data.formMSJPH}
            required
          ></textarea>
        </div>

        <div className="flex items-center justify-between">
          <button
            id="send"
            type="submit"
            className="bg-sky-700 hover:bg-sky-800 text-white font-bold py-2 px-4 rounded-2xl focus:outline-none focus:shadow-outline"
          >
            {data.sendBtn}
          </button>
        </div>
      </form>
    </div>
  );
}
