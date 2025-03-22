import ProductDetail from "@/components/product-detail"

export default async function ProductPage({ params }: { params: { id: string } }) {
  return <ProductDetail id={params.id} />
}

