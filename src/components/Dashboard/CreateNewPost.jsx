import { useContext, useState } from "react"
import { AppContext } from "../../App"

const initialPost = {
    contactId: 0,
    title: "",
    content: "",
}

function CreateNewPost(){
    const {loggedInUser, posts, setPosts} = useContext(AppContext)
    const [newPost, setNewPost] = useState(initialPost)

    function handleClick(){
        fetch("https://boolean-api-server.fly.dev/ThomasKva/post", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newPost)
        }).then(response => response.json())
        .then((createPost) =>{
            setPosts([...posts, createPost])
            setNewPost(initialPost)
        }).catch((error) => console.error("Could not create new post...", error))
    }

    function handleOnChange(event){
        const {name, value} = event.target
        setNewPost({...newPost, 
            contactId: loggedInUser.id,
            [name]: value})
    }

    
    return(
        <>
            <input type="text"
                id="content"
                name="content"
                onChange={handleOnChange}
                value={newPost.content}
            /> 
            <button onClick={handleClick}>Post</button>
        </>
    )
}

export default CreateNewPost