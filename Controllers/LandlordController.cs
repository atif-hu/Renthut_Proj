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

        //[Route("HousedetailById")]
        //[HttpGet]
        //public object HousedetailById(int id)
        //{
        //    //var obj = DB.landlords.Where(x => x.Id == id).ToList().FirstOrDefault();
        //    var obj = DB.landlords.Find(id);
        //    return obj;
        //}

        public landlord Get(int id)
        {
            landlord prd = DB.landlords.Find(id);
            return prd;
        }

        [Route("UpdateHouseDetails")]
        public object UpdateHouseDetails(landlord obj)
        {
            try
            {
                var ll = DB.landlords.Where(x => x.Id == obj.Id).ToList().FirstOrDefault();
                //landlord ll = DB.landlords.Find(obj.Id);
                ll.File_name = obj.File_name;
                ll.House_description = obj.House_description;
                ll.Address = obj.Address;
                ll.City = obj.City;
                ll.Rent_price = obj.Rent_price;
                ll.Lease_terms = obj.Lease_terms;
                ll.Deposit = obj.Deposit;
                ll.Ad_date = obj.Ad_date;
                DB.SaveChanges();
                return new Response
                {
                    Status = "Updated",
                    Message = "Updated Successfully"
                };
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


        public void Delete(int id)
        {
            landlord ll= DB.landlords.Find(id);
            DB.landlords.Remove(ll);
            DB.SaveChanges();
        }
    }
}
