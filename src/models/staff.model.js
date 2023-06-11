const BaseModel = require ('./base.model')
const e = require("express");
class StaffModel extends BaseModel{
    constructor() {
        super();
        this.baseModel = new BaseModel()
    }
    async insertStaff(name,city,exp,salary){
       try{
           const sql = `INSERT INTO staffs (name,city,exp,salary)
                     VALUES ('${name}', '${city}', ${exp}, ${salary})`
           return await this.baseModel.querySQL(sql)
       }catch (e){
           console.log(e.message)
       }
    }
    async showListStaffs(){
      try{
          const sql = 'SELECT * FROM staffs'
          return await this.baseModel.querySQL(sql)
      }
      catch (e){
          console.log(e.message)
      }
    }

    async deleteStaffs(id){
        const sql = 'DELETE FROM staffs WHERE id=' + id
        return await this.baseModel.querySQL(sql)
    }
    async updateStaffsById(id){
        const sql = "SELECT * FROM staffs WHERE id = " + id
        return await this.baseModel.querySQL(sql)
    }
    async updateStaff(name,city,exp,salary,id){
        const sql = `UPDATE staffs SET name = '${name}', city ='${city}', exp = ${exp}, salary = ${salary} WHERE id = ${id};`
        return await  this.baseModel.querySQL(sql)
    }

    async getStaffQuantity(){
        let sql = `SELECT count(id) as totalStaff FROM staffs`
        return await this.baseModel.querySQL(sql)
    }
    async getStaffPaginate(offset,size){
        const sql = `SELECT * FROM staffs LIMIT ${size} OFFSET ${offset}`
        return await this.baseModel.querySQL(sql)
    }
}
module.exports = new StaffModel();