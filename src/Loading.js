const Loading = ({isLoading}) => {
    if (isLoading) {
        // No fancy loading animation since this is a demo app
        return <div>Loading....</div>;
    }
    // Render the rest of your component here
    return <></>;
}

export default Loading; 