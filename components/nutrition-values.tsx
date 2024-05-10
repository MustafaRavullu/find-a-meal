export default function NutritionValues({
  text,
  yieldVal,
  totalVal,
}: {
  text: string;
  yieldVal: number;
  totalVal: number;
}) {
  return (
    <div className="border p-1 rounded-md h-full w-full flex justify-between ">
      <span>{text}</span>
      <span>{(totalVal / yieldVal).toFixed(0)}g</span>
    </div>
  );
}
