import NavBar from "@/components/layout/NavBar";
import Footer from "@/components/layout/Footer";
import { currentUser } from "@clerk/nextjs";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const user = await currentUser();
  const email =
    user?.emailAddresses?.find((e) => e.id === user.primaryEmailAddressId)
      ?.emailAddress ?? "";
  return (
    <div>
      <NavBar user={user} email={email} />
      {children}
      <Footer />
    </div>
  );
}
