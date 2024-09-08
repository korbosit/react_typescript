import { useRef, useEffect } from "react";

export default function DomainRef() {
    const inputRef = useRef<HTMLInputElement>(null!);
    useEffect(() => {
        inputRef.current.focus();
    }, []);
    return (
        <div>
            <input type="text" />
        </div>
    );
}
