import ProductDetail from "@/components/product-detail"

export default async function ProductPage({ params }: { params: { id: string } }) {
  // Ensure id is properly handled before passing it to the component
  const id = params.id
  return <ProductDetail id={id} />
}

