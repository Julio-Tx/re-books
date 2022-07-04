import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import {
  query, collection, getDocs, where, updateDoc, doc, arrayUnion, addDoc, arrayRemove
} from 'firebase/firestore';
import { ref, uploadBytes, listAll, getDownloadURL } from 'firebase/storage';
import { v4 } from 'uuid';

import { Container, FakeLink, Form } from './styled';
import AzamonLogo from '../../images/azamon-logo-black.png';
import {
  auth, db, storage,
} from '../../DB/firebase';

function User() {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [id, setId] = useState('');
  const [email, setEmail] = useState('');
  const [books, setBooks] = useState([]);
  const [bookName, setBookName] = useState('');
  const [bookDescription, setBookDescription] = useState('');
  const [bookPrice, setBookPrice] = useState('');
  const [bookId, setBookId] = useState('');
  const [newBookName, setNewBookName] = useState('');
  const [newBookDescription, setNewBookDescription] = useState('');
  const [newBookPrice, setNewBookPrice] = useState('');
  const [user, loading] = useAuthState(auth);
  const [image, setImage] = useState<FileList | null>(null);
  const [imageList, setImageList] = useState<Array<string>>([]);
  const [updateClicked, setUpdateClicked] = useState(false);
  const [bookSelected, setBookSelected] = useState(false);
  const [bookSelect, setBookSelect] = useState('');
  const [addNewBook, setAddNewBook] = useState(false);

  const addBook = async () => {
    if(bookName === '') {
      toast.error('Nome não pode estar vazio.');
      return;
    };
    const userDoc = doc(db, 'users', id);
    const newFields = {books: arrayUnion(bookName)};
    
    const booksCollectionRef = collection(db, 'books');
    try {
      await updateDoc(userDoc, newFields);
      await addDoc(booksCollectionRef, {id: v4(), name: bookName, description: bookDescription, price: bookPrice, owner: email})
    } catch (err: any) {
      toast.error(err);
      console.log(err.message);
    }

    uploadImage();
    navigate(0);
  }
  const updateBook = async () => {
    if(bookName === '') {
      toast.error('Nome não pode estar vazio.');
      return;
    };
    console.log(bookId);

    const userDoc = doc(db, 'users', id);
    const deleteFields = {books: arrayRemove(bookName)};
    const newFields = {books: arrayUnion(newBookName)};
    
    const bookDoc = doc(db, 'books', bookId);
    const newBookFields = { name: newBookName, description: newBookDescription, price: newBookPrice}
    try {
      await updateDoc(userDoc, deleteFields);
      await updateDoc(userDoc, newFields);
      await updateDoc(bookDoc, { 'name': newBookName, 'description': newBookDescription, 'price': newBookPrice});
    } catch (err: any) {
      toast.error(err);
      console.log(err.message);
    }
    // if(imageList.length <= 3) {
    //   uploadImage();
    // }
    // else {
    //   toast.error('Apenas 3 imagens podem ser enviadas.');
    // }
  }

  const uploadImage = () => {
      if (image === null) return

      const imageRef = ref(storage, `${email}/books/${bookId}/${image[0].name + v4()}`)
      uploadBytes(imageRef, image[0]).then((snapshot)=> {
        getDownloadURL(snapshot.ref).then((url) => {
          setImageList((prev) => [...prev, url]);
        })
        toast.success('Feito');
      });

      setUpdateClicked(false);
    }
    
  const getBookData = async (book: string) => {
    console.log(book);
    const imageListRef = ref(storage, `${email}/books/${book}/`);

    if(book !== '0') {
      const bookQuery = query(collection(db, 'books'), where('name', '==', book));
      const bookDoc = await getDocs(bookQuery);
      const bookData = bookDoc.docs[0].data();
      console.log(bookData);
      setBookName(bookData.name);
      setBookDescription(bookData.description);
      setBookPrice(parseFloat(bookData.price).toFixed(2));
      setBookId(bookDoc.docs[0].id);
      setBookSelected(true);
    } else {
      setBookName('');
      setBookDescription('');
      setBookPrice('');
      setBookSelected(false);
    }

    listAll(imageListRef).then((response) => {
      response.items.forEach((item) => {
        getDownloadURL(item).then((url) => {
          setImageList(() => [url]);
        })
      })
    });
    if(book === '0') setImageList([]);
  }

  const getUpdateClicked = () => {
    if (bookName !== '') setUpdateClicked(true);
    else toast.error('Selecione um livro para atualizar.');
  }
  useEffect(() => {
    if (loading) return;
    const fetchUserName = async () => {
      try {
        const q = query(collection(db, 'users'), where('uid', '==', user?.uid));
        const doc = await getDocs(q);
        const data = doc.docs[0].data();
        setName(data.name);
        setEmail(data.email);
        setBooks(data.books);
        setId(doc.docs[0].id);
      } catch (err) {
        console.log(err);
      }
    };
    if (loading) return;
    fetchUserName();
    
    if (updateClicked) {
      setNewBookName(bookName);
      setNewBookDescription(bookDescription);
      setNewBookPrice(bookPrice);
    }
    if (bookSelect !== '0') getBookData(bookSelect);
    
  }, [user, loading, navigate, imageList, updateClicked, bookSelect]);

  return (
    <div>
      <Container>
        <Link to="/">
          <img className='logo' src={AzamonLogo} alt="Azamon logo" />
        </Link>
        <Form>
          <p className="title">Olá {name}</p>
          <p>Seus dados são:</p>
          <p>Nome:</p>
          <span>{name}</span>
          <p>Email:</p>
          <span>{email}</span>
          
          {addNewBook ?
            <>
            <p></p>
            <button type="button" className='back-button' onClick={() => setAddNewBook(false)}>Voltar</button>
            <h3>Adicionar novo livro</h3>
            <input type='text' placeholder='Nome' onChange={(e) => setBookName(e.target.value)} />
            <textarea placeholder='Descrição' onChange={(e) => setBookDescription(e.target.value)} />
            <input type='text' placeholder='Preço' onChange={(e) => setBookPrice(e.target.value)} />
            <input type='file' onChange={(e) => setImage(e.target.files)} />
            <button type="button" onClick={addBook}>Enviar livro</button>
            </>

            :

            <>
              {updateClicked ?
              <>
              <p></p>
              <button type="button" className='back-button' onClick={() => setUpdateClicked(false)}>Voltar</button>
              <h3>Atualizar livro</h3>
              <input type='text' placeholder='Nome' value={newBookName} onChange={(e) => setNewBookName(e.target.value)} />
              <input type='text' className='desc-input' placeholder='Descrição' value={newBookDescription} onChange={(e) => setNewBookDescription(e.target.value)} />
              <input type='text' placeholder='Preço' value={newBookPrice} onChange={(e) => setNewBookPrice(e.target.value)} />
              <input type='file' onChange={(e) => setImage(e.target.files)} />
              <button type="button" onClick={updateBook}>Salvar</button>
              </>
                
              : 

              <div>
                <p>Seus livros:</p>
                <select className='select' onChange={(e) => setBookSelect(e.target.value)}>
                  <option value={'0'}>Selecione um livro</option>
                  {books.map((book) => {
                    return <option key={book} value={book}>{book}</option>
                  })}
                </select>

                {bookSelected ? 
                  <div className="book-data">
                    <p>Nome:</p>
                    <p className='desc'>{bookName}</p>
                    <p>Descrição:</p>
                    <p className='desc'>{bookDescription}</p>
                    <p>Preço:</p>
                    <p className='desc'>{bookPrice} €</p>
                    <p>Imagens:</p>
                    <div className='book-images'>
                      {imageList.map((url, index) => {
                        return <img key={index} src={url? url : ''} alt={url} />
                      })}
                    </div>
                    <button type='button' className='back-button' onClick={getUpdateClicked}>Update Book</button>
                  </div>

                  : 
                  <></>
                }
              </div>
              }
              <button className='add-button' onClick={() => setAddNewBook(true)}>Adicionar novo livro</button>
            </>
          }
        </Form>
      </Container>
    </div>
  );
}

export default User;
