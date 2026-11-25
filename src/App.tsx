import { Spinner } from "./ui";

export default function App() {
    return (
        <main className="flex min-h-svh items-center justify-center gap-6">
            <Spinner size="xs" />
            <Spinner size="sm" />
            <Spinner size="md" />
            <Spinner size="lg" />
            <Spinner size="xl" className="text-accent" />
        </main>
    );
}
