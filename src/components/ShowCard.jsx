const ShowCard = ({ imgURL, changeBigShoeImage, bigShoeImg }) => {
  const handleClick = () => {
    if (bigShoeImg !== imgURL.bigShoe) {
      changeBigShoeImage(imgURL.bigShoe);
    }
  };

  return (
    <div
      className={`border-2 rounded-xl cursor-pointer  max-sm:flex-1 ${
        bigShoeImg === imgURL.bigShoe
          ? "border-coral-red"
          : "border-transparent"
      }`}
      onClick={handleClick}
    >
      <div
        className="flex justify-center 
      items-center bg-card bg-cover 
      bg-center sm:w-40 sm:h-40 rounded-xl max-sm:p-4"
      >
        <img
          src={imgURL.thumbnail}
          alt="shoe collection"
          width={127}
          height={103}
          className="object-contain"
        />
      </div>
    </div>
  );
};

export default ShowCard;
