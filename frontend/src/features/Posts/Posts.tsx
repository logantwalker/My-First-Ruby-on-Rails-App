import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useAppSelector } from "../../app/hooks";
import { AppDispatch } from "../../app/store";
import { fetchPostsAsync, selectPosts, selectStatus, Statuses } from "./postSlice";
import Post from "./Post";

function Posts(){
    const posts = useAppSelector(selectPosts);
    const status = useAppSelector(selectStatus)
    const dispatch: AppDispatch = useDispatch()

    useEffect(()=>{
        dispatch(fetchPostsAsync());
    }, [dispatch])

    let contents;

    if(status !== Statuses.UpToDate){
        contents = <div>{status}</div>
    } else{
        console.log(posts)
        contents = <div className="card">
            <div className="card-body">
                <h3>{status}</h3>
                {/** form goes here */}
                {posts && posts.length > 0 && posts.map(post =>{
                    return <div key={post.id} style={{margin: '5em'}}>
                        <Post dispatch = {dispatch}
                        post = {post} />
                    </div>
                })}
            </div>
        </div>
    }

    return (
        <div>
            <h1>Posts</h1>
            <div>{contents}</div>
            
        </div>
    )
}

export default Posts;