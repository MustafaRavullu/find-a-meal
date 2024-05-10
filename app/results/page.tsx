import Carousel from "@/components/carousel";
import MaxWidthWrapper from "@/components/max-width-wrapper";
import { cn, getMealsData } from "@/lib/utils";
import { ArrowLeft, ChevronLeft } from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";

export default async function Page({
  searchParams,
}: {
  searchParams: { dietType: string; cuisineType: string; mealType: string };
}) {
  const data = await getMealsData(
    searchParams.dietType,
    searchParams.cuisineType,
    searchParams.mealType
  );
  return (
    <main className="flex items-center flex-col justify-start h-screen overflow-hidden gap-3">
      <MaxWidthWrapper className="max-w-screen-sm mt-5">
        <header className="flex items-center gap-2 justify-between">
          <Link
            href={"/"}
            className={cn(
              buttonVariants({ variant: "default", size: "icon" }),
              "rounded-full"
            )}
          >
            <ChevronLeft />
          </Link>
          <div className="flex gap-1">
            <Badge>{searchParams.dietType}</Badge>
            <Badge>{searchParams.cuisineType}</Badge>
            <Badge>{searchParams.mealType}</Badge>
          </div>
        </header>
      </MaxWidthWrapper>
      <div className="flex-1 flex items-center justify-center">
        <Carousel data={data.hits} />
      </div>
    </main>
  );
}
