import { useState, useEffect, useRef} from "react";
import { db } from "../firebase/config";
import { useAuthContext } from "./useAuthContext";

//firebase imports
import {collection, onSnapshot, query, where} from 'firebase/firestore'

export const useCollection=(c,_q)=>{
    const {user}=useAuthContext();
    const [documents, setDocuments]=useState(null)
    //set up query
    const q=useRef(_q).current
    useEffect(()=>{
        
        let ref=collection(db,c)
        if(q){
           ref=query(ref,where("uid","==",user.uid))
        }
        const unsubscribe=onSnapshot(ref,(snapshot)=>{
            let results=[]
            snapshot.docs.forEach(doc=>{
                results.push({id:doc.id,...doc.data()})
            })
            setDocuments(results)
        })
        return()=>unsubscribe()
    },[c,q,user.uid])
    return {documents}
}





