const sizes = {
    "3xl": "text-[45px] font-bold",
    "2xl": "text-[40px] font-bold leading-[55px]",
    xl: "text-3xl font-semibold",
    s: "text-xl font-semibold",
    md: "text-[22px] font-semibold",
    xs: "text-lg font-semibold",
    lg: "text-[25px] font-semibold",
};

const Heading = ({
    children,
    className = "",
    size = "xs",
    as,
    ...props
}) => {

const Component = as || "h6";

return (
    <Component
        className={`text-gray-900 font-inter ${className} ${sizes[size]}`}
        {...props}
    >
    {children}
    </Component>
  );
};

export default Heading;
