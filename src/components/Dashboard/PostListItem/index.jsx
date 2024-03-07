import { useContext, useEffect, useState } from "react"
import { AppContext } from "../../../App"
import Avatar from "react-avatar"

function PostListItem({post}) {
    const {contacts} = useContext(AppContext)
    const [author, setAuthor] = useState({})

    useEffect(() =>{
        if(post){
            setAuthor(contacts.find((contact) => 
            contact.id === post.contactId))
        }
    }, [contacts,post])

    if(!author) return <p>Could not find the author</p>

    return(
        <div className="post-item">
            <div className="post-header">
                <Avatar className="post-avatar" name={`${author.firstName} ${author.lastName}`} round={true} />
                <div className="post-details">
                    <h3 className="author-name">{`${author.firstName} ${author.lastName}`}</h3>
                    <h4 className="post-title">{post.title}</h4>
                </div>
            </div>
            <div className="post-content">
                <p>{post.content}</p>
            </div>
        </div>
    )
}

export default PostListItem