const Button = (props) => {
  const { label, iconUrl } = props;
  return (
    <button
      className="flex items-center justify-center gap-2 px-7 py-4 font-montserrat 
    text-lg leading-none bg-coral-red rounded-full text-white border-coral-red"
    >
      {label}
      {iconUrl && (
        <img
          src={iconUrl}
          alt="arrow icon"
          className="ml-2 rounded-full w-5 h-5"
        />
      )}
    </button>
  );
};

export default Button;
