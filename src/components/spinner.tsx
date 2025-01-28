import { Loader2 } from "lucide-react";

export function Spinner(props: {
  size: number;
  children?: React.ReactNode;
}) {
  return (
    <Loader2 size={props.size ?? 14} className={"animate-spin text-pcb-blue-200"} />
  );
}