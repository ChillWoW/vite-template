import type { ReactNode } from "react";
import {
    CopyIcon,
    EnvelopeSimpleIcon,
    FloppyDiskIcon,
    MagnifyingGlassIcon,
    PaperPlaneRightIcon,
    PlusIcon,
    TextBIcon,
    TextItalicIcon,
    TextStrikethroughIcon,
    TextUnderlineIcon,
    TrashIcon,
} from "@phosphor-icons/react";
import { Button, Field, Input, Spinner, Switch, Tooltip } from "../ui";
import { BodyPortalDemo, ContainerPortalDemo } from "./PortalDemos";
import { ControlledSwitchDemo, FormSwitchDemo } from "./SwitchDemos";
import { Variant } from "./Variant";

export interface Demo {
    name: string;
    render: () => ReactNode;
}

// Add new components here; the sidebar picks them up automatically.
export const demos: Demo[] = [
    {
        name: "Button",
        render: () => (
            <>
                <Variant label="Variants">
                    <Button>Default</Button>
                    <Button variant="secondary">Secondary</Button>
                    <Button variant="outline">Outline</Button>
                    <Button variant="ghost">Ghost</Button>
                    <Button variant="destructive">Destructive</Button>
                    <Button variant="destructive-outline">Destructive outline</Button>
                    <Button variant="link">Link</Button>
                </Variant>
                <Variant label="Sizes">
                    <Button size="xs">Extra small</Button>
                    <Button size="sm">Small</Button>
                    <Button size="md">Medium</Button>
                    <Button size="lg">Large</Button>
                    <Button size="xl">Extra large</Button>
                </Variant>
                <Variant label="Icon sizes">
                    <Button size="icon-xs" aria-label="Add"><PlusIcon /></Button>
                    <Button size="icon-sm" aria-label="Add"><PlusIcon /></Button>
                    <Button size="icon-md" aria-label="Add"><PlusIcon /></Button>
                    <Button size="icon-lg" aria-label="Add"><PlusIcon /></Button>
                    <Button size="icon-xl" aria-label="Add"><PlusIcon /></Button>
                </Variant>
                <Variant label="With icon">
                    <Button><PlusIcon />New item</Button>
                    <Button variant="outline"><PlusIcon />New item</Button>
                    <Button variant="destructive"><TrashIcon />Delete</Button>
                    <Button variant="destructive-outline"><TrashIcon />Delete</Button>
                </Variant>
                <Variant label="Loading">
                    <Button size="xs" loading>Saving</Button>
                    <Button size="sm" loading>Saving</Button>
                    <Button size="md" loading>Saving</Button>
                    <Button size="lg" loading>Saving</Button>
                    <Button size="xl" loading>Saving</Button>
                    <Button size="icon-md" variant="outline" loading aria-label="Add"><PlusIcon /></Button>
                    <Button size="icon-xl" variant="secondary" loading aria-label="Add"><PlusIcon /></Button>
                </Variant>
                <Variant label="Disabled">
                    <Button disabled>Default</Button>
                    <Button variant="secondary" disabled>Secondary</Button>
                    <Button variant="outline" disabled>Outline</Button>
                    <Button variant="destructive" disabled>Destructive</Button>
                    <Button variant="destructive-outline" disabled>Destructive outline</Button>
                </Variant>
            </>
        ),
    },
    {
        name: "Field",
        render: () => (
            <>
                <Variant label="Basic">
                    <div className="flex w-full max-w-xs flex-col gap-6">
                        <Field>
                            <Field.Label>Name</Field.Label>
                            <Input placeholder="Jane Doe" />
                        </Field>
                        <Field>
                            <Field.Label>Username</Field.Label>
                            <Input placeholder="jane" />
                            <Field.Description>Shown on your public profile.</Field.Description>
                        </Field>
                    </div>
                </Variant>
                <Variant label="Validation (on blur)">
                    <div className="flex w-full max-w-xs flex-col gap-6">
                        <Field validationMode="onBlur">
                            <Field.Label>Email</Field.Label>
                            <Input type="email" required placeholder="name@example.com" />
                            <Field.Error match="valueMissing">Email is required.</Field.Error>
                            <Field.Error match="typeMismatch">Enter a valid email.</Field.Error>
                        </Field>
                        <Field
                            validationMode="onChange"
                            validate={(value) =>
                                typeof value === "string" && value.length > 0 && value.length < 3
                                    ? "At least 3 characters."
                                    : null
                            }
                        >
                            <Field.Label>Handle</Field.Label>
                            <Input.Group>
                                <Input.Addon>@</Input.Addon>
                                <Input placeholder="jane" />
                            </Input.Group>
                            <Field.Description>Validated as you type.</Field.Description>
                            <Field.Error />
                        </Field>
                    </div>
                </Variant>
                <Variant label="States">
                    <div className="flex w-full max-w-xs flex-col gap-6">
                        <Field invalid>
                            <Field.Label>Username</Field.Label>
                            <Input defaultValue="admin" />
                            <Field.Error match>This username is taken.</Field.Error>
                        </Field>
                        <Field disabled>
                            <Field.Label>Organization</Field.Label>
                            <Input defaultValue="Acme Inc." />
                            <Field.Description>Managed by your admin.</Field.Description>
                        </Field>
                    </div>
                </Variant>
            </>
        ),
    },
    {
        name: "Input",
        render: () => (
            <>
                <Variant label="Sizes">
                    <div className="flex w-full max-w-xs flex-col gap-3">
                        <Input size="xs" placeholder="Extra small" />
                        <Input size="sm" placeholder="Small" />
                        <Input size="md" placeholder="Medium" />
                        <Input size="lg" placeholder="Large" />
                        <Input size="xl" placeholder="Extra large" />
                    </div>
                </Variant>
                <Variant label="Types">
                    <div className="flex w-full max-w-xs flex-col gap-3">
                        <Input type="email" placeholder="name@example.com" />
                        <Input type="password" defaultValue="hunter22" />
                        <Input type="number" placeholder="0" />
                        <Input type="search" placeholder="Search..." />
                        <Input type="file" />
                    </div>
                </Variant>
                <Variant label="States">
                    <div className="flex w-full max-w-xs flex-col gap-3">
                        <Input defaultValue="Filled" />
                        <Input placeholder="Disabled" disabled />
                        <Input defaultValue="Read only" readOnly />
                        <Input defaultValue="Invalid" aria-invalid />
                    </div>
                </Variant>
                <Variant label="With button">
                    <div className="flex w-full max-w-sm gap-2">
                        <Input type="email" placeholder="name@example.com" />
                        <Button>Subscribe</Button>
                    </div>
                </Variant>
                <Variant label="Group">
                    <div className="flex w-full max-w-xs flex-col gap-3">
                        <Input.Group>
                            <Input.Addon><MagnifyingGlassIcon /></Input.Addon>
                            <Input type="search" placeholder="Search..." />
                        </Input.Group>
                        <Input.Group>
                            <Input.Addon>https://</Input.Addon>
                            <Input placeholder="example.com" />
                        </Input.Group>
                        <Input.Group>
                            <Input type="number" placeholder="0.00" />
                            <Input.Addon>USD</Input.Addon>
                        </Input.Group>
                        <Input.Group>
                            <Input.Addon><EnvelopeSimpleIcon /></Input.Addon>
                            <Input type="email" placeholder="name@example.com" />
                            <Input.Addon>
                                <Button size="icon-xs" variant="ghost" aria-label="Send">
                                    <PaperPlaneRightIcon />
                                </Button>
                            </Input.Addon>
                        </Input.Group>
                        <Input.Group>
                            <Input.Addon><MagnifyingGlassIcon /></Input.Addon>
                            <Input defaultValue="Invalid" aria-invalid />
                        </Input.Group>
                        <Input.Group>
                            <Input.Addon><MagnifyingGlassIcon /></Input.Addon>
                            <Input placeholder="Disabled" disabled />
                        </Input.Group>
                    </div>
                </Variant>
                <Variant label="Group sizes">
                    <div className="flex w-full max-w-xs flex-col gap-3">
                        {(["xs", "sm", "md", "lg", "xl"] as const).map((size) => (
                            <Input.Group key={size} size={size}>
                                <Input.Addon><MagnifyingGlassIcon /></Input.Addon>
                                <Input placeholder={`Search (${size})`} />
                            </Input.Group>
                        ))}
                    </div>
                </Variant>
            </>
        ),
    },
    {
        name: "Portal",
        render: () => (
            <>
                <Variant label="Default (document.body)">
                    <BodyPortalDemo />
                </Variant>
                <Variant label="Custom container">
                    <ContainerPortalDemo />
                </Variant>
            </>
        ),
    },
    {
        name: "Spinner",
        render: () => (
            <>
                <Variant label="Sizes">
                    <Spinner size="xs" />
                    <Spinner size="sm" />
                    <Spinner size="md" />
                    <Spinner size="lg" />
                    <Spinner size="xl" />
                </Variant>
                <Variant label="Colors">
                    <Spinner />
                    <Spinner className="text-accent" />
                    <Spinner className="text-info" />
                    <Spinner className="text-success" />
                    <Spinner className="text-warning" />
                    <Spinner className="text-danger" />
                </Variant>
            </>
        ),
    },
    {
        name: "Switch",
        render: () => (
            <>
                <Variant label="Sizes">
                    <Switch size="sm" aria-label="Small" defaultChecked />
                    <Switch size="md" aria-label="Medium" defaultChecked />
                    <Switch size="lg" aria-label="Large" defaultChecked />
                </Variant>
                <Variant label="States">
                    <Switch aria-label="Off" />
                    <Switch aria-label="On" defaultChecked />
                    <Switch aria-label="Disabled off" disabled />
                    <Switch aria-label="Disabled on" disabled defaultChecked />
                    <Switch aria-label="Read only" readOnly defaultChecked />
                </Variant>
                <Variant label="With label">
                    <ControlledSwitchDemo />
                </Variant>
                <Variant label="Settings (Field)">
                    <div className="flex w-full max-w-sm flex-col divide-y divide-border">
                        {[
                            { label: "Push notifications", description: "Mentions and direct messages.", on: true },
                            { label: "Email digest", description: "A weekly summary of activity.", on: false },
                            { label: "Beta features", description: "Managed by your admin.", on: false, disabled: true },
                        ].map((s) => (
                            <Field key={s.label} disabled={s.disabled} className="py-3 first:pt-0 last:pb-0">
                                <Field.Label className="flex w-full cursor-pointer items-center justify-between gap-4 data-disabled:cursor-not-allowed">
                                    {s.label}
                                    <Switch defaultChecked={s.on} />
                                </Field.Label>
                                <Field.Description>{s.description}</Field.Description>
                            </Field>
                        ))}
                    </div>
                </Variant>
                <Variant label="Validation">
                    <Field validationMode="onChange" className="w-fit">
                        <Field.Label className="flex cursor-pointer items-center gap-3">
                            <Switch required defaultChecked />
                            I accept the terms
                        </Field.Label>
                        <Field.Description>Required. Turn it off to see the error.</Field.Description>
                        <Field.Error match="valueMissing">You must accept the terms.</Field.Error>
                    </Field>
                </Variant>
                <Variant label="Form values">
                    <FormSwitchDemo />
                </Variant>
            </>
        ),
    },
    {
        name: "Tooltip",
        render: () => (
            <>
                <Variant label="Basic">
                    <Tooltip content="Add item">
                        <Button size="icon-md" variant="outline" aria-label="Add item"><PlusIcon /></Button>
                    </Tooltip>
                    <Tooltip content="Copy link">
                        <Button size="icon-md" variant="outline" aria-label="Copy link"><CopyIcon /></Button>
                    </Tooltip>
                    <Tooltip content="Delete">
                        <Button size="icon-md" variant="destructive-outline" aria-label="Delete"><TrashIcon /></Button>
                    </Tooltip>
                </Variant>
                <Variant label="Sides">
                    {(["top", "right", "bottom", "left"] as const).map((side) => (
                        <Tooltip key={side} content={`On the ${side}`} side={side}>
                            <Button variant="outline">{side}</Button>
                        </Tooltip>
                    ))}
                </Variant>
                <Variant label="Delay">
                    {[0, 300, 600, 1200].map((delay) => (
                        <Tooltip key={delay} content={`Opened after ${delay}ms`} delay={delay}>
                            <Button variant="outline">{delay}ms</Button>
                        </Tooltip>
                    ))}
                    <Tooltip content="Lingers for 500ms" delay={0} closeDelay={500}>
                        <Button variant="outline">500ms close delay</Button>
                    </Tooltip>
                </Variant>
                <Variant label="Grouped (Provider)">
                    <Tooltip.Provider delay={400}>
                        <div className="flex gap-1 rounded-md border border-border p-1">
                            <Tooltip content="Bold">
                                <Button size="icon-sm" variant="ghost" aria-label="Bold"><TextBIcon /></Button>
                            </Tooltip>
                            <Tooltip content="Italic">
                                <Button size="icon-sm" variant="ghost" aria-label="Italic"><TextItalicIcon /></Button>
                            </Tooltip>
                            <Tooltip content="Underline">
                                <Button size="icon-sm" variant="ghost" aria-label="Underline"><TextUnderlineIcon /></Button>
                            </Tooltip>
                            <Tooltip content="Strikethrough">
                                <Button size="icon-sm" variant="ghost" aria-label="Strikethrough"><TextStrikethroughIcon /></Button>
                            </Tooltip>
                        </div>
                    </Tooltip.Provider>
                </Variant>
                <Variant label="Rich content (compound)">
                    <Tooltip>
                        <Tooltip.Trigger render={<Button variant="outline" />}>
                            <FloppyDiskIcon />Save
                        </Tooltip.Trigger>
                        <Tooltip.Content side="bottom" className="flex items-center gap-2">
                            Save changes
                            <kbd className="rounded border border-border bg-surface px-1 font-sans text-[10px] text-muted">
                                Ctrl S
                            </kbd>
                        </Tooltip.Content>
                    </Tooltip>
                    <Tooltip>
                        <Tooltip.Trigger render={<Button variant="link" />}>What's this?</Tooltip.Trigger>
                        <Tooltip.Content className="px-3 py-2">
                            <p className="font-medium">Longer tooltips wrap</p>
                            <p className="text-muted">
                                Content is capped at max-w-xs, so a sentence or two stays readable.
                            </p>
                        </Tooltip.Content>
                    </Tooltip>
                </Variant>
                <Variant label="Options">
                    <Tooltip content="With arrow" arrow>
                        <Button variant="outline">Arrow</Button>
                    </Tooltip>
                    <Tooltip content="Follows the cursor" trackCursorAxis="x" disableHoverablePopup>
                        <Button variant="outline" className="w-64">Track cursor (x)</Button>
                    </Tooltip>
                    <Tooltip content="Click me to close" closeOnClick>
                        <Button variant="outline">Close on click</Button>
                    </Tooltip>
                    <Tooltip content="You won't see this" disabled>
                        <Button variant="outline">Disabled tooltip</Button>
                    </Tooltip>
                </Variant>
            </>
        ),
    },
];
