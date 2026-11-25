import { useRef, useState } from "react";
import { XIcon } from "@phosphor-icons/react";
import { Button, Portal } from "../ui";

export function BodyPortalDemo() {
    const [open, setOpen] = useState(false);
    return (
        // overflow-hidden would clip the card if it weren't portaled out
        <div className="overflow-hidden">
            <Button variant="outline" onClick={() => setOpen((o) => !o)}>
                {open ? "Hide" : "Show"} portaled card
            </Button>
            {open && (
                <Portal>
                    <div className="fixed right-6 bottom-6 flex items-center gap-3 rounded-md border border-border bg-raised p-4 text-sm shadow-lg">
                        Rendered in document.body
                        <Button size="icon-xs" variant="ghost" aria-label="Close" onClick={() => setOpen(false)}>
                            <XIcon />
                        </Button>
                    </div>
                </Portal>
            )}
        </div>
    );
}

export function ContainerPortalDemo() {
    const target = useRef<HTMLDivElement>(null);
    return (
        <div className="flex w-full flex-col gap-3">
            <div ref={target} className="rounded-md border border-dashed border-border p-4 text-sm text-muted">
                Target container:
            </div>
            <div className="rounded-md border border-border p-4 text-sm text-muted">
                Source (Portal declared here)
                <Portal container={target}>
                    <span className="ml-2 text-text">Hello from the source</span>
                </Portal>
            </div>
        </div>
    );
}
