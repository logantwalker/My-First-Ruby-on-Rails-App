import React from "react";

function Post(props: any){
    return (
        <React.Fragment>
            <div className="row">
                <div className="col-8">
                    <h2 className="title text-start">{props.post.title}</h2>
                </div>
                <div className="col-4">
                    {/** Button Group */}
                </div>
            </div>
            <div className="row">
                <div className="col-8">
                    <p className="card-text text-start">{props.post.body}</p>
                </div>
            </div>
            <div className="row">
                <div className="col-2">
                    {/** Edit Submit Button */}
                </div>
            </div>
        </React.Fragment>

    )
}

export default Post;