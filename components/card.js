import Link from "next/link";
import Image from "next/image";

export default function Card({ article }) {
  return (
    <Link href={`/articles/${article.id}`}>
      <div className="border rounded overflow-hidden hover:shadow-md cursor-pointer">
        <Image
          src={article.image || "/placeholder.png"}
          alt={article.title}
          width={600}
          height={300}
          className="w-full object-cover"
        />
        <div className="p-4">
          <h3 className="font-semibold">{article.title}</h3>
          <p className="text-sm text-gray-600 mt-2">{article.summary}</p>
        </div>
      </div>
    </Link>
  );
}
