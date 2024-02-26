import { useEffect } from "react";
import { pokemonDetailServices } from "@/services";

const HomePage = () => {
  const callData = async () => {
    const res = await pokemonDetailServices.getPokemonDetail("ditto");
    console.log("data", res.data);
  };
  useEffect(() => {
    callData();
  }, []);

  return (
    <>
      <div className="w-[90%] m-auto max-w-[1100px]">
        <div className="flex justify-center">
          <img
            src="/images/logo.webp"
            className="max-h-[80px] mt-[20px] "
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default HomePage;
