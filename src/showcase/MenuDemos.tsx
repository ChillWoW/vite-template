import { useState } from "react";
import {
    CopyIcon,
    DotsThreeIcon,
    DownloadSimpleIcon,
    PencilSimpleIcon,
    ScissorsIcon,
    ClipboardIcon,
    ShareNetworkIcon,
    SlidersHorizontalIcon,
    TrashIcon,
} from "@phosphor-icons/react";
import { Button, ContextMenu, Menu } from "../ui";

export function ActionMenuDemo() {
    const [last, setLast] = useState<string | null>(null);
    return (
        <div className="flex items-center gap-3 text-sm">
            <Menu>
                <Menu.Trigger render={<Button variant="outline" />}>
                    <DotsThreeIcon weight="bold" />Actions
                </Menu.Trigger>
                <Menu.Content>
                    <Menu.Item onClick={() => setLast("Edit")}>
                        <PencilSimpleIcon />Edit<Menu.Shortcut>Ctrl E</Menu.Shortcut>
                    </Menu.Item>
                    <Menu.Item onClick={() => setLast("Duplicate")}>
                        <CopyIcon />Duplicate<Menu.Shortcut>Ctrl D</Menu.Shortcut>
                    </Menu.Item>
                    <Menu.Item onClick={() => setLast("Download")}>
                        <DownloadSimpleIcon />Download
                    </Menu.Item>
                    <Menu.Separator />
                    <Menu.Item variant="destructive" onClick={() => setLast("Delete")}>
                        <TrashIcon />Delete<Menu.Shortcut>Del</Menu.Shortcut>
                    </Menu.Item>
                </Menu.Content>
            </Menu>
            <span className="text-muted">Last action: {last ?? "none"}</span>
        </div>
    );
}

export function OptionsMenuDemo() {
    const [grid, setGrid] = useState(true);
    const [rulers, setRulers] = useState(false);
    const [density, setDensity] = useState("comfortable");
    return (
        <div className="flex items-center gap-3 text-sm">
            <Menu>
                <Menu.Trigger render={<Button variant="outline" />}>
                    <SlidersHorizontalIcon />View
                </Menu.Trigger>
                <Menu.Content className="w-48">
                    <Menu.Group>
                        <Menu.Label>Show</Menu.Label>
                        <Menu.CheckboxItem checked={grid} onCheckedChange={setGrid}>Grid</Menu.CheckboxItem>
                        <Menu.CheckboxItem checked={rulers} onCheckedChange={setRulers}>Rulers</Menu.CheckboxItem>
                        <Menu.CheckboxItem disabled>Guides</Menu.CheckboxItem>
                    </Menu.Group>
                    <Menu.Separator />
                    <Menu.RadioGroup value={density} onValueChange={setDensity}>
                        <Menu.Label>Density</Menu.Label>
                        <Menu.RadioItem value="compact">Compact</Menu.RadioItem>
                        <Menu.RadioItem value="comfortable">Comfortable</Menu.RadioItem>
                        <Menu.RadioItem value="spacious">Spacious</Menu.RadioItem>
                    </Menu.RadioGroup>
                </Menu.Content>
            </Menu>
            <code className="text-xs text-muted">{JSON.stringify({ grid, rulers, density })}</code>
        </div>
    );
}

export function FileContextMenuDemo() {
    const [last, setLast] = useState<string | null>(null);
    const [hidden, setHidden] = useState(false);
    const [sort, setSort] = useState("name");
    return (
        <div className="flex w-full flex-col gap-3 text-sm">
            <ContextMenu>
                <ContextMenu.Trigger className="flex h-48 w-full items-center justify-center rounded-md border border-dashed border-border text-muted data-popup-open:border-muted">
                    Right-click here
                </ContextMenu.Trigger>
                <ContextMenu.Content className="w-52">
                    <ContextMenu.Item onClick={() => setLast("Cut")}>
                        <ScissorsIcon />Cut<ContextMenu.Shortcut>Ctrl X</ContextMenu.Shortcut>
                    </ContextMenu.Item>
                    <ContextMenu.Item onClick={() => setLast("Copy")}>
                        <CopyIcon />Copy<ContextMenu.Shortcut>Ctrl C</ContextMenu.Shortcut>
                    </ContextMenu.Item>
                    <ContextMenu.Item disabled>
                        <ClipboardIcon />Paste<ContextMenu.Shortcut>Ctrl V</ContextMenu.Shortcut>
                    </ContextMenu.Item>
                    <ContextMenu.Separator />
                    <ContextMenu.Sub>
                        <ContextMenu.SubTrigger><ShareNetworkIcon />Share</ContextMenu.SubTrigger>
                        <ContextMenu.Content>
                            <ContextMenu.Item onClick={() => setLast("Share: Email")}>Email</ContextMenu.Item>
                            <ContextMenu.Item onClick={() => setLast("Share: Messages")}>Messages</ContextMenu.Item>
                            <ContextMenu.Item onClick={() => setLast("Share: Copy link")}>Copy link</ContextMenu.Item>
                        </ContextMenu.Content>
                    </ContextMenu.Sub>
                    <ContextMenu.Sub>
                        <ContextMenu.SubTrigger inset>Sort by</ContextMenu.SubTrigger>
                        <ContextMenu.Content>
                            <ContextMenu.RadioGroup value={sort} onValueChange={setSort}>
                                <ContextMenu.RadioItem value="name">Name</ContextMenu.RadioItem>
                                <ContextMenu.RadioItem value="date">Date modified</ContextMenu.RadioItem>
                                <ContextMenu.RadioItem value="size">Size</ContextMenu.RadioItem>
                            </ContextMenu.RadioGroup>
                        </ContextMenu.Content>
                    </ContextMenu.Sub>
                    <ContextMenu.CheckboxItem checked={hidden} onCheckedChange={setHidden}>
                        Show hidden files
                    </ContextMenu.CheckboxItem>
                    <ContextMenu.Separator />
                    <ContextMenu.Item variant="destructive" onClick={() => setLast("Delete")}>
                        <TrashIcon />Delete<ContextMenu.Shortcut>Del</ContextMenu.Shortcut>
                    </ContextMenu.Item>
                </ContextMenu.Content>
            </ContextMenu>
            <code className="text-xs text-muted">
                {JSON.stringify({ last, hidden, sort })}
            </code>
        </div>
    );
}
