import React, { useState } from "react";

function App() {
  const [preparingOrders, setPreparingOrders] = useState([]);
  const [servingOrders, setServingOrders] = useState([]);
  const [orderInput, setOrderInput] = useState("");

  const addOrder = () => {
    if (orderInput.trim() === "") return;
    setPreparingOrders([...preparingOrders, orderInput]);
    setOrderInput("");
  };

  const moveToServing = (order) => {
    setPreparingOrders(preparingOrders.filter((o) => o !== order));
    setServingOrders([...servingOrders, order]);
  };

  const removeFromServing = (order) => {
    setServingOrders(servingOrders.filter((o) => o !== order));
  };

  return (
    <div className="min-h-screen flex flex-col items-center py-10 "> {/* MAIN CONTAINER */}
      <h1 className="text-3xl font-bold mb-6">Order System</h1>

      {/* Container for Now Serving and Now Preparing */}
      <div className="w-full max-w-4xl">
        <div className="flex">


          {/* Now Serving Column */}
          <div className="flex-1 p-0">
            <div className="text-center text-white font-bold border border-black text-lg bg-customGreen2 text-[30px] py-5 mb-0">
              Now Serving
            </div>
            <div>
              {servingOrders.length > 0 ? (
                servingOrders.map((order, index) => (
                  <div
                    key={index}
                    className=" justify-between border border-black font-bold items-center py-3 px-4 mb-0"
                  >
                    <span className="ml-[180px] text-[20px] " >{order}</span>
                    <span
                      className="ml-[10px] text-[20px] font-bold cursor-pointer hover:text-red-700"
                      onClick={() => removeFromServing(order)}
                    >
                      ⮾
                    </span>
                  </div>
                ))
              ) : (
                <span className="text-gray-500 ml-[180px] text-[20px]">No orders</span>
              )}
            </div>
          </div>

          {/* Now Preparing Column */}
          <div className="flex-1 p-0">
            <div className="text-center text-white font-bold text-lg border border-black bg-customGray text-[30px] py-5 mb-0">
              Now Preparing
            </div>
            <div>
              {preparingOrders.length > 0 ? (
                preparingOrders.map((order, index) => (
                  <div
                    key={index}
                    className=" justify-between items-center border border-black py-3 px-4 mb-0 cursor-pointer hover:bg-gray-100"
                    onClick={() => moveToServing(order)}
                  >
                    <span className="ml-[180px] font-bold text-[20px] ">{order}</span>
                    <span className="ml-[10px] text-[20px] font-bold text-black-500">⤶</span>
                  </div>
                ))
              ) : (
                <span className="text-gray-500 ml-[180px] text-[20px]">No orders</span>
              )}
            </div>
          </div>
        </div>

        {/* New Orders Input Section */}
        <div className="flex justify-center mt-6 p-0">
          <input
            type="text"
            placeholder="Order Number"
            value={orderInput}
            onChange={(e) => setOrderInput(e.target.value)}
            className="border-[2px] border-black rounded px-4 h-[30px]"
          />
          <button
            onClick={addOrder}
            className="bg-customGreen text-black border-[2px] border-black px-6  rounded-[30px] w-[100px] h-[35px] shadow hover:bg-green-600 ml-4"
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
