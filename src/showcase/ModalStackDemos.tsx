import { useState } from "react";
import { NotePencilIcon, StackIcon } from "@phosphor-icons/react";
import { Button, Modal, Textarea, useModalStack } from "../ui";

function StepModal({ depth }: { depth: number }) {
    const stack = useModalStack();
    return (
        <>
            <Modal.Header>
                <Modal.Title>Step {depth}</Modal.Title>
                <Modal.Description>
                    {stack.count} {stack.count === 1 ? "modal" : "modals"} open. Each push sends the ones below back.
                </Modal.Description>
            </Modal.Header>
            <Modal.Footer>
                <Button variant="ghost" onClick={stack.closeAll}>Close all</Button>
                <Modal.Close render={<Button variant="outline" />}>Back</Modal.Close>
                <Button onClick={() => stack.open({ size: "sm", content: <StepModal depth={depth + 1} /> })}>
                    Open another
                </Button>
            </Modal.Footer>
        </>
    );
}

export function PushPopModalStackDemo() {
    const stack = useModalStack();
    return (
        <Button variant="outline" onClick={() => stack.open({ size: "sm", content: <StepModal depth={1} /> })}>
            <StackIcon />Open stack
        </Button>
    );
}

function EditNoteModal({ note, onSave, onDiscard }: { note: string; onSave: (note: string) => void; onDiscard: () => void }) {
    const stack = useModalStack();
    const [draft, setDraft] = useState(note);

    const cancel = () => {
        if (draft === note) return onDiscard();
        stack.open({
            size: "sm",
            showCloseButton: false,
            disablePointerDismissal: true,
            content: (
                <>
                    <Modal.Header>
                        <Modal.Title>Discard changes?</Modal.Title>
                        <Modal.Description>Your edits to this note will be lost.</Modal.Description>
                    </Modal.Header>
                    <Modal.Footer>
                        <Modal.Close render={<Button variant="ghost" />}>Keep editing</Modal.Close>
                        <Button variant="destructive" onClick={onDiscard}>Discard</Button>
                    </Modal.Footer>
                </>
            ),
        });
    };

    return (
        <>
            <Modal.Header>
                <Modal.Title>Edit note</Modal.Title>
                <Modal.Description>Cancel with unsaved edits asks first; Discard closes both modals.</Modal.Description>
            </Modal.Header>
            <Modal.Body>
                <Textarea aria-label="Note" value={draft} onValueChange={setDraft} />
            </Modal.Body>
            <Modal.Footer>
                <Button variant="ghost" onClick={cancel}>Cancel</Button>
                <Button onClick={() => onSave(draft)}>Save</Button>
            </Modal.Footer>
        </>
    );
}

export function DiscardModalStackDemo() {
    const stack = useModalStack();
    const [note, setNote] = useState("Buy milk");

    const edit = () =>
        stack.open({
            showCloseButton: false,
            disablePointerDismissal: true,
            content: ({ close }) => (
                <EditNoteModal
                    note={note}
                    onDiscard={close}
                    onSave={(next) => {
                        setNote(next);
                        close();
                    }}
                />
            ),
        });

    return (
        <div className="flex items-center gap-3 text-sm">
            <Button variant="outline" onClick={edit}>
                <NotePencilIcon />Edit note
            </Button>
            <span className="text-muted">Note: {note}</span>
        </div>
    );
}
