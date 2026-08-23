import { buildMetadata } from "../../config/seo";
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
  return <BlogController />;
};

export default BlogPage;
