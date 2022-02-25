using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace LoginApplication.Models.LM
{
    public class Landlord
    {
        public int Id{ get; set; }
        public string File_name { get; set; }
        public string House_description { get; set; }
        public string Address { get; set; }
        public string City { get; set; }
        public string Rent_price { get; set; }
        public string Lease_terms { get; set; }
        public string Deposit { get; set; }
        public string Ad_date { get; set; }
    }
}
