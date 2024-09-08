type HorizontalPosition = "left" | "center" | "right";
type VerticalalPosition = "top" | "center" | "bottom";
type ToastProps = {
    position:
        | Exclude<`${HorizontalPosition}-${VerticalPosition}`, "center-center">
        | "center";
};

export default function Toast({ position }: ToastProps) {
    return <div>Toast Notification Position - {position}</div>;
}
