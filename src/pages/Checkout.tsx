import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Swal from "sweetalert2";
import { useNavigate } from "react-router";
import { useUser } from "@clerk/clerk-react";

import { Button } from "@/components/ui/button";
import { useCart } from "@/contexts/CartContext";

const schema = z.object({
  phone: z
    .string()
    .transform((val) => val.replace(/\s/g, ""))
    .refine((val) => /^01[0125][0-9]{8}$/.test(val), {
      message: "Invalid phone number.",
    }),
  address: z.string().min(8, "Address too short.").max(50, "Address too long."),
  cardName: z.string().regex(/^[a-zA-Z\s]+$/, "Invalid name."),
  cardNumber: z
    .string()
    .transform((val) => val.replace(/\s/g, ""))
    .refine((val) => /^4[0-9]{12}(?:[0-9]{3})?$/.test(val), {
      message: "Invalid VISA card number.",
    }),
  expMonth: z.string().regex(/^(0[1-9]|1[0-2])$/, "MM must be 01-12"),
  expYear: z.string().regex(/^\d{2}$/, "YY must be 2 digits"),
  cvc: z.string().regex(/^\d{3}$/, "Invalid CVC."),
});

const formatCardNumber = (val: string) =>
  val
    .replace(/\D/g, "")
    .replace(/(.{4})/g, "$1 ")
    .trim();

const formatPhone = (val: string) => {
  const digits = val.replace(/\D/g, "");
  if (digits.length <= 3) return digits;
  return `${digits.slice(0, 3)} ${digits.slice(3)}`;
};

const formatName = (val: string) => val.replace(/[^a-zA-Z\s]/g, "");
const formatNumber = (val: string) => val.replace(/\D/g, "");

type FormData = z.infer<typeof schema>;

