import styles from './userstyles.module.scss';
export {User};

const User=(props)=>{

    console.log(props);
    return (
        <div className={styles.user_base}>
            <div className={styles.profile_img}>
                <img src={props.avatar} alt="no image available" className={styles.user_image}/>
            </div>
            <div className={styles.profile_details}>
                <div className={styles.name}>{props.first_name??''} {props.last_name??''}</div>
                <div className={styles.email}>{props.email??''}</div>
            </div>
        </div>
    )
}