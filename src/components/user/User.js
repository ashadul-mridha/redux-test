import React , {useEffect} from 'react';
import { connect } from 'react-redux';
import { usersList } from '../../redux/Action/userAction';

const User = ({usersList, loading, users, error}) => {
    useEffect( () => {
        usersList()
    } ,[])
    return (
        <div>
            {
                loading ? <h4>loading</h4> : (
                    users.map(user => {
                        return(
                             <h4>{user.name}</h4>
                        )
                    })
                )
            }
        </div>
    );
};

const mapStateToProps = (state) =>  ({
    loading: state.userReducer.loading,
    users : state.userReducer.users,
    error: state.userReducer.error

})

export default connect(mapStateToProps , {usersList})(User);