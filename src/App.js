import './App.css';
import { getFirestore, collection, onSnapshot, addDoc, deleteDoc, doc } from "firebase/firestore"
import Firebase from "./firebase/firebaseConfig"
import { useEffect, useState } from 'react';
function App() {
  const database = getFirestore(Firebase)
  const [inputData, setinputData] = useState({
    Nomi: "",
    Narxi: ""
  })
  const [data, setData] = useState([])
  // console.log(data);

  useEffect(() => {
    const getData = async () => {
      await onSnapshot(collection(database, "mahsulotlar"), (snapshot) => {
        setData(snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id })));
      })
    }
    getData()
  }, [])

  const UploadData = async () => {
    const ColRef = collection(database, "mahsulotlar")
    const Data = { nomi: inputData.Nomi, narxi: Number(inputData.Narxi) }
    await addDoc(ColRef, Data)

    setinputData({ ...inputData, Nomi: "", Narxi: "" })
  }
  const deleteData = (id) => {
    const DelRef = doc(database, "mahsulotlar", id)
    deleteDoc(DelRef)
  }
  return (
    <div className="App">
      <button onClick={UploadData}>Upload Data</button>
      <input type="text" value={inputData.Nomi} placeholder='Maxsulot nomi' onChange={(e) => setinputData({ ...inputData, Nomi: e.target.value })} />
      <input type="number" value={inputData.Narxi} placeholder='Maxsulot narxi' onChange={(e) => setinputData({ ...inputData, Narxi: e.target.value })} />
      {data.map(mahsulot => (
        <div className="" key={mahsulot.id}>
          <h1>{mahsulot.nomi}</h1>
          <h1>{mahsulot.narxi}</h1>
          <button onClick={() => deleteData(mahsulot.id)}>O'chirish</button>
        </div>
      ))}
    </div>
  );
}

export default App;
