// pages/articles/[id].js

import { useRouter } from "next/router";

export default function ArticlePage() {
  const router = useRouter();
  const { id } = router.query; // get the dynamic ID from URL

  return (
    <div style={{ padding: "40px" }}>
      <h1>Article ID: {id}</h1>
      <p>This is the dynamic article page.</p>
    </div>
  );
}
