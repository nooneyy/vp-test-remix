import {
    Product,
    ProductSkeleton,
    type SmallProduct,
} from "~/components/store/products/product";

export const ProductSection = ({
    name,
    products,
    priority,
}: {
    name: string;
    products: SmallProduct[];
    priority?: boolean;
}) => {
    return (
        <ProductSectionWrapper name={name}>
            {products.map((product) => (
                <Product key={product.slug} productInfo={product} priority={priority} />
            ))}
        </ProductSectionWrapper>
    );
};

export const ProductSectionSkeleton = ({ name }: { name: string }) => {
    return (
        <ProductSectionWrapper name={name}>
            {[...Array(4)].map((_, idx) => (
                <ProductSkeleton key={idx} />
            ))}
        </ProductSectionWrapper>
    );
};

const ProductSectionWrapper = ({
    name,
    children,
}: {
    name: string;
    children: React.ReactNode;
}) => {
    return (
        <section className="flex flex-col items-center justify-center pt-10 space-y-10 md:px-[4%] lg:px-[7%] xl:px-[8%] 2xl:px-[10%]">
            <p className="text-3xl lg:text-4xl font-semibold tracking-tight lg:self-start">
                {name}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 md:gap-16 lg:gap-12 xl:gap-16">
                {children}
            </div>
        </section>
    );
};