function Checkout() {
  const { user } = useUser();
  const userId = user?.id;
  const { cart, clearCart } = useCart();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const shippingFee = 25;
  const subtotal = cart.reduce(
    (acc, item) => acc + item.productPrice * item.quantity,
    0
  );
  const total = subtotal + shippingFee;

  if (!cart.length) {
    return (
      <main className="w-[90%] mx-auto py-10 px-6">
        <h1 className="text-2xl font-bold mb-6">Checkout</h1>
        <p className="text-lg text-center font-medium">Your cart is empty.</p>
      </main>
    );
  }

  return (
    <>
      <Helmet>
        <title>Checkout | Palestino</title>
        <meta
          name="description"
          content="Secure checkout page for your Palestino orders."
        />
      </Helmet>

      <main className="w-[90%] max-w-6xl mx-auto py-10">
        <h1 className="text-2xl font-bold mb-6">Checkout</h1>
        <div className="flex gap-6 font-medium flex-col md:flex-row">
          <div className="w-full md:w-[30%] bg-gray-100 p-4 rounded-2xl">
            <h2 className="text-xl font-semibold mb-4">Your Items</h2>
            <ul className="space-y-4">
              {cart.map((item) => (
                <li
                  key={item.productID}
                  className="flex justify-between border-b pb-2"
                >
                  <div>
                    <p className="font-medium">{item.productName}</p>
                    <p className="text-sm text-gray-700">
                      {item.quantity} × ${item.productPrice.toFixed(2)}
                    </p>
                  </div>
                  <p className="font-semibold">
                    ${(item.quantity * item.productPrice).toFixed(2)}
                  </p>
                </li>
              ))}
            </ul>
            <div className="pt-2 md:pt-4">
              <p className="text-gray-600">Subtotal: ${subtotal.toFixed(2)}</p>
              <p className="text-gray-600">
                Shipping: ${shippingFee.toFixed(2)}
              </p>
              <p className="font-bold text-lg mt-1">
                Total: ${total.toFixed(2)}
              </p>
            </div>
          </div>

          <form className="w-full md:w-[60%] space-y-2 p-6 shadow-md rounded-2xl">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="w-full md:w-1/2 h-24">
                <label className="block mb-1">Email</label>
                <input
                  type="email"
                  value={user?.primaryEmailAddress?.emailAddress || ""}
                  readOnly
                  className="w-full border px-3 py-2 rounded bg-gray-100"
                />
              </div>
              <div className="w-full md:w-1/2 h-24">
                <label className="block mb-1">Phone Number</label>
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

            <div className="h-24">
              <label className="block mb-1">Shipping Address</label>
              <input
                type="text"
                {...register("address")}
                className="w-full border px-3 py-2 rounded"
              />
              {errors.address && (
                <p className="text-red-500 text-xs">{errors.address.message}</p>
              )}
            </div>

            <h2 className="text-lg font-semibold border-b pb-2">
              Credit Card Details
            </h2>

            <div className="flex flex-col md:flex-row md:gap-4">
              <div className="w-full md:w-1/2 h-24">
                <label className="block mb-1">Name on Card</label>
                <input
                  type="text"
                  {...register("cardName")}
                  onChange={(e) => {
                    e.target.value = formatName(e.target.value);
                    register("cardName").onChange(e);
                  }}
                  placeholder="John Doe"
                  className="w-full border px-3 py-2 rounded"
                />
                {errors.cardName && (
                  <p className="text-red-500 text-xs">
                    {errors.cardName.message}
                  </p>
                )}
              </div>

              <div className="w-full md:w-1/2">
                <label className="block mb-1">Expiration Date</label>
                <div className="flex gap-2">
                  <div className="w-1/2 flex flex-col">
                    <input
                      type="text"
                      maxLength={2}
                      {...register("expMonth")}
                      onChange={(e) => {
                        e.target.value = formatNumber(e.target.value);
                        register("expMonth").onChange(e);
                      }}
                      placeholder="MM"
                      className="w-full border px-3 py-2 rounded"
                    />
                    {errors.expMonth && (
                      <p className="text-red-500 text-xs">
                        {errors.expMonth.message}
                      </p>
                    )}
                  </div>
                  <div className="w-1/2 flex flex-col">
                    <input
                      type="text"
                      maxLength={2}
                      {...register("expYear")}
                      onChange={(e) => {
                        e.target.value = formatNumber(e.target.value);
                        register("expYear").onChange(e);
                      }}
                      placeholder="YY"
                      className="w-full border px-3 py-2 rounded"
                    />
                    {errors.expYear && (
                      <p className="text-red-500 text-xs">
                        {errors.expYear.message}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col md:flex-row md:gap-4">
              <div className="w-full md:w-2/3 h-24">
                <label className="block mb-1">Card Number</label>
                <input
                  type="text"
                  maxLength={19}
                  {...register("cardNumber")}
                  onChange={(e) => {
                    e.target.value = formatCardNumber(e.target.value);
                    register("cardNumber").onChange(e);
                  }}
                  placeholder="e.g. 4111 1111 1111 1111"
                  className="w-full border px-3 py-2 rounded"
                />
                {errors.cardNumber && (
                  <p className="text-red-500 text-xs">
                    {errors.cardNumber.message}
                  </p>
                )}
              </div>
              <div className="w-full md:w-1/3 h-24">
                <label className="block mb-1">CVC</label>
                <input
                  type="text"
                  maxLength={3}
                  {...register("cvc")}
                  onChange={(e) => {
                    e.target.value = formatNumber(e.target.value);
                    register("cvc").onChange(e);
                  }}
                  className="w-full border px-3 py-2 rounded"
                />
                {errors.cvc && (
                  <p className="text-red-500 text-xs">{errors.cvc.message}</p>
                )}
              </div>
            </div>

            <div className="flex-center flex-col md:flex-row mt-4 md:justify-end gap-4 md:gap-8 items-center">
              <Button
                type="button"
                className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-red-600 cursor-pointer w-55 md:w-30 xl:w-50 h-10 order-1 md:order-0"
                onClick={() => {
                  Swal.fire({
                    title: "Cancel checkout?",
                    text: "You’ll be returned to your cart without placing an order.",
                    icon: "warning",
                    showCancelButton: true,
                    confirmButtonColor: "#ef4444",
                    cancelButtonColor: "#6b7280",
                    confirmButtonText: "Back to Cart",
                  }).then((res) => {
                    if (res.isConfirmed) navigate("/cart");
                  });
                }}
              >
                Cancel Order
              </Button>

              <Button
                onClick={handleSubmit((data: FormData) => {
                  const previousOrders =
                    JSON.parse(
                      localStorage.getItem(`orders_${userId}`) || "[]"
                    ) || [];

                  const newOrder = {
                    id: Date.now(),
                    userId: user?.id,
                    items: cart,
                    total,
                    address: data.address,
                    phone: data.phone,
                    createdAt: new Date().toISOString(),
                  };

                  localStorage.setItem(
                    `orders_${userId}`,
                    JSON.stringify([...previousOrders, newOrder])
                  );

                  clearCart();

                  Swal.fire({
                    icon: "success",
                    title: "Order received!",
                    text: "Thank you for your purchase.",
                  }).then(() => navigate("/orders"));
                })}
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 cursor-pointer w-55 md:w-30 xl:w-50 h-10"
              >
                Place Order
              </Button>
            </div>
          </form>
        </div>
      </main>
    </>
  );
}

export default Checkout;
