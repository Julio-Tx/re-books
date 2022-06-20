import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import {
  query, collection, getDocs, where, updateDoc, doc, arrayUnion
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
  const [user, loading] = useAuthState(auth);
  const [image, setImage] = useState<FileList | null>(null);
  const [imageList, setImageList] = useState<Array<string>>([]);
  const [updateClicked, setUpdateClicked] = useState(false);

  const addBook = async () => {
    if(bookName === '') return;
    const userDoc = doc(db, 'users', id);
    const newFields = {books: arrayUnion(bookName)};
    await updateDoc(userDoc, newFields);
  }
  const uploadImage = (book: string) => {
      if (image === null) return

      const imageRef = ref(storage, `${email}/books/${bookName}/${image[0].name + v4()}`)
      uploadBytes(imageRef, image[0]).then((snapshot)=> {
        getDownloadURL(snapshot.ref).then((url) => {
          setImageList((prev) => [...prev, url]);
        })
        toast.success('Feito');
      });

      setUpdateClicked(false);
    }
    
  const getImages = (book: string) => {
    console.log(book);
    const imageListRef = ref(storage, `${email}/books/${book}/`)

    listAll(imageListRef).then((response) => {
      response.items.forEach((item) => {
        getDownloadURL(item).then((url) => {
          setImageList((prev) => [...prev, url]);
        })
      })
    });
    if(book === '0') setImageList([]);
    setBookName(book);
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
  }, [user, loading, navigate]);

  return (
    <div>
      <Container>
        <Link to="/">
          <img className='logo' src={AzamonLogo} alt="Azamon logo" />
        </Link>
        <Form>
          <p className="title">Olá {name}</p>
          <p>Seus dados são:</p>
          <p>Email: {email}</p>
          <p>Seus livros:</p>
          <select onChange={(e) => getImages(e.target.value)}>
            <option value={'0'}>Selecione um livro</option>
            {books.map((book) => {
              return <option value={book}>{book}</option>
            })}
          </select>
          <div className='book-images'>
            {imageList.map((url, index) => {
              return <img key={index} src={url} alt={url} />
            })}
          </div>
          {updateClicked ?
            <>
            <p>Adicionar novas imagens:</p>
            <input type='file' onChange={(e) => setImage(e.target.files)} />
            <button type="button" onClick={() => uploadImage(bookName)}>Upload image</button>
            </>
            
          : 
          <>
            <button type='button' onClick={() => setUpdateClicked(true)}>Update Book</button>
            <p>Adicionar novo livro</p>
            <input type='text' placeholder='Novo livro' onChange={(e) => setBookName(e.target.value)} />
            <button type="button" onClick={addBook}>Enviar livro</button>
          </>
          }
          
          

          <p className="privacy">
            Ao criar uma conta, aceita as <FakeLink>Condições de Uso</FakeLink>{' '}
            e o <FakeLink>Aviso de Privacidade</FakeLink> da Amazon.
          </p>
          <div className="divider" />
          <div className="footer">
            <span>
              Já tem uma conta? <Link to="/login">Iniciar sessão</Link>
            </span>
            <br />
            <span>
              A fazer compras para fins profissionais?{' '}
              <FakeLink>Crie uma conta de empresa grátis</FakeLink>
            </span>
          </div>
        </Form>
      </Container>
    </div>
  );
}

export default User;
