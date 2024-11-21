import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

// Validation du formulaire avec Yup
const validationSchema = Yup.object().shape({
  name: Yup.string().required("Le nom est requis"),
  email: Yup.string().email("Email invalide").required("L'email est requis"),
  message: Yup.string().required("Le message est requis"),
});

const ContactForm: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [bannerMessage, setBannerMessage] = useState("");
  const [bannerType, setBannerType] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  // Fonction onSubmit pour gérer l'envoi du formulaire
  const onSubmit = async (data: any) => {
    setIsSubmitting(true);

    try {
      const response = await fetch("https://api.resend.com/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Erreur lors de l’envoi de l’email");
      }

      setBannerMessage("Votre message a été envoyé avec succès !");
      setBannerType("success");
      reset();
    } catch (error) {
      console.error("Erreur lors de l’envoi de l’email :", error);
      setBannerMessage(
        "Une erreur est survenue lors de l’envoi de votre message."
      );
      setBannerType("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col md:flex-row">
      <div className="flex-1 p-8 m-5 rounded-md cursor-pointer">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Nom
            </label>
            <input
              type="text"
              placeholder="Entrez votre nom"
              {...register("name")}
              className={`mt-1 block w-full border-b-2 rounded-md p-2  ${
                errors.name ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.name && (
              <p className="text-red-500 text-sm">{errors.name.message}</p>
            )}
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              placeholder="Entrez votre email"
              {...register("email")}
              className={`mt-1 block w-full border-b-2 rounded-md p-2  ${
                errors.email ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email.message}</p>
            )}
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Message
            </label>
            <textarea
              {...register("message")}
              placeholder="Entrez votre message"
              className={`mt-1 block w-full border-b-2 rounded-md p-2  ${
                errors.message ? "border-red-500" : "border-gray-300"
              }`}
              rows={4}
            />
            {errors.message && (
              <p className="text-red-500 text-sm">{errors.message.message}</p>
            )}
          </div>

          <button
            type="submit"
            className="bg-blue-500 text-white p-2 rounded-md"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Envoi..." : "Envoyer"}
          </button>
        </form>

        {bannerMessage && (
          <div
            className={`mt-4 p-2 rounded-md ${
              bannerType === "success"
                ? "bg-green-300 text-green-800"
                : "bg-red-200 text-red-800"
            }`}
          >
            {bannerMessage}
          </div>
        )}
      </div>

      <div
        className="flex-1 bg-cover bg-center m-5"
        style={{
          backgroundImage:
            "url(https://media.istockphoto.com/id/1344939844/fr/photo/lampe-virtuelle-de-dessin-tenant-la-main-avec-le-cerveau-sur-fond-bokeh-pour-une-id%C3%A9e.jpg?b=1&s=612x612&w=0&k=20&c=s3gtcLJApRypCM_5Y0eMak8Kz3hxHG5DLUYGe7QImLc=)",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          height: "50vh",
        }}
      ></div>
    </div>
  );
};

export default ContactForm;
