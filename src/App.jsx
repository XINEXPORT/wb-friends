import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

export default function App() {
const [friends,setFriends]=useState([]);
const [picture,setPicture]=useState('');
const [name,setName]=useState('');

async function getSavedFriends(evt){
  const response = await axios.get('/api/friends');
  setFriends(response.data);
};
useEffect(()=>{getSavedFriends()},[])


const addFriend=()=>{
const newFriends=[...friends];
newFriends.push({picture: picture, name: name});
setFriends(newFriends);
setPicture('');
setName('');
console.log(newFriends);
};


const friendInfo = friends.map((friend) =>
  {return <div key={friend.name}>
  <img src={friend.picture}/>
  <span>{friend.name}</span>
  </div>});

  return <div className="friend">
         <label htmlFor="picture">Picture:</label>
         <input id="picture" type="text" value={picture} onChange={(e)=>setPicture(e.target.value)}/>

         <label htmlFor="name">Name:</label>
         <input id="name" type="text" value={name} onChange={(e)=>setName(e.target.value)}/>

         <button type="button" onClick={addFriend}>Add Friend</button>
         {friendInfo}
         </div>;
}
