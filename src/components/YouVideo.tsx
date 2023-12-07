type VideoProps = {
    id: string
}

export const YouVideo : React.FC<VideoProps> = ({id}) => {
    return (
        <section>
            <iframe
                width="500"
                height="315"
                src={"https://www.youtube.com/embed/" + id}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen></iframe>
        </section>
    );
};