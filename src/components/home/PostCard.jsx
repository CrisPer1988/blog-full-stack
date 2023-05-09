import { useNavigate } from "react-router-dom";
import "./styles/postCard.css";
import moment from "moment";
import Comment from "../postId/Comment"

const PostCard = ({ post }) => {
  const navigate = useNavigate();


  const handleCardClick = () => {
    navigate(`/post/${post.id}`);
  };

  const imageUrl = post.postImgs[0].postImgUrl

  console.log(imageUrl);



  return (
    <article className="post">
        <article className="post__footer-info">
        
        <header className="post__avatar">
          <img
            className="post__avatar-img"
            src={post.user.profileImgUrl}
            alt=""
          />
        
          <h4 className="post__nameUser">{post.user.name}</h4>
          <p className="post__date">
            {moment(post.updatedAt).format("MM-DD-YYYY")} --{" "}
            {moment(post.updatedAt).startOf("hour").fromNow()}
          </p>
          
          <div className="post__outstanding">
          {post?.outstanding ? (
            <i className="bx bxs-bookmark-star"></i>
          ) : (
            <i className="bx bx-bookmark"></i>
          )}
          
        </div>
        <button className="btn__post-card" onClick={handleCardClick}>Comentar</button>
        </header>
        </article>

<section className="post__body">
        <h3 className="post__title">{post.title}</h3>
        <p className="post__content">{post.content}</p>
        
      </section>
      <section className="post__footer">
        
      </section>

      <header className="post__header">
        
        <img
          className="post__image"
          src={imageUrl}
          alt=""
        />
      </header>
     
    </article>
  );
};

export default PostCard;
