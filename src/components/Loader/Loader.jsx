import { ThreeDots } from "react-loader-spinner";

export const Loader = () => {
  return (
    <ThreeDots
      height="80"
      width="80"
      radius="9"
      color="#bbe38f"
      ariaLabel="three-dots-loading"
      wrapperStyle={{
        display: "block",
        textAlign: "center",
      }}
      wrapperClassName=""
      visible={true}
    />
  );
};
