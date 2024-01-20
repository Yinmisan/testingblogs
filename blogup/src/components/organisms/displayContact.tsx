// import { contactTypes } from "@/types/commonTypes";
type contactTypes = {
    name: string,
    email:string,
    phone:number,
    message:string
  
  }
  
  export default function DisplayContact(props: { contactData: contactTypes[] }) {
    return (<>
      <div>
  
       
          <table>
            <tbody>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Message</th>
            </tr> 
            </tbody>
            <tfoot>
            {props.contactData.map((item, index) => {
              return (
                <tr  key={index}>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td>{item.phone}</td>
                  <td>{item.message}</td>
                </tr>
                )
            })}
           </tfoot>
          </table>
        
  
      </div>
      
      </>
    )
  }