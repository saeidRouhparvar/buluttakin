import style from './button.module.css'

const Button = ({children} : {children:string}) => {
    return (
<button className={style.button}>
    {children}
</button>
    )
}

export default Button