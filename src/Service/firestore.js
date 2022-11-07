import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDocs,
  doc,
  getDoc,
  addDoc,
  query,
  where,
} from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCOAQ6QJkdj5xkIG5hiYkZ_sR3qWGSsy7k",
  authDomain: "flohrwedding-357a2.firebaseapp.com",
  projectId: "flohrwedding-357a2",
  storageBucket: "flohrwedding-357a2.appspot.com",
  messagingSenderId: "835544742705",
  appId: "1:835544742705:web:6b265ccafb8de13b7ece10"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export async function getItems() {
  const collectionRef = collection(firestore, "Productos");
  let respuesta = await getDocs(collectionRef);

  let dataDocs = respuesta.docs.map((documento) => {
    let docFormateado = { ...documento.data(), id: documento.id };
    return docFormateado;
  });
  return dataDocs;
}

export async function getSingleItem(idParams) {
  try {
    const docRef = doc(firestore, "Productos", idParams);
    const docSnapshot = await getDoc(docRef);
    return { ...docSnapshot.data(), id: docSnapshot.id };
  } catch (error) {
    console.error(error);
  }
}

export async function getItemsByCategory(catParams) {
  const collectionRef = collection(firestore, "Productos");
  const queryCategory = query(
    collectionRef,
    where("category", "==", catParams)
  );

  const respuesta = await getDocs(queryCategory);

  let dataDocs = respuesta.docs.map((documento) => {
    let docFormateado = { ...documento.data(), id: documento.id };
    return docFormateado;
  });

  return dataDocs;
}

export async function createBuyOrder(orderData) {
  const collectionRef = collection(firestore, "orders");
  let respuesta = await addDoc(collectionRef, orderData);

  return respuesta.id;
}

export async function exportDataToFirestore() {
  const data = [
    {
      id: 1,
      title: "Rivini",
      price: 4500,
      stock: 1,
      category: "vestidos",
      detail:
        "VESTIDO DE NOVIA ENTALLADO Y CON VUELO DE ENCAJE FLORAL 3D CON MANGAS LARGAS",
      img: "https://www.kleinfeldbridal.com/wp-content/uploads/2022/08/rivini-3d-floral-lace-fit-and-flare-wedding-dress-with-off-the-shoulder-long-sleeves-34566703-400x580.jpeg",
    },
    {
      id: 2,
      offer: true,
      title: "Essence Of Australia",
      price: 1500,
      detail:
        "VESTIDO DE NOVIA CON CORPIÑO DE ENCAJE CON TUL Y TIRANTES FINOS",
      img: "https://www.kleinfeldbridal.com/wp-content/uploads/2022/07/essense-of-australia-a-line-wedding-dress-with-lace-bodice-and-spaghetti-straps-34563130-400x580.jpg",
      stock: 3,
      category: "vestidos",
    },
    {
      id: 3,
      title: "Love, Pnina Tornai",
      price: 6500,
      detail:
        "VESTIDO DE NOVIA TUBO CON MANGAS FAROL Y ESCOTE EN V PRONUNCIADO",
      img: "https://www.kleinfeldbridal.com/wp-content/uploads/2021/08/love-by-pnina-tornai-all-over-lace-long-puff-sleeve-sheath-wedding-dress-with-plunging-v-neckline-50000000-400x580.jpg",
      stock: 7,
      category: "vestidos",
    },
    {
      id: 4,
      title: "Velo Diamond",
      price: 780,
      stock: 6,
      category: "accesorios",
      detail:
        "VELO DE NOVIA BLANCO CON DIAMANTES",
      img: "https://images.squarespace-cdn.com/content/v1/5ce30f0eadda8000016a71df/1638542226995-2LSF6GN50GTCE5WJNXT3/image-asset.jpeg?format=500w",
    },
    {
      id: 5,
      title: "Velo Bordado",
      price: 500,
      detail:
        "VELO DE NOVIA BORDADO DE FLORES",
      img: "https://images.squarespace-cdn.com/content/v1/5ce30f0eadda8000016a71df/1642641407841-9KLBX4WA12MTI7G6STWG/image-asset.jpeg?format=500wg",
      stock: 3,
      category: "accesorios",
    },
    {
      id: 6,
      title: "Velo Perla",
      price: 500,
      detail:
        "VELO DE NOVIA CON PERLAS BLANCAS",
      img: "https://images.squarespace-cdn.com/content/v1/5ce30f0eadda8000016a71df/1651017806205-R1VJEYW9GTTLBD7VATMW/image-asset.jpeg?format=500w",
      stock: 3,
      category: "accesorios",
    },
  ];

  const collectionRef = collection(firestore, "productos");

  for (let item of data) {   
    const newDoc = await addDoc(collectionRef, item);
    console.log("Doc created", newDoc.id);
  }
}


export default firestore;