import React from 'react'
import styles from './Style.module.css'

const Profile = () => {
    return (
        <div className='container' style={{
            backgroundColor: 'white',
            padding: '1em',
            borderRadius: '10px',
            width: '60%',
        }}>
            <h2>Profile</h2>
            <div className={"row " + styles.profile}>
                <div className="col-md-6 col-sm-6">
                    <b>Firstname</b>
                    <div className={styles.field}>
                        Surya
                    </div>
                </div>
                <div className="col-md-6 col-sm-6">
                    <b>Lastname</b>
                    <div className={styles.field}>
                        Teja
                    </div>
                </div>
                <div className="col-md-6 col-sm-6">
                    <b>Email</b>
                    <div className={styles.field}>
                        surya@mail.com
                    </div>
                </div>
                <div className="col-md-6 col-sm-6">
                    <b>Phone</b>
                    <div className={styles.field}>
                        7386949422
                    </div>
                </div>
                <div className="col-md-12 col-sm-12">
                    <b>Address</b>
                    <div className={styles.field}>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem assumenda rem molestiae 
                        exercitationem cumque quas fugit, molestias sunt quisquam velit iste provident quos aliquam
                        sint. A possimus ad obcaecati neque!
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile
