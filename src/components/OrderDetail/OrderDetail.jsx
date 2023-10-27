import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import LineItem from "../LineItem/LineItem";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./OrderDetail.css";

export default function OrderDetail({
  order,
  handleChangeQty,
  handleCheckout,
}) {
  const lineItems = order
    ? order.lineItems.map((product) => (
        <LineItem
          lineItem={product}
          isPaid={order.isPaid}
          key={product._id}
          handleChangeQty={handleChangeQty}
        />
      ))
    : null;

  return (
    <nav>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <div
          class="relative z-10"
          aria-labelledby="slide-over-title"
          role="dialog"
          aria-modal="true"
        >
          <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
          <div class="fixed inset-0 overflow-hidden">
            <div class="absolute inset-0 overflow-hidden">
              <div class="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                <div class="pointer-events-auto w-screen max-w-md">
                  <div class="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                    <div class="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                      <div class="flex items-start justify-between">
                        <h2
                          class="text-lg font-medium text-gray-900"
                          id="slide-over-title"
                        >
                          Shopping cart
                        </h2>
                      </div>
                      <div>
                        <div>
                          <div class="mt-8">
                            <div class="flow-root">
                              {lineItems.length ? (
                                <>
                                  {lineItems}
                                  <div class="border-t border-gray-200 px-4 py-6 sm:px-6">
                                    <div class="flex justify-between text-base font-medium text-gray-900">
                                      <p>Subtotal</p>
                                      <p> ${order.orderTotal.toFixed(2)}</p>
                                    </div>
                                    <p class="mt-0.5 text-sm text-gray-500">
                                      Shipping and taxes calculated at checkout.
                                    </p>
                                    <div class="mt-6">
                                      <a
                                        onClick={() =>
                                          handleCheckout(order._id)
                                        }
                                        class="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
                                      >
                                        Checkout
                                      </a>
                                    </div>
                                    <div class="mt-6 flex justify-center text-center text-sm text-gray-500">
                                      <p>
                                        or
                                        <Link
                                          to="/products"
                                          class="font-medium text-indigo-600 hover:text-indigo-500"
                                        >
                                          Continue Shopping
                                          <span aria-hidden="true">
                                            {" "}
                                            &rarr;
                                          </span>
                                        </Link>
                                      </p>
                                    </div>
                                  </div>
                                </>
                              ) : (
                                <Typography
                                  variant="body2"
                                  className="hungry"
                                  sx={{ alignItems: "center" }}
                                >
                                  Cart is empty?
                                  <Link
                                    to="/products"
                                    class="font-medium text-indigo-600 hover:text-indigo-500"
                                  >
                                    Continue Shopping
                                    <span aria-hidden="true"> &rarr;</span>
                                  </Link>
                                </Typography>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Box>
    </nav>
  );
}
