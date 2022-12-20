import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link';
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import { Button, Space, DatePicker, Card } from 'antd';
import { CiCircleFilled } from '@ant-design/icons';
import Chart from 'chart.js/auto';
const inter = Inter({ subsets: ['latin'] })
import React, { useEffect, useRef } from "react";
import Router from 'next/router'

export default function Home() {

  useEffect(() => {
    const {pathname} = Router
    // conditional redirect
    if(pathname == '/' ){
        // with router.push the page may be added to history
        // the browser on history back will  go back to this page and then forward again to the redirected page
        // you can prevent this behaviour using location.replace
        Router.push('/v1/home')
       //location.replace("/hello-nextjs")
    }
  } 
  )

  return (
    <>
      <main>

      </main>
    </>
  );
}
