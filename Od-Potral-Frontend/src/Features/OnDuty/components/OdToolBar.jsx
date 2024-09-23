const OdToolBar = () => (
  <div className="p-7 bg-secondary rounded-md">
    <div className="flex gap-10 text-gray-400">
      <div className="flex flex-col flex-1 gap-2">
        <label htmlFor="input3" className="mb-1">
          What are you looking for ?
        </label>
        <input
          type="text"
          id="input3"
          placeholder="search Events , StudentName , etc..."
          className="p-2 border border-gray-600 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-gray-700 focus:ring-offset-2 ring-offset-gray-800 transition-all"
        />
      </div>

      <div className="flex flex-col flex-1 gap-2">
        <label htmlFor="year" className="mb-1">
          Year
        </label>
        <select
          id="year"
          className="p-2 border border-gray-600 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-gray-700 focus:ring-offset-2 ring-offset-gray-800 transition-all"
        >
          <option value="all">All</option>
          <option value="1st year">1st year</option>
          <option value="2nd year">2nd year</option>
          <option value="3rd year">3rd year</option>
          <option value="4th year">4th year</option>
        </select>
      </div>

      <div className="flex flex-col flex-1 gap-2">
        <label htmlFor="input4" className="mb-1">
          Status
        </label>
        <select
          id="input4"
          className="p-2 border border-gray-600 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-gray-700 focus:ring-offset-2 ring-offset-gray-800 transition-all"
        >
          <option value="all">All</option>
          <option value="approved">approved</option>
          <option value="rejected">rejected</option>
          <option value="pending">pending</option>
        </select>
      </div>
    </div>
  </div>
);

export default OdToolBar;
