import { Loader2 } from "lucide-react";
import React from "react";

export default function Loading() {
  return (
    <div className="h-screen flex items-center justify-center">
      <Loader2 className="h-10 w-10 animate-spin" />
    </div>
  );
}
