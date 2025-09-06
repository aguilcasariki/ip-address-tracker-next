import z from "zod";
const domainRegex = /^(?!:\/\/)([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}$/;

export const domainOrIpSchema = z.object({
  input: z
    .string()
    .min(1, "The IP or domain must be at least 1 character long")
    .refine(
      (val) => {
        // validar IP v4/v6
        const isIp =
          z.ipv4().safeParse(val).success || z.ipv6().safeParse(val).success;
        // validar dominio
        const isDomain = domainRegex.test(val);
        return isIp || isDomain;
      },
      {
        message:
          "Must be a valid domain (ex: example.com) or a valid IP (ex: 192.168.0.1)",
      }
    ),
});
export type DomainOrIp = z.infer<typeof domainOrIpSchema>;
