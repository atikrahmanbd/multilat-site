import { redirect } from "next/navigation";

// Temporarily Redirect to Domains Page Until Hosting Landing Page Is Built
export default function HostingPage() {
  redirect("/hosting/domains");
}
