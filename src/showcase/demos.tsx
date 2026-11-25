import type { ReactNode } from "react";
import {
    BellIcon,
    CopyIcon,
    DotsThreeVerticalIcon,
    EnvelopeSimpleIcon,
    FloppyDiskIcon,
    GlobeIcon,
    MagnifyingGlassIcon,
    MonitorIcon,
    MoonIcon,
    PaperPlaneRightIcon,
    PlusIcon,
    SunIcon,
    SlidersHorizontalIcon,
    TextBIcon,
    TextItalicIcon,
    TextStrikethroughIcon,
    TextUnderlineIcon,
    TrashIcon,
} from "@phosphor-icons/react";
import { Button, Checkbox, Collapsible, ContextMenu, Field, Input, Menu, Modal, NumberField, Popover, Select, Spinner, Switch, Tooltip } from "../ui";
import { ControlledCheckboxDemo, FormCheckboxDemo, ParentCheckboxDemo } from "./CheckboxDemos";
import { ControlledCollapsibleDemo } from "./CollapsibleDemos";
import { ActionMenuDemo, FileContextMenuDemo, OptionsMenuDemo } from "./MenuDemos";
import { ConfirmModalDemo, FormModalDemo } from "./ModalDemos";
import { ControlledNumberFieldDemo, FormNumberFieldDemo } from "./NumberFieldDemos";
import { FormPopoverDemo } from "./PopoverDemos";
import { BodyPortalDemo, ContainerPortalDemo } from "./PortalDemos";
import { ControlledSelectDemo, FormSelectDemo, MultipleSelectDemo } from "./SelectDemos";
import { ControlledSwitchDemo, FormSwitchDemo } from "./SwitchDemos";
import { Variant } from "./Variant";

export interface Demo {
    name: string;
    render: () => ReactNode;
}

