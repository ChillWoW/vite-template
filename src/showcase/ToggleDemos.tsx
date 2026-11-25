import { useState } from "react";
import { BookmarkSimpleIcon, TextAlignCenterIcon, TextAlignLeftIcon, TextAlignRightIcon } from "@phosphor-icons/react";
import { Toggle } from "../ui";

export function ControlledToggleDemo() {
    const [saved, setSaved] = useState(false);
    return (
        <div className="flex items-center gap-3 text-sm">
            <Toggle variant="outline" pressed={saved} onPressedChange={setSaved}>
                <BookmarkSimpleIcon weight={saved ? "fill" : "regular"} />
                {saved ? "Saved" : "Save"}
            </Toggle>
            <span className="text-muted">({saved ? "pressed" : "not pressed"})</span>
        </div>
    );
}

type Align = "left" | "center" | "right";

export function ControlledToggleGroupDemo() {
    const [align, setAlign] = useState<Align[]>(["left"]);
    return (
        <div className="flex items-center gap-3 text-sm">
            <Toggle.Group<Align>
                value={align}
                // Keep one item pressed: ignore the change that would empty the group.
                onValueChange={(next) => next.length > 0 && setAlign(next)}
                size="icon-sm"
                aria-label="Text alignment"
            >
                <Toggle value="left" aria-label="Align left"><TextAlignLeftIcon /></Toggle>
                <Toggle value="center" aria-label="Align center"><TextAlignCenterIcon /></Toggle>
                <Toggle value="right" aria-label="Align right"><TextAlignRightIcon /></Toggle>
            </Toggle.Group>
            <code className="text-xs text-muted">{JSON.stringify(align)}</code>
        </div>
    );
}
