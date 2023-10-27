import { Divider } from "@mui/material";

export default function LineItem({ lineItem, isPaid, handleChangeQty }) {
  return (
    <>
      <li className="flex py-6">
        <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
          <img
            src={lineItem.product.image}
            alt={lineItem.product.name}
            className="h-full w-full object-cover object-center"
          />
        </div>

        <div className="ml-4 flex flex-1 flex-col">
          <div>
            <div className="flex justify-between text-base font-medium text-gray-900">
              <h3>
                <a href="#">{lineItem.product.name}</a>
              </h3>
              <p className="ml-4">${lineItem.product.price.toFixed(2)}</p>
            </div>
            <p className="mt-1 text-sm text-gray-500"></p>
          </div>
          <div className="flex flex-1 items-end justify-between text-sm">
            {!isPaid && (
              <button
                type="button"
                onClick={() =>
                  handleChangeQty(lineItem.product._id, lineItem.qty - 1)
                }
                className="font-medium text-indigo-600 hover:text-indigo-500"
              >
                -
              </button>
            )}
            <p className="text-gray-500">Qty {lineItem.qty}</p>
            {!isPaid && (
              <button
                type="button"
                onClick={() =>
                  handleChangeQty(lineItem.product._id, lineItem.qty + 1)
                }
                className="font-medium text-indigo-600 hover:text-indigo-500"
              >
                +
              </button>
            )}
          </div>
        </div>
      </li>
      <Divider />
    </>
  );
}
