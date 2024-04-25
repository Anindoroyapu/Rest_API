using System.ComponentModel.DataAnnotations;

namespace WebAPI_ST.Models
{
    public class Brand
    {
        public int ID { get; set; }
        
        public string fName { get; set; } = "";
        public string lName { get; set; } = "";
        public string email { get; set; } = "";
        public string phone { get; set; } = "";
        public string password { get; set; } = "";
        
    }
}
