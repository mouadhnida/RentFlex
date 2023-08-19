export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  return (
    <div className="m-10">
      <h1 className="text-4xl font-medium">Account</h1>
      <p className="text-gray">Manage your account settings</p>
      <div className=" h-[575px] w-[1000px] animate-pulse rounded border dark:border-border"></div>
    </div>
  );
}
