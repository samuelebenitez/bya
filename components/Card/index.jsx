const Card = ({ title, price, info }) => {
  return (
    <div className="flex flex-col items-center justify-center bg-white rounded-lg shadow-md p-6 m-4 hover:shadow-lg hover:border-blue-500">
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-gray-600">{price}</p>
      <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline-blue">
        Información
      </button>
    </div>
  );
};

export default Card;
