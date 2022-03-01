using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using LoginApplication.Models;
using LoginApplication.Models.VM;

namespace LoginApplication.Controllers
{
    [RoutePrefix("Api/login")]
    public class LoginController : ApiController
    {
        RenthutEntities3 DB = new RenthutEntities3();
        [Route("InsertEmployee")]
        [HttpPost]
        public object InsertEmployee(Register Reg)
        {
            try
            {
                EmployeeLogin EL = new EmployeeLogin();
                if (EL.Id == 0)
                {
                    EL.EmployeeName = Reg.EmployeeName;
                    EL.City = Reg.City;
                    EL.Email = Reg.Email;
                    EL.Password = Reg.Password;
                    EL.Age = Reg.Age;
                    DB.EmployeeLogins.Add(EL);
                    DB.SaveChanges();
                    return new Response { Status = "Success", Message = "Record SuccessFully Saved." };
                }
            }
            catch (Exception)
            {
                throw;
            }
            return new Response { Status = "Error", Message = "Invalid Data." };
        }
        [Route("Login")]
        [HttpPost]
        public Response employeeLogin(Login login)
        {
            var log = DB.EmployeeLogins.Where(x => x.Email.Equals(login.Email) && x.Password.Equals(login.Password)).FirstOrDefault();
            var adminuser = "admin@renthut.com";
            var adminpass = "admin";
            if(login.Email==adminuser && login.Password == adminpass)
            {
                return new Response { Status = "Admin", Message = "Admin login successfully" };
            }
            else if (log == null)
            {
                return new Response { Status = "Invalid", Message = "Invalid User." };
            }
            else
                return new Response { Status = "Success", Message = "Login Successfully" };
        }

        [Route("EmployeeDetails")]
        public IEnumerable<EmployeeLogin> Get()
        {
            List<EmployeeLogin> ls = DB.EmployeeLogins.ToList();
            return ls;
        }

        public void Delete(int id)
        {
            EmployeeLogin ll = DB.EmployeeLogins.Find(id);
            DB.EmployeeLogins.Remove(ll);
            DB.SaveChanges();
        }
    }
}