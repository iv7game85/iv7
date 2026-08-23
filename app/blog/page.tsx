import { buildMetadata } from "../../config/seo";
import { breadcrumbJsonLd, JsonLd } from "../components/structured-data";
import BlogController from "./blog.controller";

export const metadata = buildMetadata({
  title: "Blog & Guides – IV7 Games Latest Updates & Winning Tips",
  description:
    "Explore the latest articles, strategies for color prediction, VIP reward tutorials, and official APK updates for IV7 Game.",
  path: "/blog",
  keywords: [
    "IV7 blog",
    "IV7 game tips",
    "IV7 color prediction strategies",
    "IV7 APK updates",
    "IV7 winning guide",
  ],
});

const BlogPage = () => {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Blog", path: "/blog" },
        ])}
      />
      <BlogController />
    </>
  );
};

export default BlogPage;
