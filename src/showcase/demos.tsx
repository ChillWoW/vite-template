import type { ReactNode } from "react";
import {
    EnvelopeSimpleIcon,
    MagnifyingGlassIcon,
    PaperPlaneRightIcon,
    PlusIcon,
    TrashIcon,
} from "@phosphor-icons/react";
import { Button, Field, Input, Spinner } from "../ui";
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
];
