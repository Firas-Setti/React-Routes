import {useState,useEffect} from 'react';
import AddMovie from "../AddMovie/AddMovie.js";
import "./app.css";
import MovieList from '../MovieList/MovieList.js';
import Filtring from '../Filtring/Filtring.js';
import Description from '../Description/Description.js';
import {Routes,Route } from "react-router-dom";

const info = [
  { title:'Akira', trailer:"https://www.youtube.com/embed/_aIJOdIWFd0", img:'/image/Akira.jpg', description:"Set in a dystopian 2019, Akira tells the story of Shōtarō Kaneda, a leader of a biker gang whose childhood friend, Tetsuo Shima, acquires incredible telekinetic abilities after a motorcycle accident, eventually threatening an entire military complex amid chaos and rebellion in the sprawling futuristic metropolis of Neo-Tokyo.", posterURL:"akira2019.com", rating:8.5 },
  { title:'Your Name', trailer:"https://www.youtube.com/embed/xU47nhruN-Q", img:'/image/Your Name.jpg', description:"Your Name is a 2016 Japanese animated romantic fantasy film produced by CoMix Wave Films and released by Toho. It depicts a high school boy in Tokyo and a high school girl in the Japanese countryside who suddenly and inexplicably begin to swap bodies.", posterURL:"funimationfilms.com", rating:10 },
  { title:'Jujutsu Kaisen 0', trailer:"https://www.youtube.com/embed/Yl_f0sYMaGk", img:'/image/Jujutsu Kaisen.jpg', description:"Yuta Okkotsu is haunted by the spirit of his childhood friend Rika, who died in a traffic accident. Her spirit no longer appears as the sweet girl he called his beloved. Instead, her spirit has been cursed and she manifests as a monstrous entity who protects him against his will.", posterURL:"jujutsu-kaisen.fandom.com", rating:9.2 },
  { title:'Kimetsu no Yaiba', trailer:"https://www.youtube.com/embed/ATJYac_dORw", img:'/image/Demon Slayer.jpg', description:"Falling forever into an endless dream...  Tanjiro and Nezuko, along with Zenitsu and Inosuke, join one of the most powerful swordsmen within the Demon Slayer Corps, Flame Hashira Kyojuro Rengoku, to face the demon aboard the Mugen Train on track to despair.", posterURL:"demonslayer-anime.com", rating:9.5 },
  { title:'Silent Voice', trailer:"https://www.youtube.com/embed/b_ePl3_RpJ0", img:'/image/Silent Voice.jpg', description:"A young man is ostracized by his classmates after he bullies a deaf girl to the point where she moves away. Years later, he sets off on a path for redemption. A young man is ostracized by his classmates after he bullies a deaf girl to the point where she moves away.", posterURL:"kyotoanimation.co.jp", rating:10 },
  { title:'Perfect Blue', trailer:"https://www.youtube.com/embed/uXUQBezd3_A", img:'/image/Perfect Blue.jpg', description:"The film follows Mima Kirigoe, a member of a Japanese idol group, who retires from music to pursue an acting career. As she becomes a victim of stalking, gruesome murders begin to occur, and Mima starts to lose her grip on reality.", posterURL:"perfect-blue.com", rating:7.5 },
  { title:'I Want to Eat your pancreas', trailer:"https://www.youtube.com/embed/MONVPR1dnRQ", img:'/image/Eat.jpg', description:"A high school student discovers one of his classmates, Sakura Yamauchi, is suffering from a terminal illness. This secret brings the two together, as she lives out her final moments. A high school student discovers one of his classmates, Sakura Yamauchi, is suffering from a terminal illness.", posterURL:"iwanttoeatyourpancreas.com", rating:8.5 },
  { title:'Spirited Away', trailer:"https://www.youtube.com/embed/ByXuk9QqQkk", img:'/image/Spirited Away.jpg', description:"When her parents undergo a mysterious transformation, Chihiro must fend for herself as she encounters strange spirits, assorted creatures and a grumpy sorceress who seeks to prevent her from returning to the human world. 10-year-old Chihiro and her parents stumble upon a seemingly abandoned amusement park.", posterURL:"studioghibli.com", rating:8.3},
  { title:'Weathering With You', trailer:"https://www.youtube.com/embed/Q6iK6DjV_iE", img:'/image/Weathering.jpg', description:"Child of Weather is a 2019 Japanese animated romantic fantasy film produced by CoMix Wave Films and released by Toho. It depicts a high school boy who runs away from his rural home to Tokyo and befriends an orphan girl who has the ability to control the weather.", posterURL:"funimationfilms.com", rating:8.7 },
  { title:'Violet Evergarden', trailer:"https://www.youtube.com/embed/BUfSen2rYQs", img:'/image/Violet.jpg', description:"In the film, Violet Evergarden continues in her search for the meaning of the final words left by Gilbert Bougainvillea when she receives a request to write a letter from a boy named Yuris. Initially teased in March 2018 as a new project, it was revealed in July to be an anime film.", posterURL:"kyotoanimation.co.jp", rating:9.1 },
  { title:'Neon Genesis Evangelion', trailer:"https://www.youtube.com/embed/hZNpdtUl3jg", img:'/image/Neon.jpg', description:"The series explores the experiences and emotions of Evangelion pilots and members of Nerv as they try to prevent Angels from causing more cataclysms. In the process, they are called upon to understand the ultimate causes of events and the motives for human action.", posterURL:"evangelion.co.jp", rating:7.2 },
  { title:'Princess Mononoke', trailer:"https://www.youtube.com/embed/4OiMOHRDs14", img:'/image/Princess Mononoke.jpg', description:"Princess Mononoke is set in the late Muromachi period of Japan (approximately 1336 to 1573 CE), but it includes fantasy elements. The story follows a young Emishi prince named Ashitaka, and his involvement in a struggle between the gods of a forest and the humans who consume its resources.", posterURL:"studioghibli.com", rating:6 },
];

function App(){
  
  const [list,setList] = useState(info);
  const [filtredList, setFiltredList] = useState(list);
  const [rate,setRate] = useState(0);
  const [keyword, setKeyword] = useState("");

  function adding(movie){
    if( movie.title && movie.img && movie.description && movie.posterURL ) {
      setList([...list, movie]);
    }
  }


  function filter(key, rate){
    setKeyword(key);
    setRate(rate);
    setFiltredList(list.filter( (element)=>{ return ( (element.title.toLowerCase().includes(key.toLowerCase())) && (element.rating >= rate) ) } ));
  }

  useEffect(()=>{ filter(keyword,rate); },[list]);


  return(
    <div className="App">
      <Routes>
        <Route path="/"  element={ <> <Filtring filter={filter}/>  <MovieList list={filtredList} /> <AddMovie adding={adding} />   </> } />
        <Route path="/:id" element={ <Description list={list} /> } />
      </Routes>
    </div>
      );
}

export default App;