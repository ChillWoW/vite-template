import { useState } from "react";
import { Form } from "@base-ui/react/form";
import { TrashIcon } from "@phosphor-icons/react";
import { Button, Field, Input, Modal } from "../ui";

export function FormModalDemo() {
    const [open, setOpen] = useState(false);
    const [name, setName] = useState("Jane Doe");

    return (
        <div className="flex items-center gap-3 text-sm">
            <Modal open={open} onOpenChange={setOpen}>
                <Modal.Trigger render={<Button variant="outline" />}>Edit profile</Modal.Trigger>
                <Modal.Content size="sm">
                    <Modal.Header>
                        <Modal.Title>Edit profile</Modal.Title>
                        <Modal.Description>Changes apply when you save.</Modal.Description>
                    </Modal.Header>
                    <Form
                        id="profile-form"
                        onSubmit={(event) => {
                            event.preventDefault();
                            setName(String(new FormData(event.currentTarget).get("name")));
                            setOpen(false);
                        }}
                    >
                        <Field>
                            <Field.Label>Name</Field.Label>
                            <Input name="name" defaultValue={name} required />
                            <Field.Error match="valueMissing">Name is required.</Field.Error>
                        </Field>
                    </Form>
                    <Modal.Footer>
                        <Modal.Close render={<Button variant="ghost" />}>Cancel</Modal.Close>
                        <Button type="submit" form="profile-form">Save</Button>
                    </Modal.Footer>
                </Modal.Content>
            </Modal>
            <span className="text-muted">Name: {name}</span>
        </div>
    );
}

export function ConfirmModalDemo() {
    const [deleted, setDeleted] = useState(0);
    return (
        <div className="flex items-center gap-3 text-sm">
            <Modal disablePointerDismissal>
                <Modal.Trigger render={<Button variant="destructive-outline" />}>
                    <TrashIcon />Delete project
                </Modal.Trigger>
                <Modal.Content size="sm" showCloseButton={false}>
                    <Modal.Header>
                        <Modal.Title>Delete project?</Modal.Title>
                        <Modal.Description>
                            This permanently removes the project and its files. This can't be undone.
                        </Modal.Description>
                    </Modal.Header>
                    <Modal.Footer>
                        <Modal.Close render={<Button variant="ghost" />}>Cancel</Modal.Close>
                        <Modal.Close render={<Button variant="destructive" />} onClick={() => setDeleted((n) => n + 1)}>
                            Delete
                        </Modal.Close>
                    </Modal.Footer>
                </Modal.Content>
            </Modal>
            <span className="text-muted">Deleted: {deleted}</span>
        </div>
    );
}
