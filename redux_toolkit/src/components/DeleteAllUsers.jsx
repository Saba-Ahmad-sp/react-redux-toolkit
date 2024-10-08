import React from 'react'
import { useDispatch } from 'react-redux'
// import { deleteUsers } from '../store/slices/UserSlice';
import { deleteUsers } from '../store/actions';
import styled from 'styled-components';

const DeleteAllUsers = () => {
  const dispatch = useDispatch();
  const deleteAll = () => {
    dispatch(deleteUsers());
  }
  return (
    <Wrapper>
      <button className='clear-btn' onClick={deleteAll}>Delete All Users</button>
    </Wrapper>
  )
}
const Wrapper = styled.section`
.clear-btn{
margin-top: 15px;
height: 5rem;
border-radius: 1rem;
width: 15rem;
text-transform: capitalize;
background-color: #db338a;
}
`

export default DeleteAllUsers;
