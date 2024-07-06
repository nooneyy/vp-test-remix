import { db } from "~/lib/db/client";

export const queryNewestProducts = async () =>
    await db.query.products.findMany({
        columns: {
            name: true,
            taxedPrice: true,
            slug: true,
            picturePath: true,
            badges: true,
        },
        where: (products, { eq }) => eq(products.visible, true),
        orderBy: (products, { desc }) => [
            desc(products.createdAt),
            desc(products.id),
        ],
        limit: 4,
    });

export const queryMostPopularProducts = async () =>
    db.query.products.findMany({
        columns: {
            name: true,
            taxedPrice: true,
            slug: true,
            picturePath: true,
            badges: true,
        },
        where: (products, { eq }) => eq(products.visible, true),
        orderBy: (products, { desc }) => [desc(products.sales)],
        limit: 4,
    });