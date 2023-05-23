import PostCard from "../../components/home/PostCard";
import "./home.css";
import { useDispatch, useSelector } from "react-redux";
import FormPost from "../../components/home/FormPost";
import { useState, useEffect, useLayoutEffect } from "react";
import { useSocket } from "../../hooks/useSocket";
import { addPost, getAllPostThunk } from "./../../store/slices/posts.slice";
/* ----  */

const Home = () => {
  const { posts } = useSelector((state) => state);
  const dispatch = useDispatch();

  const [isCloseForm, setIsCloseForm] = useState(true);
  const { socket, online } = useSocket("https://blog-web-psus.onrender.com");

  useEffect(() => {
    socket.on("render-new-post", (data) => {
      dispatch(addPost(data));
      console.log("Se ha creado un post", data);
    });
  }, [socket]);

  const handleCreatePost = () => {
    setIsCloseForm(false);
  };
  // const local = localStorage.getItem("token")
   const [isToken, setIsToken] = useState(localStorage.getItem("token"))

  

  
  console.log(isToken);

  // const handleToken = setIsToken(localStorage.getItem("token"))
  

  //console.log(local);
  return (
    <div className="home">
      <h1 className="home__title">Spark Link</h1>
      {
        isToken ? ""
        : 

        <p className="home__description">
        ¡Bienvenido/a a Spark Link!
  
  Nos complace tenerte aquí como parte de nuestra comunidad en línea. En Spark Link, nuestro objetivo es proporcionarte contenido interesante y útil en temas como tecnología, negocios, marketing digital, creatividad y mucho más.
  
  Como nuevo/a miembro de la comunidad, tendrás acceso a una variedad de recursos y herramientas diseñados para ayudarte a desarrollar tus habilidades y conocimientos en estas áreas. Además, tendrás la oportunidad de conectarte con otros miembros de la comunidad que comparten tus intereses y objetivos.
  
  ¡Estamos emocionados de tenerte a bordo y esperamos que disfrutes explorando todo lo que Spark Link tiene para ofrecer! Si tienes alguna pregunta o sugerencia, no dudes en ponerte en contacto con nosotros. ¡Gracias por unirte a nuestra comunidad!
        </p>
      }

      {/* {
        isToken ?  */}
        
<div className="home__post-container">
        {posts?.posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
      : ""
      {/* } */}
      
      
      <button onClick={handleCreatePost} className="home__btn">
        +
      </button>
      <FormPost
        isCloseForm={isCloseForm}
        setIsCloseForm={setIsCloseForm}
        socket={socket}
      />
    </div>
  );
};

export default Home;
