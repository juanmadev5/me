import emailjs from "emailjs-com";

export default function Contact() {
  const serviceId: string = import.meta.env.VITE_EJS_SERVICE_ID;
  const templateId: string = import.meta.env.VITE_EJS_TEMPLATE_ID;
  const userId: string = import.meta.env.VITE_EJS_USER_ID;

  function sendEmail(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    emailjs
      .sendForm(serviceId, templateId, event.currentTarget, userId)
      .then(() => {
        alert(
          "¡Mensaje enviado exitosamente. Te responderé lo más rápido posible!"
        );
      })
      .catch(() => {
        alert("Hubo un problema al enviar el mensaje. Intenta nuevamente.");
      });
  }

  return (
    <div className="flex  items-center h-auto w-full max-md:flex-col max-md:mt-4">
      <div className="w-64 text-white flex flex-col p-4 items-center">
        <p>
          ¿Tienes un proyecto en mente? ¡No dudes en contactarme y hagamos que
          esa idea cobre vida!
        </p>
      </div>
      <form id="form" className="p-8 w-full" onSubmit={sendEmail}>
        <div className="mb-4">
          <label className="block text-sm mb-2 text-white" htmlFor="name">
            Nombre
          </label>
          <input
            type="text"
            id="name"
            name="from_name"
            className="shadow appearance-none border-[1px] rounded-2xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring focus:border-sky-300"
            placeholder="Tu nombre"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm mb-2 text-white" htmlFor="email">
            Correo Electrónico
          </label>
          <input
            type="email"
            id="email"
            name="from_email"
            className="shadow appearance-none border-[1px] rounded-2xl w-full py-2 px-3 leading-tight focus:outline-none focus:ring focus:border-sky-300"
            placeholder="Tu correo"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm mb-2 text-white" htmlFor="message">
            Mensaje
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            className="shadow appearance-none border-[1px] rounded-2xl w-full py-2 px-3 leading-tight focus:outline-none focus:ring focus:border-sky-300"
            placeholder="Tu mensaje"
            required
          ></textarea>
        </div>

        <div className="flex items-center justify-between">
          <button
            id="send"
            type="submit"
            className="bg-sky-700 hover:bg-sky-800 text-white font-bold py-2 px-4 rounded-2xl focus:outline-none focus:shadow-outline"
          >
            Enviar
          </button>
        </div>
      </form>
    </div>
  );
}
