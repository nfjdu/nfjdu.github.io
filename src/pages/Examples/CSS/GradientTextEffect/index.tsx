import TypographyNoMargin from "../../../../components/TypographyNoMargin";

interface Props {}

const GradientTextEffect = ({}: Props) => {
  return (
    <TypographyNoMargin
      variant={"h3"}
      sx={{
        textTransform: "uppercase",
        background: "linear-gradient(to right, #fc72ff, #8f68ff, #487bff, #8f68ff, #fc72ff)",
        backgroundSize: "200%",
        backgroundClip: "text",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        animation: "animate-gradient 2.5s linear infinite",
        "@keyframes animate-gradient": {
          to: {
            backgroundPosition: "200%",
          },
        },
      }}
    >
      Lorem ipsum
    </TypographyNoMargin>
  );
};

export default GradientTextEffect;
