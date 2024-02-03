import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import {
  getContacts,
  getError,
  getLoading,
} from '../../redux/contacts/selectors';
import { fetchContacts } from '../../redux/contacts/contactsThunks';
import { Container, Title } from './Contacts.styled';
import ContactForm from 'components/ContactForm.jsx/ContactForm';
import Loader from 'components/Loader/Loader';
import Error from 'components/Error/Error';
import Filter from 'components/Filter.jsx/Filter';
import ContactList from 'components/ContactList/ContactList';

const Contacts = () => {
  const contacts = useSelector(getContacts);
  const isLoading = useSelector(getLoading);
  const error = useSelector(getError);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <Container>
      <Title>Contacts</Title>
      <ContactForm />
      {isLoading && !error && <Loader />}
      {error && <Error />}
      {contacts.length !== 0 && (
        <>
          <Filter />
          {!isLoading && <ContactList />}
        </>
      )}
      <ToastContainer />
    </Container>
  );
};

export default Contacts;
