import Header from "@/components/layout/Header";
import ProductFeed from "@/components/layout/ProductFeed";
async function getData() {
  const res = await fetch("https://fakestoreapi.com/products/");
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

export default async function Home() {
  const data = await getData();
  console.log(data);
  return (
    <div className="bg-gray-100 w-full">
      <Header />
      <main className="mx-auto max-w-none md:max-w-screen-xl  ">
        {/* Products */}
        <ProductFeed data={data} />
      </main>
    </div>
  );
}
