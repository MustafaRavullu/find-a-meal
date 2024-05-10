import MaxWidthWrapper from "@/components/max-width-wrapper";
import { SearchForm } from "@/components/search-form";
import { Loader2 } from "lucide-react";
import { Suspense } from "react";

export default function Home() {
  return (
    <main className="flex justify-center items-center h-screen">
      <MaxWidthWrapper className="flex flex-col gap-3 justify-center items-center max-w-screen-md">
        <h1 className="text-3xl font-bold">Find A Meal</h1>
        <Suspense
          fallback={
            <div className="h-screen flex justify-center items-center">
              <Loader2 className="h-10 w-10 animate-spin" />
            </div>
          }
        >
          <SearchForm />
        </Suspense>
      </MaxWidthWrapper>
    </main>
  );
}
