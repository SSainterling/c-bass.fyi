// contentlayer.config.ts
import fs from "fs";
import path from "path";
import {
  defineDocumentType,
  makeSource
} from "contentlayer/source-files";
import rehypeSlug from "rehype-slug";
import rehypePrism from "rehype-prism";
var getSlug = (doc) => doc._raw.sourceFileName.replace(/\.mdx$/, "");
var blogComputedFields = {
  slug: {
    type: "string",
    resolve: (doc) => getSlug(doc)
  },
  image: {
    type: "string",
    resolve: (doc) => {
      const imagePath = path.join(
        process.cwd(),
        "public",
        "blog",
        `${getSlug(doc)}/image.png`
      );
      return fs.existsSync(imagePath) ? `/blog/${getSlug(doc)}/image.png` : null;
    }
  },
  og: {
    type: "string",
    resolve: (doc) => `/blog/${getSlug(doc)}/image.png`
  }
};
var Blog = defineDocumentType(() => ({
  name: "Blog",
  filePathPattern: `blog/**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    summary: { type: "string", required: true },
    date: { type: "string", required: true },
    updatedAt: { type: "string", required: false },
    tags: { type: "json", required: false }
  },
  computedFields: blogComputedFields
}));
var projectComputedFields = {
  slug: {
    type: "string",
    resolve: (doc) => getSlug(doc)
  },
  image: {
    type: "string",
    resolve: (doc) => `/projects/${getSlug(doc)}/image.png`
  }
};
var Project = defineDocumentType(() => ({
  name: "Project",
  filePathPattern: `project/**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    summary: { type: "string", required: true },
    longSummary: { type: "string", required: false },
    date: { type: "string", required: true },
    url: { type: "string", required: false },
    tags: { type: "json", required: false }
  },
  computedFields: projectComputedFields
}));
var contentlayer_config_default = makeSource({
  contentDirPath: "content",
  documentTypes: [Blog, Project],
  mdx: {
    rehypePlugins: [rehypeSlug, rehypePrism]
  }
});
export {
  Blog,
  Project,
  contentlayer_config_default as default
};
//# sourceMappingURL=compiled-contentlayer-config-OHSQ7HND.mjs.map
