import Carousel from "@/components/carousel";

export default function Page({
  searchParams,
}: {
  searchParams: { dietType: string; cuisineType: string; mealType: string };
}) {
  return (
    <main className="flex items-center justify-center h-screen overflow-hidden">
      <Carousel />
    </main>
  );
}
