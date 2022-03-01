using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using LoginApplication.Models;
using LoginApplication.Models.FM;
namespace LoginApplication.Controllers
{
    [RoutePrefix("Api/Form")]
    public class FormController : ApiController
    {
        RenthutEntities3 DB = new RenthutEntities3();

        public void Post([FromBody] contact obj)       //Post: Insert new records
        {
            if (obj !=null)
            { 
                DB.contacts.Add(obj);
                DB.SaveChanges();
            }

        }

        public IEnumerable<contact> Get()
        {
            List<contact> ls = DB.contacts.ToList();
            return ls;
        }

        public void Delete(int id)
        {
            contact ll = DB.contacts.Find(id);
            DB.contacts.Remove(ll);
            DB.SaveChanges();
        }
    }
}
