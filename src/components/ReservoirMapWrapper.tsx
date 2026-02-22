import dynamic from "next/dynamic";

const ReservoirMap = dynamic(() => import("./ReservoirMap"), {
  ssr: false,
  loading: () => (
    <div className="glass-card rounded-2xl p-6">
      <div className="w-full h-[500px] rounded-lg bg-muted animate-pulse flex items-center justify-center">
        <span className="text-muted-foreground">Loading map...</span>
      </div>
    </div>
  ),
});

export default function ReservoirMapWrapper() {
  return <ReservoirMap />;
}
