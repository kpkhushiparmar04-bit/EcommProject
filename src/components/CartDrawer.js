import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { useCart } from "../context/CartContext";

export default function CartDrawer() {
  const [open, setOpen] = useState(false);
  const { cart, removeFromCart } = useCart();

  const subtotal = cart.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  return (
    <>
      {/* Open Button (use in Header) */}
      <button
        onClick={() => setOpen(true)}
        className="relative font-medium text-gray-700"
      >
        Cart ({cart.length})
      </button>

      <Dialog open={open} onClose={setOpen} className="relative z-50">
        <div className="fixed inset-0 bg-black/50" />

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
              <Dialog.Panel className="pointer-events-auto w-screen max-w-md bg-white shadow-xl">
                <div className="flex h-full flex-col">
                  {/* Header */}
                  <div className="flex items-center justify-between px-4 py-4 border-b">
                    <Dialog.Title className="text-lg font-semibold">
                      Shopping Cart
                    </Dialog.Title>
                    <button onClick={() => setOpen(false)}>
                      <XMarkIcon className="w-6 h-6 text-gray-500" />
                    </button>
                  </div>

                  {/* Cart Items */}
                  <div className="flex-1 overflow-y-auto px-4 py-4">
                    {cart.length === 0 ? (
                      <p className="text-center text-gray-500">
                        Cart is empty
                      </p>
                    ) : (
                      <ul className="divide-y">
                        {cart.map((item) => (
                          <li key={item.id} className="flex py-4">
                            <img
                              src={item.image}
                              alt={item.name}
                              className="w-20 h-24 object-cover rounded"
                            />

                            <div className="ml-4 flex-1">
                              <div className="flex justify-between">
                                <h4 className="font-medium">
                                  {item.name}
                                </h4>
                                <p>₹{item.price}</p>
                              </div>

                              <p className="text-sm text-gray-500">
                                Qty {item.qty}
                              </p>

                              <button
                                onClick={() => removeFromCart(item.id)}
                                className="text-sm text-indigo-600 hover:underline mt-2"
                              >
                                Remove
                              </button>
                            </div>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>

                  {/* Footer */}
                  <div className="border-t px-4 py-4">
                    <div className="flex justify-between font-medium">
                      <span>Subtotal</span>
                      <span>₹{subtotal}</span>
                    </div>

                    <button className="mt-4 w-full rounded-md bg-indigo-600 py-3 text-white hover:bg-indigo-700">
                      Checkout
                    </button>

                    <button
                      onClick={() => setOpen(false)}
                      className="mt-3 w-full text-sm text-indigo-600 hover:underline"
                    >
                      Continue Shopping →
                    </button>
                  </div>
                </div>
              </Dialog.Panel>
            </div>
          </div>
        </div>
      </Dialog>
    </>
  );
}
