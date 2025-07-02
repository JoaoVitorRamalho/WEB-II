import style from './list.module.css';

const List = (props) => {
    return (
        <ul className={style.ul}>
            {
                props.items.map((v, i)=> {
                    return <li className={style.li}>{v}</li>
                })
            }
        </ul>
    );
}

export default List;

