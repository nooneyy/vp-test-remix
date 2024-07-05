import { SQL, sql } from "drizzle-orm";
import { sqliteTable, text, integer, index } from "drizzle-orm/sqlite-core";

export const products = sqliteTable(
  "products",
  {
    id: integer("id").primaryKey({ autoIncrement: true }),
    name: text("name").notNull().unique(),
    inStock: integer("in_stock", { mode: "boolean" }).notNull(),
    visible: integer("visible", { mode: "boolean" }).notNull(),
    price: integer("price", { mode: "number" }).notNull(),
    sales: integer("sales", { mode: "number" }).default(0).notNull(),
    badges: text("badges", { mode: "json" }).notNull().$type<string[]>(),
    createdAt: text("created_at")
      .default(sql`CURRENT_TIMESTAMP`)
      .notNull(),
    taxedPrice: integer("taxed_price").generatedAlwaysAs(
      (): SQL => sql`round(${products.price} * 1.21)`,
      { mode: "stored" },
    ),
    picturePath: text("picture_path").notNull(),
    slug: text("slug").notNull().unique(),
    descriptionBig: text("description_big").notNull(),
    description: text("description", { mode: "json" })
      .notNull()
      .$type<[string, string][]>(),
  },
  (table) => {
    return {
      visibleIdx: index("visible_idx").on(table.visible),
      badgesIdx: index("badges_idx").on(table.badges),
    };
  },
);

export const user = sqliteTable("user", {
  id: text("id").notNull().primaryKey(),
  email: text("email").notNull().unique(),
  hashedPassword: text("hashed_password").notNull(),
  role: text("role", { enum: ["user", "admin"] })
    .notNull()
    .default("user"),
});

export const carts = sqliteTable("carts", {
  id: text("id").notNull().primaryKey(),
  userId: text("user_id").references(() => user.id),
  contents: text("contents", { mode: "json" })
    .notNull()
    .$type<[string, number][]>(),
  modifiedAt: text("modified_at")
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull(),
});

export const session = sqliteTable("session", {
  id: text("id").notNull().primaryKey(),
  userId: text("user_id")
    .notNull()
    .references(() => user.id),
  expiresAt: integer("expires_at").notNull(),
});

type Address = {
  company?: string;
  name: string;
  line1: string;
  line2?: string;
  postalCode: string;
  city: string;
};

type Price = {
  subtotal: number;
  total: number;
  shipping: number;
};

type OrderProduct = {
  name: string;
  quantity: number;
  unitAmount: number;
  discountedBy: number;
  amountTotal: number;
};

export const orders = sqliteTable("orders", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  orderStatus: text("order_status", {
    enum: ["pending", "finished", "cancelled", "failed"],
  }).notNull(),
  paymentIntent: text("payment_intent").notNull(),
  sessionId: text("session_id").notNull(),
  createdAt: text("created_at").notNull(),
  billingName: text("billing_name"),
  shippingAddress: text("shipping_address", { mode: "json" })
    .notNull()
    .$type<Address>(),
  email: text("email").notNull(),
  phoneNumber: text("phone_number").notNull(),
  couponUsed: text("coupon_used"),
  price: text("price", { mode: "json" }).notNull().$type<Price>(),
  products: text("products", { mode: "json" })
    .notNull()
    .$type<OrderProduct[]>(),
});
