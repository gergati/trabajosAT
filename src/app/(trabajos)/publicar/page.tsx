import { redirect } from "next/navigation";
import { auth } from "../../../../auth.config";
import { PublicarForm } from "./ui/PublicarForm";


export default async function TrabajosPage() {

  const session = await auth()

  if (!session?.user) {
    redirect('/')
  }
  return (
    <div className="px-6 py-8">
      <PublicarForm />
    </div>

  );
}