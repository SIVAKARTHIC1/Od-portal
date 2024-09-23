import DatePicker from "./components/DatePicker";

const OdForm = () => (
  <>
    <div className="flex text-golden p-4 gap-4 w-full">
      {/* Right Section - Multiple Inputs */}
      <div className="basis-[75%] bg-secondary rounded-md flex flex-col gap-6 px-6 py-10">
        {/* Row with two inputs */}
        <div className="flex gap-4">
          {/* Input 1 */}
          <div className="flex flex-col flex-1">
            <label htmlFor="input1" className="text-crimson mb-1">
              Name
            </label>
            <input
              type="text"
              id="input1"
              placeholder="Enter your name"
              className="p-2 border border-gray-600 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-gray-700 focus:ring-offset-2 ring-offset-gray-800 transition-all"
            />
          </div>

          {/* Input 2 */}
          <div className="flex flex-col flex-1">
            <label htmlFor="input2" className="text-crimson mb-1">
              RollNumber
            </label>
            <input
              type="text"
              id="input2"
              placeholder="Enter your RollNumber"
              className="p-2 border border-gray-600 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-gray-700 focus:ring-offset-2 ring-offset-gray-800 transition-all"
            />
          </div>
        </div>

        {/* Row with two inputs */}
        <div className="flex gap-4">
          {/* Input 3 */}
          <div className="flex flex-col flex-1">
            <label htmlFor="input3" className="text-crimson mb-1">
              Mentor-Code
            </label>
            <input
              type="text"
              id="input3"
              placeholder="Mentor-Code"
              className="p-2 border border-gray-600 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-gray-700 focus:ring-offset-2 ring-offset-gray-800 transition-all"
            />
          </div>

          {/* Input 4 */}
          <div className="flex flex-col flex-1">
            <label htmlFor="input4" className="text-crimson mb-1">
              SpecialLab-Code
            </label>
            <input
              type="text"
              id="input4"
              placeholder="Special-Lab-Code"
              className="p-2 border border-gray-600 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-gray-700 focus:ring-offset-2 ring-offset-gray-800 transition-all"
            />
          </div>
        </div>

        {/* Row with a single full-width input */}
        <div className="flex flex-col w-full">
          {/* Input 5 (Full Width) */}
          <label htmlFor="input5" className="text-crimson mb-1">
            Event-Name
          </label>
          <input
            type="text"
            id="input5"
            placeholder="Enter Event-Name"
            className="p-2 border border-gray-600 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-gray-700 focus:ring-offset-2 ring-offset-gray-800 transition-all"
          />
        </div>

        {/* Row with two inputs */}
        <div className="flex gap-4">
          {/* Input 6 */}
          <div className="flex flex-col flex-1">
            <label htmlFor="input6" className="text-crimson mb-1">
              From Time
            </label>
            <input
              type="text"
              id="input6"
              placeholder="From Time"
              className="p-2 border border-gray-600 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-gray-700 focus:ring-offset-2 ring-offset-gray-800 transition-all"
            />
          </div>

          {/* Input 7 */}
          <div className="flex flex-col flex-1">
            <label htmlFor="input7" className="text-crimson mb-1">
              To time
            </label>
            <input
              type="text"
              id="input7"
              placeholder="To Time"
              className="p-2 border border-gray-600 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-gray-700 focus:ring-offset-2 ring-offset-gray-800 transition-all"
            />
          </div>
        </div>
        <div className="flex flex-col flex-1">
          <label className="text-crimson mb-1">Type</label>
          <select className="p-2 border border-gray-600 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-gray-700 focus:ring-offset-2 ring-offset-gray-800 transition-all">
            <option value="External">External</option>
            <option value="Internal">Internal</option>
          </select>
        </div>
        <button className="bg-btn-primary text-white px-5 rounded-md py-2 w-fit ms-auto">
          Apply
        </button>
      </div>

      {/* Left Section - DatePicker and From/To inputs */}
      <div className="basis-[25%] flex flex-col gap-5 bg-secondary px-6 py-10">
        <DatePicker />

        {/* From Input */}
        <div className="flex flex-col">
          <label htmlFor="from" className="text-crimson mb-1">
            From
          </label>
          <input
            type="text"
            id="from"
            disabled={true}
            placeholder="Enter start date"
            className="cursor-not-allowed p-2 border border-gray-600 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-gray-700 focus:ring-offset-2 ring-offset-gray-800 transition-all"
          />
        </div>

        {/* To Input */}
        <div className="flex flex-col">
          <label htmlFor="to" className="text-crimson mb-1">
            To
          </label>
          <input
            type="text"
            id="to"
            disabled={true}
            placeholder="Enter end date"
            className="cursor-not-allowed p-2 border border-gray-600 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-gray-700 focus:ring-offset-2 ring-offset-gray-800 transition-all"
          />
        </div>
      </div>
    </div>
  </>
);

export default OdForm;
