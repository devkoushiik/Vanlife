import { useOutletContext } from "react-router-dom";

const HostVanInfo = () => {
  const { van } = useOutletContext();
  return (
    <div className="text-center">
      <h4 className="text-2xl font-bold text-teal-300">Name: {van.name}</h4>
      <h4 className="text-xl mt-4">Type: {van.type}</h4>
      <h4 className="text-md mt-4">Description: {van.description}</h4>
      <h4 className="text-md mb-2 mt-4 text-teal-300">Visibility: public</h4>
    </div>
  );
};
export default HostVanInfo;
