import { useOutletContext } from "react-router-dom";

const HostVanPrice = () => {
  const { van } = useOutletContext();
  return (
    <div className="flex justify-center items-center text-xl my-4">
      <h3 className="badge badge-primary p-6 text-xl text-white">
        ${van.price}
      </h3>
    </div>
  );
};
export default HostVanPrice;
