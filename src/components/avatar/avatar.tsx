import style from './avatar.module.css'

interface Props  {
    src?:string
}

const Avatar = ({src}:Props ) => {
    return (
        <div className={style.avatar} >
            <img src={src} alt="" />
        </div>

    )
}

export default Avatar