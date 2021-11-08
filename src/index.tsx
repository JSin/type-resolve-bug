import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod/dist/zod";
import { z } from "zod";

const schema = z.object({
  first: z.string().nonempty(),
  second: z.number().gte(0),
});

const Index = () => {
  // Adding the resolver seems to blow up intellisense
  const { register } = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
  });
};
