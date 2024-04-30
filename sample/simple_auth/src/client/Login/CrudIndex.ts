//import HttpCommon from '../lib/HttpCommon';
import LibConfig  from '../lib/LibConfig';
import Crud from './Crud';
//
const CrudIndex = {
  /**
   * getList
   * @param
   *
   * @return
   */
  getList :async function (): Promise<any>
  {
    try{
    } catch (e) {
        console.error(e);
        throw new Error("Error, getList");
    } 
  },  
  /**
   *
   * @param
   *
   * @return
   */
  login : async function(): Promise<any>
  {
    try{
      let ret = false;
      const values = Crud.getInputValues();
//console.log(values);
      const item = {
        "email": values.email,
        "password": values.password,
      };            
//return false;
      const body: any = JSON.stringify(item);		
      const res = await fetch("/api/common/user_login", {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},      
        body: body
      });
      const json = await res.json()
console.log(json);
      if (json.ret ===  LibConfig.OK_CODE) {
        const name = import.meta.env.VITE_APP_NAME + "_auth";
        localStorage.setItem(name, '1');
        location.href = '/';
        ret = true;
      }
      return ret;
    } catch (e) {
      console.error("Error, login");
      console.error(e);
      throw new Error('Error , login');
    }
  },
}

export default CrudIndex;
