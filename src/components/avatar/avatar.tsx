import style from './avatar.module.css'

interface Props  {
    src?:string
    w?:string
    h?:string
}

const Avatar = ({src,w,h}:Props ) => {
    return (
        <div className={style.avatar} style={{width:w,height:h}}>
            <img style={{width:w,height:h}} src={src} alt="" />
        </div>

    )
}

export default Avatar