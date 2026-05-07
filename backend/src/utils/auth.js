import { useRouter } from "next/router";
import { isLogged } from "../utils/auth";

useEffect(() => {
  if (!isLogged()) router.push("/login");
}, []);

export function isLogged() {
  return !!localStorage.getItem("token");
}