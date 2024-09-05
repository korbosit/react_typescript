type GreetProps = {
    name: string;
    messageCount?: number;
    isLoggedIn: boolean;
};

export default function Greet(props: GreetProps) {
    // const { messageCount = 0 } = props;
    return (
        <div>
            <h2>
                {props.isLoggedIn
                    ? `Welcome ${props.name}!!!!!!! You have 10 ${props.messageCount} unread messages`
                    : `Welcome Guest`}
            </h2>
        </div>
    );
}
