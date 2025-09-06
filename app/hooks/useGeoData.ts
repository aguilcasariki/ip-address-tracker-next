import { useCallback, useContext } from "react";
import { AppContext } from "@/context/AppContext";
import { getGeoData } from "@/actions/getIpGeoData";
import { useForm } from "react-hook-form";
import { domainOrIpSchema, DomainOrIp } from "@/lib/inputValidation";
import { zodResolver } from "@hookform/resolvers/zod";

export const useGeoData = () => {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error("useGeoData must be used within an AppContextProvider");
  }
  const { setGeoData, setIsLoading, setError } = context;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<DomainOrIp>({
    resolver: zodResolver(domainOrIpSchema),
  });

  const onSubmit = useCallback(
    async (formData: DomainOrIp) => {
      setIsLoading(true);
      setError(null);

      const data = await getGeoData(formData.input);
      setGeoData(data);
      if (data.error) {
        setError(data.error);
      }

      setIsLoading(false);
    },
    [setGeoData, setIsLoading, setError]
  );

  return {
    errors,
    onSubmit,
    handleSubmit,
    register,
  };
};
