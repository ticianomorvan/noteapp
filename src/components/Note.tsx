export interface INote {
    id: string,
    title: string,
    description: string
}

const Note = (props: INote) => {
    return (
        <article className="border-2 rounded-lg p-3 w-72 shadow-md">
            <span>
                <p className="text-xl font-gilroy-medium text-primary">{props.title}</p>
            </span>
            <p className="font-gilroy-regular">{props.description}</p>
            <small className="font-gilroy-light opacity-20">{props.id}</small>
        </article>
    )
}

export default Note;