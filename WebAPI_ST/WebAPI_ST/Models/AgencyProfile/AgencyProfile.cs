using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using WebAPI_ST.Utils;
namespace WebAPI_ST.Models.AgencyProfile
{
    [Table("AgencyProfile", Schema = "public")]
    public class AgencyProfile
    {
        
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }

        public string AgencyName { get; set; } = "";
        public int OwnerUserId { get; set; } = 0;

        public int Creator { get; set; } = 0;
        public long TimeCreated { get; set; } = TimeOperation.GetUnixTime();
        public long TimeUpdated { get; set; } = TimeOperation.GetUnixTime();



    }
}
