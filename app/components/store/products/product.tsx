import { Link } from "@remix-run/react";
import { Image } from "@unpic/react";
import { products } from "~/lib/db/schema";
import { Badge } from "~/components/ui/badge";
import { getBadgeClasses, getBadgeName } from "~/lib/utils";
import { Separator } from "~/components/ui/separator";
import { Skeleton } from "~/components/ui/skeleton";

export type SmallProduct = Pick<
    typeof products.$inferSelect,
    "slug" | "taxedPrice" | "name" | "picturePath" | "badges"
>;

export const Product = ({
    productInfo,
    priority,
}: {
    productInfo: SmallProduct;
    priority?: boolean;
}) => {
    return (
        <Link to={`/produkty/${productInfo.slug}`}>
            <article className="flex flex-col items-center group px-6 md:px-0">
                <Image
                    src={productInfo.picturePath}
                    width={320}
                    height={320}
                    priority={priority}
                    alt={`Fotka pro ${productInfo.name}`}
                    className="rounded-2xl group-hover:scale-105 transition-transform"
                />
                <div className="flex flex-col px-1 pt-4 pb-8 md:pb-4 items-start justify-center gap-2 w-full group-hover:translate-y-1 transition-transform">
                    <div className="flex items-center gap-4 w-full">
                        <p className="scroll-m-20 font-semibold tracking-tight group-hover:underline">
                            {productInfo.name}
                        </p>
                        <div className="flex items-center gap-4 ml-auto mr-2">
                            <Badge
                                variant="destructive"
                                className={`${getBadgeClasses(productInfo.badges[0])}`}
                            >
                                {getBadgeName(productInfo.badges[0])}
                            </Badge>
                        </div>
                    </div>
                    <Separator />
                    <p className="leading-7">{productInfo.taxedPrice} Kč</p>
                </div>
            </article>
        </Link>
    );
};

export const ProductSkeleton = () => {
    return (
        <article className="flex flex-col items-center">
            <Skeleton className="w-full h-full aspect-square rounded-2xl" />
            <div className="flex flex-col px-1 pt-4 pb-8 md:pb-4 items-start justify-center gap-2 w-full">
                <div className="flex items-center gap-4 w-full">
                    <div className="flex flex-col gap-4 h-full mr-4">
                        <Skeleton className="w-[135.77px] h-[18px]" />
                        <Skeleton className="w-[120px] h-[18px]" />
                    </div>
                    <div className="flex items-center gap-4 ml-auto mr-2">
                        <Skeleton className="w-[71.23px] h-[22px] rounded-full " />
                    </div>
                </div>
                <Separator />
                <Skeleton className="w-[53.53px] h-[28px] rounded-full" />
            </div>
        </article>
    );
};