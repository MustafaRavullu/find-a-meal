"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import { EffectCards } from "swiper/modules";
import Image from "next/image";
import { buttonVariants } from "./ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { ArrowDownRight, MousePointer2 } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import NutritionValues from "./nutrition-values";

export default function Carousel({ data }: any) {
  return (
    <Swiper
      effect={"cards"}
      grabCursor={true}
      modules={[EffectCards]}
      slidesPerView={"auto"}
      centeredSlides
      className="h-fit w-[300px] sm:w-[400px] md:w-[500px]"
    >
      {data.map((item: any, index: number) => (
        <SwiperSlide key={index} className="rounded-md">
          <div className="h-full  flex flex-col justify-center items-center">
            <Card className="bg-[#1d1d1f]">
              <CardHeader className="p-3">
                <Image
                  src={item.recipe.images.LARGE.url}
                  alt={item.recipe.label}
                  width={600}
                  height={600}
                  className="rounded-md"
                  priority
                />
              </CardHeader>
              <CardContent className="p-3">
                <div className="font-bold text-lg text-center">
                  {item.recipe.label}
                </div>
                <div className="flex flex-col mt-2">
                  <div className="text-sm grid grid-cols-2 gap-3">
                    <NutritionValues
                      text="⚡Calorie"
                      yieldVal={item.recipe.yield}
                      totalVal={item.recipe.totalNutrients.ENERC_KCAL.quantity}
                    />
                    <NutritionValues
                      text="🥩 Protein"
                      yieldVal={item.recipe.yield}
                      totalVal={item.recipe.totalNutrients.PROCNT.quantity}
                    />
                    <NutritionValues
                      text="🧈 Fat"
                      yieldVal={item.recipe.yield}
                      totalVal={item.recipe.totalNutrients.FAT.quantity}
                    />
                    <NutritionValues
                      text="🍚 Carb"
                      yieldVal={item.recipe.yield}
                      totalVal={item.recipe.totalNutrients.CHOCDF.quantity}
                    />
                  </div>
                </div>
              </CardContent>
              <CardFooter className="p-3">
                <Link
                  className={cn(
                    buttonVariants({ variant: "default" }),
                    "group w-full"
                  )}
                  href={item.recipe.url}
                  target="_blank"
                  rel="norefferer noopener"
                  title={item.recipe.source}
                >
                  View Full Recipe
                  <ArrowDownRight className="w-4 h-4 ml-2 -rotate-90 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                </Link>
              </CardFooter>
            </Card>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
