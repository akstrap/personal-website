interface ImageComponentProps {
  src: string;
  alt: string;
  width?: string;
  height?: string;
  shape?: "circle" | "square" | "rounded";
  outlineColor?: string;
  outlineThickness?: string;
  crop?: boolean; // prop to toggle cropping
}

const ImageComponent: React.FC<ImageComponentProps> = ({
  src,
  alt,
  width = "80px",
  height = "80px",
  shape = "circle",
  outlineColor = "gray",
  outlineThickness = "2px",
  crop = false, // Default: No cropping (Nuh uh ur so annoying)
}) => {
  // classes based on shape
  const shapeClasses = {
    circle: "rounded-full",
    square: "rounded-none",
    rounded: "rounded-lg",
  };

  return (
    <div
      className={`border ${shapeClasses[shape]} shadow-md flex items-center justify-center`}
      style={{
        width,
        height,
        borderColor: outlineColor,
        borderWidth: outlineThickness,
        overflow: crop ? "hidden" : "visible", // cropping enabled
      }}
    >
      <img
        src={src}
        alt={alt}
        className={`object-cover ${crop ? "w-full h-full" : ""}`} //crop image on `crop` as true
      />
    </div>
  );
};

export default ImageComponent;
