import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Redirect = ({ navig }: { navig: string }) => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/dashboard");
  }, [navig]);

  return <></>;
};

export default Redirect;
