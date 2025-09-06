import { useCallback, useContext } from "react";
import { AppContext } from "@/context/AppContext";
import { getGeoData } from "@/actions/getIpGeoData";
import { useForm } from "react-hook-form";
import { domainOrIpSchema, DomainOrIp } from "@/lib/inputValidation";
import { zodResolver } from "@hookform/resolvers/zod";
import { on } from "events";

export const useGeoData = () => {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error("useGeoData must be used within an AppContextProvider");
  }
  const {
    inputValue,
    setInputValue,

    setGeoData,

    setIsLoading,
    setError,
  } = context;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<DomainOrIp>({
    resolver: zodResolver(domainOrIpSchema),
  });

  const handleChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setInputValue(event.target.value);
    },
    [setInputValue]
  );

  const onSubmit = useCallback(async () => {
    setIsLoading(true);
    setError(null);

    const data = await getGeoData(inputValue);
    setGeoData(data);
    if (data.error) {
      setError(data.error);
    }

    setIsLoading(false);
  }, [inputValue, setGeoData, setIsLoading, setError]);

  return {
    errors,
    onSubmit,
    handleChange,
    handleSubmit,
    register,
  };
};
