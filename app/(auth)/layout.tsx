import SignInImage1 from "@/public/SignInImage1.png";
import Image from "next/image";
import { AspectRatio } from "@/components/ui/aspect-ratio";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative grid min-h-screen grid-cols-2 overflow-x-hidden max-lg:grid-cols-3 max-sm:grid-cols-1 sm:overflow-y-hidden">
      <div className="relative inset-0 z-50 flex justify-center w-full m-auto transform max-lg:col-span-2 max-sm:absolute max-sm:left-1/2 max-sm:top-1/2 max-sm:col-span-1 max-sm:-translate-x-1/2 max-sm:-translate-y-3/4">
        <div className="container max-w-[446px] px-4">{children}</div>
      </div>

      <AspectRatio>
        <Image
          src={SignInImage1}
          alt="House in the mountain"
          className="absolute inset-0 object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority
          fill
        />
      </AspectRatio>
    </div>
  );
}
