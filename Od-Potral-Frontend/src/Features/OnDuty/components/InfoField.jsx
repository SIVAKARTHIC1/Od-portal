const InfoField = ({ label, content }) => {
    return (
      <div className="flex flex-col flex-1">
        <label className="text-crimson mb-1">{label}</label>
        <p className="p-2 border border-gray-600 rounded-md bg-gray-700 text-white">
          {content}
        </p>
      </div>
    );
  };
  
  export default InfoField;