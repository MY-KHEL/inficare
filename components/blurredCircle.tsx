import { cn } from "@/lib/utils";

export function BlurredCircle({className}:{className?:string}){
    return(
          <div className={cn("w-64 border-2  blur-[70px] bg-[#CBDBFA]/80 rounded-full aspect-square absolute pointer-events-none",className)}></div>
    )
}