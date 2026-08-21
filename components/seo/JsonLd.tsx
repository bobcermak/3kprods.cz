import { type FC } from "react";
import type { SchemaNode } from "@/lib/seo/schema";
import { buildGraph } from "@/lib/seo/schema";

type JsonLdProps = {
  nodes: SchemaNode[]
}
const JsonLd: FC<JsonLdProps> = ({ nodes }) => (
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{ __html: JSON.stringify(buildGraph(...nodes)).replace(/</g, "\u003c") }}
  />
);
export default JsonLd;