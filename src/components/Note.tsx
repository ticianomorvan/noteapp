import { BsTrashFill } from 'react-icons/bs';

interface INote {
    id: string,
    title: string,
    description: string
}

const Note = (props: INote) => {
    return (
        <article className="flex flex-col border-2 rounded-2xl p-3 w-72 shadow-md">
            <span>
                <p className="text-xl font-gilroy-bold text-primary underline break-words">{props.title}</p>
            </span>
            <p className="font-gilroy-regular break-words">
                {props.description}
            </p>
            <span className="inline-flex mt-5">
                <small className="font-gilroy-light opacity-30">{props.id}</small>
                <button className="text-xl transition duration-200 hover:text-primary"><BsTrashFill /></button>
            </span>
        </article>
    )
}

export default Note;