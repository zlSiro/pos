import Heading from "@/components/ui/Heading";
import Link from "next/link";


export default function EditProductPage() {
  return (
    <>
      <Link
        href="/admin/products?page=1"
        className="rounded bg-green-400 font-bold py-2 px-10"
      >Volver</Link>

      <Heading>Editar Producto: {}</Heading>

      
    </>
  )
}