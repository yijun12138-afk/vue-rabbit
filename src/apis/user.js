import request from "@/utils/http"

export const loginAPI = ({account,password})=>{
    return request.post('/login',{account,password})
}