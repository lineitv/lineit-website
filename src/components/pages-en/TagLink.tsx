import Link from "next/link";
import { TagContent } from "../../type/type";

type Props = {
  tag: TagContent;
};
export default function Tag({ tag }: Props) {
  return (
    <Link href={"/en/posts/tags/[[...slug]]"} as={`/en/posts/tags/${tag.slug}`}>
      <a>{"#" + tag.name}</a>
    </Link>
  );
}
