import { ChevronRight, MapPin } from "lucide-react";
import { Skeleton } from "../ui/skeleton";

export const SkeletonItemEmpresa = () => {
    return (
        <Skeleton className="flex justify-between items-center p-4 rounded-xl overflow-hidden max-w-[450px] border bg-[#f4f4f5] dark:bg-[#18181b] transition-all">
            <div className="flex items-center gap-3">
                <Skeleton className="rounded-full border-2 w-[70px] h-[70px] bg-gray-300 dark:bg-[#272728]"></Skeleton>

                <div>
                    <Skeleton className="max-w-32 h-4 mb-2 bg-gray-300 dark:bg-[#272728]"></Skeleton>
                    <div className="flex flex-col gap-1">
                        <Skeleton className="bg-gray-300 dark:bg-[#272728] w-44 lg:w-52 h-4"></Skeleton>
                        <Skeleton className="w-20 h-4 bg-gray-300 dark:bg-[#272728]"></Skeleton>
                    </div>
                </div>
            </div>
            <Skeleton className="flex items-center w-10 h-10 justify-center rounded-full p-2 transition-all bg-gray-300 dark:bg-[#272728]">
                
            </Skeleton>

        </Skeleton>
    );
}