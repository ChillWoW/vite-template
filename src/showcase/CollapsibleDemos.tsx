import { useState } from "react";
import { Collapsible } from "../ui";

export function ControlledCollapsibleDemo() {
    const [open, setOpen] = useState(false);
    return (
        <div className="flex w-full max-w-sm flex-col gap-2 text-sm">
            <Collapsible open={open} onOpenChange={setOpen}>
                <Collapsible.Trigger>Advanced settings</Collapsible.Trigger>
                <Collapsible.Panel>
                    <p className="pt-2 text-muted">Cache size, log level and experimental flags live here.</p>
                </Collapsible.Panel>
            </Collapsible>
            <span className="text-muted">({open ? "open" : "closed"})</span>
        </div>
    );
}
