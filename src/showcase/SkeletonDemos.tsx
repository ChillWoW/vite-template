import { useState } from "react";
import { Skeleton, Switch } from "../ui";

export function LoadingToggleSkeletonDemo() {
    const [loading, setLoading] = useState(true);
    return (
        <div className="flex w-full max-w-sm flex-col gap-4">
            <label className="flex items-center gap-2 text-sm">
                <Switch checked={loading} onCheckedChange={setLoading} />
                Loading
            </label>
            <div aria-busy={loading} className="flex items-start gap-3 rounded-md border border-border bg-raised/40 p-4">
                {loading ? (
                    <>
                        <Skeleton className="size-10 rounded-full" />
                        <div className="flex flex-1 flex-col gap-2 pt-0.5">
                            <Skeleton className="h-3.5 w-28" />
                            <Skeleton.Text lines={2} />
                        </div>
                    </>
                ) : (
                    <>
                        <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-hover text-sm font-medium">
                            AL
                        </div>
                        <div className="flex flex-col gap-1">
                            <span className="text-sm font-medium">Ada Lovelace</span>
                            <p className="text-sm text-muted">
                                Wrote the first published algorithm intended for a machine.
                            </p>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}
