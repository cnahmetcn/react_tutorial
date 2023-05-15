import PropTypes from 'prop-types';

// function User(props){
//     return (
//         <div>
//             <p>
//                 {props.isLogin ? props.name + " giriş yaptı" : props.name + " giriş yapmadı"}
//             </p>
//         </div>
//     )
// }

// export default User;


function User({name, surname, isLogin, softLang, aile, age, address}){
    return (
        <>
            <p>
                {isLogin ? name + " giriş yaptı" : name + " giriş yapmadı"}
            </p>
            <p>{`${name} 'nın bildiği diller ve araçlar`}</p>
            <ul>
            {
                softLang.map((sl, index) => (
                    <li key={index}>{sl}</li>
                ))
            }
            </ul>
            <p>Aile Üyeleri</p>
            <ul>
            {
                aile.map((a, index) => {
                    return <li key={index}>{a.name} {a.surname}</li>;
                })
            }
            </ul>

            <p>Yaş: {age}</p>
            <p>ADRESLER</p>
            <ul>
            {
                address.map((ad, index) => {
                    return <li key={index}>{ad.title} {ad.zip}</li>;
                })
            }
            </ul>
        </>
    )
}

User.propTypes = {
    name: PropTypes.string.isRequired,
    surname: PropTypes.string.isRequired,
    softLang: PropTypes.array,
    aile: PropTypes.array,
    age: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]).isRequired,
    address: PropTypes.shape({
        title: PropTypes.string.isRequired,
        zip: PropTypes.number
    })
}

User.defaultProps = {
    isLogin: false,
}

export default User;