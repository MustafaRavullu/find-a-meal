import MaxWidthWrapper from "@/components/max-width-wrapper";
import { SearchForm } from "@/components/search-form";

export default function Home() {
  return (
    <main className="flex justify-center items-center h-screen">
      <MaxWidthWrapper className="flex flex-col gap-3 justify-center items-center max-w-screen-md">
        <h1 className="text-3xl font-bold">Find A Meal</h1>
        <SearchForm />
      </MaxWidthWrapper>
    </main>
  );
}
