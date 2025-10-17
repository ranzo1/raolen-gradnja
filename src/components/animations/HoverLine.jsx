const HoverLine = () => {
  return (
    <div
      className="
        w-full border-b border-black
        opacity-0 scale-x-0
        origin-left
        transition-transform duration-200 ease-out
        group-hover:opacity-100
        group-hover:scale-x-100
        group-hover:origin-left
      "
    />
  );
};

export default HoverLine;
