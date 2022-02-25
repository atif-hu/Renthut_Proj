using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using LoginApplication.Models;
using LoginApplication.Models.LM;

namespace LoginApplication.Controllers
{
    [RoutePrefix("Api/Landlord")]
    public class LandlordController : ApiController
    {
        RenthutEntities3 DB = new RenthutEntities3();
        [Route("InsertHouseDetails")]
        [HttpPost]
        public object InsertHouseDetails(Landlord obj)
        {
            landlord ll = new landlord();
            try
            {

                ll.File_name = obj.File_name;
                ll.House_description = obj.House_description;
                ll.Address = obj.Address;
                ll.City = obj.City;
                ll.Rent_price = obj.Rent_price;
                ll.Lease_terms = obj.Lease_terms;
                ll.Deposit = obj.Deposit;
                ll.Ad_date = obj.Ad_date;
                DB.landlords.Add(ll);
                DB.SaveChanges();
                return new Response { Status = "Success", Message = "Data Successfully" };

            }
            catch (Exception ex)
            {
                Console.Write(ex.Message);
            }

            return new Response
            {
                Status = "Error",
                Message = "Data not insert"
            };
        }

        [Route("HouseDetails")]
        public IEnumerable<landlord> Get()
        {
            List<landlord> ls = DB.landlords.ToList();
            return ls;
        }

        [Route("UpdateHouseDetails")]
        public void Put([FromBody] landlord obj)
        {
            landlord ll = DB.landlords.Find(obj.Id);
            ll.File_name = obj.File_name;
            ll.House_description = obj.House_description;
            ll.Address = obj.Address;
            ll.City = obj.City;
            ll.Rent_price = obj.Rent_price;
            ll.Lease_terms = obj.Lease_terms;
            ll.Deposit = obj.Deposit;
            ll.Ad_date = obj.Ad_date;
            DB.SaveChanges();
        }


        public void Delete(int id)
        {
            landlord ll= DB.landlords.Find(id);
            DB.landlords.Remove(ll);
            DB.SaveChanges();
        }
    }
}
