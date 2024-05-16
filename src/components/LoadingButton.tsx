import React from "react";
import { Button } from "./ui/button";
import { Loader } from "lucide-react";

export default function LoadingButton() {
  return (
    <Button disabled>
      <Loader className="mr-2 h-4 w-4 animate-spin" />
      Loading
    </Button>
  );
}