const fonts = { sans: "Sans-serif", serif: "Serif", mono: "Monospace", cursive: "Cursive" };
const fontItems = Object.entries(fonts).map(([key, label]) => (
    <Select.Item key={key} value={key}>{label}</Select.Item>
));
const themes = { light: "Light", dark: "Dark", system: "System" };
const timezones = {
    london: "London (GMT)",
    paris: "Paris (CET)",
    helsinki: "Helsinki (EET)",
    "new-york": "New York (EST)",
    chicago: "Chicago (CST)",
    "los-angeles": "Los Angeles (PST)",
};
const countries = [
    "Argentina", "Australia", "Austria", "Belgium", "Brazil", "Canada", "Chile", "Denmark",
    "Estonia", "Finland", "France", "Germany", "Iceland", "Ireland", "Italy", "Japan",
    "Mexico", "Netherlands", "New Zealand", "Norway", "Poland", "Portugal", "Spain", "Sweden",
];

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
        name: "Checkbox",
        render: () => (
            <>
                <Variant label="Sizes">
                    <Checkbox size="xs" aria-label="Extra small" defaultChecked />
                    <Checkbox size="sm" aria-label="Small" defaultChecked />
                    <Checkbox size="md" aria-label="Medium" defaultChecked />
                    <Checkbox size="lg" aria-label="Large" defaultChecked />
                    <Checkbox size="xl" aria-label="Extra large" defaultChecked />
                </Variant>
                <Variant label="States">
                    <Checkbox aria-label="Unchecked" />
                    <Checkbox aria-label="Checked" defaultChecked />
                    <Checkbox aria-label="Indeterminate" indeterminate />
                    <Checkbox aria-label="Disabled unchecked" disabled />
                    <Checkbox aria-label="Disabled checked" disabled defaultChecked />
                    <Checkbox aria-label="Read only" readOnly defaultChecked />
                </Variant>
                <Variant label="With label">
                    <ControlledCheckboxDemo />
                </Variant>
                <Variant label="Group with parent">
                    <ParentCheckboxDemo />
                </Variant>
                <Variant label="With description (Field)">
                    <div className="flex w-full max-w-sm flex-col gap-4">
                        {[
                            { label: "Product updates", description: "New features and improvements.", on: true },
                            { label: "Security alerts", description: "Required for admins.", on: true, disabled: true },
                        ].map((s) => (
                            <Field key={s.label} disabled={s.disabled} className="gap-1">
                                <Field.Label className="flex cursor-pointer items-center gap-2.5 data-disabled:cursor-not-allowed">
                                    <Checkbox defaultChecked={s.on} />
                                    {s.label}
                                </Field.Label>
                                <Field.Description className="pl-6.5">{s.description}</Field.Description>
                            </Field>
                        ))}
                    </div>
                </Variant>
                <Variant label="Validation">
                    <Field validationMode="onChange" className="w-fit">
                        <Field.Label className="flex cursor-pointer items-center gap-2.5">
                            <Checkbox required defaultChecked />
                            I accept the terms
                        </Field.Label>
                        <Field.Description>Required. Untick it to see the error.</Field.Description>
                        <Field.Error match="valueMissing">You must accept the terms.</Field.Error>
                    </Field>
                </Variant>
                <Variant label="Form values">
                    <FormCheckboxDemo />
                </Variant>
            </>
        ),
    },
    {
        name: "Collapsible",
        render: () => (
            <>
                <Variant label="Basic">
                    <Collapsible className="w-full max-w-sm">
                        <Collapsible.Trigger>Show details</Collapsible.Trigger>
                        <Collapsible.Panel>
                            <p className="pt-2 text-sm text-muted">
                                The panel animates its height, so content of any size opens smoothly.
                            </p>
                        </Collapsible.Panel>
                    </Collapsible>
                </Variant>
                <Variant label="Default open">
                    <Collapsible defaultOpen className="w-full max-w-sm">
                        <Collapsible.Trigger>Release notes</Collapsible.Trigger>
                        <Collapsible.Panel>
                            <ul className="list-disc pt-2 pl-5 text-sm text-muted">
                                <li>Faster startup</li>
                                <li>New keyboard shortcuts</li>
                                <li>Bug fixes</li>
                            </ul>
                        </Collapsible.Panel>
                    </Collapsible>
                </Variant>
                <Variant label="Card">
                    <Collapsible className="w-full max-w-sm rounded-md border border-border bg-raised">
                        <Collapsible.Trigger className="justify-between rounded-md px-4 py-3 hover:bg-hover">
                            Recovery keys
                        </Collapsible.Trigger>
                        <Collapsible.Panel>
                            <div className="flex flex-col gap-1 border-t border-border px-4 py-3 font-mono text-xs text-muted">
                                <span>alien-bean-pasta</span>
                                <span>wild-orange-fork</span>
                                <span>quiet-river-lamp</span>
                            </div>
                        </Collapsible.Panel>
                    </Collapsible>
                </Variant>
                <Variant label="Button trigger">
                    <Collapsible className="w-full max-w-sm items-start gap-2">
                        <Collapsible.Trigger render={<Button variant="outline" size="sm" />}>Filters</Collapsible.Trigger>
                        <Collapsible.Panel className="w-full">
                            <div className="flex flex-col gap-2 text-sm text-text">
                                <label className="flex cursor-pointer items-center gap-2.5">
                                    <Checkbox defaultChecked />
                                    In stock
                                </label>
                                <label className="flex cursor-pointer items-center gap-2.5">
                                    <Checkbox />
                                    On sale
                                </label>
                            </div>
                        </Collapsible.Panel>
                    </Collapsible>
                </Variant>
                <Variant label="Controlled">
                    <ControlledCollapsibleDemo />
                </Variant>
                <Variant label="Disabled">
                    <Collapsible disabled>
                        <Collapsible.Trigger>Locked section</Collapsible.Trigger>
                        <Collapsible.Panel>
                            <p className="pt-2 text-sm text-muted">Hidden.</p>
                        </Collapsible.Panel>
                    </Collapsible>
                </Variant>
                <Variant label="Find in page (hiddenUntilFound)">
                    <Collapsible className="w-full max-w-sm">
                        <Collapsible.Trigger>Search me with Ctrl+F</Collapsible.Trigger>
                        <Collapsible.Panel hiddenUntilFound>
                            <p className="pt-2 text-sm text-muted">Searching for "pineapple" opens this panel.</p>
                        </Collapsible.Panel>
                    </Collapsible>
                </Variant>
            </>
        ),
    },
    {
        name: "Context Menu",
        render: () => (
            <>
                <Variant label="Basic">
                    <FileContextMenuDemo />
                </Variant>
                <Variant label="Custom trigger element">
                    <ContextMenu>
                        <ContextMenu.Trigger render={<Button variant="secondary" />}>
                            Right-click this button
                        </ContextMenu.Trigger>
                        <ContextMenu.Content>
                            <ContextMenu.Item>Back</ContextMenu.Item>
                            <ContextMenu.Item>Forward</ContextMenu.Item>
                            <ContextMenu.Item>Reload</ContextMenu.Item>
                        </ContextMenu.Content>
                    </ContextMenu>
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
        name: "Menu",
        render: () => (
            <>
                <Variant label="Basic">
                    <ActionMenuDemo />
                </Variant>
                <Variant label="Checkbox & radio items">
                    <OptionsMenuDemo />
                </Variant>
                <Variant label="Submenus">
                    <Menu>
                        <Menu.Trigger render={<Button variant="outline" />}>
                            <PlusIcon />New
                        </Menu.Trigger>
                        <Menu.Content>
                            <Menu.Item>File<Menu.Shortcut>Ctrl N</Menu.Shortcut></Menu.Item>
                            <Menu.Item>Folder</Menu.Item>
                            <Menu.Sub>
                                <Menu.SubTrigger>From template</Menu.SubTrigger>
                                <Menu.Content>
                                    <Menu.Item>Blank</Menu.Item>
                                    <Menu.Item>Readme</Menu.Item>
                                    <Menu.Sub>
                                        <Menu.SubTrigger>Config</Menu.SubTrigger>
                                        <Menu.Content>
                                            <Menu.Item>tsconfig.json</Menu.Item>
                                            <Menu.Item>vite.config.ts</Menu.Item>
                                            <Menu.Item>.oxlintrc.json</Menu.Item>
                                        </Menu.Content>
                                    </Menu.Sub>
                                </Menu.Content>
                            </Menu.Sub>
                            <Menu.Sub>
                                <Menu.SubTrigger disabled>From URL</Menu.SubTrigger>
                                <Menu.Content>
                                    <Menu.Item>Unreachable</Menu.Item>
                                </Menu.Content>
                            </Menu.Sub>
                        </Menu.Content>
                    </Menu>
                </Variant>
                <Variant label="Sides">
                    {(["bottom", "top", "right", "left"] as const).map((side) => (
                        <Menu key={side}>
                            <Menu.Trigger render={<Button variant="outline" />}>{side}</Menu.Trigger>
                            <Menu.Content side={side}>
                                <Menu.Item>Profile</Menu.Item>
                                <Menu.Item>Settings</Menu.Item>
                                <Menu.Item>Sign out</Menu.Item>
                            </Menu.Content>
                        </Menu>
                    ))}
                </Variant>
                <Variant label="Options">
                    <Menu>
                        <Menu.Trigger openOnHover render={<Button variant="outline" />}>
                            Open on hover
                        </Menu.Trigger>
                        <Menu.Content>
                            <Menu.Item>Profile</Menu.Item>
                            <Menu.Item>Settings</Menu.Item>
                        </Menu.Content>
                    </Menu>
                    <Menu modal={false}>
                        <Menu.Trigger render={<Button variant="outline" />}>Non-modal</Menu.Trigger>
                        <Menu.Content>
                            <Menu.Item>Page stays scrollable</Menu.Item>
                            <Menu.Item>and interactive</Menu.Item>
                        </Menu.Content>
                    </Menu>
                    <Menu>
                        <Menu.Trigger render={<Button variant="ghost" size="icon-md" aria-label="More" />}>
                            <DotsThreeVerticalIcon weight="bold" />
                        </Menu.Trigger>
                        <Menu.Content align="end">
                            <Menu.Item>Aligned to the end</Menu.Item>
                            <Menu.Item>of the trigger</Menu.Item>
                        </Menu.Content>
                    </Menu>
                    <Menu disabled>
                        <Menu.Trigger render={<Button variant="outline" />}>Disabled</Menu.Trigger>
                        <Menu.Content>
                            <Menu.Item>Hidden</Menu.Item>
                        </Menu.Content>
                    </Menu>
                </Variant>
            </>
        ),
    },
    {
        name: "Modal",
        render: () => (
            <>
                <Variant label="Basic">
                    <Modal>
                        <Modal.Trigger render={<Button variant="outline" />}>Open modal</Modal.Trigger>
                        <Modal.Content>
                            <Modal.Header>
                                <Modal.Title>Invite teammates</Modal.Title>
                                <Modal.Description>They'll get an email with a link to join.</Modal.Description>
                            </Modal.Header>
                            <Modal.Body>
                                <Input placeholder="name@example.com" aria-label="Email" />
                            </Modal.Body>
                            <Modal.Footer>
                                <Modal.Close render={<Button variant="ghost" />}>Cancel</Modal.Close>
                                <Modal.Close render={<Button />}>
                                    <PaperPlaneRightIcon />Send invite
                                </Modal.Close>
                            </Modal.Footer>
                        </Modal.Content>
                    </Modal>
                </Variant>
                <Variant label="Sizes">
                    {(["sm", "md", "lg", "xl"] as const).map((size) => (
                        <Modal key={size}>
                            <Modal.Trigger render={<Button variant="outline" />}>{size}</Modal.Trigger>
                            <Modal.Content size={size}>
                                <Modal.Header>
                                    <Modal.Title>Size {size}</Modal.Title>
                                    <Modal.Description>Max width changes; height follows the content.</Modal.Description>
                                </Modal.Header>
                                <Modal.Footer>
                                    <Modal.Close render={<Button />}>Done</Modal.Close>
                                </Modal.Footer>
                            </Modal.Content>
                        </Modal>
                    ))}
                </Variant>
                <Variant label="Form (controlled)">
                    <FormModalDemo />
                </Variant>
                <Variant label="Confirmation (no outside dismiss, no close button)">
                    <ConfirmModalDemo />
                </Variant>
                <Variant label="Long content">
                    <Modal>
                        <Modal.Trigger render={<Button variant="outline" />}>Terms of service</Modal.Trigger>
                        <Modal.Content size="lg">
                            <Modal.Header>
                                <Modal.Title>Terms of service</Modal.Title>
                                <Modal.Description>The body scrolls; header and footer stay put.</Modal.Description>
                            </Modal.Header>
                            <Modal.Body className="flex flex-col gap-3 text-muted">
                                {Array.from({ length: 24 }, (_, i) => (
                                    <p key={i}>
                                        {i + 1}. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                        veniam, quis nostrud exercitation ullamco laboris.
                                    </p>
                                ))}
                            </Modal.Body>
                            <Modal.Footer>
                                <Modal.Close render={<Button variant="ghost" />}>Decline</Modal.Close>
                                <Modal.Close render={<Button />}>Accept</Modal.Close>
                            </Modal.Footer>
                        </Modal.Content>
                    </Modal>
                </Variant>
                <Variant label="Nested">
                    <Modal>
                        <Modal.Trigger render={<Button variant="outline" />}>Open settings</Modal.Trigger>
                        <Modal.Content>
                            <Modal.Header>
                                <Modal.Title>Settings</Modal.Title>
                                <Modal.Description>Opening a second modal pushes this one back.</Modal.Description>
                            </Modal.Header>
                            <Modal.Body>
                                <Select items={themes} defaultValue="dark">
                                    <Select.Trigger className="w-44" aria-label="Theme">
                                        <Select.Value />
                                    </Select.Trigger>
                                    <Select.Content>
                                        {Object.entries(themes).map(([key, label]) => (
                                            <Select.Item key={key} value={key}>{label}</Select.Item>
                                        ))}
                                    </Select.Content>
                                </Select>
                            </Modal.Body>
                            <Modal.Footer>
                                <Modal>
                                    <Modal.Trigger render={<Button variant="destructive-outline" />}>
                                        <TrashIcon />Reset all
                                    </Modal.Trigger>
                                    <Modal.Content size="sm">
                                        <Modal.Header>
                                            <Modal.Title>Reset all settings?</Modal.Title>
                                            <Modal.Description>Everything goes back to its default.</Modal.Description>
                                        </Modal.Header>
                                        <Modal.Footer>
                                            <Modal.Close render={<Button variant="ghost" />}>Cancel</Modal.Close>
                                            <Modal.Close render={<Button variant="destructive" />}>Reset</Modal.Close>
                                        </Modal.Footer>
                                    </Modal.Content>
                                </Modal>
                                <Modal.Close render={<Button />}>Done</Modal.Close>
                            </Modal.Footer>
                        </Modal.Content>
                    </Modal>
                </Variant>
            </>
        ),
    },
    {
        name: "Number Field",
        render: () => (
            <>
                <Variant label="Sizes">
                    <div className="flex w-full max-w-40 flex-col gap-3">
                        {(["xs", "sm", "md", "lg", "xl"] as const).map((size) => (
                            <NumberField key={size} size={size} aria-label={`Amount (${size})`} defaultValue={1} />
                        ))}
                    </div>
                </Variant>
                <Variant label="States">
                    <div className="flex w-full max-w-40 flex-col gap-3">
                        <NumberField aria-label="Empty" placeholder="0" />
                        <NumberField aria-label="At max" defaultValue={10} max={10} />
                        <NumberField aria-label="Disabled" defaultValue={5} disabled />
                        <NumberField aria-label="Read only" defaultValue={5} readOnly />
                        <Field invalid>
                            <NumberField aria-label="Invalid" defaultValue={42} />
                        </Field>
                    </div>
                </Variant>
                <Variant label="Step, min and max">
                    <div className="flex w-full max-w-xs flex-col gap-6">
                        <Field>
                            <Field.Label>Rating</Field.Label>
                            <NumberField defaultValue={2.5} min={0} max={5} step={0.5} />
                            <Field.Description>0-5 in steps of 0.5.</Field.Description>
                        </Field>
                        <Field>
                            <Field.Label>Port</Field.Label>
                            <NumberField
                                defaultValue={8080}
                                min={1}
                                max={65535}
                                format={{ useGrouping: false }}
                            />
                            <Field.Description>Shift + arrow steps by 10.</Field.Description>
                        </Field>
                    </div>
                </Variant>
                <Variant label="Formatting">
                    <div className="flex w-full max-w-xs flex-col gap-3">
                        <NumberField
                            aria-label="Price"
                            defaultValue={19.99}
                            step={0.01}
                            min={0}
                            format={{ style: "currency", currency: "USD" }}
                        />
                        <NumberField
                            aria-label="Discount"
                            defaultValue={0.15}
                            step={0.01}
                            min={0}
                            max={1}
                            format={{ style: "percent" }}
                        />
                        <NumberField
                            aria-label="Distance"
                            defaultValue={42}
                            format={{ style: "unit", unit: "kilometer" }}
                        />
                    </div>
                </Variant>
                <Variant label="Scrub area">
                    <Field className="w-full max-w-40">
                        <NumberField defaultValue={100} min={0} max={1000}>
                            <NumberField.ScrubArea>
                                <Field.Label>Width</Field.Label>
                            </NumberField.ScrubArea>
                        </NumberField>
                        <Field.Description>Drag the label left or right.</Field.Description>
                    </Field>
                </Variant>
                <Variant label="Validation">
                    <Field validationMode="onBlur" className="w-full max-w-xs">
                        <Field.Label>Age</Field.Label>
                        <NumberField required min={18} max={120} allowOutOfRange />
                        <Field.Description>Required, 18-120. Validated on blur.</Field.Description>
                        <Field.Error match="valueMissing">Age is required.</Field.Error>
                        <Field.Error match="rangeUnderflow">You must be at least 18.</Field.Error>
                        <Field.Error match="rangeOverflow">Enter a realistic age.</Field.Error>
                    </Field>
                </Variant>
                <Variant label="Controlled">
                    <ControlledNumberFieldDemo />
                </Variant>
                <Variant label="Form values">
                    <FormNumberFieldDemo />
                </Variant>
            </>
        ),
    },
    {
        name: "Popover",
        render: () => (
            <>
                <Variant label="Basic">
                    <Popover>
                        <Popover.Trigger render={<Button variant="outline" />}>
                            <BellIcon />Notifications
                        </Popover.Trigger>
                        <Popover.Content>
                            <Popover.Header>
                                <Popover.Title>Notifications</Popover.Title>
                                <Popover.Description>You're all caught up. New activity will show up here.</Popover.Description>
                            </Popover.Header>
                        </Popover.Content>
                    </Popover>
                </Variant>
                <Variant label="Sides">
                    {(["top", "right", "bottom", "left"] as const).map((side) => (
                        <Popover key={side}>
                            <Popover.Trigger render={<Button variant="outline" />}>{side}</Popover.Trigger>
                            <Popover.Content side={side} className="w-auto">
                                Opens on the {side}.
                            </Popover.Content>
                        </Popover>
                    ))}
                </Variant>
                <Variant label="Arrow & close button">
                    <Popover>
                        <Popover.Trigger render={<Button variant="outline" />}>With arrow</Popover.Trigger>
                        <Popover.Content arrow>
                            <Popover.Header>
                                <Popover.Title>Arrow</Popover.Title>
                                <Popover.Description>Points at the trigger and follows the side.</Popover.Description>
                            </Popover.Header>
                        </Popover.Content>
                    </Popover>
                    <Popover>
                        <Popover.Trigger render={<Button variant="outline" />}>With close button</Popover.Trigger>
                        <Popover.Content showCloseButton>
                            <Popover.Header>
                                <Popover.Title>Close button</Popover.Title>
                                <Popover.Description>Escape and outside clicks still close it too.</Popover.Description>
                            </Popover.Header>
                        </Popover.Content>
                    </Popover>
                </Variant>
                <Variant label="Settings panel">
                    <Popover>
                        <Popover.Trigger render={<Button variant="outline" size="icon-md" aria-label="Display settings" />}>
                            <SlidersHorizontalIcon />
                        </Popover.Trigger>
                        <Popover.Content align="start" className="w-60">
                            <Popover.Header>
                                <Popover.Title>Display</Popover.Title>
                            </Popover.Header>
                            {[
                                { label: "Compact mode", on: false },
                                { label: "Show avatars", on: true },
                                { label: "Show completed", on: false },
                            ].map(({ label, on }) => (
                                <label key={label} className="flex items-center justify-between gap-3">
                                    {label}
                                    <Switch size="sm" defaultChecked={on} />
                                </label>
                            ))}
                        </Popover.Content>
                    </Popover>
                </Variant>
                <Variant label="Form (controlled)">
                    <FormPopoverDemo />
                </Variant>
                <Variant label="Options">
                    <Popover>
                        <Popover.Trigger openOnHover delay={300} render={<Button variant="link" />}>
                            Hover card
                        </Popover.Trigger>
                        <Popover.Content side="top" arrow>
                            <Popover.Header>
                                <Popover.Title>Opens on hover</Popover.Title>
                                <Popover.Description>Set openOnHover on the trigger; clicking still works.</Popover.Description>
                            </Popover.Header>
                        </Popover.Content>
                    </Popover>
                    <Popover modal>
                        <Popover.Trigger render={<Button variant="outline" />}>Modal</Popover.Trigger>
                        <Popover.Content>
                            <Popover.Header>
                                <Popover.Title>Modal popover</Popover.Title>
                                <Popover.Description>Page scroll and outside clicks are blocked while open.</Popover.Description>
                            </Popover.Header>
                        </Popover.Content>
                    </Popover>
                    <Popover>
                        <Popover.Trigger disabled render={<Button variant="outline" />}>Disabled</Popover.Trigger>
                        <Popover.Content>Hidden</Popover.Content>
                    </Popover>
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
        name: "Select",
        render: () => (
            <>
                <Variant label="Basic">
                    <Select items={fonts} defaultValue="sans">
                        <Select.Trigger className="w-44" aria-label="Font">
                            <Select.Value />
                        </Select.Trigger>
                        <Select.Content>{fontItems}</Select.Content>
                    </Select>
                    <Select items={fonts}>
                        <Select.Trigger className="w-44" aria-label="Font">
                            <Select.Value placeholder="Select a font" />
                        </Select.Trigger>
                        <Select.Content>{fontItems}</Select.Content>
                    </Select>
                </Variant>
                <Variant label="Sizes">
                    <div className="flex w-full max-w-xs flex-col gap-3">
                        {(["xs", "sm", "md", "lg", "xl"] as const).map((size) => (
                            <Select key={size} size={size} items={fonts} defaultValue="sans">
                                <Select.Trigger aria-label={`Font (${size})`}>
                                    <Select.Value />
                                </Select.Trigger>
                                <Select.Content>{fontItems}</Select.Content>
                            </Select>
                        ))}
                    </div>
                </Variant>
                <Variant label="Icons & groups">
                    <Select items={themes} defaultValue="system">
                        <Select.Trigger className="w-44" aria-label="Theme">
                            <Select.Value />
                        </Select.Trigger>
                        <Select.Content>
                            <Select.Item value="light"><SunIcon />Light</Select.Item>
                            <Select.Item value="dark"><MoonIcon />Dark</Select.Item>
                            <Select.Item value="system"><MonitorIcon />System</Select.Item>
                        </Select.Content>
                    </Select>
                    <Select items={timezones}>
                        <Select.Trigger className="w-60" aria-label="Timezone">
                            <GlobeIcon />
                            <Select.Value placeholder="Select a timezone" />
                        </Select.Trigger>
                        <Select.Content>
                            <Select.Group>
                                <Select.Label>Europe</Select.Label>
                                <Select.Item value="london">London (GMT)</Select.Item>
                                <Select.Item value="paris">Paris (CET)</Select.Item>
                                <Select.Item value="helsinki">Helsinki (EET)</Select.Item>
                            </Select.Group>
                            <Select.Separator />
                            <Select.Group>
                                <Select.Label>Americas</Select.Label>
                                <Select.Item value="new-york">New York (EST)</Select.Item>
                                <Select.Item value="chicago">Chicago (CST)</Select.Item>
                                <Select.Item value="los-angeles">Los Angeles (PST)</Select.Item>
                            </Select.Group>
                        </Select.Content>
                    </Select>
                </Variant>
                <Variant label="Long list (scrolls)">
                    <Select defaultValue="Finland">
                        <Select.Trigger className="w-52" aria-label="Country">
                            <Select.Value />
                        </Select.Trigger>
                        <Select.Content className="max-h-72">
                            {countries.map((c) => (
                                <Select.Item key={c} value={c}>{c}</Select.Item>
                            ))}
                        </Select.Content>
                    </Select>
                </Variant>
                <Variant label="Aligned with trigger">
                    <Select items={fonts} defaultValue="serif">
                        <Select.Trigger className="w-44" aria-label="Font">
                            <Select.Value />
                        </Select.Trigger>
                        <Select.Content alignItemWithTrigger>{fontItems}</Select.Content>
                    </Select>
                </Variant>
                <Variant label="States">
                    <Select items={fonts} defaultValue="mono" disabled>
                        <Select.Trigger className="w-44" aria-label="Disabled">
                            <Select.Value />
                        </Select.Trigger>
                        <Select.Content>{fontItems}</Select.Content>
                    </Select>
                    <Select items={fonts} defaultValue="mono" readOnly>
                        <Select.Trigger className="w-44" aria-label="Read only">
                            <Select.Value />
                        </Select.Trigger>
                        <Select.Content>{fontItems}</Select.Content>
                    </Select>
                    <Select items={fonts}>
                        <Select.Trigger className="w-44" aria-label="Invalid" aria-invalid>
                            <Select.Value placeholder="Invalid" />
                        </Select.Trigger>
                        <Select.Content>{fontItems}</Select.Content>
                    </Select>
                    <Select items={fonts}>
                        <Select.Trigger className="w-44" aria-label="Disabled items">
                            <Select.Value placeholder="Disabled items" />
                        </Select.Trigger>
                        <Select.Content>
                            {Object.entries(fonts).map(([key, label], i) => (
                                <Select.Item key={key} value={key} disabled={i % 2 === 1}>{label}</Select.Item>
                            ))}
                        </Select.Content>
                    </Select>
                </Variant>
                <Variant label="Controlled">
                    <ControlledSelectDemo />
                </Variant>
                <Variant label="Multiple">
                    <MultipleSelectDemo />
                </Variant>
                <Variant label="Form (Field)">
                    <FormSelectDemo />
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
                    <Switch size="xs" aria-label="Extra small" defaultChecked />
                    <Switch size="sm" aria-label="Small" defaultChecked />
                    <Switch size="md" aria-label="Medium" defaultChecked />
                    <Switch size="lg" aria-label="Large" defaultChecked />
                    <Switch size="xl" aria-label="Extra large" defaultChecked />
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
