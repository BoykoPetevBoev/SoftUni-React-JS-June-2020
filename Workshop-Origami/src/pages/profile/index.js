import React, { Component, useState, useContext, useEffect } from 'react';
import styles from './index.module.css';
import Wrapper from '../../components/page-wrapper';
import Post from '../../components/post';
import UserContext from '../../Context';

function ProfilePage(props) {
    const [data, setData] = useState([]);
    const [user, setUser] = useState(null);
    const [posts, setPosts] = useState(null);
    const context = useContext(UserContext);

    const getData = async () => {
        const promise = await fetch('http://localhost:4000/api/origami');
        const data = await promise.json();
        const topThree = data.slice(0, 3);
        setData([...topThree]);
    }

    useEffect(() => {
        getData()
    }, [])

    const renderOrigami = () => {
        return data.map((origami, index) => {
            return (
                <Post key={origami._id} index={index} {...origami} />
            )
        })
    }
    const logout = () => {
        context.logout();
        props.history.push('/');
    }

    return (
        <Wrapper>
            <div className={styles.container}>
                <div>
                    <p>
                        <span>Email:</span>
                        {user}
                    </p>
                    <p>
                        <span>Posts:</span>
                        {posts}
                    </p>
                    <button onClick={logout}>logout</button>
                </div>
                <div>
                    <h2>Last 3 post on your wall</h2>
                    {renderOrigami()}
                </div>
            </div>
        </Wrapper>
    )
}

// class Profile extends Component {
//     constructor(props) {
//         super(props)

//         this.state = {
//             data: [],
//             user: null,
//             posts: null
//         }
//     }
//     static contextType = UserContext;

//     componentDidMount() {
//         this.getOrigamis();
//     }
//     async getOrigamis() {
//         const promise = await fetch('http://localhost:4000/api/origami');
//         const data = await promise.json();
//         this.setState({
//             data: data.slice(0, 3)
//         });
//     }

//     renderOrigami() {
//         const { data } = this.state;
//         return data.map((origami, index) => {
//             return (
//                 <Post key={origami._id} index={index} {...origami} />
//             )
//         })
//     }
//     logout = () => {
//         this.context.logout();
//         this.props.history.push('/');
//     }

//     render() {
//         const { user, posts } = this.state;
//         return (
//             <Wrapper>

//                 <div className={styles.container}>
//                     <div>
//                         <p>
//                             <span>Email:</span>
//                             {user}
//                         </p>
//                         <p>
//                             <span>Posts:</span>
//                             {posts}
//                         </p>
//                         <button onClick={this.logout}>logout</button>
//                     </div>
//                     <div>
//                         <h2>Last 3 post on your wall</h2>
//                         {this.renderOrigami()}
//                     </div>
//                 </div>

//             </Wrapper>
//         );
//     }
// }

export default ProfilePage;
