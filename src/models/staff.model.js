const BaseModel = require ('./base.model')
class StaffModel{

    async insertStaff(name,city,exp,salary,avatar){
       try{
           const sql = `INSERT INTO staffs (name,city,exp,salary,avatar)
                     VALUES ('${name}', '${city}', ${exp}, ${salary},'${avatar}')`

           return await BaseModel.querySQL(sql)
       }catch (e){
           console.log(e.message)
       }
    }
    async showListStaffs(){
      try{
          const sql = 'SELECT * FROM staffs'
          return await BaseModel.querySQL(sql)
      }
      catch (e){
          console.log(e.message)
      }
    }

    async deleteStaffs(id){
        const sql = 'DELETE FROM staffs WHERE id=' + id
        return await BaseModel.querySQL(sql)
    }
    async updateStaffsById(id){
        const sql = "SELECT * FROM staffs WHERE id = " + id
        return await BaseModel.querySQL(sql)

    }
    async updateStaff(name,city,exp,salary,avatar,id){
        const sql = `UPDATE staffs SET name = '${name}', city ='${city}', exp = ${exp}, salary = ${salary}, avatar='${avatar}' WHERE id = ${id};`
        return await BaseModel.querySQL(sql)
    }

    async getStaffQuantity(){
        let sql = `SELECT count(id) as totalStaff FROM staffs`
        return await BaseModel.querySQL(sql)
    }
    async getStaffPaginate(offset,size){
        const sql = `SELECT * FROM staffs LIMIT ${size} OFFSET ${offset}`
        return await BaseModel.querySQL(sql)
    }
    async getAvatarStaff(id) {
        let sql = `SELECT avatar FROM Staffs WHERE id = ${id}`;
        return await BaseModel.querySQL(sql);
    }

}
module.exports = new StaffModel();