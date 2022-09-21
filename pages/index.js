import axios from 'axios'
import Head from 'next/head'
import Image from 'next/image'
import { useDispatch, useSelector } from 'react-redux'
import { listTemplates } from '../Actions/templateAction'
import Header from '../Coponents/Header'
import Templates from '../Coponents/Template'
import { wrapper } from '../store'
//import styles from '../styles/Home.module.css'

export default function Home() {
  const  dispatch = useDispatch()
  const templateList = useSelector(state => state.templateList)
  const {error,loading,page,pages,templates} = templateList


  return (
    <>
  <h1>Hello world</h1>

  <div>
    {templates.map(template => (
      <div key={template._id}>
        <Templates template={template} />

      </div>
    ))}
  </div>
 
  




    </>
  )
}

export const getServerSideProps =
 wrapper.getServerSideProps((store)=> async () => {
  store.dispatch(listTemplates())




})


