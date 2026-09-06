import { redirect } from "next/navigation";

export default function TrainingEnrollRedirect({ searchParams }: { searchParams: { [key: string]: string | undefined } }) {
  const plan = searchParams.plan === "advanced" ? "advanced" : "basic";
  redirect(`/training/${plan}/checkout`);
}
