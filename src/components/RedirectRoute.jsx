"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { account } from "@/app/appwrite";
import Loading from "./Loading";

const RedirectRoute = ({ children }) => {
  const [loading, setLoading] = useState(true);

  const router = useRouter();

  useEffect(() => {
    const checkSession = async () => {
      if (typeof window === "undefined") return;
      try {
        const user = await account.get();
        if (user) {
          router.push("/");
        } else {
          setLoading(false);
        }
      } catch (error) {
        router.push("/");
      }
    };
    checkSession();
  }, [router]);

  if (loading) return <Loading />;

  return children;
};

export default RedirectRoute;
