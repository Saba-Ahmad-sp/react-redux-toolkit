import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { MdDeleteForever } from "react-icons/md";
import { removeUser } from '../store/slices/UserSlice';

const DisplayUsers = () => {

  const dispatch = useDispatch();

  const data = useSelector((state) => {
    return state.users;
  });
  // console.log(data);

  const deleteUser = (id) => {
    dispatch(removeUser(id))
  }
 
  return (
    <Wrapper>
      <div className="li">
      {data.map((user, id) => {
        return <li key={id}> {user} 
        <button className='delete-btn' onClick={() => deleteUser(id)}><MdDeleteForever className="delete-icon"/></button>
        </li>
      })}
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  margin: 1rem 3.2rem;

  .content ul {
    list-style-type: none !important;
    display: flex;
    flex-direction: column;
  }
  .li{
    text-align: left;
  }
  li{
    margin-bottom: 15px  
  }

  h3 {
    margin: 0;
  }

  .admin-table {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin: 4rem 0;
  }

  .admin-subtitle {
    font-size: 3.2rem;
  }

  .delete-btn {
    background-color: transparent;
    border: none;
    float: right;
  }

  .delete-icon {
    font-size: 2.6rem;
    color: #f12711;
    filter: drop-shadow(0.2rem 0.2rem 0.5rem rgb(255 0 0 / 0.2));
    cursor: pointer;
  }
  @media screen and (max-width: 998px) {
    .admin-subtitle {
      margin-bottom: 1.6rem;
    }
  }
`;

export default DisplayUsers;
