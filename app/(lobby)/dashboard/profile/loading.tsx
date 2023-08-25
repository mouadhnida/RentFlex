import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export default function Loading() {
  return (
    <div className="m-10 max-lg:-ml-16 max-md:mx-16 max-sm:mx-4">
      <h1 className="text-4xl font-medium">Account</h1>
      <p className="text-gray">Manage your account settings</p>
      <div className=" relative mx-auto mt-5 w-full max-w-[700px]">
        <Card className="border ">
          <CardHeader>
            <CardTitle className="flex justify-center w-full">
              <div className="group relative -top-20 h-[100px] w-[100px] overflow-hidden object-cover max-md:top-0">
                <div className="h-[100px] w-[100px] animate-pulse rounded-full bg-slate-200 dark:bg-border"></div>
              </div>
            </CardTitle>
          </CardHeader>
          <CardContent className="mt-0">
            <form>
              <div className="h-5 my-2 w-28 animate-pulse bg-slate-200 dark:bg-border"></div>
              <div>
                <Input className="w-full h-10 animate-pulse bg-slate-200 dark:bg-border" />
              </div>
              <div className="h-5 my-2 w-28 animate-pulse bg-slate-200 dark:bg-border"></div>
              <div>
                <Input className="w-full h-10 animate-pulse bg-slate-200 dark:bg-border" />
              </div>
              <div className="h-5 my-2 w-28 animate-pulse bg-slate-200 dark:bg-border"></div>
              <div>
                <Input className="w-full h-10 animate-pulse bg-slate-200 dark:bg-border" />
              </div>
              <div className="h-5 my-2 w-28 animate-pulse bg-slate-200 dark:bg-border"></div>
              <div>
                <Input className="w-full h-36 animate-pulse bg-slate-200 dark:bg-border" />
              </div>
              <div>
                <Button className="h-10 my-2 w-36 animate-pulse bg-slate-200 dark:bg-border" />
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
