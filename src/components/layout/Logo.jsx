import { BusFront, MapPinned } from "lucide-react";

export default function Logo() {
  return (
    <div className="flex items-center gap-2 cursor-pointer">
      <div className="relative">
        <MapPinned className="w-9 h-9 text-blue-600" />
        <BusFront className="absolute top-[6px] left-[6px] w-5 h-5 text-white" />
      </div>

      <div>
        <h1 className="text-xl font-extrabold tracking-tight">
          NovaTransit
        </h1>

        <p className="text-xs text-muted-foreground">
          Smart Bus Management
        </p>
      </div>
    </div>
  );
}