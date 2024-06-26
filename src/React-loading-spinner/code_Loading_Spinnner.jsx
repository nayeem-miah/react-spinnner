import { useEffect, useState } from "react";
import Loader from "./loader";
import { ScaleLoader } from "react-spinners";

const Code_Loading_Spinnner = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);
  return (
    <div>
      {/* {loading && <Loader></Loader>} */}
      {/* conditional spinner */}
      conditional spinner
      <p></p>
      {loading && (
        <div className="flex flex-col justify-center items-center ">
          <ScaleLoader size={100} color="#ADD8E6" loading={loading}></ScaleLoader>
        </div>
      )}
      {/* loading spinner */}
      {<Loader></Loader>}
    </div>
  );
};

export default Code_Loading_Spinnner;

/**
 * step 1 : npm i react-spinners
 * step 2 :
 */
