import { useOutletContext } from "react-router-dom";

const HostVanPhotos = () => {
  const { van } = useOutletContext();
  return (
    <div className="flex justify-center items-center">
      <img width={"100"} src={van.imageUrl} />
    </div>
  );
};
export default HostVanPhotos;
