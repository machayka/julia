import { Skeleton } from "@/components/ui/skeleton";

export function SkeletonRecommendation() {
  return (
    <div className="flex flex-col space-y-3 mt-16">
      <Skeleton className="h-[300px] w-full rounded-xl" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-[320px]" />
        <Skeleton className="h-4 w-[320px]" />
      </div>
    </div>
  );
}
