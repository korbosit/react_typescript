type StatusProps = {
    // status: string;
    status: "loading" | "success" | "error";
};

export default function Status(props: StatusProps) {
    let message;
    if (props.status === "loading") {
        message = "Loading...";
    }
    if (props.status === "success") {
        message = "Data fetching successfully!";
    }
    if (props.status === "error") {
        message = "Eror fetching data";
    }
    return (
        <div>
            <h2>Status - {message}</h2>
        </div>
    );
}
