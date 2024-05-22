import { useGlobalContext } from "../context/Context"
import { BiSolidCommentError } from "react-icons/bi";

const Alert = () => {
    const { alert, setAlert } = useGlobalContext()
  return (
    <>
    {alert !== null ?  
    <div className="flex items-start mb-4 space-x-2">
        {alert.type === "error" ? 
        <>
        <BiSolidCommentError className="text-primary" />
        <p className="flex-1 text-primary font-semibold leading-7 ">
        <strong>{alert.msg}</strong>
        </p>
        </>
        :
        ""
        }
    </div>
    :
    "" 
    }
    </>
  )
}
export default Alert