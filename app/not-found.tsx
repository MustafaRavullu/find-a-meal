import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="h-screen flex items-center justify-center flex-col">
      <div className="grid h-screen place-content-center bg-transparent px-4">
        <div className="text-center">
          <h1 className="text-9xl font-black text-gray-200">404</h1>

          <p className="text-2xl font-bold tracking-tight text-white sm:text-4xl">
            Uh-oh!
          </p>

          <p className="mt-4 text-gray-500">We can not find that page.</p>
          <Link
            href={"/"}
            className={cn(
              buttonVariants({ variant: "default" }),
              "group mt-3 font-semibold"
            )}
          >
            <ChevronLeft className="h-4 w-4 mr-2 group-hover:-translate-x-2 transition-all" />
            Go To Search
          </Link>
        </div>
      </div>
    </div>
  );
}
