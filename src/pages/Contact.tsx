import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useUser } from "@clerk/clerk-react";

import Break from "@/components/shared/Break";
import { Button } from "@/components/ui/button";
import toast from "react-hot-toast";

const contactSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email"),
  phone: z
    .string()
    .transform((val) => val.replace(/\s/g, ""))
    .refine((val) => /^01[0125][0-9]{8}$/.test(val), {
      message: "Invalid phone number.",
    }),
  message: z.string().min(5, "Message too short"),
});

const formatPhone = (value: string) => {
  const digits = value?.replace(/\D/g, "") || "";
  if (digits.length <= 3) return digits;
  return `${digits.slice(0, 3)} ${digits.slice(3)}`;
};

type ContactFormData = z.infer<typeof contactSchema>;

function Contact() {
  const isXl = useMediaQuery({ query: "(min-width: 1280px)" });
  const resFix = useMediaQuery({ minWidth: 1280, maxWidth: 1670 });
  const { user } = useUser();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      email: user?.primaryEmailAddress?.emailAddress || "",
    },
  });

  const onSubmit = (data: ContactFormData) => {
    const key = `contact-${data.email}`;
    const stored = JSON.parse(localStorage.getItem(key) || "[]");
    const updated = [...stored, { ...data, date: new Date().toISOString() }];
    localStorage.setItem(key, JSON.stringify(updated));

    toast.success("Message sent!");

    reset({ email: data.email });
  };

  return (
    <>
      <title>Contact | Palestino</title>
      <meta
        name="description"
        content="Get in touch with Palestino for support, inquiries, or feedback. We're here to help 24/7."
      />
      <link
        rel="canonical"
        href="https://palestino.com/contact"
        aria-label="contact"
      />

      <main className="mx-auto w-[90%] xl:w-[80%] py-8 xl:py-10">
        <p className="text-black">
          <Link to="/" className="text-black/50" aria-label="home">
            Home
          </Link>{" "}
          / Contact
        </p>

        <div className="my-10 flex-center flex-col xl:flex-row gap-6">
          <div
            className={`w-full xl:w-[22%] xl:h-140 flex-center xl:flex-col md:gap-12 xl:gap-6 shadow-md rounded-2xl py-2 md:py-11 xl:py-20 text-[11px] ${
              resFix ? "md:text-base" : "md:text-lg"
            }`}
          >
            <div className="flex items-center md:flex-grow flex-col gap-4 md:gap-6 h-34 md:h-50 xl:h-40 w-70 md:px-5 xl:w-[95%]">
              <div className="gap-2 md:gap-4 font-[500] flex-center mr-auto ml-7 md:ml-0">
                <div className="w-6 h-6 md:w-10 md:h-10 rounded-full bg-[#DB4444] flex-center">
                  <i className="bx bx-phone text-[#ffffff] scale-150" />
                </div>
                <p className="text-md xl:text-xl">Call Us</p>
              </div>
              <div className="flex items-start w-[90%] md:w-full flex-col gap-2 md:gap-4">
                <p className="xl:w-[85%]">
                  We are available 24 hours, 7 days a week.
                </p>
                <p>Phone: +12345-67890</p>
              </div>
            </div>

            {isXl && <Break percentage={90} gap={0} />}

            <div className="flex items-center md:flex-grow flex-col gap-4 md:gap-6 h-34 md:h-50 w-70 md:px-5 xl:w-[95%]">
              <div className="gap-2 md:gap-4 font-[500] flex-center mr-auto ml-7 md:ml-0">
                <div className="w-6 h-6 md:w-10 md:h-10 rounded-full bg-[#DB4444] flex-center">
                  <i className="bx bx-envelope text-[#ffffff] scale-150" />
                </div>
                <p className="text-md xl:text-xl">Mail Us</p>
              </div>
              <div className="flex w-full flex-col gap-2 md:gap-4">
                <p className="w-[98%]">
                  Fill out our form and we will contact you within 24 hours.
                </p>
                <p>Email: gaza@palestine.com</p>
                <p>Email: support@gaza.com</p>
              </div>
            </div>
          </div>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-full xl:w-[60%] space-y-2 p-6 shadow-md rounded-2xl h-140 flex flex-col justify-center"
          >
            <div className="flex flex-col md:flex-row md:gap-4">
              <div className="w-full md:w-1/3 h-24">
                <label className="block mb-1">Your Email</label>
                <input
                  type="email"
                  value={user?.primaryEmailAddress?.emailAddress || ""}
                  {...register("email")}
                  className={`w-full border px-3 py-2 rounded ${
                    user ? "bg-gray-100" : ""
                  }`}
                />
                {errors.email && (
                  <p className="text-red-500 text-xs">{errors.email.message}</p>
                )}
              </div>
              <div className="w-full md:w-1/3 h-24">
                <label className="block mb-1">Your Name</label>
                <input
                  type="text"
                  {...register("name")}
                  className="w-full border px-3 py-2 rounded"
                />
                {errors.name && (
                  <p className="text-red-500 text-xs">{errors.name.message}</p>
                )}
              </div>
              <div className="w-full md:w-1/3 h-24">
                <label className="block mb-1">Your Phone</label>
                <input
                  type="tel"
                  maxLength={12}
                  {...register("phone")}
                  onChange={(e) => {
                    e.target.value = formatPhone(e.target.value);
                    register("phone").onChange(e);
                  }}
                  className="w-full border px-3 py-2 rounded"
                />
                {errors.phone && (
                  <p className="text-red-500 text-xs">{errors.phone.message}</p>
                )}
              </div>
            </div>

            <div className="mx-auto w-full">
              <label className="block mb-1">Your Message</label>
              <textarea
                {...register("message")}
                className="w-full h-40 resize-none border px-3 py-2 rounded"
                placeholder="Write your message..."
              />
              <div className="min-h-[20px] mt-1">
                {errors.message && (
                  <p className="text-xs text-red-500">
                    {errors.message.message}
                  </p>
                )}
              </div>
            </div>

            <div className="flex-center flex-col md:flex-row mt-4 md:justify-end gap-4 md:gap-8 items-center">
              <Button
                aria-label="Send Message"
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 cursor-pointer w-55 md:w-30 xl:w-50 h-10"
              >
                Send Message
              </Button>
            </div>
          </form>
        </div>
      </main>
    </>
  );
}

export default Contact;
