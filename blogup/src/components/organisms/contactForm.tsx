"use client"
import { useState } from "react"
import * as yup from "yup"
import DisplayContact from "./displayContact"
// import { contactTypes, onChangeEventType } from "types\commonTypes.ts"

type contactTypes = {
  name: string,
  email:string,
  phone:number,
  message:string,
}


type onChangeEventType = {
target: { value: string, name:string } 
}



export default function ContactForm() {
  const [contactInfo, setContactInfo] = useState<contactTypes>({
    name: "",
    email: "",
    phone: 0,
    message:"",
  })

  const [errors, setError ] = useState<string[]>([])

  const contactInfoSchema = yup.object().shape({
    name: yup.string().required().min(5).max(10),
    email: yup.string().email().required(),
    message: yup.string().required()
 })

  const [contactList, setContactList] = useState<contactTypes[]>([])

  const onChangeHandler = (e: onChangeEventType) => {
    let userDetails = {
      ...contactInfo,
      [e.target.name]: e.target.value
    }
    setContactInfo(userDetails)
  }


  const onClickHandler = async () => {
     try {
      const result = await contactInfoSchema.validate(contactInfo)
      console.log(result);
      
       
      if (!result) {
        return 
      }
      
      let newContactList:contactTypes[] = [...contactList, contactInfo]
      setContactList(newContactList)
  
      setError([])
      setContactInfo({
        name:"",
        email:"",
        phone:0,
        message:""
      })
     } catch (err:any) {

      setError(err.errors)

       console.log("error",err.errors);
       
     }
   
   
  }
     
  return (
    <>
  
      {/* Form */}

              <div className="row gtr-uniform">
      <div className="col-6 col-12-xsmall">  
       <input
          value={contactInfo.name}
          onChange={onChangeHandler}
          type="text"
          id="name"
          name="name"
          placeholder="Name"
          required
        />
      </div>

      <div className="col-6 col-12-xsmall">  
        
        <input
          value={contactInfo.email}
          onChange={onChangeHandler}
          type="email"
          id="email"
          name="email"
          placeholder="Email"
        />
      </div>
      </div>

      <div className="col-6 col-12-xsmall">  
        <input
          value={contactInfo.phone}
          onChange={onChangeHandler}
          type="number"
          id="phone"
          name="phone"
          placeholder="0000"
        />
      </div>

      <div className="col-12">
         <textarea
         value={contactInfo.message}
         onChange={onChangeHandler}
          id="message"
          name="message" 
          placeholder="Enter your message"
          rows={4}
          required
        ></textarea>
<br>
</br>
      </div>
      <div className="mb-6">
        <button
          onClick={onClickHandler}
          type="submit"
          className="btn btn-primary"
        >
          Submit
        </button>
      </div>  
      
     
      {/* </form> */}
      <DisplayContact contactData={contactList} />
    
    </>
  )
}