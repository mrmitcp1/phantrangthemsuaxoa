const StaffModel = require('../models/staff.model');

class StaffController {
    static async insertStaff(req, res) {
        try {
            const {name, city, exp, salary} = req.body;
            await StaffModel.insertStaff(name, city, exp, salary);
            res.redirect('/staffs')
        } catch (err) {
            console.log(err.message)
        }
    }

    static async getInsertStaff(req, res) {
        await res.render('create')
    }
    static async deleteStaff(req, res){
        try {
            let id = req.params.id;
            await StaffModel.deleteStaffs(id);
            res.redirect('/staffs')
        }
      catch (err){
          console.log(err.message)
      }
    }
    static async takeUpdate(req, res){
        try {
            let id = req.params.id;
            let listStaffs = await StaffModel.updateStaffsById(id)
            res.render('update', {staff:listStaffs[0]})
        }
        catch (e){
            console.log(e.message)
        }
    }
    static async updateStaff(req,res){
      try {
          let id=req.params.id;
          const {name,city,exp,salary}=req.body;
          await StaffModel.updateStaff(name,city,exp,salary,id)
          res.redirect('/staffs')
      }
        catch (e){
            console.log(e.message)
        }
    }
    static async getPage(req,res){
        try {
            let size = 2;
            let page = req.query.page ? +req.query.page : 1;
            let result = await StaffModel.getStaffQuantity()
            let staffs = result[0].totalStaff;
            let pages = Math.ceil(staffs / size);
                let offset = (page - 1)* size;
                let dataPage = await StaffModel.getStaffPaginate(offset,size)
            res.render('index',{staffs: dataPage,totalPage:pages,size:size})
        }
        catch (e){
            console.log(e.message)
        }
    }
}

module.exports = StaffController