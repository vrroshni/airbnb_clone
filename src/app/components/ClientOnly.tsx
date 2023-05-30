"use client";
import React, { useState, useEffect } from "react";

interface ClientOnlyProps {
  children: React.ReactNode;
}

const ClientOnly: React.FC<ClientOnlyProps> = ({ children }) => {
  const [hasmounted, setHasMounted] = useState(false);
  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasmounted) {
    return <p>Loading...</p>;
  }
  return (
    <>{children}</>
  );
};

export default ClientOnly;
