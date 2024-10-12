"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { account } from "@/app/appwrite";
import Loading from "./Loading";

const ProtectedRoute = ({ children }) => {
  const [loading, setLoading] = useState(true);
  
  const router = useRouter();

  useEffect(() => {
    const checkSession = async () => {
      if (typeof window === "undefined") return;
      try {
        const user = await account.get();
        if (!user) {
          router.push("/sign-in");
        } else {
          setLoading(false);
        }
      } catch (error) {
        router.push("/sign-in");
      }
    };
    checkSession();
  }, [router]);

  if (loading) return <Loading />;

  return children;
};

export default ProtectedRoute;
